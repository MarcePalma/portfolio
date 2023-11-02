"use client"

import React from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import TwitterIcon from '../../../public/x-twitter-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'





export default function EmailSection() {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };



    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <article>
                <h5 className='text-xl font-bold text-white my-2'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 z-index-100">
                        Let's Connect
                    </span>
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {""}
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best
                    to get back to you!
                </p>
                <ul className='socials flex flex-row gap-3'>
                    <Link href="https://github.com/MarcePalma">
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/marcelo-palma-6507b926a">
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                    <Link href="https://twitter.com/SeyyTT">
                        <Image src={TwitterIcon} alt='Twitter Icon' />
                    </Link>
                </ul>
            </article>
            <article>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className='mb-6'>
                            <label
                                htmlFor="email"
                                className='text-white block text-sm font-medium'>
                                Your Email
                            </label>
                            <input
                                type="email"
                                id='email'
                                required
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder='example@gmail.com' />
                        </div>
                        <div className='mb-6'>
                            <label
                                htmlFor="subject"
                                className='text-white block text-sm font-medium'>
                                Subject
                            </label>
                            <input
                                type="subject"
                                id='subject'
                                required
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder='<Just Say Hi!/>' />
                        </div>
                        <div className='mb-6'>
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-purple-500 hover:bg-purple-800 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                        >
                            Send Message!
                        </button>
                    </form>
                )}
            </article>
        </section>
    )
}
