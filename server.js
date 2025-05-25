
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
  "Visited from New Zealand for zirconia crown replacement. Efficient, hygienic, and aesthetic — best dental implant in Amritsar.",
  "Pediatric dental care here is superb. My daughter didn’t even cry once during her extraction. Best dentist in Amritsar for kids.",
  "The use of 3D scanning and digital X-rays shows why this is the most advanced and best dental clinic in Amritsar.",
  "Got a complete oral health checkup and polishing. Felt fresh and clean. I now understand why it’s called the best dentist in Amritsar.",
  "My braces journey was smooth, comfortable, and result-oriented. All thanks to the best orthodontist in Amritsar, Dr. Ankur.",
  "Every treatment is explained in detail, and they offer multiple options. Best dental clinic in Amritsar for informed care.",
  "Teeth grinding issue resolved with a perfectly fitting night guard. They’re the best dental clinic in Amritsar for bite-related problems.",
  "Their smile design consultation was thorough and artistic. I now have the smile I always dreamed of. Best dentist in Amritsar for cosmetic work.",
  "Dr. Keshvi is meticulous with her work. My full mouth implants feel so natural now. Best dental implant in Amritsar for sure.",
  "Quick service, great results, and reasonable pricing — definitely the best dental clinic in Amritsar for all types of dental issues.",
  "You’ll find transparency, hygiene, and world-class care here. Best dental clinic in Amritsar by far!",
  "Got braces at 40 and still had a wonderful journey. Dr. Ankur is a gem and the best orthodontist in Amritsar for adults.",
  "Can’t believe how well my implants turned out. Dr. Keshvi is amazing — best dental implant expert in Amritsar!",
  "I underwent a full smile makeover here, and I can't believe the results. The clinic exceeded my expectations in both aesthetics and comfort. Absolutely the best dental clinic in Amritsar for cosmetic dentistry.",
  "From consultation to treatment, everything was seamless. I had multiple fillings, and each was color-matched so well. This place deserves to be called the best dentist in Amritsar.",
  "I visited from the UK to get full mouth dental implants done. Dr. Keshvi made the process so comfortable and stress-free. No doubt, this is the best dental implant clinic in Amritsar.",
  "Dr. Ankur fixed my misaligned teeth with Invisalign, and now I have a perfectly aligned smile. Truly the best orthodontist in Amritsar with a patient-centered approach.",
  "After months of hesitation, I finally went ahead with veneers, and I’m in love with my smile now. Best dentist in Amritsar for cosmetic treatments, hands down!",
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


