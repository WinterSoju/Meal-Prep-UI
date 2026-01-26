import React from "react";

// Props:
// rating: number of stars to show (0-5)
function StarRating({ rating }) {
  const totalStars = 5;

  return (
    <div style={{ display: "flex", gap: "2px", color: "#FFD700", fontSize: "18px" }}>
      {Array.from({ length: totalStars }, (_, i) => (
        <span key={i}>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default StarRating;
