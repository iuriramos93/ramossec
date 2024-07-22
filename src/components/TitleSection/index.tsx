import { Typography } from "@mui/material";

type TitleSectionProps = {
  title: string;
  size: {
    lg?: number;
    md: number;
    xs: number;
  };
  position: string;

  left: { lg?: string; md: string; xs: string };

  top?: {
    lg?: number;
    md: string;
    xs: string;
  };
};

export default function TitleSection({
  title,
  size,
  position,
  left,
  top,
}: TitleSectionProps) {
  return (
    <>
      <Typography
        sx={{
          width: { md: "100%", xs: "100%" },
          transform: { md: "rotate(-90deg)", xs: "rotate(0deg)" },
          color: "#40414440",
          fontSize: {
            lg: `${size.lg}`,
            md: `${size.md}rem`,
            xs: `${size.xs}rem`,
          },
          fontFamily: "Filson Pro, Roboto",
          textTransform: "uppercase",
          fontWeight: 900,
          position: { md: position, xs: position },
          left: { md: left.md, xs: left.xs },
          top: { md: top?.md, xs: top?.xs },
        }}
        component={"h1"}
      >
        {title}
      </Typography>
    </>
  );
}
