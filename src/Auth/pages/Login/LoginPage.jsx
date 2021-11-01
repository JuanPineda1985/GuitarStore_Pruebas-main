import React, {useState, Fragment} from 'react'
import {Grid, Container, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import apiBaseUrl from '../../../shared/utils/Api';
import Design from '../../../shared/styles/Design'


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const classes = Design()
    const login = async () => {
        const userData = {
            email: email,
            password: password
        }
        console.log(userData)
        try {
            const response = await fetch(`${apiBaseUrl}/login`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const user = await response.json();
            if(user){
              console.log(user);
              window.location = '/users';
            }
            

        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <Grid container component='main' className={classes.root}>
        <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container} >
          <div className={classes.div}>
            <Avatar className={classes.avatar} />
            <Typography component='h1' variant='h5'>¿Quien eres?</Typography>
            <form className={classes.form}>
            
              <TextField
                  fullWidth
                  autoFocus
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='email'
                  name='email'
                  onChange={e => setEmail(e.target.value)}
                />
              <TextField
                  fullWidth
                  type='password'
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='Contraseña'
                  name='password'
                  onChange={e => setPassword(e.target.value)}
              />
              <Button
                fullWidth
                variant='contained'
                color='primary'
                onClick={login}
                >
                  A rockear!
              </Button>
            </form>
          </div>
        </Container>
    </Grid>
    )
}

export default LoginPage;