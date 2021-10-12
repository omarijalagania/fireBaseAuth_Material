import React from "react";
import { Typography, Container, Button } from "@mui/material";
export default function Home() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Don't Have an Account?</Typography>
      <div style={{ display: "flex" }}>
        <Typography variant="h5">Please,</Typography>
        <Button href="/signup">Sign Up</Button>
      </div>
    </Container>
  );
}
