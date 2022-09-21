import React from 'react'
import {useForm} from 'react-hook-form'
import style from './Form.module.css'

function Form() {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data =>{
        console.log(data);
    }
    
    return (
        <div className={style.formContainer}>
            <h1>Silahkan Isikan Form Berikut</h1>

            <form className={style.form}>
                <label className={style.label} for="firstName">First Name</label>
                <input className={style.firstName} type="text" name="firstName" {...register("firstName")}/>

                <select className={style.category} name="category" {...register("category")}>
                    <option value="">Select Category</option>
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                </select>

                <label className={style.label} for="description">Description</label>
                <textarea className={style.description} type="text" name="description" {...register("description")}/>

                <button className={style.submit} type="button" onClick={handleSubmit(onSubmit)}>Submit</button>
            </form>

        </div>
    )
}

export default Form
