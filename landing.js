import React from "react";

export default function App() {
  return (
    <div style={{ padding: "4rem" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>The Genius Prompter</h1>
      <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
        Create viral content in 1 hour with AI. Powered by Promptionary.
      </p>
      <ul style={{ marginTop: "2rem", lineHeight: "2" }}>
        <li>✅ 10 Viral AI Prompts</li>
        <li>✅ Notion Content Calendar</li>
        <li>✅ Canva Post Template</li>
        <li>✅ 1-Week Content Guide</li>
      </ul>
      <a href="https://your-gumroad-link.com" style={{
        display: "inline-block",
        marginTop: "2rem",
        padding: "1rem 2rem",
        backgroundColor: "#000",
        color: "#fff",
        textDecoration: "none",
        fontSize: "1.2rem",
        borderRadius: "8px"
      }}>Get the Toolkit</a>
    </div>
  );
}