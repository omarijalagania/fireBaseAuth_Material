import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Redirect, Link } from "react-router-dom";
import { Container, Button, Paper, Typography } from "@mui/material";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (email !== "" && password !== "") {
        firebaseConfig.auth().signInWithEmailAndPassword(email, password);
      } else {
        alert("Email or Password cant be emplty");
      }
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
              validate
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              validate
              onInput={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Log In
            </Button>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Typography>
                New User? <Link to="/signup">Sign Up</Link>
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography>Forgot Password? </Typography>
                <Link style={{ marginLeft: "10px" }} to="/reset">
                  Reset
                </Link>
              </Box>
            </div>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
