import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mgvwvvaq");
    if (state.succeeded) {
        return <div className='flex max-h-screen min-h-screen justify-center py-50px font-bold m-10'>Thank you for contacting us!</div>
    }

    return (
        <section
            id="contact"
            className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
        >
            <h2
                className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
            >
                Contact Us
            </h2>
            <form onSubmit={handleSubmit}
                className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
            >
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    minLength="3"
                    maxLength="60"
                    placeholder="Your email"
                    className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    required
                    className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                ></textarea>
                <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors} />
                <button
                    className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none"
                >
                    Send
                </button>
            </form>
        </section>
    )
}

export default ContactForm