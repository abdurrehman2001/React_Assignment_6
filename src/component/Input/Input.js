import './css/Style.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { BasicButtons } from '../index'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'CornflowerBlue',
        },
        '&:hover fieldset': {
            borderColor: 'Orchid',
        },
    },
});

export default function CustomizedInputs({ title }) {
    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [password, setPassword] = useState()
    function register() {
        console.log(fname, lname, password)
    }
    return (
        <Container>
            <Grid container justifyContent="center">
                <Grid item xs={12} lg={10} md={12}>

                    <div className="login-page">
                        <h1>{title}</h1>
                        <div>
                            <CssTextField style={{ width: "70%", marginBottom: 30 }} onChange={(e) => setFname(e.target.value)} value={fname} type="text" label="Enter Your First Name" id="" />
                        </div>
                        <div>
                            <CssTextField style={{ width: "70%", marginBottom: 30 }} onChange={(e) => setLname(e.target.value)} value={lname} type="text" label="Enter Your Last Name" id="" />
                        </div>
                        <div>
                            <CssTextField style={{ width: "70%", marginBottom: 30 }} onChange={(e) => setPassword(e.target.value)} value={password} type="password" label="Enter Your Password" id="" />
                        </div>
                        <div>
                            <Link to="/signup">AlReady Have An Account...!!</Link>
                        </div>
                        <div>
                            <BasicButtons register={register} title="Login" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}