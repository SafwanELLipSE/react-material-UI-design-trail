import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff !important',
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor: "#f2f2f2",
        },
        '& .MuiSvgIcon-root': {
            marginRight: "8px"
        }
    },
})

export default function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Grid container
                        alignItems="center"
                    >
                        <Grid item>
                            <InputBase
                                placeholder="Search Top"
                                className={classes.searchInput}
                                startAdornment={<SearchIcon fontSize="small"/>}
                            />
                        </Grid>
                        <Grid item sm/>
                        <Grid item>
                            <IconButton>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsNoneIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={4} color="primary">
                                    <ChatBubbleOutlineIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <PowerSettingsNewIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
