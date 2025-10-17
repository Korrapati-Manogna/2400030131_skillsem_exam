import React, { useState } from "react";

const events = [
  {
    date: "2025-10-15",
    title: "Project Submission",
    description: "Submit React Project.",
  },
  {
    date: "2025-10-20",
    title: "Team Meeting",
    description: "Hackathon Discussion.",
  },
];

function App() {
  const today = new Date();
  const [selected, setSelected] = useState("");
  const year = today.getFullYear();
  const month = today.getMonth();
  const days = new Date(year, month + 1, 0).getDate();

  const format = (d) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(
      2,
      "0"
    )}`;

  const selEvents = events.filter((e) => e.date === selected);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "sans-serif",
        width: "100vw",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h3>
        {today.toLocaleString("default", { month: "long" })} {year}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "5px",
        }}
      >
        {[...Array(days)].map((_, i) => {
          const d = format(i + 1);
          const hasEvent = events.some((e) => e.date === d);
          return (
            <div
              key={i}
              onClick={() => setSelected(d)}
              style={{
                padding: 10,
                borderRadius: 5,
                cursor: "pointer",
                background:
                  selected === d ? "black" : hasEvent ? "yellow" : "white",
                color: selected === d ? "white" : "black",
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
      {selected && (
        <div style={{ marginTop: 15 }}>
          <h4>Events on : {selected}</h4>
          {selEvents.length
            ? selEvents.map((e, i) => (
                <div key={i}>
                  <b>{e.title}:</b> {e.description}
                </div>
              ))
            : "No events"}
        </div>
      )}
         
    </div>
  );
}
export default App;
