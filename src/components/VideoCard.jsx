import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Card
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          cursor: "pointer",
          "&:hover": { opacity: 0.9 },
        }}
      >
        <CardMedia
          component="img"
          image={video.thumbnail}
          alt={video.title}
          sx={{ borderRadius: 2, aspectRatio: "16/9", objectFit: "cover" }}
        />
        <CardContent sx={{ display: "flex", gap: 1.5, px: 0, pb: 0 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#ccc",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            {video.channel.charAt(0)}
          </Box>
          <Box>
            <Typography variant="subtitle2" fontWeight={600} sx={{ lineHeight: 1.3 }}>
              {video.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {video.channel}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {video.views} • {video.uploadedAt}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}

export default VideoCard;