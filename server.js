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
  "Got my smile designed here. Truly the best dental clinic in Amritsar!",
  "Very professional service. My dental implant feels just like a real tooth!",
  "Painless tooth extraction done. Highly recommend this clinic.",
  "Best dentist in Amritsar! The entire treatment was smooth and effective.",
  "My full mouth implants were done perfectly. Life-changing experience!",
  "I was nervous about root canal, but the process was painless.",
  "Excellent capping treatment. My teeth look great now!",
  "Friendly staff and clean clinic. Will visit again.",
  "Dr. Ankur explained everything before the procedure. Very reassuring.",
  "Dr. Keshvi did an amazing job on my dental implants!",
  "I got zirconia crowns here. Best decision I ever made.",
  "After getting my Damon braces here, my smile looks fantastic!",
  "Dentures were customized perfectly. Best clinic in Amritsar for dental care!",
  "Very hygienic and professional place. Worth visiting for dental treatments.",
  "Teeth whitening gave me amazing results. Thank you!",
  "Best orthodontist in Amritsar. My braces journey was smooth.",
  "Gum treatment was effective. My gums feel much healthier now.",
  "Highly recommended for full mouth rehabilitation.",
  "Root canal treatment was quick and painless. Best dental clinic!",
  "The staff is friendly, and doctors are very knowledgeable.",
  "I got my Hollywood smile here. 10/10 experience!",
  "Dental extraction was done painlessly. Good experience overall.",
  "Very satisfied with my dental fillings. No more tooth pain!",
  "I traveled from Canada for my implants here. Worth it!",
  "As an NRI, I trust this clinic for my family's dental care.",
  "Affordable and best quality service. Definitely recommended!",
  "All procedures were explained properly before treatment.",
  "Clinic is well-equipped with modern technology. Impressed!",
  "Customized smile designing changed my confidence level.",
  "Doctor's expertise is unmatched. Best dentist in Amritsar!",
  "Dr. Keshvi is exceptionally skilled at smile transformations.",
  "Best dental implant experience I’ve ever had.",
  "They use advanced digital scanners for perfect fit crowns.",
  "Clinic ambiance is calming and spotless.",
  "Their Invisalign service is world-class. Highly satisfied!",
  "Fast and efficient root canal treatment. Zero discomfort.",
  "The most hygienic dental clinic in Amritsar I’ve seen.",
  "I had gum surgery here. Healing was fast and painless.",
  "Totally painless wisdom tooth removal. Amazing experience!",
  "Dr. Ankur gave great advice for post-brace maintenance.",
  "Laser teeth whitening results were immediate and lasting.",
  "Long overdue smile makeover done right here!",
  "Came from Australia. Best decision for my dental implants.",
  "They’re very transparent about pricing and procedures.",
  "Dental anxiety gone thanks to their caring team.",
  "Teeth cleaning was thorough and gentle.",
  "This is the best dental care I’ve received in India.",
  "Appreciated how they handled my child’s dental phobia.",
  "Filling work was seamless. Tooth looks natural.",
  "Top choice for NRI dental care in Amritsar.",
  "Flexible scheduling and minimum wait time. Loved it.",
  "Clinic was clean, staff was polite, service was quick.",
  "I love how natural my veneers look now!",
  "They handled my emergency with great care.",
  "Everything was explained step by step before treatment.",
  "Traveled from New Zealand. Outstanding hospitality.",
  "Their orthodontic team is knowledgeable and friendly.",
  "Braces were removed today. Couldn’t be happier!",
  "Referred by a friend. Now I’m referring others too.",
  "Five-star experience. Wouldn’t go anywhere else.",
  "Got teeth whitening done before my wedding. Perfect!",
  "My parents were treated here. Both are happy!",
  "They helped fix my bite and improve chewing comfort.",
  "Dr. Keshvi handled my entire treatment flawlessly.",
  "Teeth polishing session was relaxing!",
  "Even the X-ray process was modern and digital.",
  "Appreciated the clean and sanitized environment.",
  "Full mouth rehab changed my life for the better.",
  "I’ve tried 3 dentists before—this was the best.",
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


