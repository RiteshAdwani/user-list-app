import React from "react";
import { Form } from "react-bootstrap";
import { FiLock, FiTrash2 } from "react-icons/fi";
import { showUserDetailsCard, hideUserDetailsCard } from "../redux/actions";
import { useDispatch } from "react-redux";

const UserRow = ({ user, onClick }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td className="p-0 w-50">
        <div className="mb-1" role="button" onClick={onClick}>
          <div
            className="d-flex"
            onMouseEnter={() => dispatch(showUserDetailsCard(user.id))}
            onMouseLeave={() => dispatch(hideUserDetailsCard())}
          >
            <img
              src={user.avatar}
              alt="avatar img"
              height="45px"
              width="45px"
              className="user-avatar rounded-circle me-3"
            />
            <div className="d-flex flex-column align-content-center">
              <p className="mb-0 pt-1 fw-bolder">
                {user.first_name} {user.last_name}
              </p>
              <p className="user-email lh-1">{user.email}</p>
            </div>
          </div>
        </div>
      </td>

      <td className="p-0">
        <div className="my-2">
          {user.active ? (
            <h6 className="text-success fw-bold">Active</h6>
          ) : (
            <Form.Select className="w-75">
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
            </Form.Select>
          )}
        </div>
      </td>

      <td className="p-0">
        <div className="my-2">
          {user.owner ? (
            <h6 className="text-secondary fw-bold">Owner</h6>
          ) : (
            <Form.Select className="w-75" defaultValue={user.role}>
              <option value="Manager">Manager</option>
              <option value="Read">Read</option>
            </Form.Select>
          )}
        </div>
      </td>

      <td className="p-0">
        <div className="my-2">
          {user.removable ? (
            <FiTrash2 className="fs-4 text-muted" role="button" />
          ) : (
            <FiLock className="fs-4 text-muted" role="button" />
          )}
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
