import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid #e0e0e0" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: menu + logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <YouTubeIcon sx={{ color: "red", fontSize: 32 }} />
            <Box sx={{ fontSize: 20, fontWeight: 600 }}>YouTube</Box>
          </Box>
        </Box>

        {/* Center: search bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "40%",
            border: "1px solid #ccc",
            borderRadius: 5,
            px: 2,
          }}
        >
          <InputBase
            placeholder="Search"
            fullWidth
            onChange={handleChange}
            sx={{ py: 0.7 }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MicIcon />
          </IconButton>
        </Box>

        {/* Right: icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ width: 32, height: 32, bgcolor: "#1976d2" }}>U</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;