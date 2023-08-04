import React, { useState } from "react"
import validate from "./validation"

export default function Form(props) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    function handleChange(event) {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
        setErrors(validate({ ...userData, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.login(userData)
        setUserData({
            email: '',
            password: ''
        })
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input name="email" type="email" value={userData.email} onChange={handleChange}/>
                    <p>{errors.email}</p>
                </div>
                <div>
                    <label>Password:</label>
                    <input name="password" type="password" value={userData.password} onChange={handleChange}/>
                    <p>{errors.password}</p>
                </div>
                <button type="submit">Log In</button>
            </form>
        </>
    )
}