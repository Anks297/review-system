
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
  "Getting dental implants at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, was one of the best decisions I've made for my oral health. From the first consultation, Dr. Ankur made me feel at ease by thoroughly explaining the procedure and what to expect. The surgery was smooth, and the recovery was much quicker than I anticipated. The implants are secure and look just like natural teeth. Dr. Ankur's expertise and gentle approach have made this experience very positive. I highly recommend him to anyone considering dental implants, as he is the best dentist in Amritsar.",
  "I have always been self-conscious about my smile, but after undergoing smile designing with Dr. Keshvi at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, I can confidently say that I love my smile now. Dr. Keshvi was very patient and listened to all my concerns. She created a customized treatment plan that addressed every issue I had with my teeth. The results are simply stunning. My teeth are now perfectly aligned and brighter than ever. I receive compliments all the time, and it has truly boosted my self-esteem. Thank you, Dr. Keshvi, the best dentist in Amritsar!",
  "I was dreading my dental extraction, but Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, made it a surprisingly pleasant experience. He was very calm and reassuring, explaining each step before proceeding. The actual extraction was quick and virtually painless. I followed his post-procedure care instructions and had a smooth recovery with minimal discomfort. Dr. Ankur’s gentle handling and professionalism were greatly appreciated. I would recommend him to anyone needing dental work, as he is the best dentist in Amritsar.",
  "My experience with capping treatment at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, was outstanding, thanks to Dr. Keshvi. I had several damaged teeth that needed caps, and she handled everything with such precision and care. The new caps fit perfectly and match my natural teeth, enhancing both the function and appearance of my smile. The entire process was seamless, from the initial consultation to the final fitting. Dr. Keshvi’s expertise and attention to detail are commendable. She is truly the best dentist in Amritsar.",
  "Undergoing full mouth dental implants with Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, was a life-changing experience. After losing several teeth, I was struggling with eating and speaking properly. Dr. Ankur's detailed explanation and professional approach gave me confidence. The procedure was extensive but went smoothly, and the results are beyond my expectations. The implants are sturdy and look natural. This transformation has significantly improved my quality of life. I am extremely grateful to Dr. Ankur for his exceptional work and consider him the best dentist in Amritsar.",
  "I recently received dentures from Dr. Keshvi at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, and I am extremely satisfied with the results. Dr. Keshvi was very understanding and took great care to ensure that the dentures fit perfectly and comfortably. The process was smooth and stress-free. The new dentures have restored my ability to eat and speak properly, and they look very natural. My confidence has significantly improved, and I am grateful to Dr. Keshvi for her excellent care and expertise. She is the best dentist in Amritsar.",
  "Choosing Dr. Ankur for my dental implants at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, was the best decision I made. The procedure was explained thoroughly, and the surgery was done with great precision. The implants feel like my natural teeth, and I have had no issues since the procedure. Dr. Ankur's professionalism and expertise made the entire experience stress-free. I highly recommend his services to anyone in need of dental implants. He is the best dentist in Amritsar.",
  "Dr. Keshvi has given me a smile makeover that I could only dream of. Her expertise in smile designing at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, is unparalleled. She was attentive to my needs and designed a plan that addressed all my dental concerns. The results are phenomenal, and I am constantly receiving compliments on my new smile. This transformation has boosted my confidence tremendously. I am thankful to Dr. Keshvi for her outstanding work. She is truly the best dentist in Amritsar.",
  "I had a severely infected tooth that required extraction, and Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, was recommended to me. The procedure was quick and virtually painless. Dr. Ankur's calm demeanor and professional approach made the entire process stress-free. The aftercare instructions were clear, and I had a smooth recovery. I am grateful for his excellent service and would highly recommend him for any dental needs. He is the best dentist in Amritsar.",
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


