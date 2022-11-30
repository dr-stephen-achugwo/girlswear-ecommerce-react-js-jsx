import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../components/responsive";
import NavbarTop from '../components/NavbarTop';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import {
    StyledContactUsContainer,
    StyledMessageOnSubmit,
    StyledSubmitButton,
} from "../components/ContactUs.styled";


const NavSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0px;
    ${mobile({ display: "flex", flexDirection: "column", flexWrap: "wrap" })}
`;

const ContactUs = () => {
    const [message, setMessage] = useState("");
    const [dataValid, setDataValid] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setMessage("");
        setDataValid(false);

        try {
            let response = await fetch("http://localhost:5001/contact-us/", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (response.statusText !== "OK") {
                setMessage(
                    `Failed to send message. ${data.errors[0].msg} in ${data.errors[0].param}.  Please try again.`
                );
                setDataValid(false);
            } else {
                setMessage("Thank you, your message was successfully sent");
                setDataValid(true);
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (error) {
            setDataValid(false);
            alert(error);
        }
    };

    return (
        <div>
            <NavSection>
              <NavbarTop />
              <Navbar />
              <Announcement />
            </NavSection>  
            
            <StyledContactUsContainer>
                <h1>Contact</h1>
                <p>I am looking forward to your message.</p>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">
                        NAME <em>(required)</em>
                    </label>
                    <input
                        name="name"
                        value={formData.name}
                        type="text"
                        placeholder="Your name"
                        onChange={handleInputChange}
                        required
                        minLength="2"
                        maxLength="40"
                    />
                    <label htmlFor="email">
                        EMAIL <em>(required)</em>
                    </label>
                    <input
                        name="email"
                        value={formData.email}
                        type="email"
                        placeholder="Your email"
                        onChange={handleInputChange}
                        required
                        minLength="3"
                        maxLength="254"
                    />
                    <label htmlFor="message">
                        MESSAGE <em>(required)</em>
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        rows="2"
                        cols="50"
                        placeholder="Your message"
                        onChange={handleInputChange}
                        required
                        maxLength="1000" // minLength not supported in textArea
                    ></textarea>
                    <StyledSubmitButton type="submit" dataValid={dataValid} />
                </form>

                <StyledMessageOnSubmit dataValid={dataValid} message={message}>
                    {message}
                </StyledMessageOnSubmit>
            </StyledContactUsContainer>
        </div>
    );
};

export default ContactUs;
