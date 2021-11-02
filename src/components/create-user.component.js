import { useState } from "react";

import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import axios from "axios";

export default function CreateUser() {
  const [userName, setUserName] = useState("");

  const onChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: userName,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => alert(res.data));

    setUserName("");
  };

  return (
    <div style={{ margin: "20px", maxWidth: "400px" }}>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        Create New User
      </Typography>
      <form onSubmit={onSubmit}>
        <FormControl fullWidth>
          <TextField
            required
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={userName}
            onChange={onChangeUsername}
          />
          <Button
            type="submit"
            value="Create User"
            variant="contained"
            sx={{ width: 130, mt: 2 }}
          >
            Create User
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
