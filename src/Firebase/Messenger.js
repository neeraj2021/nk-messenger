import React, { useState, useEffect } from "react";
import Message from "./Message";
import firebase from "firebase";
import db from "./FireBase";
import "./Messenger.css";

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
    // setUsername("13");
  }, []);

  return (
    <div>
      <div className="px-4 py-2 text-center">
        <i className="fab fa-facebook-messenger"></i>
        <h1 className="display-6 fw-bold">Welcome {username}</h1>
        <div className="col-lg-6 mx-auto">
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div>
      </div>
      <hr />

      <div className="user_input my-2">
        <form>
          <input
            type="text"
            name="message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your Message"
          />
          <input
            type="submit"
            disabled={!input}
            value="Submit"
            onClick={submitForm}
            id="basic-addon2"
            value="Send"
          />
        </form>
      </div>
      <br />
      <div className="message_box">
        {messages.map((ele, index) => {
          return <Message key={index} username={username} message={ele} />;
        })}
      </div>
    </div>
  );
}
