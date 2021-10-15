import React, { useState, useContext } from "react";
import { TextField, Container, Box, Button } from "@mui/material";
import TodoItem from "./TodoItem";
import { firestore } from "@firebase/firestore-compat";
import firebase from "@firebase/app-compat";
import { AuthContext } from "./Auth";

export default function Todo({ todosData }) {
  const [todo, setTodo] = useState("");
  const [isDone, setIsDone] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const db = firebase.firestore();

  const filteredUser = todosData.filter((user) => user.uid === currentUser.uid);
  console.log(filteredUser);
  console.log("UID " + currentUser.uid);

  function addTodo(e) {
    e.preventDefault();
    db.collection("todos").add({
      isDone: isDone,
      todo: todo,
      uid: currentUser.uid,
    });

    setTodo("");
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <Box>
        <form>
          <TextField
            id="standard-basic"
            label="Add Todo"
            variant="standard"
            sx={{ width: " 90vw", maxWidth: "400px" }}
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ opacity: "0" }}
            onClick={addTodo}
          >
            Add
          </Button>
        </form>
      </Box>
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {filteredUser.map((item) => {
          return (
            <TodoItem
              key={item.id}
              todo={item.todo}
              id={item.id}
              isDone={item.isDone}
            />
          );
        })}
      </div>
    </Container>
  );
}
