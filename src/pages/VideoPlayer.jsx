import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, IconButton, Avatar, Button, Toolbar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ReactPlayer from "react-player";
import videos from "../data/videos";

function VideoPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography>Video not found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, mx: "auto" }}>
      <Toolbar sx={{ display: { xs: "none", sm: "block" } }} />
      <IconButton onClick={() => navigate(-1)} sx={{ mb: 1 }}>
        <ArrowBackIcon /> 
      </IconButton>

      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%",
          borderRadius: 2,
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video.id}`}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
          controls
        />
      </Box>

      <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
        {video.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar sx={{ bgcolor: "#1976d2" }}>
            {video.channel.charAt(0)}
          </Avatar>
          <Box>
            <Typography fontWeight={600}>{video.channel}</Typography>
            <Typography variant="body2" color="text.secondary">
              {video.views} • {video.uploadedAt}
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          startIcon={<ThumbUpOutlinedIcon />}
          sx={{ borderRadius: 5, textTransform: "none" }}
        >
          Like
        </Button>
      </Box>
    </Box>
  );
}

export default VideoPlayer;