import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Redirect } from "react-router";
import { Container, Button, Paper } from "@mui/material";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <Paper sx={{ padding: "3%", borderRadius: "5px" }}>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "400px" },
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              validate
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              required
              validate
              onInput={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" variant="contained">
              Log In
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
