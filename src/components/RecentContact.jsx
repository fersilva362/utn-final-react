import React from "react";

export default function RecentContact({ name, url }) {
  return (
    <div className="recent-contact">
      <img src={url} alt={name} className="recent-avatar" />
      <span className="tile-name">{name}</span>
    </div>
  );
}
