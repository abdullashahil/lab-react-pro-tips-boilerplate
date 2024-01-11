import React, { useState } from 'react'

function Forms() {

    const [formValue, setFormValue] = useState({
        firstname: '',
        lastname: '',
        contactno: '',
        email: '',
    });

    const [errors, setErrors] = useState({ a: '' })
    const [submission, setSubmission] = useState(false)

    function handleForm(e) {
        const [name, value] = [e.target.name, e.target.value]
        setFormValue({ ...formValue, [name]: value });
    }


    function validate(e) {
        if (e.type === 'submit' || (e.type === 'keydown' && e.code === 'Enter')) {

            e.preventDefault();
            let error = {};

            if (formValue.firstname.length == 0) {
                error.firstname = 'Please enter your Firstname'
            }
            if (formValue.lastname.length == 0) {
                error.lastname = 'Please enter your Lastname'
            }
            if (formValue.contactno.length == 0) {
                error.contactno = 'Please enter your Number'
            }
            if (formValue.contactno.length < 10) {
                error.contactno = 'Invalid Number'
            }
            if (formValue.email.length == 0) {
                error.email = 'Please enter your Email address'
            }
            setErrors(error)
            setSubmission(true)

        }}
        return (
            <div className='main2'>
                {submission && Object.keys(errors).length == 0 && <h1 className="submission">Registration Successful</h1>}
                <form className='form' onSubmit={validate}>

                    <h2 className="head">Registration Form</h2>
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" placeholder='Enter your Firstname' name='firstname' id='firstname' value={formValue.firstname} onChange={handleForm} />
                    {errors.firstname && <span className="error">{errors.firstname}</span>}

                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" placeholder='Enter your Lastname' name='lastname' id='lastname' value={formValue.lastname} onChange={handleForm} />
                    {errors.lastname && <span className="error">{errors.lastname}</span>}

                    <label htmlFor="contact">Contact no.</label>
                    <input type="text" placeholder='Enter your Contact number' name='contactno' id='contact' value={formValue.contactno} onChange={handleForm} />
                    {errors.contactno && <span className="error">{errors.contactno}</span>}

                    <label htmlFor="email">Email address</label>
                    <input type="text" placeholder='Enter your Email' name='email' id='email' value={formValue.email} onChange={handleForm} />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <button className='sub-btn' type='submit' >Submit</button>
                </form>
            </div>

        )
    }

    export default Forms