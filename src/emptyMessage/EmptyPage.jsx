import React from "react";
import "./EmptyPage.css";
import useContactHook from "../hooks/useContactHook";

export default function EmptyPage() {
  const { navigate } = useContactHook();
  return (
    <div className="empty-page-container">
      <div className="empty-state-card">
        <div className="action-item">
          <div className="icon-wrapper">📄</div>
          <span>Share Document</span>
        </div>
        <div className="action-item">
          <div onClick={() => navigate("/add")} className="icon-wrapper">
            👤
          </div>
          <span>Add Contact</span>
        </div>
      </div>
    </div>
  );
}
