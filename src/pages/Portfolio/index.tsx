import { ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import DividerH1 from "../../components/DividerH1";
import PortfolioItem from "../../components/PortfolioItem";
import { Section } from "../../components/Section";

const jobs = [
  {
    image: "/img/portfolio/ocravoearosa.png",
    client: "OCravoeaRosa",
    link: "https://www.lojaocravoearosa.com.br/",
  },
];

export default function Portfolio() {
  return (
    <Section id="portfolio" name="Portfolio">
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
          Nosso Portfólio
        </Typography>
        <ImageList variant="masonry" cols={3}>
          {jobs.map((job) => (
            <ImageListItem key={job.client}>
              <PortfolioItem
                client={job.client}
                image={job.image}
                link={job.link}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Section>
  );
}
