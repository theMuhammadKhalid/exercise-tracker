import { useState } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Menu from "./menu.component";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            flex: 1,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            ExerciseTracker
          </Typography>
        </Link>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Menu styleMode="desktop" />
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer variant="persistent" anchor="right" open={openDrawer}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ width: 50, ml: 0.1 }}
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ChevronRightIcon />
            </IconButton>
            <Divider />
            <Menu styleMode="mobile" />
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
