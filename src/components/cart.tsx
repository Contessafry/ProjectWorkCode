import React, { useContext } from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";

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
  const { cart, removeItemFromCart, clearCart } = useContext(AppContext);
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
                <img
                  style={{ width: "100px" }}
                  src={product.product.image}
                  alt={product.product.title}
                />
                <div>
                  <div>{product.product.title} </div>

                  <div style={{ fontWeight: "bold" }}>
                    {product.product.price}€
                    <Button
                      color="danger"
                      variant="plain"
                      style={{ marginLeft: "100px" }}
                      onClick={(e) => {
                        removeItemFromCart(product);
                        e.stopPropagation();
                      }}
                    >
                      remove
                    </Button>
                    <div>Quantity: {product.qty}</div>
                  </div>
                </div>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List sx={{ position: "sticky", bottom: 0, background: "#fff" }}>
            <ListItem
              sx={{
                fontWeight: "bold",
              }}
            >
              Total:
              <div style={{ marginLeft: "3px", marginRight: "130px" }}>
                {cart.reduce(
                  (acc, product) => acc + product.product.price * product.qty,
                  0
                )}
                €
              </div>
              <Button onClick={clearCart} color="danger">
                Clear
              </Button>
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
