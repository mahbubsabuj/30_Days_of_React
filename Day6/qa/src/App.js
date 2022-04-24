import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is react ?",
    content: "React is a frontend javascript library",
  },
  {
    title: "What is react ?",
    content: "React is a frontend javascript library",
  },
  {
    title: "What is react ?",
    content: "React is a frontend javascript library",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
