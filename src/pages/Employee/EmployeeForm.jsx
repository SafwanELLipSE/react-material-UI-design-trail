import { Grid, TextField } from '@mui/material';
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@mui/styles';

    const initialValues = {
        id: 0,
        fullName: '',
        email: '',
        mobile: '',
        city: '',
        gender: 'Male',
        departmentId: '',
        hireDate: new Date(),
        isPermanent: false,
    }

    const useStyles = makeStyles(theme => ({
        root:{
            '& .MuiFormControl-root':{
                width: '80%',
                margin: theme.spacing(1),
            }
        }
    }))


export default function EmployeeForm() {
    const classes = useStyles();
    const [values, setValues] = useState(initialValues);

    useEffect(() => {

        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                    />
                    <TextField
                        variant="outlined"
                        label="Email"
                        value={values.email}
                    />
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </form>
    )
}
