let getQuote = () => {
  let quote = document.getElementById("quote");
  let author = document.getElementById("author");

  const url = "https://api.quotable.io/random";

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

/*
const loadQuotes = async () => {
  try {
    const url = "https://api.quotable.io/random";
    const res = await fetch(url);
    console.log(res.ok);
    const data = await res.json();
    return data
  } catch (err) {
    console.log(err);
  }
};

//using IIFE Imediate Invoked Function
(async () => {
  const data = await loadQuotes();
  console.log(data);
})();
*/

export { getQuote };
