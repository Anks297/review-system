
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
  "From implants to capping, I’ve had multiple procedures done here. The consistency in quality proves they are the best dental clinic in Amritsar.",
  "Pediatric dental care here is superb. My daughter didn’t even cry once during her extraction. Best dentist in Amritsar for kids.",
  "You’ll find transparency, hygiene, and world-class care here. Best dental clinic in Amritsar by far!",
  "Can’t believe how well my implants turned out. Dr. Keshvi is amazing — best dental implant expert in Amritsar!",
  "I underwent a full smile makeover here, and I can't believe the results. The clinic exceeded my expectations in both aesthetics and comfort. Absolutely the best dental clinic in Amritsar for cosmetic dentistry.",
  "From consultation to treatment, everything was seamless. I had multiple fillings, and each was color-matched so well. This place deserves to be called the best dentist in Amritsar.",
  "I visited from the UK to get full mouth dental implants done. Dr. Keshvi made the process so comfortable and stress-free. No doubt, this is the best dental implant clinic in Amritsar.",
  "I had badly stained teeth due to smoking. Their teeth whitening procedure restored my confidence. Without a doubt, the best dental clinic in Amritsar."
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


