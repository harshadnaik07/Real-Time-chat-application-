import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("chatMessages")) || []
  );
  const [text, setText] = useState("");

  const socketRef = useRef(null);

  const myUserId = useRef(
    sessionStorage.getItem("userId") ||
      Math.random().toString(36).substring(2, 9)
  );

  useEffect(() => {
    sessionStorage.setItem("userId", myUserId.current);
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:8080");

    socketRef.current.onmessage = (event) => {
      const msg = JSON.parse(event.data);

      if (msg.type === "history") {
        setMessages((prev) => (prev.length > 0 ? prev : msg.data));
      }

      if (msg.type === "message") {
        setMessages((prev) => [...prev, msg.data]);
      }
    };

    return () => socketRef.current.close();
  }, []);

  const sendMessage = () => {
    if (!text.trim()) return;

    socketRef.current.send(
      JSON.stringify({
        userId: myUserId.current,
        text,
        time: new Date().toLocaleTimeString(),
      })
    );

    setText("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.chat}>
        <div style={styles.header}>Chat</div>

        <div style={styles.messages}>
          {messages.map((m, i) => {
            const isSender = m.userId === myUserId.current;

            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: isSender ? "flex-end" : "flex-start",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    ...styles.bubble,
                    background: isSender ? "#E8F5E9" : "#FFFFFF",
                    borderTopRightRadius: isSender ? 4 : 14,
                    borderTopLeftRadius: isSender ? 14 : 4,
                  }}
                >
                  <div>{m.text}</div>
                  <div style={styles.time}>{m.time}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={styles.inputArea}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message"
            style={styles.input}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} style={styles.send}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    background: "#F5F7FA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chat: {
    width: "100%",
    maxWidth: 420,
    height: "90vh",
    background: "#FFFFFF",
    borderRadius: 16, 
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
  },
  header: {
    padding: 16,
    textAlign: "center",
    fontWeight: 600,
    borderBottom: "1px solid #E5E7EB",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  messages: {
    flex: 1,
    padding: 16,
    overflowY: "auto",
    background: "#F9FAFB",
  },
  bubble: {
    maxWidth: "70%",
    padding: "10px 14px",
    borderRadius: 16, 
    fontSize: 14,
    lineHeight: 1.4,
    boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
  },
  time: {
    fontSize: 10,
    color: "#6B7280",
    marginTop: 4,
    textAlign: "right",
  },
  inputArea: {
    display: "flex",
    padding: 12,
    borderTop: "1px solid #E5E7EB",
    background: "#FFFFFF",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 12, 
    border: "1px solid #D1D5DB",
    outline: "none",
  },
  send: {
    marginLeft: 8,
    padding: "0 18px",
    background: "#2563EB",
    color: "#FFFFFF",
    border: "none",
    borderRadius: 12, 
    cursor: "pointer",
  },
};
