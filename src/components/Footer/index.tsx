import styles from "./styles.module.scss";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import SocialList from "../SocialList";
import AppLinks from "../AppLinks";

const date = new Date();

const now = date.getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer_IOUP}>
      <Box
        display={"flex"}
        flexDirection={{ md: "row", xs: "column" }}
        gap={{ md: 0, xs: "1rem" }}
        width="100%"
        alignItems={{ xs: "center" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ md: "50%", xs: "100%" }}
          padding={"0 2rem "}
          gap={"1rem"}
          paddingTop={{ md: "80px", xs: "0" }}
        >
          <Typography
            sx={{
              fontFamily: "Filson Pro",
              fontSize: { md: "61px", xs: "38px" },
              fontWeight: 700,
              width: { xs: "100%", md: "343px", xl: "343px" },
            }}
            textAlign={{ md: "left", xs: "center" }}
            component={"h1"}
          >
            Vamos Conversar?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Filson Pro",
              fontSize: { md: "28px", xs: 18 },
              color: "#05C7F2",
              textDecoration: "none",
              textTransform: "lowercase",
            }}
            textAlign={{ md: "left", xs: "center" }}
            component={"a"}
            href="mailto:contato@ioupmkt.com"
          >
            contato@ioupmkt.com
          </Typography>

          <Box>
            <SocialList />
            <AppLinks />
          </Box>
          <Typography
            sx={{
              fontFamily: "Filson Pro",
              position: "relative",
              top: { md: 0, xs: 0 },
              width: { xs: "100vw", md: "100%" },
            }}
            component="p"
            textAlign={{ md: "left", xs: "center" }}
          >
            &copy;&nbsp;Copyright {now}.&nbsp;IOUP.&nbsp;Todos os direitos
            reservados.&nbsp;Marília,São Paulo,Brasil. &nbsp;
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width={{ md: "50%", xs: "100%" }}
          justifyContent={"center"}
        >
          <img style={{ width: "80%" }} src="\img\Imagem atendente.png" />
        </Box>
      </Box>
    </footer>
  );
}
