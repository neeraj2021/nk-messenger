import React, { useState, useEffect } from "react";
import Message from "./Message";
import firebase from "firebase";
import db from "./FireBase";

export default function Messenger() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((ele) => ele.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("enter your name"));
    // setUsername("123");
  }, []);

  return (
    <div>
      <div>
        <h2>Hello {username}</h2>
        <div className="form_input">
          <form>
            <input
              type="text"
              name="message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input
              type="submit"
              disabled={!input}
              value="Submit"
              onClick={submitForm}
            />
          </form>
        </div>
      </div>
      <div className="message_box">
        {messages.map((ele, index) => {
          return <Message key={index} username={username} message={ele} />;
        })}
      </div>
    </div>
  );
}
