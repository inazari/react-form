import React from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Form} from '../Form'
import {Input} from '../Input'
import {PrimaryButton} from "../PrimaryButton";
import {MainContainer} from "../../containers/MainConatiner";
import {yupResolver} from "@hookform/resolvers";
import Typography from "@material-ui/core/Typography";
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain number")
        .required('First name is a required field'),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain number")
        .required('Last name is a required field'),

})


function Step1(){
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });
    const history = useHistory();

    const onSubmit = handleSubmit(() => {
        history.push('/step2')
    });

    return (<MainContainer>
                <Typography component='h2'>
                    The Ultimate Form Challenge
                </Typography>
                <h2>step 1</h2>
                <Typography component='h2' variant='h5'>
                    The Ultimate Form Challenge
                </Typography>
                <Form onSubmit={onSubmit}>
                    <Input type="text" name='firstName' label='First Name' ref={register} errors={!!errors.firstName} helperText={errors?.firstName?.message}/>
                    <Input type="text" name='lastName' label='Last Name' ref={register} errors={!!errors.lastName} helperText={errors?.lastName?.message}/>
                    <PrimaryButton>Next</PrimaryButton>
                </Form>
            </MainContainer>)
}
export default Step1;
