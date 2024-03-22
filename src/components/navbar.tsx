import { Home, KeyboardArrowRight } from "@mui/icons-material";
import { Button, Input, ListItemContent, ListItemDecorator } from "@mui/joy";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  return (
    <Box
      component="nav"
      aria-label="My site"
      sx={{ width: "100%", flexGrow: 1 }}
      marginBottom={3}
    >
      <List
        variant="soft"
        role="menubar"
        orientation="horizontal"
        sx={{ display: "flex", width: "100%" }}
      >
        <ListItem role="none">
          <ListItemButton
            variant="soft"
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
          >
            <ListItemDecorator>
              <Home />
            </ListItemDecorator>
            <ListItemContent>Home</ListItemContent>
          </ListItemButton>
        </ListItem>

        <Input
          size="lg"
          sx={{ width: 1300 }}
          color="primary"
          variant="outlined"
          placeholder="Type in here…"
          endDecorator={<Button>{<SearchIcon />}</Button>}
        />

        <ListDivider />

        <ListItem role="none">
          <ListItemButton
            variant="soft"
            color="primary"
            role="menuitem"
            component="a"
            href="#horizontal-list"
            sx={{ borderRadius: "10px" }}
          >
            Login
          </ListItemButton>
          <ListDivider />
          <ListItemButton
            color="primary"
            role="menuitem"
            component="a"
            href="#horizontal-list"
            sx={{ borderRadius: "10px" }}
          >
            Orders
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemContent>
                  <ShoppingCartIcon color="primary"></ShoppingCartIcon>
                </ListItemContent>
                <KeyboardArrowRight color="primary" />
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}
