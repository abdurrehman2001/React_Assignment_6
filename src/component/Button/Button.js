import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ title, register }) {
    return (
        <Stack spacing={2} direction="row" justifyContent="center" >
            <Button onClick={register} style={{ color: "MediumOrchid", fontSize: "25px", fontFamily: 'cursive', fontStyle: "italic", textTransform: "capitalize" }} variant="text">{title}</Button>
        </Stack>
    );
}