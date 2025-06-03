
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
  "Dr. Ankur Mohindru is hands down the best dentist in Amritsar! I was extremely nervous about getting my dental implants, but he made the whole process so smooth. The clinic is well-equipped, and the staff is friendly. Highly recommend for any dental needs!",
  "Visited Dr. Mohindru's Medical & Dental Care for a root canal with Dr. Keshvi Mohindru. I had zero pain, and she explained every step with patience. Truly the best dental clinic in Amritsar. So grateful to have found them!",
  "I went to Dr. Ankur for dental extraction and was amazed at how painless it was. I can confidently say this is the best dentist in Amritsar. Highly recommend for anyone needing dental care!",
  "Dr. Keshvi Mohindru is incredible at smile designing! She transformed my smile and boosted my confidence. The whole experience at Dr. Mohindru’s Medical & Dental Care was top-notch. Definitely the best dental clinic in Amritsar.",
  "If you need a dental implant specialist, go to Dr. Ankur. The procedure was seamless, and the clinic uses the latest technology. I can say without a doubt he's the best dentist in Amritsar!",
  "Dr. Keshvi Mohindru did a fantastic job on my full mouth dental implants. She was gentle and thorough, making the whole experience comfortable. I can confidently say this is the best dental clinic in Amritsar.",
  "Dr. Ankur at Dr. Mohindru's Medical & Dental Care is exceptional. I got braces and the results are fantastic. The clinic is clean, and the service is prompt. Definitely the best dental clinic in Amritsar for orthodontics!",
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


