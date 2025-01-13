// BlacklistedDevice.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const BlacklistedDevice = () => {
    return (
        <Container>
            <Typography variant="h4">Blacklisted Toll Devices</Typography>
            <Typography variant="body1">
                A blacklisted toll device can ruin your day! This happens if your balance is too low.
                Keep your balance topped up to avoid cash payments and keep rolling through toll gates effortlessly.
            </Typography>
        </Container>
    );
};

export default BlacklistedDevice;
