'use client'


import { FormEvent } from "react";
import { Merriweather } from "next/font/google";
import { useState } from "react";

import { fetcher } from '../../services/fetcher';


const font = Merriweather({ subsets: ["latin"], weight: '400' });


function Contact () {
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetcher('/', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({mail: mail, message: message})
        })

        alert(res);

        setMail('');
        setMessage('');
    }

    return(
        <>
            <section className="pt-5 flex flex-col items-center">
                <h2 className={`text-4xl font-bold text-center mt-4 ${font.className}`}>Let's Get in Touch</h2>
                <form id="contactForm" onSubmit={handleSubmit} className="flex flex-col justify-around" style={{width: '400px'}}>
                    <label htmlFor="mail" className="mt-5 ml-5 mb-3">Email</label>
                    <input id="mail" type='text' required placeholder="example@gmail.com" value={mail} onChange={(e) => {setMail(e.target.value)}} className="rounded-lg h-16 p-3 border-4 border-slate-900 text-black"  />
                    <label htmlFor="message" className="mt-5 ml-5 mb-3">Message</label>
                    <textarea className="rounded-lg h-64 p-5 border-4 border-slate-900 text-black" placeholder="What do you want to say to me?" id="message" value={message} onChange={(e) => {setMessage(e.target.value)}} required></textarea>
                    <button form="contactForm" type="submit" className="rounded-lg p-2 bg-slate-700 m-auto mt-6" style={{width: '300px'}}><i className="fa-solid fa-thumbs-up" aria-hidden="true"></i> Submit</button>
                </form>
            </section>  
        </>
    )
}

export default Contact;