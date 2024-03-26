import Box from "@mui/material/Box";
import { Button } from "@mui/joy";

import { Modal } from "@mui/material";

import { useState } from "react";
import { Product } from "../declaration";
import FormForProduct from "./FormForProduct";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function EditModal({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        variant="solid"
        size="md"
        aria-label="Edit product"
        sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        color="warning"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormForProduct product={product} closeModal={handleClose} />
        </Box>
      </Modal>
    </>
  );
}

export default EditModal;
