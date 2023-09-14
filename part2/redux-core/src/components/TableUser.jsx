import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchAllUser } from "../action/action";

const TableUser = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);
  const handleDeleteUser = (user) => {
    dispatch(deleteUser(user.id));
  };
  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);
  return (
    <Container>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isError ? (
            <div>Something wrong...</div>
          ) : (
            <>
              {isLoading ? (
                <div>Loading data...</div>
              ) : (
                <>
                  {listUsers &&
                    listUsers.length > 0 &&
                    listUsers.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>
                          <Button
                            className="btn btn-danger"
                            onClick={() => handleDeleteUser(user)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableUser;
