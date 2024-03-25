import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import srcImg from "./assets/foto.png";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function pageCheckoutSuccess() {
  const Navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h2" color={"primary"} align="center">
        Grazie dell'acquisto!
      </Typography>

      <img src={srcImg} alt="" style={{ width: "700px", height: "400px" }} />
      <div>
        <Button color="primary" onClick={() => Navigate("/")}>
          Torna alla Home
        </Button>
      </div>
    </Box>
  );
}

export default pageCheckoutSuccess;
