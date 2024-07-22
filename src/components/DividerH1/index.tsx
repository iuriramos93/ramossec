import { Typography } from "@mui/material";

export default function DividerH1() {
  return (
    <>
      <Typography
        sx={{
          width: { md: "14%", xs: "30%" },
          position: "relative",
          left: { md: "1%", xs: "1%" },
          // borderTop: "6px solid #05C7F2",
          height: "6px !important",
          border: "0",
          background: "#05C7F2 !important",
          marginBottom: { md: 1.5, xs: 1.5 },
        }}
        component={"hr"}
      />

      {/* <hr style={style}/> */}
    </>
  );
}
