import { Home } from "@mui/icons-material";
import { Input, ListItemContent, ListItemDecorator, useTheme } from "@mui/joy";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";
import Cart from "./cart";
import { useContext, useState } from "react";
import { AppContext } from "../Context";

export default function Navbar() {
  const { onSearch } = useContext(AppContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const [search, setSearch] = useState("");
  return (
    <Box
      display={"flex"}
      component="nav"
      aria-label="My site"
      sx={{
        width: "100%",
        flexGrow: 1,
        position: "sticky",
        top: 0,
        zIndex: "1000",
      }}
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
            onClick={() => navigate("/")}
          >
            <ListItemDecorator>
              <Home />
            </ListItemDecorator>
            <ListItemContent>Home</ListItemContent>
          </ListItemButton>
        </ListItem>

        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearch(search);
          }}
          size="lg"
          sx={{
            width: 1300,
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
          color="primary"
          variant="outlined"
          placeholder="Type in here…"
          endDecorator={<SearchIcon />}
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
            onClick={() => navigate("/login")}
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
                <Cart />
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}
