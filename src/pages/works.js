import Head from 'next/head';

export default function Works() {
    return (
        <>
            <Head>
                <title>Works | Niyaz</title>
            </Head>
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Works</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Below have listed some web projects I have / have been worked on,</p>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Checkout my github, <a className="text-gray-20 text-sm" href="https://github.com/jniyaz" target="_blank">Click Here.</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}