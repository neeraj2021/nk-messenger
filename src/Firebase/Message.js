import React from "react";
import "./message.css";

export default function Message({ username, message }) {
  const isUser = username === message.username;

  return (
    // <div className={`message ${isUser} && message_user`}>
    <div className={isUser ? "message message_user" : "message"}>
      <p id="user">{message.username || "anonymous"}</p>
      <div className={isUser ? "message_userCard" : "message_guestCard"}>
        <p>{message.message}</p>
      </div>
    </div>
  );
}
