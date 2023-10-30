import React, { useState } from 'react';
import axios from 'axios';

export const Signup = () => {
    const [user, setUser] = useState({
        name: '',
        emailAddress: '',
        mobileNumber: '',
        password: '',
        state: '',
        city: '',
        course: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const [formError, setFormError] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!user.name) errors.name = 'Name is required';
        if (!user.emailAddress) errors.emailAddress = 'Email Address is required';
        if (!user.mobileNumber) {
            errors.mobileNumber = 'Mobile Number is required';
        } else if (!/^\d{10}$/.test(user.mobileNumber)) {
            errors.mobileNumber = 'Invalid mobile number format';
        }
        if (!user.password) errors.password = 'Password is required';
        if (!user.state) errors.state = 'State is required';
        if (!user.city) errors.city = 'City is required';
        if (!user.course) errors.course = 'Course is required';
        setFormError(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      

            axios.post('http://localhost:1077/signup', {user})
                .then((res) => {
                    // Handle success, show a success message or redirect
                    console.log(res);
                    // Example: Redirect to another page
                    // window.location.href = '/success';
                })
                .catch((err) => {
                    // Handle errors, show an error message
                    console.error(err);
                });
        
    };

    return (
        <div>
            <div className="Reg_Container">
                <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                    {/* User name */}
                    <div className="reg_contant">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="reg_input"
                            onChange={handleInputChange}
                        />
                        <span>{formError.name}</span>
                    </div>

                    {/* User email Address */}
                    <div className="reg_contant">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="emailAddress"
                            className="reg_input"
                            onChange={handleInputChange}
                        />
                        <span>{formError.emailAddress}</span>
                    </div>

                    {/* User mobile Number */}
                    <div className="reg_contant">
                        <input
                            type="text"
                            placeholder="Enter your Mobile Number"
                            name="mobileNumber"
                            className="reg_input"
                            onChange={handleInputChange}
                        />
                        <span>{formError.mobileNumber}</span>
                    </div>

                    {/* User password */}
                    <div className="reg_contant">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="reg_input"
                            onChange={handleInputChange}
                        />
                        <span>{formError.password}</span>
                    </div>

                    {/* User state */}
                    <div className="reg_contant">
                        <select name="state" className="reg_input" onChange={handleInputChange}>
                            <option value="">Select State</option>
                            <option value="State 1">State 1</option>
                            <option value="State 2">State 2</option>
                        </select>
                        <span>{formError.state}</span>
                    </div>

                    {/* User city */}
                    <div className="reg_contant">
                        <select name="city" className="reg_input" onChange={handleInputChange}>
                            <option value="">Select City</option>
                            <option value="City 1">City 1</option>
                            <option value="City 2">City 2</option>
                        </select>
                        <span>{formError.city}</span>
                    </div>

                    {/* User course */}
                    <div className="reg_contant">
                        <select name="course" className="reg_input" onChange={handleInputChange}>
                            <option value="">Select Course</option>
                            <option value="Course 1">Course 1</option>
                            <option value="Course 2">Course 2</option>
                        </select>
                        <span>{formError.course}</span>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};
