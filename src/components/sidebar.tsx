/*function sidebar () {

    return(
        <div>
            <label htmlFor="title">
                titolo:<input type="text" id="title" />
            </label>

            <label htmlFor="price">
                <input type="text" id= "price" />
            </label>

            <label htmlFor="description">
                <input type="text" id="description" />
            </label>
            
            <label htmlFor="image">
                <input type="text" id="image" />
            </label>

            <select name="category" id="category"></select>

        
    
                    </div>
    )
}*/

import { Input, Button } from "@mui/base";
import { Stack } from "@mui/system";


<form
  onSubmit={(event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    alert(JSON.stringify(formJson));
  }}
>
  <Stack spacing={1}>
    <Input placeholder="Title" required />
    <Input placeholder="Price" required />
    <Input placeholder="description" required />
    <Input placeholder="image" required />
    <select name="category" id="category"></select>
    <Button type="submit">Submit</Button>
  </Stack>
</form>

<TextField 
        label="Email" 
        type="email" 
        placeholder="Inserisci la tua email" 
      />

