let getQuote = async () => {
  let quote = document.getElementById("quote");
  let author = document.getElementById("author");

  try {
    const url = "https://api.quotable.io/random";

    const res = await fetch(url);
    console.log(res.ok);
    const data = await res.json();
    quote.innerText = data.content;
    author.innerText = data.author;
    return data
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  const data = await getQuote();
  console.log(data);
})();

/*
// using promisses
let getQuote = () => {
  let quote = document.getElementById("quote");
  let author = document.getElementById("author");

  const url = "https://api.quotable.io/random";

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
      // console.log(item)
    });
};
*/

export { getQuote };
