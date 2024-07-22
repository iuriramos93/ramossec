import { Box, Stack, Typography } from "@mui/material";

type ValueItemProps = {
  background: string;
  text: string;
  borderRadius?: string;
  index: number;
};

export default function ValueItem({
  background,
  text,
  borderRadius,
  index,
}: ValueItemProps) {
  if (index == 0) {
    borderRadius = "8px 0 0 0";
  } else if (index == 3) {
    borderRadius = "0 8px 0 0";
  } else if (index == 4) {
    borderRadius = "0 0 0 8px";
  } else if (index == 7) {
    borderRadius = "0 0 140px 0";
  }

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: `url(${background})`,
          width: { md: 250, xs: "100%" },
          height: { md: 365, xs: 365 },
          backgroundSize: "cover",
          borderRadius: { md: borderRadius, xs: 0 },
          filter:"grayscale(1)",
          ":hover": {filter:"grayscale(0)"}
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          sx={{ position: "relative" }}
        >
          <Typography
            component={"span"}
            sx={{
              fontFamily: "Filson Pro",
              fontSize: { md: 31, xs: 25 },
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#FCFCFC",
            }}
          >
            {text}
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
