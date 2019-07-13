import React from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';

import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';

import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InfoBox from '../../components/web/dashboard/InfoBox';
import NewOrders from '../../components/web/dashboard/NewOrders';
import MonthlySales from '../../components/web/dashboard/MonthlySales';
import BrowserUsage from '../../components/web/dashboard/BrowserUsage';
import RecentlyProducts from '../../components/web/dashboard/RecentlyProducts';
import Data from '../../../assets/data';


import APITransport from '../../../flux/actions/apitransport/apitransport';


class Dashboard extends React.Component {
    render() {
        return (
          <div>
            <Grid container spacing={24} style={{ padding: 24 }}>
              <Grid item xs={9} sm={6} lg={3} xl={3}>
                <InfoBox
                  Icon={StarIcon}
                  color={pink600}
                  title="Total Profit"
                  value="1500k"
                />
              </Grid>

              <Grid item xs={9} sm={6} lg={3} xl={3}>
                <InfoBox
                  Icon={SendIcon}
                  color={cyan600}
                  title="Likes"
                  value="4231"
                />
              </Grid>

              <Grid item xs={9} sm={6} lg={3} xl={3}>
                <InfoBox
                  Icon={MailIcon}
                  color={purple600}
                  title="Sales"
                  value="460"
                />
              </Grid>

              <Grid item xs={9} sm={6} lg={3} xl={3}>
                <InfoBox
                  Icon={DeleteIcon}
                  color={orange600}
                  title="New Members"
                  value="248"
                />
              </Grid>
            </Grid>
            <Grid container spacing={24} style={{ padding: 24 }}>
              <Grid item xs={9} sm={6} lg={6} xl={6}>
                <NewOrders data={Data.dashBoardPage.newOrders} />
              </Grid>

              <Grid item xs={9} sm={6} lg={6} xl={6}>
                <MonthlySales data={Data.dashBoardPage.monthlySales} />
              </Grid>
            </Grid>

            <Grid container spacing={24} style={{ padding: 24 }}>

              <Grid item xs={9} sm={6} lg={6} xl={6}>
                <RecentlyProducts data={Data.dashBoardPage.recentProducts} />
              </Grid>

              <Grid item xs={9} sm={6} lg={6} xl={6}>
                <BrowserUsage data={Data.dashBoardPage.browserUsage} />
              </Grid>
            </Grid>
          </div>
        );
    }
}

const mapStateToProps = state => ({
        user: state.login,
        apistatus: state.apistatus
    });

const mapDispatchToProps = dispatch => bindActionCreators({
        APITransport
    }, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
