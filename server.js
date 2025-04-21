
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
  "As a Canadian citizen, I expect high standards in healthcare. This clinic met every expectation. Best dental clinic in Amritsar for international patients.",
  "My 7-year-old had his first dental visit here. It was smooth and fun. Best dental clinic in Amritsar for pediatric care.",
  "I am recommending this place to everyone I know. Their dental work speaks for itself. Best dentist in Amritsar for honest service.",
  "Emergency toothache during my Punjab visit led me here. Immediate relief and fantastic care. I now refer to them as the best dentist in Amritsar.",
  "They offer complete transparency in cost and treatment plan. I never felt misled. Best dental clinic in Amritsar for ethical dentistry.",
  "Got my dental implants done by Dr. Keshvi and I couldn’t be happier. From consultation to completion, everything was professional and painless. I highly recommend her to anyone seeking the best dental implant in Amritsar.",
  "I’ve had gum problems for years, and after just three visits, my gums are pink and healthy again. Best dental clinic in Amritsar for gum disease treatment.",
  "I got braces late in life, but never felt out of place here. Great support from the team. Best orthodontist in Amritsar for adult braces.",
  "Visited this clinic for full mouth rehabilitation, and I must say the results exceeded my expectations. The doctors were patient, the technology used was top-notch, and the final outcome was a complete smile transformation. Truly the best dental clinic in Amritsar."
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


