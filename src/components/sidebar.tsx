import { Button } from "@mui/joy";
import { MenuItem, Select } from "@mui/joy";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";

export default function SideBar() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        alert(JSON.stringify(formJson));
      }}
    >
      <Stack spacing={1}>
        <TextField label="title" type="text" placeholder="title" />
        <TextField label="price" type="text" placeholder="price" />
        <TextField label="description" type="text" placeholder="description" />
        <TextField label="image" type="text" placeholder="image" />
        <Select name="category" id="category">
          <MenuItem>Jewelery</MenuItem>
        </Select>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
