
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {


  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Methods",
  "GET, POST, OPTIONS");

  res.header("Access-Control-Allow-Headers",
  "Origin, Content-Type, Accept");
   next();
});
app.use(express.static(__dirname));

let reviews = [
  "My child needed pediatric dental care and this clinic was a blessing. The staff was gentle and the play area made the visit enjoyable for my son. Great place for families.",
  "The Damon braces I had put in really changed my smile, and the process was much more comfortable than traditional braces. Highly recommend this clinic for orthodontic work.",
  "Traveled from Melbourne for my smile makeover. The attention to detail and patient care I received here was better than anything back home. Best dental clinic in Amritsar for NRIs hands down.",
  "My full mouth rehabilitation was done with extreme precision. Each implant and crown was perfectly aligned, and the aesthetics are flawless. This clinic sets a benchmark for quality dental care in Amritsar.",
  "Wisdom tooth extraction was done so smoothly, I didn’t even realize it was over. No swelling, no pain, just great expertise.",
  "Being an NRI, I was skeptical about dental care in India. But after visiting this clinic in Amritsar, I can confidently say it offers world-class services. My dental implants were done perfectly and painlessly.",
  "I came all the way from Australia to get full mouth zirconia crowns done here. I’m extremely happy with the precision and aesthetics. Truly the best dental implant in Amritsar.",
  "The clinic is clean, staff are professional, and the results of my root canal treatment exceeded expectations. It’s rare to find such a smooth and painless experience. Highly recommend for anyone with dental issues.",
  "Dr. Keshvi handled my smile design treatment so beautifully. She paid attention to every detail and the final look has boosted my confidence tremendously. This is definitely the best dentist in Amritsar!",
  "I was nervous about getting dental implants, but the entire procedure was surprisingly painless. From consultation to aftercare, everything was well-organized and smooth. Top dental implant service in Amritsar!",
  "If you're looking for the best dental clinic in Amritsar, look no further. The hospitality, hygiene standards, and advanced technology used here are unmatched. I came for cleaning and ended up signing up for a full smile transformation.",
  "The team here was so understanding and supportive. I came in with extreme dental anxiety, but their calm and professional approach made the entire procedure feel effortless. My smile is brighter and healthier, and I couldn’t be more thankful.",
];

app.get('/get-review', (req, res) => {
  if (reviews.length === 0) {
    return res.json({ review: "No reviews left!" });
  }
  const randomIndex = Math.floor(Math.random() *
   reviews.length);
  const selectedReview = reviews[randomIndex];
  reviews.splice(randomIndex, 1);
  res.json({ review: selectedReview });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


