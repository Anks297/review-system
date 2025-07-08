
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
  "My full mouth rehabilitation was done with extreme precision. Each implant and crown was perfectly aligned, and the aesthetics are flawless. This clinic sets a benchmark for quality dental care in Amritsar.",
  "After visiting several dentists, I finally found the best dentist in Amritsar who understood my concerns. The root canal treatment was painless and professional.",
  "I was visiting from the UK and needed urgent dental care. This clinic not only accommodated me immediately but also provided the best dental treatment I’ve ever had in India.",
  "Had a full mouth rehabilitation done here. The results are phenomenal and worth every rupee. Truly the best dentist in Amritsar for major dental makeovers.",
  "After years of hesitation, I went in for orthodontic treatment. Dr. Ankur is without a doubt the best orthodontist in Amritsar. Friendly, skilled, and results-driven.",
  "The Damon braces I got here were practically invisible and worked like magic. Highly recommend this place for the best orthodontist in Amritsar.",
  "If you’re an NRI looking for quality dental care, this is the place. From sterilization to final results, it’s the best dental clinic in Amritsar.",
  "If you’re nervous about dental treatments, this is the place for you. Their compassionate approach makes them the best dentist in Amritsar.",
  "Being an NRI, I was skeptical about dental care in India. But after visiting this clinic in Amritsar, I can confidently say it offers world-class services. My dental implants were done perfectly and painlessly.",
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


