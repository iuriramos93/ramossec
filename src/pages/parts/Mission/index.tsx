import { Box, Stack, Typography } from "@mui/material";
import TitleSection from "../../../components/TitleSection";
import { Section } from "../../../components/Section";
import DividerH1 from "../../../components/DividerH1";

export default function Move_Us() {
  return (
    <Section id="move_us" name="Isso Nos Move">
      <Stack flexDirection={{ md: "row", xs: "column" }}>
        <Box sx={{width:'-webkit-fill-available'}}>
          <TitleSection
            title="Isso nos move"
            position="relative"
            left={{ md: "31%", xs: "0" }}
            size={{ md: 4, xs: 3 }}
            top={{ md:'10%',xs: "0" }}
           
          />
        </Box>
        <Stack padding={'80px 97px'} bgcolor={'#0F3684'} borderRadius={'100px 0 0 100px'} justifyContent={'flex-start'} sx={{width:'-webkit-fill-available'}} gap={'1rem'}>
            <DividerH1/>
          <Typography component={"h2"} sx={{fontSize:{md:39,xs:18},fontWeight:700,fontFamily:'Filson Pro',color:'#FFF'}} >Nossa Missão</Typography>
          <Typography component={"p"} sx={{fontSize:{md:25,xs:16},fontWeight:350,fontFamily:'Filson Pro,Roboto',color:'#FFF'}}>
            Na RamosSec nossa missão é criar e gerar resultado para nossos clientes e parceiros.
          </Typography>
        </Stack>
        <Stack padding={'3rem'} bgcolor={'#0F3684'}  justifyContent={'flex-end'} sx={{width:'-webkit-fill-available'}} gap={'1rem'} borderRadius={'0 100px 100px 0'}>
            {/* <div style={{height:'150px'}}></div> */}
            <DividerH1/>
            <Typography component={'h2'} sx={{fontSize:{md:39,xs:18},fontWeight:700,fontFamily:'Filson Pro',color:'#FFF'}}>Nossa Visão</Typography>
            <Typography component={'p'} sx={{fontSize:{md:25,xs:16},fontWeight:350,fontFamily:'Filson Pro,Roboto',color:'#FFF'}}>Até 2027 ter gerado resultado para 0,01% do mercado nacional.</Typography>
        </Stack>
      </Stack>
    </Section>
  );
}
