import { Grid, Stack } from "@mui/material";
import { Section } from "../../../components/Section";
import ValueItem from "../../../components/ValueItem";
import TitleSection from "../../../components/TitleSection";
// import DividerH1 from "../../../components/DividerH1";


const valores = [
  { background: "/img/valores/Inovacao.png", text: "Inovação" },
  { background: "/img/valores/Uniao.png", text: "União" },
  { background: "/img/valores/Resultado.png", text: "Resultado" },
  { background: "/img/valores/Phoda.png", text: "Phodaa!" },
  { background: "/img/valores/Criatividade.png", text: "Criatividade" },
  { background: "/img/valores/Arte.png", text: "Arte" },
  { background: "/img/valores/Respeito.png", text: "Respeito" },
  { background: "/img/valores/Proatividade.png", text: "Proatividade" },
];

export default function Valores() {
  return (
    <Section name="Valores" id="values">
      {/* <Stack>
        <DividerH1 />
        <Typography
          sx={{
            fontFamily: "Filson Pro",
            fontSize: { md: 31, xs: 23 },
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#325CD9",
            paddingLeft: 1,
          }}
        >
          {" "}
          Valores
        </Typography>
      </Stack> */}
      {/* <Stack flexDirection={{ md: "row", xs: "column" }}> */}
      <Grid
        container={true}
        display={"flex"}
        flexWrap={"wrap"}
        spacing={0}
        gap={{ md: 0, xs: 1 }}
        direction={{ md: "row", xs: "column" }}
        padding={{ md: "0 5px", xs: "0 5px" }}
        maxWidth={{ xs: "100%", sm: "50%", md: "85%" }}
        order={{ md: 0, xs: 1 }}
      >
        {valores.map((valor, index) => (
          <div key={index}>
            <ValueItem
              key={index}
              index={index}
              background={valor.background}
              text={valor.text}
            />
          </div>
        ))}
      </Grid>
      <Stack order={{ md: 1, xs: 0 }}>
        <TitleSection
          title="Valores"
          size={{ md: 8, xs: 4 }}
          left={{ md: "35%", xs: "0" }}
          position={"relative"}
          top={{ md: "-54rem", xs: "0" }}
        />
      </Stack>
      {/* </Stack> */}
    </Section>
  );
}
