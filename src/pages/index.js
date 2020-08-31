import Posts from "../components/blog/posts";
import fetch from 'isomorphic-unfetch';

function IndexPage({ posts }) {
  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container mx-auto">
        <Posts posts={posts} />
      </div>
    </section>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const res = await fetch('https://public-api.wordpress.com/wp/v2/sites/niyazjamal.wordpress.com/posts?per_page=10&order=desc')
  const json = await res.json()
  return { posts: json }
}

export default IndexPage;