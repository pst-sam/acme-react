import React from 'react'

const Register = () => {
  return (
    
    <section>
    
    <section
            id="contact"
            className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height"
        >
            <h2
                className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
            >
                Register
            </h2>
            <form 
                className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4"
            >
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    minLength="3"
                    maxLength="60"
                    className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                />
                <label htmlFor="username">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    minLength="3"
                    maxLength="60"
                    className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
     />
                <label htmlFor="password">Confirm Password:</label>
      <input
                    type="password"
                    id="confirm"
                    name="password"
                    required
                    minLength="3"
                    maxLength="60"
                    className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                />
                
                <button
                    className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none"
                >
                    Sign Up
                </button>
            </form>
        </section>
        </section>
  )
}

export default Register