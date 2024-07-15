import React from 'react'
import rocketLaunch from './img/rocketlaunch.png'
import rocketMan from './img/rocketman.png'
import rocketRide from './img/rocketride.png'

const Rockets = () => {
    return (
        <main className='max-w-4xl mx-auto'>
            <section
                id="rockets"
                class="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
            >
                <h2
                    class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white"
                >
                    Our Rockets
                </h2>
                <ul
                    class="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8"
                >
                    <li
                        class="w-2/3 sm:w-5/6 flex flex-col items-center border dorder-solid border-slate-900 dark:border-gray-100 bg-white py-2 rounded-3xl shadow-xl dark:bg-black"
                    >
                        <img src={rocketMan} alt="Explorer" class="mb-6 w-1/2" />
                        <h3 class="text-3xl text-center text-slate-900 dark:text-white">
                            Explorer
                        </h3>
                        <p
                            class="text-3xl text-center mt-3 hidden sm:block text-slate-500 dark:text-slate-400"
                        >
                            $
                        </p>
                        <p
                            class="sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400"
                        >
                            Affordable Exploration
                        </p>
                    </li>
                    <li
                        class="w-2/3 sm:w-5/6 flex flex-col items-center border dorder-solid border-slate-900 dark:border-gray-100 bg-white py-2 rounded-3xl shadow-xl dark:bg-black"
                    >
                        <img src={rocketRide} alt="Explorer" class="mb-6 w-1/2" />
                        <h3 class="text-3xl text-center text-slate-900 dark:text-white">
                            Adventurer
                        </h3>
                        <p
                            class="text-3xl text-center mt-3 hidden sm:block text-slate-500 dark:text-slate-400"
                        >
                            $$
                        </p>
                        <p
                            class="sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400"
                        >
                            Best Selling Rockets!
                        </p>
                    </li>
                    <li
                        class="w-2/3 sm:w-5/6 flex flex-col items-center border dorder-solid border-slate-900 dark:border-gray-100 bg-white py-2 rounded-3xl shadow-xl dark:bg-black"
                    >
                        <img
                            src={rocketLaunch}
                            alt="Infinity"
                            class="mb-6 w-1/2"
                        />
                        <h3 class="text-3xl text-center text-slate-900 dark:text-white">
                            Infinity
                        </h3>
                        <p
                            class="text-3xl text-center mt-3 hidden sm:block text-slate-500 dark:text-slate-400"
                        >
                            $$$
                        </p>
                        <p
                            class="sm:hidden text-2xl text-center text-slate-500 dark:text-slate-400"
                        >
                            Luxury Starship
                        </p>
                    </li>
                </ul>
            </section>
            <hr class="mx-auto bg-black dark:bg-white w-1/2" />
        </main>
    )
}

export default Rockets