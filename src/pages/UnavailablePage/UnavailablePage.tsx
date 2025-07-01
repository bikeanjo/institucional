import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import Bike from '../../assets/images/UnavailablePage/pedal_bike.svg';

const UnavailablePage: React.FC = () => {
    return (
        <Container maxWidth="sm" sx={{py: {xs: 8, sm:"240px"}}}>
            <Box sx={{display:"flex", flexDirection:"column", width: {xs: "100%", md:"630px"}, gap: "32px", mx: "auto"}}> 
                <Box sx={{display:"flex", alignItems:"center", gap: "24px"}}>
                    <Box sx={{width:"46px", heigth:"46px"}}> 
                        <img src={Bike} alt="ícone de bicicleta"  width={"46px"} />
                    </Box>
                    <Typography color="title.main" fontWeight="700" fontSize={{xs:"40px", sm:"64px"}}> 
                        Enchendo o Pneu...
                    </Typography>
                </Box>
                <Typography fontSize={{xs:"20px", sm:"24px"}} lineHeight="28px" letterSpacing="0px" color="neutral-800">
                    A página que você procurou está fora do ar no momento. Estamos calibrando tudo para que você tenha a melhor experiência possível.
                </Typography>
                <Typography color="neutral-800"fontSize="16px" >
                    Enquanto isso, que tal voltar para a {""}
                    <Link href="/" color="title.main">
                        página incial?
                    </Link>
                </Typography>
            </Box>
        </Container>
    )
}
export default UnavailablePage;