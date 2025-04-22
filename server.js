
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
  "I came from Ranjit Avenue, Amritsar for my dental implant at Dr. Mohindru's Medical & Dental Care. The entire experience was smooth and professional. Truly a trusted name for dental care.",
  "As someone staying near Gumtala Sub Urban, I found this clinic on Google while looking for a “reliable dentist near me.” I’m so glad I chose them for my smile makeover.",
  "Came from Sarhali Kalan during my visit from Australia to get full mouth implants. Dr. Keshvi Mohindru did an excellent job. If you're an NRI looking for the best dental implant in Amritsar, this is it.",
  "I’m from Tarn Taran Sahib, currently settled in Canada. Heard a lot about Dr. Mohindru's Medical & Dental Care and finally visited them for aligners. Excellent service and patient care.",
  "Visited from Ranjit Avenue for braces consultation with Dr. Ankur Mohindru. He’s definitely the top orthodontist in Amritsar. Very knowledgeable and kind.",
  "My family lives in Naushehra Pannuan and I came from the UK specifically for smile designing. Dr. Keshvi made it such a comfortable journey. One of the finest dental clinics near Tarn Taran.",
  "Being from Tarn Taran, I struggled to find an experienced dentist locally. I chose Dr. Mohindru’s clinic in Amritsar for zirconia crowns. Very hygienic and modern facility.",
  "I’m from Amritsar and wanted a second opinion for my braces. Dr. Ankur explained everything clearly. The aligner treatment is going great. Highly rated orthodontist in the region.",
  "I searched for “dental implant near Tarn Taran Sahib” and found Dr. Mohindru’s clinic. Had a flawless experience and they truly deliver what they promise.",
  "Living near Gumtala Sub Urban, I had always heard about this clinic. Visited for tooth extraction and the painless technique they use is commendable.",
  "My father, from Sarhali Kalan, got full dentures made here. The fit and comfort are excellent. The clinic is easily one of the top-rated dental clinics near Tarn Taran.",
  "We are NRIs from Canada visiting Tarn Taran Sahib. Found Dr. Mohindru’s Medical & Dental Care for my son’s orthodontic treatment. The results are impressive.",
  "I am from Naushehra Pannuan and traveled to Amritsar for a dental bridge. Very happy with Dr. Keshvi’s detailed work. Clinic is very clean and modern.",
  "From Ranjit Avenue, I had been searching for an expert dental clinic near me. Came across Dr. Mohindru's profile and opted for a smile designing package. Loved the final result.",
  "My family lives in Harike and we all visit Dr. Ankur for dental check-ups. He is a trusted orthodontist in Amritsar with a great attitude.",
  "Got my teeth capped at Dr. Mohindru's Medical & Dental Care. I’m from Tarn Taran and was referred by an NRI friend who got his treatment here during his India visit.",
  "I’m originally from Patti but settled in the UK. Came here for full mouth zirconia crowns. Great experience and excellent hygiene standards.",
  "Had gaps in my teeth and wanted aligner treatment. Living in Gumtala, Dr. Ankur’s clinic was just a short drive. One of the most professional orthodontic setups I've seen.",
  "I came from Amritsar city, specifically looking for Damon braces specialist. Dr. Ankur gave me detailed insights and flexible appointments. Very satisfied.",
  "Visited from Ranjit Avenue for a dental cleaning and whitening session. The place was very professional, and the equipment is top-notch.",
  "As an NRI from New Zealand, I was skeptical about getting implants in India. But Dr. Keshvi's work surpassed all expectations. Stayed at my aunt’s house in Sarhali Kalan.",
  "We live in Naushehra Pannuan and always prefer Dr. Mohindru’s clinic for any dental work. From kids to elders, everyone is satisfied.",
  "Traveled from Patti to Amritsar after reading reviews. The clinic ambiance, cleanliness, and personal care were amazing.",
  "From Tarn Taran Sahib, I had visited 3 other dentists before someone recommended Dr. Mohindru's Medical & Dental Care. Truly lives up to the praise.",
  "As someone born in Harike and now settled in the US, I visited India last month and had two implants done here. The quality matched international standards.",
  "My brother and I got our braces done here during our stay in Ranjit Avenue. Dr. Ankur is very kind and explains each step.",
  "Being from Amritsar, it’s a privilege to have such a skilled dental team in our city. I got my wisdom tooth extracted here — no pain, no hassle.",
  "From Gumtala Sub Urban, I searched for “top orthodontist in Amritsar” and ended up here. I’m in my 4th month of aligners now and already see great results.",
  "Dr. Keshvi restored my confidence with beautiful zirconia crowns. I live near Naushehra Pannuan and now my whole family visits here.",
  "From Sarhali Kalan, I needed someone reliable for my mother’s dentures. Dr. Mohindru’s clinic was exceptional in terms of care and patience.",
  "We’re based in Canada but originally from Patti. Every time we visit India, we ensure our dental work is done here. It's become our go-to place.",
  "I was visiting my aunt in Ranjit Avenue and got a scaling session done here. Clean environment, latest tech, and gentle care.",
  "Came from Tarn Taran for smile designing. The clinic is highly organized and they deliver what they promise.",
  "Had a dental emergency during my India trip. I was in Harike and rushed to Dr. Mohindru’s clinic. They handled it professionally.",
  "I’m from Gumtala, and I can confidently say this is the most advanced dental clinic near me. Their patient handling is excellent.",
  "Living in Sarhali Kalan, there aren't many dental options, so I chose this clinic in Amritsar. Very glad I did — had a great overall experience.",
  "From Naushehra Pannuan, I found this clinic through Google while searching for best dentist for dental implants near Amritsar. They truly live up to their reputation.",
  "We’re an NRI family from the UK with roots in Amritsar. My teenage daughter started her aligner treatment here and she’s loving the results so far.",
  "As a Canadian citizen, I expect high standards in healthcare. This clinic met every expectation. Best dental clinic in Amritsar for international patients.",
  "My 7-year-old had his first dental visit here. It was smooth and fun. Best dental clinic in Amritsar for pediatric care.",
  "They offer complete transparency in cost and treatment plan. I never felt misled. Best dental clinic in Amritsar for ethical dentistry.",
  "Got my dental implants done by Dr. Keshvi and I couldn’t be happier. From consultation to completion, everything was professional and painless. I highly recommend her to anyone seeking the best dental implant in Amritsar.",
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


