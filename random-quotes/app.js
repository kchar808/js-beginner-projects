(function() {
  const quotes = [
    {
      quote: "its not flying, its falling with style",
      author: "buzz lightyear"
    },
    {
      quote: "the big one...",
      author: "sid"
    },
    {
      quote: "yo quiero taco bell",
      author: "taco bell dog"
    },
    {
      quote: "im lovin it",
      author: "mcdonalds??"
    }
  ];

  const button = document.querySelector('button');

  button.addEventListener('click', function() {
    const index = Math.floor(Math.random() * quotes.length);

    document.getElementById('quote').textContent = `"${quotes[index].quote}"`; 
    document.getElementById('author').textContent = quotes[index].author;
  })
})()