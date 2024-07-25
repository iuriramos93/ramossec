import { Stack, Typography } from "@mui/material";
import DividerH1 from "../../../components/DividerH1";
import { Section } from "../../../components/Section";
import TeamItem from "../../../components/TeamItem";

export default function Team() {
  const team = [
    // {
    //   image: "/img/Time/Carlos.png",
    //   pessoa: "Carlos",
    // },
    //        {
    //    image:'/img/Time/Danton.png',
    //    pessoa:'Danton'
    //        },

    {
      image: "img/Time/Iuri.jpeg",
      pessoa: "Iuri",
      cargo:"CEO | DEV | DPO",
      education: "Análise e Desenvolvimento de Sistemas, \n Pós Graduado em Segurança da Informação"
    },
  ];

  return (
    <Section name="Equipe" id="team">
      <Stack>
        <DividerH1 />
        <Typography
          sx={{
            fontFamily: "Filson Pro,Roboto",
            fontSize: { md: 39, xs: 25 },
            fontWeight: 600,
            lineHeight: { md: "30px", xs: "20px" },
            color: "#325CD9",
            paddingLeft: "1%",
            paddingTop: "1rem",
          }}
        >
          Equipe
        </Typography>
        <Stack
          flexDirection={{ md: "row", xs: "column" }}
          justifyContent={{ md: "space-around", xs: "center" }}
          gap={{ md: 0, xs: "1rem" }}
          alignItems={{ xs: "center" }}
        >
          {team.map((equipe) => (
            <TeamItem
              key={equipe.pessoa}
              image={equipe.image}
              pessoa={equipe.pessoa}
              cargo={equipe.cargo}
              education={equipe.education}
            />
          ))}
        </Stack>
      </Stack>
    </Section>
  );
}
