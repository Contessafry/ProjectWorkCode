import { useContext } from "react";
import { AppContext } from "../Context";
import { Box } from "@mui/joy";

export default function PageDashboard() {
    const {orders}=useContext(AppContext);
return (
    <Box>
        {orders.buyed.map(({product,qty})=>(
            <Box key={product.id}>
                <p>{product.title}</p>
                <p>{qty}</p>
                
            </Box>
        )
    </Box>
)
};