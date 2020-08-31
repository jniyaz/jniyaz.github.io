import Link from 'next/link';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Post({ post }) {
    return (
        <>
            <section className="text-gray-700 body-font overflow-hidden">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-12">
                        <div className="p-12 flex flex-col items-start">
                            <span className="inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm font-medium tracking-widest">CATEGORY</span>
                            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{post.title.rendered}</h2>
                            <div className="leading-relaxed mb-8">
                                {ReactHtmlParser(post.content.rendered)}
                            </div>
                            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full">
                                <Link href="/blog">
                                    <a className="text-indigo-500 inline-flex items-center">
                                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 12H5M12 19l-7-7 7-7"></path>
                                        </svg> Go Back
                                    </a>
                                </Link>
                                <span className="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-600 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>6
                                </span>
                            </div>
                            <a className="inline-flex items-center">
                                <img alt="blog" src={prefix + '/niyaz.jpeg'} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">Niyaz Jamal</span>
                                    <span className="text-gray-500 text-sm">Full Stack Software Engineer</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}