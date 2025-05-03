
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
  "Came from Sarhali Kalan during my visit from Australia to get full mouth implants. Dr. Keshvi Mohindru did an excellent job. If you're an NRI looking for the best dental implant in Amritsar, this is it.",
  "I’m from Tarn Taran Sahib, currently settled in Canada. Heard a lot about Dr. Mohindru's Medical & Dental Care and finally visited them for aligners. Excellent service and patient care.",
  "Being from Tarn Taran, I struggled to find an experienced dentist locally. I chose Dr. Mohindru’s clinic in Amritsar for zirconia crowns. Very hygienic and modern facility.",
  "Living near Gumtala Sub Urban, I had always heard about this clinic. Visited for tooth extraction and the painless technique they use is commendable.",
  "We are NRIs from Canada visiting Tarn Taran Sahib. Found Dr. Mohindru’s Medical & Dental Care for my son’s orthodontic treatment. The results are impressive.",
  "My family lives in Harike and we all visit Dr. Ankur for dental check-ups. He is a trusted orthodontist in Amritsar with a great attitude.",
  "Got my teeth capped at Dr. Mohindru's Medical & Dental Care. I’m from Tarn Taran and was referred by an NRI friend who got his treatment here during his India visit.",
  "I came from Amritsar city, specifically looking for Damon braces specialist. Dr. Ankur gave me detailed insights and flexible appointments. Very satisfied.",
  "Visited from Ranjit Avenue for a dental cleaning and whitening session. The place was very professional, and the equipment is top-notch.",
  "We live in Naushehra Pannuan and always prefer Dr. Mohindru’s clinic for any dental work. From kids to elders, everyone is satisfied.",
  "Traveled from Patti to Amritsar after reading reviews. The clinic ambiance, cleanliness, and personal care were amazing.",
  "From Tarn Taran Sahib, I had visited 3 other dentists before someone recommended Dr. Mohindru's Medical & Dental Care. Truly lives up to the praise.",
  "Being from Amritsar, it’s a privilege to have such a skilled dental team in our city. I got my wisdom tooth extracted here — no pain, no hassle.",
  "I was visiting my aunt in Ranjit Avenue and got a scaling session done here. Clean environment, latest tech, and gentle care.",
  "Came from Tarn Taran for smile designing. The clinic is highly organized and they deliver what they promise.",
  "Had a dental emergency during my India trip. I was in Harike and rushed to Dr. Mohindru’s clinic. They handled it professionally.",
  "I’m from Gumtala, and I can confidently say this is the most advanced dental clinic near me. Their patient handling is excellent.",
  "As a Canadian citizen, I expect high standards in healthcare. This clinic met every expectation. Best dental clinic in Amritsar for international patients.",
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


