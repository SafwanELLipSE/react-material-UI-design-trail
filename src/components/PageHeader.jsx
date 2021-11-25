import { Card, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#f2f2f2 !important", 
        transform: 'translateZ(0)',
        boxShadow: 'none !important',
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2),
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: "#3c44b1 !important",
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& MuiTypography-subtitle2':{
            opacity: '0.6',
        }
    },
    shape:{
        borderRadius: '12px',
    }
}))

export default function PageHeader(props) {
    const classes = useStyles();
    const {title, subTitle, icon} = props
    return (
        <Paper elevation={3} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography variant="h6" component="div">{title}</Typography>
                    <Typography variant="subtitle2" component="div">{subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}
