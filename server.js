
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
  "My full mouth rehabilitation was done with extreme precision. Each implant and crown was perfectly aligned, and the aesthetics are flawless. This clinic sets a benchmark for quality dental care in Amritsar.",
  "After visiting several dentists, I finally found the best dentist in Amritsar who understood my concerns. The root canal treatment was painless and professional.",
  "Dr. Keshvi transformed my smile through dental implants. Her expertise and use of advanced equipment make her one of the best dental implant specialists in Amritsar.",
  "I was visiting from the UK and needed urgent dental care. This clinic not only accommodated me immediately but also provided the best dental treatment I’ve ever had in India.",
  "Best dental clinic in Amritsar for NRIs! The zirconia crowns I got here are perfect in every way. Highly recommended for those looking for international standards.",
  "Had a full mouth rehabilitation done here. The results are phenomenal and worth every rupee. Truly the best dentist in Amritsar for major dental makeovers.",
  "My dental implants were done flawlessly. The precision, cleanliness, and care provided justify why this is the best dental implant clinic in Amritsar.",
  "From consultation to treatment, everything was top-notch. The clinic uses the latest technology and deserves its reputation as the best dental clinic in Amritsar.",
  "After years of hesitation, I went in for orthodontic treatment. Dr. Ankur is without a doubt the best orthodontist in Amritsar. Friendly, skilled, and results-driven.",
  "Painless wisdom tooth removal and excellent follow-up care. The entire staff was supportive, and the clinic is definitely one of the best in Amritsar.",
  "For me, this is the best dental implant clinic in Amritsar. My bite feels natural and I can eat without any discomfort again.",
  "Extremely satisfied with the root canal and capping done here. The best dentist in Amritsar for conservative treatments without overcharging.",
  "The Damon braces I got here were practically invisible and worked like magic. Highly recommend this place for the best orthodontist in Amritsar.",
  "Had multiple fillings done and each one looks and feels natural. Undoubtedly the best dental clinic in Amritsar for restorative treatments.",
  "The best dental implant in Amritsar was done here by Dr. Keshvi. She is highly skilled and very gentle. I had zero pain during the procedure.",
  "If you’re an NRI looking for quality dental care, this is the place. From sterilization to final results, it’s the best dental clinic in Amritsar.",
  "I got my braces removed after 18 months and I can’t stop smiling. Thanks to the best orthodontist in Amritsar, my teeth look perfect!",
  "If you’re nervous about dental treatments, this is the place for you. Their compassionate approach makes them the best dentist in Amritsar.",
  "Traveled from Australia just to get my smile corrected here. Worth every bit of travel and money. The best dental clinic in Amritsar, hands down.",
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


