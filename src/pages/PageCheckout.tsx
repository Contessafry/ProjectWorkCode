import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function PageCheckout() {
  const { checkOut } = useContext(AppContext);
  const Navigate = useNavigate();
  return (
    <>
      <Typography variant="h3" color={"primary"} align="center">
        Checkout
      </Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "40vh" }}
        mb={5}
      >
        <Grid item xs={12} mb={8}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              name="address"
              label="address"
              type="text"
              placeholder="address"
              required
            />

            <TextField
              name="city"
              label="city"
              type="text"
              placeholder="city"
              required
            />
            <TextField
              name="postCode"
              label="postCode"
              type="text"
              placeholder="postCode"
              required
            />
            <TextField
              name="cardNumber"
              label="Insert Card Number"
              type="text"
              placeholder="Card Number"
              required
            />
          </Box>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="success"
          onClick={() => {
            checkOut();
            Navigate("/checkout/success");
          }}
        >
          Payment
        </Button>
      </Grid>
    </>
  );
}
