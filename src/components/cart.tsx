import React, { useContext } from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import { AppContext } from "../Context";


function Cart() {
  const { cart }  = useContext(AppContext);
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
      <ListItemButton color="neutral" onClick={toggleDrawer(true)}>
      <ShoppingCartIcon color="primary"></ShoppingCartIcon>
      </ListItemButton>
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
                  {product.product.title}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem>
              Total:{cart.reduce((acc, Product) => acc + Product.product.price, 0)}
              <ListItemButton>Checkout</ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Cart;
