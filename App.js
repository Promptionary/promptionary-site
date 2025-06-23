import React from "react";

function App() {
  return (
    <div style={{ padding: "4rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>The Genius Prompter</h1>
      <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
        Create viral content in 1 hour with AI. Powered by Promptionary.
      </p>

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>🧠 AI Toolkit for Creators</h2>
        <p>A starter pack for creators looking to build content systems fast.</p>
        <a href="https://promptionary.gumroad.com/l/zebvu" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#000",
          color: "#fff",
          textDecoration: "none",
          fontSize: "1rem",
          borderRadius: "6px"
        }}>Buy Now</a>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>⚡ AI FastPack: Creator Edition</h2>
        <p>Build a week of content in 1 hour using Notion, Canva, and ChatGPT.</p>
        <a href="https://promptionary.gumroad.com/l/jwcdc" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#1a73e8",
          color: "#fff",
          textDecoration: "none",
          fontSize: "1rem",
          borderRadius: "6px"
        }}>Buy Now</a>
      </div>
    </div>
  );
}

export default App;