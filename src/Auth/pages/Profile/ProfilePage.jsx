import React, { useEffect, useState } from 'react';
import apiBaseUrl from '../../../shared/utils/Api';
import Design from '../../../shared/styles/Design';
import {
    Container,
    Grid,
    Typography,
    Button,
    Paper,
    Avatar
} from '@material-ui/core';

const classes = Design()

const ProfilePage = () => {
    return (
        <Grid container component='main' className={classes.root}>
        <Container component={Paper} className={classes.container} >
          <div className={classes.div}>
            <Avatar className={classes.avatar} />
            <Typography component='h1' variant='h5'>Bienvenido de Nuevo!</Typography>
            <form className={classes.form}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                // onClick={login}
                >
                Mi carrito de Compras
              </Button>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                //onClick={login}
                >
                Mi Historial de Compras
                </Button>
            </form>
          </div>
        </Container>
    </Grid>
    )
}

export default ProfilePage;
