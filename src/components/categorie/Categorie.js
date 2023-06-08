import { Container, Grid } from '@mui/material';
import React from 'react';
import { Phrase, Title } from '../../styles/categorie/Categorie';
import { Colors } from '../../styles/themes';
import { Link } from 'react-router-dom';

export default function Categorie() {
    return (
        <Container style={{ marginBottom: 50 }}>
            <Title> acheter par Catégorie</Title>
            <Phrase>Acheter des t-shirts est amusant et facile avec Teepro. Parcourez notre incroyable sélection de designs de t-shirts <br /> et trouvez celui qui correspond à votre personnalité ou créez votre propre design de t-shirt à partir de zéro.</Phrase>

            <Grid container spacing={0} justifyContent="space-evenly" alignItems="center" sx={{ paddingLeft: 1 }} columns={30}>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={1} direction="column" alignItems="flex-end">
                        <Grid item>
                        <Link to={`/ProductList`}>  <img src="assets/brac1.png" style={{ width: '80%', height: '90%', backgroundColor: Colors.blue, borderRadius: 5 }} /></Link>  
                        </Grid>
                        <Grid item>
                        <Link to={`/ProductList`}><img src="assets/MEN.png" style={{ width: '80%', height: '90%' }} /></Link>    
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={20} sm={10}>
                <Link to={`/ProductList`}><img src="assets/jaune.png" style={{ width: '100%', height: '100%' }} /></Link> 
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Grid container spacing={1} direction="column" alignItems="flex-end">
                        <Grid item>
                        <Link to={`/ProductList`}><img src="assets/pink.png" style={{ width: '80%', height: '90%' }} /></Link>      
                        </Grid>
                        <Grid item>
                        <Link to={`/ProductList`}>  <img src="assets/brac2.png" style={{ width: '80%', height: '90%', backgroundColor: Colors.gray1, borderRadius: 5 }} /></Link>   
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}