import React, {useState} from 'react'
import {Grid, Container, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import Design from '../../../shared/styles/Design'
import apiBaseUrl from '../../../shared/utils/Api';
import {LockOutlined as LockOutlined} from '@material-ui/core'

export const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [shop, setShop] = useState("");
  const classes = Design()


  const register = async() => {
    const userData = {
      email: email,
      role: role,
      password: password,
      shop: shop,
    }

    console.log(userData)
        try {
            const response = await fetch(`${apiBaseUrl}/register`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const user = await response.json();
              console.log(user);
              window.location = '/users'
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
            <Typography component='h1' variant='h5'>Registrate con Nosotros</Typography>
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
                  autoFocus
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='role'
                  name='role'
                  onChange={e => setRole(e.target.value)}
                />
              <TextField
                  fullWidth
                  type='password'
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='Contraseña'
                  name='passwd'
                  onChange={e => setPassword(e.target.value)}
              />
              <TextField
                  fullWidth
                  autoFocus
                  color='primary'
                  margin='normal'
                  variant='outlined'
                  label='shop'
                  name='shop'
                  onChange={e => setShop(e.target.value)}
              />
              <Button
                fullWidth
                variant='contained'
                color='primary'
                onClick={register}
                >
                  A rockear!
              </Button>
            </form>
          </div>
        </Container>
    </Grid>
  )
}

export default RegisterPage;