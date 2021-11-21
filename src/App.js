import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncIncrementCreator, asyncDecrementCreator } from "./store/countReducer";
import { fetchUsers } from "./store/userReducer";
import { Box, Button } from '@material-ui/core'

function App() {
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  return (
    <Box className="App">
      <Box className="count">{count}</Box>
      <Box flex>
        <Box mx={2}>
          <Button color="primary" variant="outlined" onClick={() => dispatch(asyncIncrementCreator())}>
            Increment +
          </Button>
        </Box>
        <Box mx={2}>
          <Button color="primary" variant="outlined" onClick={() => dispatch(asyncDecrementCreator())}>
            Decrement -
          </Button>
        </Box>
        <Box mx={2}>
          <Button color="secondary" variant="outlined" onClick={() => dispatch(fetchUsers())}>Get all users</Button>
        </Box>
      </Box>
      <Box className="users">
        {users.map((user) => (
          <Box key={user.id} className="user">{user.name}</Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;
