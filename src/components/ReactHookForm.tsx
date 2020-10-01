import React from "react";
import {useForm} from "react-hook-form";

type Profile = {
    firstname: string
    lastname: string
    age: number
}

function ReactHookForm() {

    const {register, errors, handleSubmit} = useForm();
    const onSubmit = handleSubmit((data: Profile) => {
        console.log(JSON.stringify(data));
    });

    return <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="firstname">First Name</label>
            <input id={'firstname'} name="firstname" ref={register}/> {/* register an input */}
        </div>

        <div>
            <label htmlFor="lastname">Second Name</label>
            <input id='lastname' name="lastname" ref={register({required: true})}/>
            {errors.lastname && 'Last name is required.'}
        </div>

        <div>
            <label htmlFor="age">Age</label>
            <input id='age' name="age" ref={register({required: true, pattern: /\d+/})}/>
            {errors.age && 'Please enter number for age.'}

        </div>

        <input type="submit"/>
    </form>
}


export default ReactHookForm;
