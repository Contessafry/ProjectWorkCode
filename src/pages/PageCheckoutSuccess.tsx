import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function pageCheckoutSuccess() {
  const Navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h2" color={"primary"} align="center" mb={10} mt={10}>
        Grazie per il tuo acquisto!
      </Typography>

      <div align="center">
        <Button color="primary" onClick={() => Navigate("/")}>
          Torna alla Home
        </Button>
      </div>
    </Box>
  );
}

export default pageCheckoutSuccess;
