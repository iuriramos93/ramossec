
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

import Form from "../ContactForm/";

import styles from "./styles.module.scss";

export default function BtnEspecialista() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button
        className={styles.BtnEspecialista}
        sx={{
          background: `linear-gradient(90deg, #325CD9 -15%, #08C1F1 87.42%, #05C7F2 100%)`,
          fontFamily: "Filson Pro",
          fontWeight: 700,
          fontSize: { md: "16px", xs: "8px" },
          padding: {
            xs: "12px 20px",
            sm: "0px",
            md: "24px 40px",
            lg: "24px 40px",
          },
        }}
        variant="contained"
        size="large"
        onClick={() => setShow(true)}
        // href=""
        // target={"_blank"}
      >
        Falar com um Especialista
      </Button>

      <Dialog onClose={handleClose} open={show} aria-hidden={true}>
        <DialogTitle> Entre em Contato</DialogTitle>
        <DialogContent>
          <Form onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}
