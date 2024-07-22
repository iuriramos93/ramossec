import { Stack, Typography } from "@mui/material";
import style from "./styles.module.scss";

export default function AppLinks() {
  return (
    <>
      <Stack>
        <Typography
          component={"h1"}
          textAlign={{ md: "left", xs: "center" }}
          fontSize={{ md: "1.2rem", xs: "1.5rem" }}
          textTransform={"uppercase"}
        >
          Baixe nosso App
        </Typography>
        <ul className={style.AppLink}>
          <li>
            <a href="https://play.google.com/store/apps/details?id=com.uapp.desjudicar">
              <img src="/img/Play Store.png" width={150} alt="Play Store" />
            </a>
          </li>
        </ul>
      </Stack>
    </>
  );
}
