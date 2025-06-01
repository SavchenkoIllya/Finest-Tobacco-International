import React from "react";
import { Html, Body } from "@react-email/components";

export function IncomingMessage({
  content,
}: Readonly<{ content: Record<string, string | null> }>) {
  return (
    <Html lang="en">
      <Body
        style={{
          backgroundColor: "#f9f9f9",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h2
            style={{
              marginBottom: "24px",
              color: "#333",
              fontSize: "20px",
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: "12px",
            }}
          >
            Incoming Message
          </h2>
          {Object.entries(content).map(([key, value], idx) =>
            value ? (
              <div
                key={value + idx}
                style={{
                  marginBottom: "16px",
                  paddingBottom: "8px",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "#555",
                    marginBottom: "4px",
                  }}
                >
                  {key}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#222",
                    margin: 0,
                  }}
                >
                  {value}
                </p>
              </div>
            ) : null,
          )}
        </div>
      </Body>
    </Html>
  );
}

export default IncomingMessage;
