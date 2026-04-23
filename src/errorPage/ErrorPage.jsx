import React from "react";
import useContactHook from "../useContactHook";

export default function ErrorPage() {
  const { navigate } = useContactHook();
  return (
    <div className="error-page-container">
      <div className="error-icon">⚠️</div>
      <h1>Oops! Something went wrong</h1>
      <p className="error-message">
        "We couldn't load the conversation. Please try again."
      </p>

      <div className="error-actions">
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Chats
        </button>
      </div>
    </div>
  );
}
