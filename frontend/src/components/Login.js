import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        console.log("Form data updated:", formData);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/login', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Login successful:", response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.user.name);
            const token = localStorage.getItem('token');
            console.log("tocken stored:", token);
            console.log("User logged in:", response.data.user.name);
            window.location.href = '/';
        } catch (error) {
            console.error("Error during login:", error);
        }
        console.log("Login form submitted with data:", formData);
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    );
};
export default Login;