import React, { useContext } from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { AppContext } from "../Context";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Cart() {
  const { cart } = useContext(AppContext);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
        <StyledBadge
          badgeContent={cart.reduce((acc, product) => acc + product.qty, 0)}
          color="secondary"
        >
          <ShoppingCartIcon color="primary"></ShoppingCartIcon>{" "}
        </StyledBadge>{" "}
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {cart.map((product) => (
              <ListItem key={product.product.id}>
                <ListItemButton>
                  <img
                    style={{ width: "100px" }}
                    src={product.product.image}
                    alt={product.product.title}
                  />
                  {product.product.title} {product.qty}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List sx={{ position: "sticky", bottom: 0, background: "#fff" }}>
            <ListItem>
              Total:
              {cart.reduce(
                (acc, product) => acc + product.product.price * product.qty,
                0
              )}
              <Link to="/checkout">
                <Button endDecorator={<KeyboardArrowRight />} color="success">
                  Checkout
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Cart;
