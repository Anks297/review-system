
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
  "Visited Dr. Mohindru's Medical & Dental Care for a root canal with Dr. Keshvi Mohindru. I had zero pain, and she explained every step with patience. Truly the best dental clinic in Amritsar. So grateful to have found them!",
  "If you need a dental implant specialist, go to Dr. Ankur. The procedure was seamless, and the clinic uses the latest technology. I can say without a doubt he's the best dentist in Amritsar!",
  "Dr. Ankur Mohindru is an incredible dentist! My dental implant procedure was smooth, and he made me feel at ease throughout. Truly the best dentist in Amritsar for implants!",
  "I visited Dr. Keshvi Mohindru for a smile makeover. The results are amazing, and I get compliments all the time. Best dental clinic in Amritsar without a doubt!",
  "Dr. Ankur handled my wisdom tooth extraction perfectly. The process was fast, and I experienced minimal discomfort. Highly recommend him if you're looking for the best dentist in Amritsar.",
  "Dr. Keshvi’s expertise in denture fitting is impressive. I’m really happy with the fit and comfort of my new dentures. This clinic truly deserves to be called the best dental clinic in Amritsar.",
  "I needed a root canal and was worried about pain, but Dr. Ankur’s skills were excellent! The procedure was smooth, and I had no discomfort. Best dentist in Amritsar for root canal treatments!",
  "Dr. Keshvi did my teeth whitening and the results are fantastic! My teeth look bright and clean. Great experience at the best dental clinic in Amritsar.",
  "I had a crown put in by Dr. Ankur, and he did an outstanding job. It looks so natural, and I can’t even tell it’s there. Best dentist in Amritsar for capping treatments.",
  "Dr. Keshvi was so gentle during my gum treatment. She made sure I was comfortable and explained everything clearly. Best dental clinic in Amritsar for thorough care.",
  "Got my braces done by Dr. Ankur, and the results have been life-changing. The clinic is well-organized, and he’s so professional. Highly recommend the best dentist in Amritsar!",
  "Dr. Keshvi is amazing at dental cleaning! My teeth feel so fresh, and the whole experience was relaxing. Best dental clinic in Amritsar for dental hygiene services.",
  "Dr. Ankur is the one to go to for dental implants. I’m so happy with how they turned out, and I appreciate his dedication. He’s definitely the best dentist in Amritsar for implants.",
  "I visited Dr. Keshvi for tooth whitening, and the results are stunning. My smile is brighter, and I couldn’t be happier. Dr. Mohindru's Medical & Dental Care is the best dental clinic in Amritsar.",
  "Dr. Ankur was fantastic during my dental extraction. It was painless, and he made sure I was comfortable. Best dentist in Amritsar for extractions.",
  "Dr. Keshvi performed my crown placement, and it feels great. The staff is welcoming, and the clinic is very clean. I would recommend this as the best dental clinic in Amritsar.",
  "Dr. Ankur treated my cavity and did a fantastic job. The procedure was quick, and I felt no discomfort. Definitely the best dentist in Amritsar for filling treatments!",
  "I was impressed by Dr. Keshvi’s work on my teeth shaping. The results look natural and beautiful. Best dental clinic in Amritsar if you want detailed work!",
  "Dr. Ankur helped me with my dental pain, and he was very kind and thorough in his examination. Really the best dentist in Amritsar if you need immediate relief!",
  "I did my smile correction with Dr. Keshvi, and it was a wonderful experience. I’m so happy with the results. This is definitely the best dental clinic in Amritsar for cosmetic dentistry!"
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


