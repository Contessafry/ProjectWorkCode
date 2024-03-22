import { Input, Button } from "@mui/base";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";

export default function SideBar (){
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
  <TextField 
        label="title" 
        type="title" 
        placeholder="title" />
        <TextField 
        label="price" 
        type="price" 
        placeholder="price" />
        <TextField 
        label="description" 
        type="description" 
        placeholder="description" />
        <TextField 
        label="image" 
        type="image" 
        placeholder="image" />
    <select name="category" id="category"></select>
    <Button type="submit">Submit</Button>
 
 </Stack>
 
</form>)
}

