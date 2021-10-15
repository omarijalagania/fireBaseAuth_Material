import React from "react";
import { firestore } from "@firebase/firestore-compat";
import firebase from "@firebase/app-compat";
import { ListItem, ListItemText, Button } from "@mui/material";

export default function TodoItem({ todo, isDone, id }) {
  const db = firebase.firestore();

  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      isDone: !isDone,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }
  return (
    <ListItem>
      <ListItemText
        primary={todo}
        secondary={isDone ? "Done" : "In Progress"}
      />

      <Button
        onClick={toggleInProgress}
        sx={{ margin: "5px" }}
        variant="contained"
      >
        {isDone ? "Undone" : "Done"}
      </Button>
      <Button
        onClick={deleteTodo}
        sx={{ margin: "5px" }}
        variant="contained"
        color="error"
      >
        Remove
      </Button>
    </ListItem>
  );
}
