import { useState, useEffect } from "react";
import axios from "axios";

import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Exercise = (props) => (
  <TableRow>
    <TableCell>{props.exercise.username}</TableCell>
    <TableCell>{props.exercise.description}</TableCell>
    <TableCell>{props.exercise.duration}</TableCell>
    <TableCell>{props.exercise.date.substring(0, 10)}</TableCell>
    <TableCell>
      <IconButton
        aria-label="delete"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </TableCell>
  </TableRow>
);

export default function ExercisesList() {
  const [exercises, setExercises] = useState([]);

  const deleteExercise = (id) => {
    axios.delete("http://localhost:5000/exercises/" + id).then((response) => {
      console.log(response.data);
    });
    setExercises(exercises.filter((el) => el._id !== id));
  };

  const exerciseList = () => {
    return exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ margin: "20px", maxWidth: "700px" }}>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        Logged Exercises
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{exerciseList()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
