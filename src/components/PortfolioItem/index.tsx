import { Link, Stack } from "@mui/material";
 import styles from './styles.module.scss'
type PortfolioItemProps =
{
    image: string
    client: string
    link: string


}

export default function PortfolioItem({image,client,link}:PortfolioItemProps){
return (
<>
<Stack className={styles.Client} sx={{width:'300px'}}>
<Link href={link} target={'_blank'}>
<img src={image} alt={client} />

</Link>

</Stack>
</>
);
}