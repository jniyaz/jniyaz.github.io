import Head from 'next/head';
import Post from "../../components/blog/detail";
import fetch from 'isomorphic-unfetch';

function BlogDetailPage({ post }) {
    return (
        <>
            <Head>
                <title>{post.title.rendered} | Blog | Niyaz</title>
                <meta name="keywords" content={post.title.rendered} />
                <meta name="description" content={post.title.rendered} />
            </Head>
            <section className="text-gray-700 body-font overflow-hidden">
                <div className="container px-6 mx-auto">
                    <Post post={post} />
                </div>
            </section>
        </>
    )
}

BlogDetailPage.getInitialProps = async (ctx) => {
    const slug = ctx.query.slug;
    const res = await fetch('https://public-api.wordpress.com/wp/v2/sites/niyazjamal.wordpress.com/posts?slug=' + slug);
    const json = await res.json();
    return { post: json[0] }
}

export default BlogDetailPage;