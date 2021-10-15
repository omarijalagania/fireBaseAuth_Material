import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Button, Paper } from "@mui/material";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../firebase";

export function SignUp() {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (password === password2) {
        firebaseConfig.auth().createUserWithEmailAndPassword(email, password);
        setCurrentUser(true);
      } else {
        alert("Passwords dont match");
      }
    } catch (error) {
      alert(error);
    }
  };
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

            <TextField
              type="password"
              id="outlined-basic"
              label="Repeat Password"
              variant="outlined"
              required
              validate
              onInput={(e) => setPassword2(e.target.value)}
            />

            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default SignUp;
