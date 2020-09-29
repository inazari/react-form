import React from "react";
import {useForm} from "react-hook-form";

function ReactHookForm () {

    const {register, errors, handleSubmit} = useForm();
    const onSubmit = handleSubmit((data)=>{
        console.log(JSON.stringify(data));
    });

    return  <form onSubmit={onSubmit}>
                <input name="firstname" ref={register} /> {/* register an input */}
                <input name="lastname" ref={register({ required: true })} />
                {errors.lastname && 'Last name is required.'}
                <input name="age" ref={register({ pattern: /\d+/ })} />
                {errors.age && 'Please enter number for age.'}
                <input type="submit" />
            </form>
}


export default ReactHookForm;
