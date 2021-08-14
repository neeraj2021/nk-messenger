import React from "react";
import "./message.css";

export default function Message({ username, message }) {
  return (
    <div className="message_box">
      <sub> {message.username}</sub>
      <p
        className={
          username === message.username ? "user_message" : "guest_message"
        }
      >
        {message.message}
      </p>
    </div>
  );
}
