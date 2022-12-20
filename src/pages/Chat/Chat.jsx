import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");
export default function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("message", data => {
      setMessages(value => [...value, data]);
    });
  }, [socket]);
  return (
    <div>
      {messages.map(message => (
        <p>{message}</p>
      ))}
    </div>
  );
}
