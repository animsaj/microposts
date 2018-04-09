async function getPosts(url) {
  let results = await fetch(url);
  let data = await results.json();
  return data;
}

module.exports = {
  getPosts
};
