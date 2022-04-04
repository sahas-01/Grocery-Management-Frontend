import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SideNav from '../../../components/AppDrawer/SideNav';
import ShopCard from '../../../components/ShopCard/ShopCard';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './AvailableShops.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginLeft: '2.5%',

    },
}));

export default function MiniDrawer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SideNav availableshops="Available Shops" />
            <main className={classes.content}>
                <ShopCard />
                <ShopCard />
                <ShopCard />

            </main>

        </div>
    );
}
