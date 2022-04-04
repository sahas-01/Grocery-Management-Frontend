import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SideNav from '../../../components/AppDrawer/SideNav';
import SlotsTable from '../../../components/SlotsTable/SlotsTable';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Slots() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SideNav availableshops="Slots" />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                    Slots for a given shop is put down here
                </Typography>
                <SlotsTable />    
            </main>
        </div>
    );
}
