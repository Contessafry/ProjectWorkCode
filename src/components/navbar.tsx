
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';


export default function navbar(){
 
    return(
       
        <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
                <List role="menubar" orientation="horizontal">
                    <ListItem role="none">
                        <ListItemButton
                            role="menuitem"
                            component="a"
                            href="#horizontal-list"
                            aria-label="Home"
                        >
                            
                    </ListItemButton>
                    </ListItem>
                    <ListDivider />
                    <ListItem role="none">
                        <ListItemButton role="menuitem" component="a" href="#horizontal-list">
                            Login 
                        </ListItemButton>
                    </ListItem>
                    <ListDivider />
                    <ListItem role="none">
                        <ListItemButton role="menuitem" component="a" href="#horizontal-list">
                            Cart
                        </ListItemButton>
                    </ListItem>
                   
                    
                </List>
            </Box>




    )
}