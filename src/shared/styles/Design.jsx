import React from 'react'
import {Grid, Container, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from '../assets/img/fondo.png'
import {LockOutlined as LockOutlined} from '@material-ui/core'


const Design = makeStyles(theme => ({
    root:{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    root2:{
      backgroundImage: `url(${fondo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
  },
    container:{
      opacity: '0.9',
      height: '80%',
      marginTop: theme.spacing(1),
      [theme.breakpoints.down(400 + theme.spacing(2) + 2)]:{
        marginTop: 0,
        width: '100%',
        height: '100%'
      }
    },
    div:{
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar:{
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    },
    form:{
      width: '100%',
      marginTop: theme.spacing(1)
    },
    button:{
      marginTop: theme.spacing(10) 
    },
    cardsStyle:{
      opacity: '0.9',
      height: '80%',
      marginTop: 0,
      width: '100%',
      height: '100%'
    }
}))

export default Design
