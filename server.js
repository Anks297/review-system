
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
  "My teenage son had his braces done here, and the results are spectacular. Dr. Ankur is truly the best orthodontist in Amritsar for young patients.",
  "After years of dental anxiety, I finally found a place where I feel at ease. The doctors and staff are kind, professional, and gentle. Best dentist in Amritsar for anxious patients.",
  "I was looking for a dentist who could fix my bite and speech issue. Dr. Keshvi diagnosed it instantly and resolved it with prosthetics. Best dentist in Amritsar for prosthodontics.",
  "Highly recommend for anyone seeking full mouth rehab. My treatment included implants, capping, and veneers — all done under one roof at the best dental clinic in Amritsar.",
  "The Damon braces I got from here were almost invisible and gave me the desired results in less than 12 months. Best orthodontist in Amritsar for modern braces.",
  "If you're seeking international-level dental care in Punjab, this clinic is it. The implants I got feel just like my original teeth. Best dental implant clinic in Amritsar, no question.",
  "I visited from Australia and needed a complete dental checkup. From X-rays to polishing, everything was done with utmost professionalism. Best dental clinic in Amritsar for NRIs.",
  "I used to feel embarrassed about my teeth, but after visiting this clinic for smile designing, I feel like a new person. Truly the best dentist in Amritsar for transformations.",
  "Got zirconia caps on six teeth and they feel absolutely natural. The work is precise, and the staff is extremely warm. Best dental implant treatment in Amritsar.",
  "Best dental clinic in Amritsar without a doubt. They explained every procedure, showed 3D scans, and made me feel safe throughout my treatment.",
  "Very efficient appointment system. I’ve never had to wait. Their punctuality and professionalism make them the best dentist in Amritsar.",
  "Their sterilization protocols gave me confidence post-COVID. No compromise on hygiene. That’s why they’re called the best dentist in Amritsar.",
  "I had a fractured tooth and was worried about replacement. They suggested an implant and it’s been great. Best dental implant in Amritsar!",
  "I’ve tried multiple clinics before, but this is the only one I trust now. Excellent in every way. Best dental clinic in Amritsar — no exaggeration.",
  "As an NRI visiting from New Zealand, I was hesitant. But their transparent treatment plans and outstanding execution proved why they’re the best dental clinic in Amritsar.",
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


