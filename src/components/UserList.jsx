import React, { useState, useEffect } from "react";
import UserDetailsCard from "./UserDetailsCard";
import UserRow from "./UserRow";
import Modal from "react-bootstrap/Modal";

const UserList = ({ users }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setSelectedUser(null);
    const handleResize = () => {
      if (window.innerWidth < 576 && selectedUser) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedUser]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    if (window.innerWidth < 576) {
      setShowModal(true);
    }
  };

  return (
    <div className="d-flex justify-content-between flex-column flex-sm-row">
      <table className="table table-borderless user-list-table">
        <thead>
          <tr>
            <th className="py-3 px-0 fs-4 fw-bold">Name</th>
            <th className="py-3 px-0 fs-4 fw-bold">Status</th>
            <th className="py-3 px-0 fs-4 fw-bold">Access</th>
            <th className="py-3 px-0 fs-4 fw-bold" />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onClick={() => handleUserClick(user)}
            />
          ))}
        </tbody>
      </table>

      <div className="ms-md-5 ms-3 d-none d-sm-flex align-items-center justify-content-center">
        <UserDetailsCard user={selectedUser} />
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="sm"
        className="small-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center d-sm-none">
            <UserDetailsCard user={selectedUser} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserList;
