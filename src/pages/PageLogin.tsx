import { Button, Container } from "@mui/joy";
import { Stack, TextField } from "@mui/material";
import { AppContext } from "../Context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PageLogin() {
  const { userLogged, logIn } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack spacing={1}>
        <TextField
          label="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={() => {
            logIn({ email, password });
            if (!!userLogged) {
              navigate("/dashboard");
            }
          }}
        >
          Log In
        </Button>
      </Stack>
    </Container>
  );
}
