import {
  InputLabel,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

import { useContext, useReducer } from "react";
import { Product } from "../declaration";
import { v4 as uuid } from "uuid";
import { AppContext } from "../Context";
import { Button, FormControl, Stack } from "@mui/joy";

type FormAction =
  | { type: "UPDATE_FIELD"; field: keyof Product; value: string }
  | { type: "RESET" };

function formReducer(
  state: Omit<Product, "id">,
  action: FormAction
): Omit<Product, "id"> {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return {
        title: "",
        price: 0,
        description: "",
        image: "",
        category: "",
      };
    default:
      throw new Error();
  }
}

function FormForProduct({
  product,
  closeModal = () => {},
}: {
  product?: Product;
  closeModal?: () => void;
}) {
  const isNew = !product;
  const initProduct = product
    ? product
    : { title: "", price: 0, description: "", image: "", category: "" };

  const { adminPostProduct, adminEditProduct, products } =
    useContext(AppContext);
  const [formState, dispatch] = useReducer<
    React.Reducer<Omit<Product, "id">, FormAction>
  >(formReducer, initProduct);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!Object.values(formState).every((value) => value)) {
      return alert("Per favore, inserisci tutti i campi");
    }

    if (isNew) {
      adminPostProduct({ ...formState, id: uuid() });
    } else {
      adminEditProduct({ ...formState, id: product.id });
      closeModal();
    }
  }
  function handleInputChange(
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name as keyof Product,
      value: e.target.value,
    });
    console.log(formState);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={1}>
        <TextField
          name="title"
          label="title"
          type="text"
          placeholder="title"
          onChange={handleInputChange}
          value={formState.title}
          required
        />
        <TextField
          name="price"
          label="price"
          type="text"
          placeholder="price"
          onChange={handleInputChange}
          value={formState.price}
          required
        />
        <TextField
          name="description"
          label="description"
          type="text"
          placeholder="description"
          onChange={handleInputChange}
          value={formState.description}
          required
        />
        <TextField
          name="image"
          label="image"
          type="text"
          placeholder="image"
          onChange={handleInputChange}
          value={formState.image}
          required
        />
        <FormControl>
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            name="category"
            id="category"
            onChange={handleInputChange}
            value={formState.category}
          >
            <MenuItem value={formState.category}>{formState.category}</MenuItem>
            {products
              .reduce((acc: string[], prod: Product) => {
                return acc.includes(prod.category)
                  ? acc
                  : [...acc, prod.category];
              }, [])
              .map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {isNew ? (
          <Button color="primary" type="submit">
            Submit
          </Button>
        ) : (
          <Button color="warning" type="submit">
            Save Edit
          </Button>
        )}
      </Stack>
    </form>
  );
}

export default FormForProduct;
