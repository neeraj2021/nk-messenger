import React, { useState } from "react";
import "./message.css";
import db from "./FireBase";

export default function Message({ username, message, message_id }) {
  const isUser = username === message.username;
  const [isDelete, setIsDelete] = useState(false);

  function delete_message_completely(id) {
    if (isUser) db.collection("messages").doc(id).delete();
    // console.log("completely");
  }

  function delete_message(id) {
    if (isUser) {
      // db.collection("messages").doc(id).delete();
      db.collection("messages").doc(id).update({
        message: "This message has been Deleted",
      });
      setIsDelete(true);
    }
  }

  return (
    <div className="row">
      <div className="col-12 col-md-8 mx-auto">
        <div className={isUser ? "message message_user" : "message"}>
          <p id="user">{message.username || "anonymous"}</p>
          <div className={isUser ? "message_userCard" : "message_guestCard"}>
            <p
              onDoubleClick={() =>
                isDelete === false
                  ? delete_message(message_id)
                  : delete_message_completely(message_id)
              }
            >
              {message.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
