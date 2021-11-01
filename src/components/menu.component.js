import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function Menu({ styleMode }) {
  return (
    <>
      <Link
        to="/"
        style={
          styleMode === "desktop"
            ? {
                textDecoration: "none",
                color: "white",
                marginRight: "25px",
              }
            : {
                color: "black",
                textDecoration: "none",
                padding: "10px",
                borderBottom: "1px solid #e0e0e0",
              }
        }
      >
        <Typography style={{ display: "inline" }}>Exercises</Typography>
      </Link>
      <Link
        to="/create"
        style={
          styleMode === "desktop"
            ? {
                textDecoration: "none",
                color: "white",
                marginRight: "25px",
              }
            : {
                color: "black",
                textDecoration: "none",
                padding: "10px",
                borderBottom: "1px solid #e0e0e0",
              }
        }
      >
        <Typography style={{ display: "inline" }}>
          Create Exercise Log
        </Typography>
      </Link>
      <Link
        to="/user"
        style={
          styleMode === "desktop"
            ? {
                textDecoration: "none",
                color: "white",
                marginRight: "25px",
              }
            : {
                color: "black",
                textDecoration: "none",
                padding: "10px",
                borderBottom: "1px solid #e0e0e0",
              }
        }
      >
        <Typography style={{ display: "inline" }}>Create User</Typography>
      </Link>
    </>
  );
} // end Menu component
