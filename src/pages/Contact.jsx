import React, {Suspense, useRef, useState} from 'react';
import emailjs from '@emailjs/browser'
import {Canvas} from "@react-three/fiber";
import {Fox} from "../models/index.js";
import Loader from "../components/Loader.jsx";
import useAlert from "../hooks/useAlert.jsx";
import Alert from "../components/Alert.jsx";

const Contact = () => {

    const formRef = useRef(null);
    const [form, setForm] = useState({name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('idle');
    const {alert, showAlert, hideAlert} = useAlert();

    const clearForm = () => {
        setForm({ name: '', email: '', message: ''})
    }

    const handleFormChange = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleFormFocus = (e) => {
        setCurrentAnimation('walk')
    }

    const handleFormBlur = () => {
        setCurrentAnimation('idle');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Kalindu Abeysinghe",
                from_email: form.email,
                to_email: 'kalinduabeysinghe@gmail.com',
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            setIsLoading(false);
            showAlert({text: "Message sent successfully!", type: "success"});
            setTimeout(() => {
                setCurrentAnimation('idle');
                clearForm();
            }, 3000);
        }).catch((err) => {
            setIsLoading(false);
            console.log(err);
            clearForm();
            hideAlert();
            setCurrentAnimation('idle');
            showAlert({text: "Failed to send message!", type: "danger"});
        })
    }

    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            {alert.show && <Alert {...alert}/>}
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Get in Touch</h1>
                <form className="w-full flex flex-col gap-7 mt-14">
                    <label className="text-black-500 font-semibold">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Your name"
                            required
                            value={form.name}
                            onChange={handleFormChange}
                            onBlur={handleFormBlur}
                            onFocus={handleFormFocus}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Email
                        <input
                            type="text"
                            name="email"
                            className="input"
                            placeholder="youremail@gmail.com"
                            required
                            value={form.email}
                            onChange={handleFormChange}
                            onBlur={handleFormBlur}
                            onFocus={handleFormFocus}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Your Message
                        <textarea
                            rows={5}
                            name="message"
                            className="textarea"
                            placeholder="Let me know how we could work together!"
                            required
                            value={form.message}
                            onChange={handleFormChange}
                            onBlur={handleFormBlur}
                            onFocus={handleFormFocus}
                        />
                    </label>
                    <button
                        type="submit"
                        className="btn"
                        disabled={isLoading}
                        onFocus={handleFormFocus}
                        onBlur={handleFormBlur}
                        onClick={handleFormSubmit}
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <directionalLight position={[0, 0, 1]} intensity={2.5}/>
                    <ambientLight intensity={1}/>
                    <Suspense fallback={<Loader/>}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, 0]}
                            rotation={[12.6, 5.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Contact;