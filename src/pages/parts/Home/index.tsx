import { Box, Typography } from "@mui/material";
// import Background from "../../../components/Background";
import { Section } from "../../../components/Section";
import BtnEspecialista from "../../../components/BtnEspecialista";

export default function Home() {
  return (
    <Section name="home" id="home" margin="0 0 3rem 0">
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            margin: { md: "139px 0 0", xs: "0" },
          }}
        >
          <Typography
            sx={{
              color: "#325CD9",
              fontFamily: "Filson Pro",
              fontSize: { md: "61px", xs: "30.5px" },
              fontWeight: 700,
              lineHeight: { md: "64px", xs: "34px" },
              lineBreak: "strict",
              // width: { md: "34.5625rem", xs: "100%" },
              //   padding: "0 12rem 0 0",
            }}
            component="h1"
          >
            Criamos Arte, {"\n"} Geramos Resultado.
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#404144",
              fontFamily: "Filson Pro",
              fontSize: "1.9375rem",
              margin: "1.75rem 0",
              fontWeight: 400,
              // padding: "0 12rem 0 0",
              lineHeight: "40px",
            }}
          >
            Descubra agora como podemos transformar sua vida através do seu
            negócio.
          </Typography>
          <Box m={{ md: "1rem 0", xs: "1rem 0" }}>
            <BtnEspecialista />
          </Box>
        </Box>
        <Box
          sx={{
            // backgroundImage:'url(img/Image1.png)',
            // backgroundSize:'cover',
            width: { md: "50%", xs: "100%" },
          }}
        >
          {/* <img
            width={"100%"}
            src="img/Image1.png"
            alt="Image Home"
            loading="lazy"
          /> */}
        </Box>
      </Box>
      

      <Box sx={{ padding: "10px" }}>
        <Typography
          sx={{
            fontSize: { md: "39px", xs: "19.5px" },
            color: "#404144",
            fontFamily: "Filson Pro",
            textAlign: "center",
            fontWeight: 300,
            lineHeight: "48px",
            fontStyle: "normal",
          }}
          component="p"
        >
          Ignorar o
          <Typography
            sx={{
              color: "#325cd9",
              fontSize: { md: "39px", xs: "19.5px" },
              fontFamily: "Filson Pro",
              fontWeight: 400,
            }}
            component="span"
          >
            {" "}
            marketing digital
          </Typography>{" "}
          é como abrir um negócio e não contar para ninguém .
          <Typography
            sx={{
              color: "#325cd9",
              fontSize: { md: "39px", xs: "19.5px" },
              fontFamily: "Filson Pro",
              fontWeight: 400,
            }}
            component="span"
          >
            {" "}
            Se você ainda não está on-line,
          </Typography>{" "}
          rapidamente alguém vai passar na sua frente e{" "}
          <Typography
            sx={{
              color: "#325cd9",
              fontSize: { md: "39px", xs: "19.5px" },
              fontFamily: "Filson Pro",
              fontWeight: 400,
            }}
            component="span"
          >
            seu negócio vai se tornar obsoleto.
          </Typography>
        </Typography>
      </Box>
    </Section>
  );
}
