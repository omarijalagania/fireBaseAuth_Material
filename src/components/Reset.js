import React from "react";
import { useHistory } from "react-router";
import { Button, TextField, Container } from "@mui/material";
import firebaseConfig from "../firebase";
export default function Reset() {
  const [resetEmail, setResetEmail] = React.useState("");
  const history = useHistory();
  const sendPasswordResetEmail = async (e) => {
    e.preventDefault();
    try {
      await firebaseConfig.auth().sendPasswordResetEmail(resetEmail);
      alert("Password reset link sent!");
      setResetEmail("");
      history.push("/login");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
      >
        <TextField
          type="email"
          id="outlined-basic"
          label="Enter Your Email"
          variant="outlined"
          validate
          value={resetEmail}
          onInput={(e) => setResetEmail(e.target.value)}
        />
        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          type="submit"
          onClick={sendPasswordResetEmail}
        >
          Reset Password
        </Button>
      </form>
    </Container>
  );
}
