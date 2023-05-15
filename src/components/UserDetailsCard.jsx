import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserDetailsCard = () => {
  const particularUser = useSelector((state) => state.particularUser);
  const userID = useSelector((state) => state.userID);
  if (!particularUser) return null;

  return (
    userID && (
      <Card className="user-details-card d-flex align-items-center px-2 py-4 ">
        <Card.Img
          variant="top"
          src={particularUser.avatar}
          className="card-img rounded-circle"
        />
        <Card.Body className="text-center">
          <Card.Title
            className={`particular-user-name fw-bolder mb-1 ${
              particularUser.active ? " active-user" : " inactive-user"
            }`}
          >
            {particularUser.first_name} {particularUser.last_name}
          </Card.Title>
          <Card.Text className="mb-1">{particularUser.email}</Card.Text>
          <Card.Text className="fw-bolder mb-1">
            Your Plan: {particularUser.plan}
          </Card.Text>
          <Button variant="warning" className="text-white px-sm-5 px-4">
            {particularUser.active ? "Active" : "Inactive"} User
          </Button>

          <div className="text-start mt-3">
            <Card.Text className="fw-bolder">
              Plan Uses
              <progress
                className="progress-bar"
                value={particularUser.progress_value}
                max="100"
              ></progress>
            </Card.Text>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <Card.Text className="fs-4 fw-bolder mb-1">
                  {particularUser.clicks_reviewed}
                </Card.Text>
                <Card.Text className="user-click-details">
                  Clicks reviewed
                </Card.Text>
              </div>
              <div className="vr mx-3"></div>
              <div className="d-flex flex-column">
                <Card.Text className="fs-4 fw-bolder mb-1">
                  {particularUser.monthly_clicks}
                </Card.Text>
                <Card.Text className="user-click-details">
                  Monthly clicks
                </Card.Text>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  );
};

export default UserDetailsCard;
