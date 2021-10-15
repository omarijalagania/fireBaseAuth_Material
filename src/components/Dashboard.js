import React from "react";
import Todo from "./Todo";

export default function Dashboard({ todosData }) {
  return <Todo todosData={todosData} />;
}
