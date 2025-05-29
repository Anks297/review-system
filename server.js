
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
  "Dr. Keshvi Mohindru handled my teeth cleaning and whitening treatment with precision and care. My smile has never looked better. I’d recommend this best dental clinic in Amritsar to everyone!",
  "I got dentures done by Dr. Ankur, and they fit perfectly. He took his time to ensure I was comfortable and informed. Dr. Mohindru's Medical & Dental Care is truly the best dental clinic in Amritsar for quality care!",
  "Dr. Keshvi helped me with my gum treatment, and I’m so impressed with the results. The care and expertise make her the best dentist in Amritsar. I feel fortunate to have found such a skilled dentist.",
  "Had my capping treatment done by Dr. Ankur, and I couldn't be happier with the result. The clinic is clean, and the staff is courteous. Truly the best dental clinic in Amritsar!",
  "Dr. Keshvi Mohindru did a fantastic job on my full mouth dental implants. She was gentle and thorough, making the whole experience comfortable. I can confidently say this is the best dental clinic in Amritsar.",
  "Dr. Ankur Mohindru did a remarkable job with my wisdom tooth extraction. The procedure was quick, painless, and professional. Best dentist in Amritsar by far! I’d recommend him to anyone with dental issues.",
  "Had an amazing experience with Dr. Keshvi for my dental implant treatment. She explained everything so clearly, and I felt very comfortable. I can confidently say this is the best dental clinic in Amritsar for implants and more!",
  "Dr. Ankur at Dr. Mohindru's Medical & Dental Care is exceptional. I got braces and the results are fantastic. The clinic is clean, and the service is prompt. Definitely the best dental clinic in Amritsar for orthodontics!",
  "I had a wonderful experience with smile designing done by Dr. Keshvi. She truly cares about her patients, and her work speaks for itself. Best dentist in Amritsar for anyone looking to enhance their smile!",
  "Dr. Ankur’s expertise in tooth extraction is unmatched. I felt no pain, and the recovery was quick. Very professional and thorough. He’s truly the best dentist in Amritsar for a reason.",
  "Visited Dr. Keshvi for denture fitting, and the results are perfect. She took her time to ensure everything was comfortable. Dr. Mohindru’s Medical & Dental Care is truly the best dental clinic in Amritsar.",
  "Dr. Ankur Mohindru is a great dentist! My teeth cleaning and whitening sessions were thorough, and the results are amazing. If you want the best dentist in Amritsar, this is the place to go!",
  "Dr. Keshvi Mohindru did my capping treatment with precision. I’m extremely happy with the results and highly recommend Dr. Mohindru’s Medical & Dental Care—truly the best dental clinic in Amritsar.",
  "I recently got root canal treatment from Dr. Ankur, and he did an excellent job. No pain and the process was smooth. He’s undoubtedly the best dentist in Amritsar for root canals!",
  "Dr. Keshvi took care of my gum treatment and was so gentle throughout. My gums feel so much healthier. The clinic’s facilities are modern, making it the best dental clinic in Amritsar for any dental care."
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


