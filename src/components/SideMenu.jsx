import React from 'react';
import { makeStyles, withStyles } from '@mui/styles';

const style = {
    sideMenu:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '0',
        height: '100%',
        width: '320px',
        backgroundColor: '#253053'
    }
}

const SideMenu = (props) => {
    const {classes} = props;
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default withStyles(style)(SideMenu);