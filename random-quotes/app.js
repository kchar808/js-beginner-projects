(function() {
  const quotes = [
    {
      img: "https://vignette.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg/revision/latest?cb=20190623020017",
      quote: "its not flying, its falling with style",
      author: "buzz lightyear"
    },
    {
      img: "https://ohmy.disney.com/wp-content/uploads/2014/02/Sid-in-Toy-Story.jpg",
      quote: "the big one...",
      author: "sid"
    },
    {
      img: "http://i2.cdn.turner.com/cnn/2009/SHOWBIZ/TV/07/23/taco.bell.dog.dies/art.dog.gi.jpg",
      quote: "yo quiero taco bell",
      author: "taco bell dog"
    },
    {
      img: "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/12/the-golden-mcdonalds-arch.jpg?resize=1250%2C702&ssl=1",
      quote: "im lovin it",
      author: "mcdonalds??"
    }
  ];

  const button = document.querySelector('button');

  button.addEventListener('click', function() {
    const index = Math.floor(Math.random() * quotes.length);

    document.querySelector('img').src = quotes[index].img;
    document.getElementById('quote').textContent = `"${quotes[index].quote}"`; 
    document.getElementById('author').textContent = quotes[index].author;
  })
})()