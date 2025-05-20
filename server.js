
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
  "After years of dental anxiety, I finally found a place where I feel at ease. The doctors and staff are kind, professional, and gentle. Best dentist in Amritsar for anxious patients.",
  "Highly recommend for anyone seeking full mouth rehab. My treatment included implants, capping, and veneers — all done under one roof at the best dental clinic in Amritsar.",
  "I visited from Australia and needed a complete dental checkup. From X-rays to polishing, everything was done with utmost professionalism. Best dental clinic in Amritsar for NRIs.",
  "Got zirconia caps on six teeth and they feel absolutely natural. The work is precise, and the staff is extremely warm. Best dental implant treatment in Amritsar.",
  "Best dental clinic in Amritsar without a doubt. They explained every procedure, showed 3D scans, and made me feel safe throughout my treatment.",
  "I had a fractured tooth and was worried about replacement. They suggested an implant and it’s been great. Best dental implant in Amritsar!",
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


