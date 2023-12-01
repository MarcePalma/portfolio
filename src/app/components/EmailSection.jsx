"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import FireWorksParticles from "./Particles/FireWorksParticles";
import { useTranslation } from "react-i18next";

export default function EmailSection() {
    const { t } = useTranslation("global");
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
            setEmailSubmitted(true);
        }
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative overflow-hidden"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="relative">
                <h5 className="text-xl font-bold my-2">
                    <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 text-transparent">
                        {t("emailSection.let's connect")}
                    </span>
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    {t("emailSection.opento")}
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/MarcePalma">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/marcelo-palma-6507b926a/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <section className="z-10 absolute top-0 left-0 right-0 bottom-0">
                        <FireWorksParticles className="z-0" />
                        <p className="text-green-500 text-sm mt-2">
                            {t('Email sent successfully!')}
                        </p>
                    </section>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                {t('emailSection.youremail')}
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                {t('emailSection.subject')}
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                {t('emailSection.message')}
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 text-transparent font-medium py-2.5 px-5 rounded-lg w-full border-pink-500"
                        >
                            {t('emailSection.sendmessage')}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

