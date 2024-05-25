import React, { useState } from 'react';
import { Container, TextField, Typography, Grid, Paper, Box, IconButton } from '@mui/material';

const App: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number | undefined>(undefined);
  const [chargeableArea, setChargeableArea] = useState<number | undefined>(undefined);
  const [expectedRent, setExpectedRent] = useState<number | undefined>(undefined);
  const [yearlyServiceCharges, setYearlyServiceCharges] = useState<number | undefined>(undefined);

  const totalServiceCharges = (chargeableArea && yearlyServiceCharges) ? chargeableArea * yearlyServiceCharges : 0;
  const monthlyManagement = (expectedRent) ? 0.2 * expectedRent : 0;
  const netYearlyYield = (expectedRent && totalServiceCharges && monthlyManagement) ? 
    (expectedRent * 12) - (monthlyManagement * 12) - totalServiceCharges : 0;

    const percentageYield = propertyPrice ? (netYearlyYield / propertyPrice) * 100 : 0;

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={4} style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Property Calculator
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Property Price"
              variant="outlined"
              type="number"
              value={propertyPrice || ''}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              InputProps={{
                startAdornment: (
                  <IconButton edge="start">
                  </IconButton>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Chargeable Area"
              variant="outlined"
              type="number"
              value={chargeableArea || ''}
              onChange={(e) => setChargeableArea(Number(e.target.value))}
              InputProps={{
                startAdornment: (
                  <IconButton edge="start">
                  </IconButton>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Expected Rent"
              variant="outlined"
              type="number"
              value={expectedRent || ''}
              onChange={(e) => setExpectedRent(Number(e.target.value))}
              InputProps={{
                startAdornment: (
                  <IconButton edge="start">
                  </IconButton>
                )
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Yearly Service Charges (AED/sqft)"
              variant="outlined"
              type="number"
              value={yearlyServiceCharges || ''}
              onChange={(e) => setYearlyServiceCharges(Number(e.target.value))}
              InputProps={{
                startAdornment: (
                  <IconButton edge="start">
                  </IconButton>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center" style={{ marginTop: '1rem' }}>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" style={{ marginTop: '1rem' }}>
              <Typography variant="h6" color="textSecondary">
                Total Service Charges: <span style={{ color: '#3f51b5' }}>{totalServiceCharges.toFixed(2)} AED</span>
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Monthly Management: <span style={{ color: '#3f51b5' }}>{monthlyManagement.toFixed(2)} AED</span>
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Net Yearly Yield: <span style={{ color: '#3f51b5' }}>{netYearlyYield.toFixed(2)} AED</span>
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Percentage ROI: <span style={{ color: '#3f51b5' }}>{percentageYield.toFixed(2)}%</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default App;
