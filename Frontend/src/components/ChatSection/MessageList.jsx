import React from "react";
export default function MessageList() {
  const messages = [
    { text: "Hi there!", sent: true },
    { text: "Hello!", sent: false },
    { text: "What's up?", sent: true },
    { text: "All good!", sent: false },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`max-w-xs px-4 py-2 rounded-lg ${msg.sent
            ? "bg-green-200 self-end ml-auto text-right"
            : "bg-white border self-start mr-auto text-left"
            }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
