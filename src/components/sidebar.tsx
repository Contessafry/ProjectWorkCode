import { Box, Button, Typography } from "@mui/joy";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context";
import FormForProduct from "./FormForProduct";

export default function SideBar() {
  const { userLogged, logOut } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      {!!userLogged && !!userLogged.isAdmin && (
        <Box display="flex" gap={1} flexDirection="column">
          <Typography fontSize="md" level="title-md" textAlign="center">
            benvenuto! {userLogged.name}
          </Typography>
          <Button
            size="sm"
            color="danger"
            onClick={() => {
              logOut(), navigate("/");
            }}
          >
            Logout
          </Button>
          <FormForProduct />
        </Box>
      )}
    </>
  );
}
