import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About | Niyaz</title>
            </Head>
            <section className="text-gray-700 body-font">
                <h1 class="text-3xl font-medium title-font text-gray-900 mb-2 text-center">About</h1>
                <div className="container px-5 py-8 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        {/* <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                        </div> */}
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <a className="inline-flex items-center">
                                    <img alt="blog" src="/niyaz.jpeg" className="w-24 h-24 rounded-full flex-shrink-0 object-cover object-center" />
                                </a>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Niyaz Ahamed Jamal</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">
                                    Hi All, Greetings, Hope you all are doing great. <br />
                                </p>
                                <p className="leading-relaxed text-lg mb-4">
                                    I am a full stack software developer, currently living in Kualalumpur, Malaysia. My interests range from full stack web/mobile development to programming. I am also interested in technology, education, and sports.
                                </p>
                                <p className="leading-relaxed text-lg mb-4">
                                    If you’d like to get in touch, feel free to say hello through any of the social links at the bootom.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}