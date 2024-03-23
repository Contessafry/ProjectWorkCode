import { Box, Button, FormControl, Typography } from "@mui/joy";

import {
  InputLabel,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useReducer } from "react";
import { AppContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Product } from "../declaration";
type FormAction =
  | { type: "UPDATE_FIELD"; field: keyof Product; value: string }
  | { type: "RESET" };

function formReducer(state: Product, action: FormAction) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { title: "", price: "", description: "", image: "", category: "" };
    default:
      throw new Error();
  }
}

export default function SideBar() {
  const { userLogged, logOut, adminPostProduct } = useContext(AppContext);
  const navigate = useNavigate();

  const [formState, dispatch] = useReducer<React.Reducer<Product, FormAction>>(
    formReducer,
    {
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    }
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!Object.values(formState).every((value) => value)) {
      return alert("Per favore, inserisci tutti i campi");
    }

    adminPostProduct({ ...formState, id: uuid() });
  }
  function handleInputChange(
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
    console.log(formState);
  }
  return (
    <>
      {!!userLogged && !!userLogged.isAdmin && (
        <Box display="flex" gap={1}>
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
        </Box>
      )}
      <form onSubmit={handleSubmit}>
        <Stack spacing={1}>
          <TextField
            name="title"
            label="title"
            type="text"
            placeholder="title"
            onChange={handleInputChange}
            required
          />
          <TextField
            name="price"
            label="price"
            type="text"
            placeholder="price"
            onChange={handleInputChange}
            required
          />
          <TextField
            name="description"
            label="description"
            type="text"
            placeholder="description"
            onChange={handleInputChange}
            required
          />
          <TextField
            name="image"
            label="image"
            type="text"
            placeholder="image"
            onChange={handleInputChange}
            required
          />
          <FormControl>
            <InputLabel id="category">Category</InputLabel>
            <Select
              labelId="category"
              name="category"
              id="category"
              defaultValue="category"
              onChange={handleInputChange}
            >
              <MenuItem value="jewelery">Jewelery</MenuItem>
            </Select>
          </FormControl>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}
