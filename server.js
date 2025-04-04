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
  "The implants done here are indistinguishable from my real teeth. Dr. Keshvi is hands down the best dental implant specialist in Amritsar.",
  "Came here for full dentures for my mother. The fitting was precise, the materials used were high-quality, and the follow-up care was excellent. Best dental clinic in Amritsar for senior citizens.",
  "I wanted a smile that looked good but still natural. They delivered beyond expectations. Best cosmetic dentist in Amritsar by far.",
  "The Damon braces I received here completely transformed my teeth. My treatment was completed faster than expected, and the discomfort was minimal. I’ve visited clinics in Delhi and Chandigarh too, but the service and results here were unmatched. Best orthodontist in Amritsar!",
  "After years of hesitation, I finally opted for dental implants. The professionalism at this clinic made the entire process smooth. From consultation to final placement, it was all handled with care and precision.",
  "As a Canadian citizen, I expect high standards in healthcare. This clinic met every expectation. Best dental clinic in Amritsar for international patients.",
  "Staff is well-trained and responsive. I had an emergency swelling, and they handled it professionally. Best dentist in Amritsar for prompt care.",
  "I had a broken front tooth, and it was replaced with a zirconia crown. No one can tell the difference. Best dental implant clinic in Amritsar.",
  "The root canal was so smooth, I actually dozed off in the chair! That’s how painless and professional they are. Best dental clinic in Amritsar for endodontic care.",
  "Digital X-rays, intraoral cameras, and detailed consultation — it felt like a premium experience. Best dental clinic in Amritsar, technologically speaking.",
  "My 7-year-old had his first dental visit here. It was smooth and fun. Best dental clinic in Amritsar for pediatric care.",
  "Had gum reshaping done, and the results are aesthetically pleasing. The doctor has an eye for detail. Best dental clinic in Amritsar for laser treatments.",
  "I wanted Hollywood-style veneers, and the results were spot-on. Great finish, natural look. Best cosmetic dentist in Amritsar.",
  "I am recommending this place to everyone I know. Their dental work speaks for itself. Best dentist in Amritsar for honest service.",
  "My daughter had braces placed by Dr. Ankur, and the journey was fantastic. He explained every stage and made her feel comfortable. Now she smiles confidently, thanks to the best orthodontist in Amritsar.",
  "Emergency toothache during my Punjab visit led me here. Immediate relief and fantastic care. I now refer to them as the best dentist in Amritsar.",
  "They offer complete transparency in cost and treatment plan. I never felt misled. Best dental clinic in Amritsar for ethical dentistry.",
  "Had minor surgery for a cyst and everything was handled meticulously. Dr. Keshvi is the best dentist in Amritsar for surgical procedures.",
  "I recently moved back from Canada and was looking for a good dental clinic in Punjab. I am beyond impressed by the hygiene, professionalism, and attention to detail at this place. I got two dental implants, and they were done with precision and absolutely no pain. This is the only clinic I now trust for my family’s dental needs.",
  "Got my dental implants done by Dr. Keshvi and I couldn’t be happier. From consultation to completion, everything was professional and painless. I highly recommend her to anyone seeking the best dental implant in Amritsar.",
  "This is more than a clinic — it’s a place where your dental health is genuinely prioritized. I proudly call it the best dental clinic in Amritsar.",
  "My mom needed dentures, and we were unsure where to go. A friend suggested this clinic, and it was the best recommendation. The dentures fit her perfectly, and she’s finally smiling again. The staff treated her with so much care and patience. Truly the best dental clinic in Amritsar for elderly care.",
  "They handled my wisdom tooth surgery with such precision that I felt no pain at all. Best dental clinic in Amritsar for oral surgery.",
  "Braces were a breeze here. Every month’s adjustment was on time and well-managed. Dr. Ankur is undoubtedly the best orthodontist in Amritsar.",
  "The best part was that they respected my time. No unnecessary wait, no delays. Just great dental care. Best dental clinic in Amritsar, period.",
  "I went for smile designing and got veneers. The results were phenomenal! They took digital scans, showed me a mock-up, and delivered exactly what I saw in the preview. It's amazing to see such technology being used here in Amritsar. Easily the best smile designing clinic in Punjab.",
  "The zirconia crowns I received look and feel just like natural teeth. They were perfectly customized, and the fit was flawless. Best decision I made for my dental health.",
  "Underwent a smile designing procedure, and the transformation was incredible. The entire staff made me feel comfortable, and the clinic environment was calming. Easily the best dental clinic for cosmetic procedures in Amritsar.",
  "Dr. Keshvi is an expert in smile makeovers! She designed my smile exactly how I imagined it. The clinic is well-equipped, and the staff is so welcoming. It truly felt like I was being treated at an international facility. Best dental implant clinic in Amritsar without a doubt.",
  "My braces were taken off today, and my smile is unbelievable. The perfect alignment shows why Dr. Ankur is the best orthodontist in Amritsar.",
  "Came to this clinic from Melbourne for full mouth rehabilitation. From consultation to follow-up, everything was handled with utmost professionalism. My entire treatment was completed in three sittings, and I couldn’t be happier. Truly the best dental implant clinic in Amritsar for NRIs.",
  "As someone who has dental anxiety, I was terrified of root canal treatment. But the way the doctors here handled it, I felt zero pain and actually relaxed through the procedure. The equipment is advanced, and the hygiene standards are world-class. Best dentist in Amritsar for sure!",
  "I’ve had gum problems for years, and after just three visits, my gums are pink and healthy again. Best dental clinic in Amritsar for gum disease treatment.",
  "I got braces late in life, but never felt out of place here. Great support from the team. Best orthodontist in Amritsar for adult braces.",
  "After visiting several dental clinics in the UK and India, I finally found satisfaction here. The zirconia crowns I got from this clinic feel just like my natural teeth. They paid great attention to my bite alignment and overall comfort. Highly recommended for anyone looking for quality dental work in Amritsar.",
  "I was referred here by a friend for gum treatment, and I’m so glad I came. The bleeding and sensitivity I had for years were gone after just a few sessions. Excellent service and outstanding results.",
  "They handled my dental emergency with great care and attention. Within a few minutes of arriving, I was seen by the doctor and treatment started. Truly the best dental clinic in Amritsar for emergencies.",
  "I had been struggling with missing teeth for years, and visiting this clinic for full mouth dental implants was the best decision of my life. The doctors were extremely thorough and explained every step of the procedure. The implants look natural, and I can eat comfortably now. Definitely the best dental clinic in Amritsar!",
  "I came from the UK to get my dental crowns redone, and this clinic delivered beyond expectations. Clean facility, advanced equipment, and experienced doctors make this the best dental clinic in Amritsar for NRIs.",
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


