const api =
  process.env.API_BASEURL ||
  "https://public-api.wordpress.com/wp/v2/sites/niyazjamal.wordpress.com";

export async function getPosts(perPage = 100, offset = 0) {
  const url = `${api}/posts?per_page=${perPage}&offset=${offset}`;
  const res = await fetch(url);

  const total = res.headers.get("X-WP-Total");
  const posts = await res.json();

  posts.forEach((post: any) => preparePostObject(post));

  return {
    posts,
    total,
  };
}

export async function getPost(params: any) {
  const res = await fetch(`${api}/posts?slug=${encodeURI(params)}&_embed`);
  const posts = await res.json();
  const post = posts[0];

  preparePostObject(post);

  return post;
}

function preparePostObject(post: any) {
  const { slug } = post;
  const date = new Date(post.date);
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) {
    month = 0 + month;
  }

  post.nextSlug = [year, month, slug];
  post.nextPath = post.nextSlug.join("/");

  post.title = parseHtmlEntities(post.title.rendered);
  post.dek = parseHtmlEntities(post.excerpt.rendered);
  post.thumbnail =
    post._embedded?.["wp:featuredmedia"]?.["0"]?.source_url ?? "";
  post.externalUrl = post.link.startsWith(api) ? "" : post.link;
  post.description = parseHtmlEntities(stripTags(post.excerpt.rendered));

  return post;
}

function parseHtmlEntities(str: any) {
  return str.replace(/&#([0-9]+);/gi, function (match: any, numStr: any) {
    var num = parseInt(numStr, 10); // read num as normal number
    return String.fromCharCode(num);
  });
}

function stripTags(str: any) {
  return str.replace(/(<([^>]+)>)/gi, "").replace(/(\r\n|\n|\r)/gm, "");
}
