import React, { useEffect, useState } from 'react';
import apiBaseUrl from '../../../shared/utils/Api';
import Design from '../../../shared/styles/Design';
import {
    Card,
    CardActions,
    CardContent,
    TextField,
    Container,
    Grid,
    Typography,
    Button
} from '@material-ui/core';


const HistorialPage = () => {
    const [users, setUsers] = useState([])
    const classes = Design()

    const generateItems = (data) => {
        return data.map((item) => {
            return <Grid item xs={6} className={classes.cardStyle}>
                <Card>
                    <CardContent>
                        <Typography>
                            {item.email}
                        </Typography>
                        <Typography>
                            {item.role}
                        </Typography>
                        <Typography>
                            {item.shop}
                        </Typography>
                        <Typography>
                            {item.quantity}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary">
                            Eliminar
                        </Button>
                        <Button variant="contained" color="primary">
                            Modificar
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        })
    }
    const getUsers = async () => {
        const response = await fetch(`${apiBaseUrl}/get-users`);
        const responseJson = await response.json();
        setUsers(generateItems(responseJson.data));
        console.log(responseJson);
    }
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <Container maxWidth="sm">
            <Grid container>
                {users}
            </Grid>
        </Container>
    )
}

export default HistorialPage
