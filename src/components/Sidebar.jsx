import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const drawerWidth = 240;

const mainItems = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "Trending", icon: <WhatshotIcon /> },
  { text: "Subscriptions", icon: <SubscriptionsIcon /> },
];

const libraryItems = [
  { text: "Library", icon: <VideoLibraryIcon /> },
  { text: "Watch Later", icon: <WatchLaterIcon /> },
  { text: "Liked Videos", icon: <ThumbUpIcon /> },
];

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid #e0e0e0",
        },
      }}
    >
      <Toolbar />
      <List>
        {mainItems.map((item) => (
          <ListItemButton key={item.text}>
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {libraryItems.map((item) => (
          <ListItemButton key={item.text}>
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;