
import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Chart from '../components/Chart';
import OrderBook from '../components/OrderBook';
import Trades from '../components/Trades';

const Webapp = () => {
  return (
    <Grid container direction="column" style={{ height: '100vh' }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Chart />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={2}>
          <OrderBook />
        </Grid>
        <Grid item xs={10}>
          <Trades />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Webapp;
