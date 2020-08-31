import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

export default function Posts({ posts }) {
    return (
        <>
            {
                posts.map((post, index) => (
                    <div key={post.id} className="-my-8">
                        <div className="py-8 flex flex-wrap md:flex-no-wrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="tracking-widest font-medium title-font text-gray-900">CATEGORY</span>
                                <span className="mt-1 text-gray-500 text-sm">{post.date}</span>
                                <span className="mt-1 text-gray-500 text-sm">{moment(post.date, "YYYY-MM-DD").fromNow()}</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{post.title.rendered}</h2>
                                <div className="leading-relaxed">{ReactHtmlParser(post.excerpt.rendered)}</div>
                                <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}