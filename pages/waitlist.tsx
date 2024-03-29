import React, { useState, useEffect } from 'react'
import RootLayout from '@/app/layout'
import WaitlistForm from '@/components/waitlist-form'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WaitlistCounter from '@/components/waitlist-counter';
import EstWaitTime from '@/components/wait-time'

const Reservations = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const min = 10;
    const max = 60;
    const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
    setTime(randomTime);
  }, []);

  return (
    <RootLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <h1>Current Estimated Wait Time</h1>
            <div className='flex gap-x-3 items-center'>
              <AccessTimeIcon />
              <h3><EstWaitTime /> minutes</h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h2>Jump in Line Now!</h2>
            <p>Get your name on the list and skip the line!</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h2>Guests Currently Waiting: <WaitlistCounter /> </h2>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <WaitlistForm />
          </Grid>
        </Grid>
      </Box>
    </RootLayout>
  );
}

export default Reservations;