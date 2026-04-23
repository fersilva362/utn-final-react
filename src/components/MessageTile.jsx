import React from "react";

export default function MessageTile({ url, name, message, time, onClick }) {
  const timeFormatted = new Date(time);

  return (
    <div onClick={onClick} className="message-tile">
      <img src={url} className="tile-avatar" alt={name} />
      <div className="tile-info">
        <div className="tile-header">
          <h4 className="tile-name">{name}</h4>
          <span className="tile-time">{`${timeFormatted.getHours()}:${timeFormatted.getMinutes()}`}</span>
        </div>
        <p className="tile-message">{message || "No messages yet"}</p>
      </div>
    </div>
  );
}
