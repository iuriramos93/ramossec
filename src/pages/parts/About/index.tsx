import DividerH1 from "../../../components/DividerH1";
import { Section } from "../../../components/Section";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { BorderTop } from "@mui/icons-material";
import TitleSection from "../../../components/TitleSection";

const about_us = [
  {
    title: "Nosso DNA",
    text: `Não é a apenas o resultado financeiro que geramos para os nossos clientes, é o que ele vai fazer com o resultado que nós proporcionamos para ele, é como a vida dele vai mudar após o resultado.`,
  },
  {
    title: "O que fazemos",
    text: `Criamos websites, aplicativos, sistemas, posts e campanhas, que unidos a profissionais qualificados, arte e desafios, conseguimos entregar excelentes resultados, mas não só os financeiros, nós contribuímos com uma mudança impactante na vida dos nossos clientes, nós ajudamos eles a realizarem sonhos através dos nossos resultados. Eliminamos a agência tradicional e vivemos de propósito em propósito.`,
  },
];

export default function Sobre(): any {
  return (
    <Section name="Sobre" id="about">
      <Stack
        spacing={2}
        flexDirection={{ md: "row", xs: "column" }}
        justifyContent={"space-between"}
      >
        <Stack spacing={5} sx={{ width: { md: "calc(100%/3)", xs: "100%" } }}>
          {/* <DividerH1/> */}
          {about_us.map((dna) => (
            <Box flexDirection={"column"} key={dna.title}>
              <DividerH1 />
              <Typography
                sx={{
                  width: "100%",
                  fontSize: "2.4375rem",
                  fontFamily: "Filson Pro",
                  fontWeight: 700,
                  color: "#325CD9",
                }}
                component={"h3"}
              >
                {dna.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 350,
                  fontFamily: "Filson Pro",
                  color: "#404144",
                  lineHeight: "30px",
                }}
                component={"p"}
              >
                {dna.text}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box sx={{ width: { md: "calc(100%/3)", xs: "100%" } }}>
          <TitleSection
            title="Sobre"
            size={{ md: 10, xs: 5 }}
            position={"relative"}
            left={{ md: "10rem", xs: "0" }}
            top={{ md: "25%", xs: "0" }}
          />
        </Box>
        <Box sx={{ width: { md: "calc(100%/3)", xs: "100%" } }}>
          <img src="/img/Sobre.png" alt="" width={"100%"} loading={"lazy"} />
        </Box>
      </Stack>
    </Section>
  );
}
