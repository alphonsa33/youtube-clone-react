import React, { useState } from "react";
import { Box, Grid, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import videos from "../data/videos";

function Home() {
  const [query, setQuery] = useState("");

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(query.toLowerCase()) ||
      video.channel.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar onSearch={setQuery} />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid container spacing={3}>
          {filteredVideos.map((video) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={video.id}>
              <VideoCard video={video} />
            </Grid>
          ))}
        </Grid>
        {filteredVideos.length === 0 && (
          <Box sx={{ mt: 4, textAlign: "center", color: "text.secondary" }}>
            No videos found.
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Home;