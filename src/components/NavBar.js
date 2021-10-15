import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { Link } from "@mui/material";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase";
export default function NavBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {currentUser ? (
                <Link
                  sx={{ textDecoration: "none" }}
                  color="inherit"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              ) : (
                <Link sx={{ textDecoration: "none" }} color="inherit" href="/">
                  Main
                </Link>
              )}
            </Typography>

            {currentUser ? (
              <div>
                <Typography>Welcome, {currentUser.email}</Typography>
                <Button
                  onClick={() => firebaseConfig.auth().signOut()}
                  href="/"
                  color="inherit"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button href="/login" color="inherit">
                Sign In
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
