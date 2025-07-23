import React, { useEffect, useState } from "react";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("Input changed:", name, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        console.log("Form data updated:", formData);
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMessage(response.data.message);
            window.location.href = '/login';
        } catch (error) {
            console.error("Error during registration:", error);
            setMessage('Registration failed');
        }
        console.log("Form submitted with data:", formData);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <p>Please fill in your details to register.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div >
    );
};

export default Register;