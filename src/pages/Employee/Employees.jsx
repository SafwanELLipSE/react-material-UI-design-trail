import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export default function Employee() {
    return (
        <>
            <PageHeader 
                title="New Employee" 
                subTitle="Form Design with Validation"
                icon={<PeopleOutlineIcon fontSize="large"/>}
            />
            <EmployeeForm/>
        </>
    )
}
