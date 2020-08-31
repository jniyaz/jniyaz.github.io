import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Niyaz</title>
            </Head>
            <section className="text-gray-700 body-font relative">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Let’s talk 👋 Don’t hesitate to reach out with the contact information below, or send a message using the form. </p>
                    </div>

                    <div className="lg:w-1/2 md:w-2/3 mx-auto">

                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <input className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text" />
                            </div>
                            <div className="p-2 w-1/2">
                                <input className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email" />
                            </div>
                            <div className="p-2 w-full">
                                <textarea className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                            </div>

                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">

                                <a className="text-indigo-500">jamalniyaz@live.com</a>
                                <p className="leading-normal my-5">Lengkok Tun Sambanthan, Brickfields, Kuala Lumpur, 50470</p>
                                <span className="inline-flex">
                                    <a classNameName="text-gray-500" href="https://www.facebook.com/niyaz.dev" target="_blank">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a classNameName="ml-3 text-gray-500" href="https://twitter.com/niyaz_dev" target="_blank">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a classNameName="ml-3 text-gray-500" href="https://www.instagram.com/niyaz.dev/" target="_blank">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" classNameName="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a classNameName="ml-3 text-gray-500" href="https://www.linkedin.com/in/niyazahamed" target="_blank">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" classNameName="w-5 h-5" viewBox="0 0 24 24">
                                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}