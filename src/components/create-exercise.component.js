import { useState, useEffect } from "react";

import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import axios from "axios";

export default function CreateExercise() {
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const onChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onChangeDate = (e) => {
    const dateArray = e.target.value.split("-");
    setDate(new Date(dateArray[0], dateArray[1] - 1, dateArray[2]));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: userName,
      description: description,
      duration: duration,
      date: date,
    };

    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => alert(res.data));
  };

  const convertDate = (inputFormat) => {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getFullYear()), pad(d.getMonth() + 1), pad(d.getDate())].join(
      "-"
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data.map((user) => user.username));
          setUserName(response.data[0].username);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // end useEffect

  return (
    <div style={{ margin: "20px", maxWidth: "400px" }}>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        Create New Exercise Log
      </Typography>
      <form onSubmit={onSubmit}>
        <FormControl fullWidth>
          <InputLabel id="username-label">Username</InputLabel>
          <Select
            labelId="username-label"
            id="demo-simple-select"
            value={userName}
            label="Username"
            onChange={onChangeUsername}
            style={{ marginBottom: "20px" }}
          >
            {users.map((user, index) => (
              <MenuItem key={index} value={user}>
                {user}
              </MenuItem>
            ))}
          </Select>

          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            required
            value={description}
            onChange={onChangeDescription}
            style={{ marginBottom: "20px" }}
          />
          <TextField
            required
            id="outlined-basic"
            label="Duration (in minutes)"
            variant="outlined"
            value={duration}
            onChange={onChangeDuration}
            style={{ marginBottom: "20px" }}
          />
          <TextField
            id="date"
            label="Date"
            type="date"
            value={convertDate(date)}
            onChange={onChangeDate}
          />
          <Button
            type="submit"
            value="Create Exercise Log"
            variant="contained"
            sx={{ width: 190, mt: 2 }}
          >
            Create Exercise Log
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
