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


// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://public-api.wordpress.com/wp/v2/sites/niyazjamal.wordpress.com/posts?per_page=10&order=desc')
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const res = await fetch(`https://public-api.wordpress.com/wp/v2/sites/niyazjamal.wordpress.com/posts?slug=${params.slug}`)
    const json = await res.json()
    const post = json[0];
    // Pass post data to the page via props
    return { props: { post } }
}

// Works only with server
// BlogDetailPage.getInitialProps = async (ctx) => {
//     const slug = ctx.query.slug;
//     const res = await fetch('https://public-api.wordpress.com/wp/v2/sites/niyazjamal.wordpress.com/posts?slug=' + slug);
//     const json = await res.json();
//     return { post: json[0] }
// }

export default BlogDetailPage;