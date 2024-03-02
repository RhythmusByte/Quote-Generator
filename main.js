const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};

// Nav Bar Ends

// Quotes Starts

const quotes = [
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
  { text: "Life is too important to be taken seriously.", author: "Oscar Wilde" },
  { text: "Life is a journey that must be traveled no matter how bad the roads and accommodations.", author: "Oliver Goldsmith" },
  { text: "Life is short, and it's up to you to make it sweet.", author: "Sarah Louise Delany" },
  { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
  { text: "The good life is one inspired by love and guided by knowledge.", author: "Bertrand Russell" },
  { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
  { text: "Life isn't about finding yourself. It's about creating yourself.", author: "George Bernard Shaw" },
  { text: "Life is a great big canvas, and you should throw all the paint on it you can.", author: "Danny Kaye" },
  { text: "Life is the art of drawing without an eraser.", author: "John W. Gardner" },
  { text: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.", author: "Lao Tzu" },
  { text: "Life is a long lesson in humility.", author: "James M. Barrie" },
  { text: "Life is either a daring adventure or nothing.", author: "Helen Keller" },
  { text: "Life is the sum of all your choices.", author: "Albert Camus" },
  { text: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.", author: "Sholom Aleichem" },
  { text: "Life is like a coin. You can spend it any way you wish, but you only spend it once.", author: "Lillian Dickson" },
  { text: "Life is about making an impact, not making an income.", author: "Kevin Kruse" },
  { text: "Life is not a problem to be solved but a reality to be experienced.", author: "Søren Kierkegaard" },
  { text: "Life is a succession of moments. To live each one is to succeed.", author: "Corita Kent" },
  { text: "Life is a great teacher. The more you live, the more you learn.", author: "Unknown" },
  { text: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
  { text: "Life is a shipwreck, but we must not forget to sing in the lifeboats.", author: "Voltaire" },
  { text: "Life is too deep for words, so don't try to describe it, just live it.", author: "C.S. Lewis" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Dennis P. Kimbro" },
  { text: "Life is a gift. Never forget to enjoy and bask in every moment you are in.", author: "Unknown" },
  { text: "Life is the art of drawing without an eraser.", author: "John W. Gardner" },
  { text: "Life is a journey that must be traveled no matter how bad the roads and accommodations.", author: "Oliver Goldsmith" },
  { text: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.", author: "Lao Tzu" },
  { text: "Life is too important to be taken seriously.", author: "Oscar Wilde" },
  { text: "Life is like a camera. Focus on the good times, develop from the negatives, and if things don't work out, take another shot.", author: "Unknown" },
  { text: "Life is not a matter of milestones but of moments.", author: "Rose Kennedy" },
  { text: "I prefer to be in solitude, rather than being a spotlight!", author: "RhythmusByte" },
  { text: "Life is a game, play it; life is a challenge, meet it; life is an opportunity, capture it.", author: "Unknown" },
  {
    text: "Love is not about how many days, months, or years you've been together. It's about how much you love each other every single day.",
    author: "Unknown"
  },
  {
    text: "You are the source of my joy, the center of my world, and the whole of my heart.",
    author: "Unknown"
  },
  {
    text: "Love is when you look into someone's eyes and see everything you need.",
    author: "Unknown"
  },
  {
    text: "I have found the one whom my soul loves.",
    author: "Song of Solomon 3:4"
  },
  {
    text: "In your arms is where I feel safe, loved, and at home.",
    author: "Unknown"
  },
  {
    text: "Love is a friendship set on fire.",
    author: "Jeremy Taylor"
  },
  {
    text: "Being deeply loved by someone gives you strength while loving someone deeply gives you courage.",
    author: "Lao Tzu"
  },
  {
    text: "You are my sun, my moon, and all my stars.",
    author: "E.E. Cummings"
  },
  {
    text: "Love is not finding someone to live with; it's finding someone you can't live without.",
    author: "Rafael Ortiz"
  },
  {
    text: "I love you not only for what you are but for what I am when I am with you.",
    author: "Roy Croft"
  },
  {
    text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
    author: "Maya Angelou"
  },
  {
    text: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle"
  },
  {
    text: "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.",
    author: "Oscar Wilde"
  },
  {
    text: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
    author: "Angelita Lim"
  },
  {
    text: "Love is the greatest refreshment in life.",
    author: "Pablo Picasso"
  },
  {
    text: "If I know what love is, it is because of you.",
    author: "Hermann Hesse"
  },
  {
    text: "You are the finest, loveliest, tenderest, and most beautiful person I have ever known - and even that is an understatement.",
    author: "F. Scott Fitzgerald"
  },
  {
    text: "Love is a promise; love is a souvenir. Once given, never forgotten. Never let it disappear.",
    author: "John Lennon"
  },
  {
    text: "I am entirely yours, that if I might have all the world given me, I could not be happy but in your love.",
    author: "Duke of Marlborough to Sarah Churchill"
  },
  {
    text: "Love is not something you find. Love is something that finds you.",
    author: "Loretta Young"
  },
  {
    text: "You are my heart, my life, my one and only thought.",
    author: "Arthur Conan Doyle"
  },
  {
    text: "Love is like the wind. You can't see it, but you can feel it.",
    author: "Nicholas Sparks"
  },
  {
    text: "Every love story is beautiful, but ours is my favorite.",
    author: "Unknown"
  },
  {
    text: "Love is the greatest adventure.",
    author: "Unknown"
  },
  {
    text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
    author: "1 Corinthians 13:4"
  },
  {
    text: "When I saw you, I fell in love, and you smiled because you knew.",
    author: "William Shakespeare"
  },
  {
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn"
  },
  {
    text: "You are my today and all of my tomorrows.",
    author: "Leo Christopher"
  },
  {
    text: "Love is the master key that opens the gates of happiness.",
    author: "Oliver Wendell Holmes"
  },
  {
    text: "I have loved you in countless forms, countless times, life after life, age after age, forever.",
    author: "Rumi"
  },
  {
    text: "To love is nothing. To be loved is something. But to love and be loved, that's everything.",
    author: "T. Tolis"
  },
  {
    text: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride.",
    author: "Pablo Neruda"
  },
  {
    text: "Love is the flower you've got to let grow.",
    author: "John Lennon"
  },
  {
    text: "Love is not a sprint; it's a marathon.",
    author: "Unknown"
  },
  {
    text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
    author: "Victor Hugo"
  },
  {
    text: "You are my heart's epic adventure.",
    author: "Unknown"
  },
  {
    text: "The best and most beautiful things in this world cannot be seen or even heard but must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    text: "Love is the bridge between two hearts.",
    author: "Unknown"
  },
  {
    text: "Love is when the other person's happiness is more important than your own.",
    author: "H. Jackson Brown Jr."
  },
  {
    text: "You are the love that came without warning; you had my heart before I could say no.",
    author: "Unknown"
  },
  {
    text: "I love you, and that's the beginning and end of everything.",
    author: "F. Scott Fitzgerald"
  },
  {
    text: "Love is a game that two can play and both win.",
    author: "Eva Gabor"
  },
  {
    text: "Love is like a beautiful flower that I can't resist watering every day.",
    author: "Unknown"
  },
  {
    text: "I choose you. And I'll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I'll keep choosing you.",
    author: "Unknown"
  },
  {
    text: "Love is the key to happiness, and you hold the master key to my heart.",
    author: "Unknown"
  },
  {
    text: "Love is not about how much you say 'I love you,' but how much you prove that it's true.",
    author: "Unknown"
  },
  {
    text: "You are the missing piece to my puzzle of life.",
    author: "Unknown"
  },
  {
    text: "I never want to stop making memories with you.",
    author: "Pierre Jeanty"
  },
  {
    text: "You are the song in my heart and the melody of my life.",
    author: "Unknown"
  },
  {
    text: "Love is not only something you feel. It is something you do.",
    author: "David Wilkerson"
  },
  {
    text: "Love is not only something you feel. It is something you do.",
    author: "David Wilkerson"
  },
  {
    text: "Sometimes you need to be alone. Not to be lonely, but to enjoy your free time being yourself.",
    author: "Unknown"
  },
  {
    text: "The greatest thing in the world is to know how to belong to oneself.",
    author: "Michel de Montaigne"
  },
  {
    text: "I think it's very healthy to spend time alone. You need to know how to be alone and not be defined by another person.",
    author: "Oscar Wilde"
  },
  {
    text: "I enjoy solitude and silence. It's in that quietness that I find the answers to my questions.",
    author: "Unknown"
  },
  {
    text: "I restore myself when I'm alone.",
    author: "Marilyn Monroe"
  },
  {
    text: "Being alone does not mean you are lonely, and being lonely does not mean you are alone.",
    author: "Unknown"
  },
  {
    text: "Solitude is the soul's holiday, an opportunity to stop doing for others and to surprise and delight ourselves instead.",
    author: "Katrina Kenison"
  },
  {
    text: "I don't want to be alone, I want to be left alone.",
    author: "Audrey Hepburn"
  },
  {
    text: "Sometimes you have to stand alone to prove that you can still stand.",
    author: "Unknown"
  },
  {
    text: "Loneliness is the poverty of self; solitude is the richness of self.",
    author: "May Sarton"
  },
  {
    text: "The eternal quest of the human being is to shatter his loneliness.",
    author: "Norman Cousins"
  },
  {
    text: "I'm learning a lot about myself being alone, and doing what I'm doing.",
    author: "Chantal Kreviazuk"
  },
  {
    text: "The best part about being alone is that you really don't have to answer to anybody. You do what you want.",
    author: "Justin Timberlake"
  },
  {
    text: "I like being alone. I have control over my own shit. Therefore, in order to win me over, your presence has to feel better than my solitude. You're not competing with another person; you are competing with my comfort zones.",
    author: "Horacio Jones"
  },
  {
    text: "In solitude, where we are least alone.",
    author: "Lord Byron"
  },
  {
    text: "It's better to be unhappy alone than unhappy with someone.",
    author: "Marilyn Monroe"
  },
  {
    text: "Loneliness expresses the pain of being alone and solitude expresses the glory of being alone.",
    author: "Paul Tillich"
  },
  {
    text: "I'm not anti-social. I'm pro-solitude.",
    author: "Unknown"
  },
  {
    text: "You can't be lonely if you like the person you're alone with.",
    author: "Wayne Dyer"
  },
  {
    text: "The greatest thing in the world is to know how to belong to oneself.",
    author: "Michel de Montaigne"
  },
  {
    text: "I enjoy being alone, my soul is at peace in the silence.",
    author: "Unknown"
  },
  {
    text: "Sometimes you need to take a break from everyone and spend time alone to experience, appreciate, and love yourself.",
    author: "Robert Tew"
  },
  {
    text: "I used to think that the worst thing in life was to end up alone. It's not. The worst thing in life is to end up with people who make you feel alone.",
    author: "Robin Williams"
  },
  {
    text: "It's better to be alone with dignity than in a relationship that requires you to sacrifice your self-respect.",
    author: "Unknown"
  },
  {
    text: "If you make friends with yourself, you will never be alone.",
    author: "Maxwell Maltz"
  },
  {
    text: "I think it's good for a person to spend time alone. It gives them an opportunity to discover who they are and to figure out why they are always alone.",
    author: "Amy Sedaris"
  },
  {
    text: "You need to be alone. Not to be lonely, but to enjoy your free time being yourself.",
    author: "Unknown"
  },
  {
    text: "Sometimes you just need a break. In a beautiful place. Alone. To figure everything out.",
    author: "Unknown"
  },
  {
    text: "I think it's very healthy to spend time alone. You need to know how to be alone and not be defined by another person.",
    author: "Olivia Wilde"
  },
  {
    text: "When everything is lonely, I can be my best friend.",
    author: "Conor Oberst"
  },
  {
    text: "Solitude is where I place my chaos to rest and awaken my inner peace.",
    author: "Nikki Rowe"
  },
  {
    text: "You cannot be lonely if you like the person you're alone with.",
    author: "Wayne Dyer"
  },
  {
    text: "Solitude is a catalyst for innovation.",
    author: "Susan Cain"
  },
  {
    text: "When you're feeling alone, remember that you are not.",
    author: "Unknown"
  },
  {
    text: "I love to be alone. I never found the companion that was so companionable as solitude.",
    author: "Henry David Thoreau"
  },
  {
    text: "Solitude is the soul's holiday, an opportunity to stop doing for others and to surprise and delight ourselves instead.",
    author: "Katrina Kenison"
  },
  {
    text: "The best part about being alone is that you really don't have to answer to anybody. You do what you want.",
    author: "Justin Timberlake"
  },
  {
    text: "Loneliness is my least favorite thing about life. The thing that I'm most worried about is just being alone without anybody to care for or someone who will care for me.",
    author: "Anne Hathaway"
  },
  {
    text: "The eternal quest of the human being is to shatter his loneliness.",
    author: "Norman Cousins"
  },
  {
    text: "Solitude is a place of purification.",
    author: "Martin Laird"
  },
  {
    text: "I enjoy being alone, my soul is at peace in the silence.",
    author: "Unknown"
  },
  {
    text: "Loneliness is the poverty of self; solitude is the richness of self.",
    author: "May Sarton"
  },
  {
    text: "I used to think that the worst thing in life was to end up alone. It's not. The worst thing in life is to end up with people who make you feel alone.",
    author: "Robin Williams"
  },
  {
    text: "It's better to be unhappy alone than unhappy with someone.",
    author: "Marilyn Monroe"
  },
  {
    text: "Solitude is a chosen separation for refining your soul. Isolation is what you crave when you neglect the first.",
    author: "Wayne Cordeiro"
  },
  {
    text: "Loneliness is about the scariest thing out there.",
    author: "Joss Whedon"
  },
  {
    text: "Sometimes, you need to be alone. Not to be lonely, but to enjoy your free time being yourself.",
    author: "Unknown"
  },
  {
    text: "Solitude is the place of purification.",
    author: "Martin Laird"
  },
  {
    text: "I used to think that the worst thing in life was to end up alone. It's not. The worst thing in life is to end up with people who make you feel alone.",
    author: "Robin Williams"
  },
  {
    text: "Being alone does not mean you are lonely, and being lonely does not mean you are alone.",
    author: "Unknown"
  }
];
  
 // Quotes Ends

function generateQuote() {
  const quoteContainer = document.getElementById("quote-text");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex].text; 
  const randomAuthor = quotes[randomIndex].author;  quoteContainer.innerHTML = '<i class="fas fa-quote-left"></i>' + randomQuote + '<i class="fas fa-quote-right"></i>'; quoteContainer.nextElementSibling.textContent = "- " + randomAuthor; 


// Update the button text

  const generateBtn = document.getElementById("generate-btn");
  generateBtn.textContent = "Regenerate";
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateQuote);

// Generator Ends

const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", copyToClipboard);

function copyToClipboard() {
  const quoteText = document.getElementById("quote-text");
  const range = document.createRange();
  range.selectNode(quoteText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Quote copied to clipboard!");
}


