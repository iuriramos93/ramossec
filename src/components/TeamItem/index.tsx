import { Box, Stack } from "@mui/material"

type TeamItemProps =
{
    image: string
    pessoa:string
    cargo:string
    education?: string


}

export default function TeamItem({image,pessoa,cargo,education}:TeamItemProps){
        
    return(
        <>
<Stack >
    <Box sx={{padding:{md:'2rem',xs:'1rem'},display:"flex",flexDirection:"column",background:"#004aad",borderRadius:"10px",maxWidth:220}}>

        <img src={image}  style={{borderRadius:"100%",border:"solid 2px #004aad",maxWidth:200}} />
        <h4 style={{color:"white",fontFamily:"Filson Pro",fontWeight:700}}>{pessoa}</h4>
        <h5 style={{color:"white",fontFamily:"Filson Pro",fontWeight:600}}>{education}</h5>
        <span style={{color:"white"}}>{cargo}</span>

    </Box>

</Stack>

        </>
        )
}