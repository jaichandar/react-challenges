import { useState } from 'react';
import './form.css';

interface formData {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

const FormValidation = () => {

    const [form, setForm] = useState<Partial<formData>>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<Partial<formData>>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onSubmit = (e: any) => {
        e.preventDefault();
        let errors: any = {};
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (('firstName' in form) && form.firstName === '') {
            errors['firstName'] = 'First Name is Required.';
        }

        if (('lastName' in form) && form.lastName === '') {
            errors['lastName'] = 'Last Name is Required.';
        }

        if (('email' in form) && form.email === '') {
            errors['email'] = 'Email is Required.';
        } else if (!emailRegex.test(String(form.email))) {
            errors['email'] = 'Invalid Email Format';
        }

        if (('password' in form) && form.password === '') {
            errors['password'] = 'Password is Required.';
        }

        if (('confirmPassword' in form) && form.confirmPassword === '') {
            errors['confirmPassword'] = 'Mismatch in Confirm Password';
        } else if (form.confirmPassword !== form.password) {
            errors['confirmPassword'] = 'Mismatch in Confirm Password';
        }   

        if (!Object.keys(errors).length) {
            console.log('no error found');
        } else {
            setErrors(errors);
        }
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const { value } = e.target;
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }))
        setErrors((prev) => ({
            ...prev,
            [key]: '',
        }))
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <input 
                    placeholder='First Name'
                    className='input'
                    type='text'
                    value={form?.firstName}
                    onChange={(e) => handleOnChange(e, 'firstName')}
                />
                {errors.firstName ? <p className='error'>{errors.firstName}</p> : null}
                <input 
                    placeholder='Last Name'
                    className='input'
                    type='text'
                    value={form.lastName}
                    onChange={(e) => handleOnChange(e, 'lastName')}
                />
                {errors.lastName ? <p className='error'>{errors.lastName}</p> : null}
                <input 
                    placeholder='Email Address'
                    className='input'
                    type='email'
                    value={form.email}
                    onChange={(e) => handleOnChange(e, 'email')}
                />
                {errors.email ? <p className='error'>{errors.email}</p> : null}
                <input 
                    placeholder='Password'
                    className='input'
                    value={form.password}
                    onChange={(e) => handleOnChange(e, 'password')}
                />
                {errors.password ? <p className='error'>{errors.password}</p> : null}
                <input 
                    placeholder='Confirm Password'
                    className='input'
                    value={form.confirmPassword}
                    onChange={(e) => handleOnChange(e, 'confirmPassword')}
                />
                {errors.confirmPassword ? <p className='error'>{errors.confirmPassword}</p> : null}
                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default FormValidation;