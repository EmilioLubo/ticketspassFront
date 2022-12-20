import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { BASE_URL } from "../../api/url";
import "./Chat.css";

const socket = io.connect("http://localhost:8000");
export default function Chat() {
  const colors = ["#1E87D1", "#DAA532", "#3EC96E", "#FD0074", "#AB6CAD", "#FF0009", "#8B64DB"];
  const [messages, setMessages] = useState([]);
  const formRef = useRef(null)
  const {token} = useSelector(store => store.user)
  const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);
  useEffect(() => {
    socket.on("message", data => {
      setMessages(value => [...value, {message: data.message, name: data.name, color: data.color}]);
    });
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault();
    let headers = {headers: {Authorization: `Bearer ${token}`}}
    let message = formRef.current.elements.message.value;
    if(message.length < 1) return;
    formRef.current.reset();
    axios.post(`${BASE_URL}/api/message`, {message, color}, headers).catch(error => console.log(error));
  }
  return (
    <div className="Chat-container my-5 mx-auto border p-3">
      <div className="Chat d-flex flex-column justify-content-end">
        {messages.map((message, index) => (
          <p className="text-white" key={index}><span style={{color: message.color, fontWeight: 'bold'}}>{message.name}: </span>{message.message}</p>
        ))}
      </div>
      <form ref={formRef} className="d-flex flex-column" onSubmit={sendMessage}>
        <input name="message" placeholder="Send Message" className="border-0 text-white p-2 Chat-input" maxLength={100} minLength={1}/>
        <Button type="submit" variant="main" className="ms-auto">Chat</Button>
      </form>
    </div>
  );
}
