
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
  "The Damon braces I had put in really changed my smile, and the process was much more comfortable than traditional braces. Highly recommend this clinic for orthodontic work.",
  "Got my bite correction treatment here after years of discomfort. The change is dramatic—I can eat and smile better now. Truly grateful to the team at this clinic.",
  "Traveled from Melbourne for my smile makeover. The attention to detail and patient care I received here was better than anything back home. Best dental clinic in Amritsar for NRIs hands down.",
  "My full mouth rehabilitation was done with extreme precision. Each implant and crown was perfectly aligned, and the aesthetics are flawless. This clinic sets a benchmark for quality dental care in Amritsar.",
  "Wisdom tooth extraction was done so smoothly, I didn’t even realize it was over. No swelling, no pain, just great expertise.",
  "Dr. Keshvi handled my smile design so beautifully that I now love taking pictures again. Highly artistic and professional. Definitely the best dentist in Amritsar for cosmetic work.",
  "Each visit to this clinic is pleasant. Whether it's a routine cleaning or a complex procedure, the care and hygiene standards are consistently excellent.",
  "Dr. Ankur took the time to explain all my treatment options and helped me make an informed decision. His approach is honest and patient-focused, making him the best dentist in Amritsar in my view.",
  "I had a complete dental makeover at this clinic and the results are just unbelievable. From smile designing to implants, every step was handled with utmost professionalism. Easily the best dental clinic in Amritsar!",
  "Dr. Ankur took the time to explain all the steps before starting my braces treatment. I appreciated the transparency and care. The results are already showing and I couldn't be happier!",
  "Being an NRI, I was skeptical about dental care in India. But after visiting this clinic in Amritsar, I can confidently say it offers world-class services. My dental implants were done perfectly and painlessly.",
  "I came all the way from Australia to get full mouth zirconia crowns done here. I’m extremely happy with the precision and aesthetics. Truly the best dental implant in Amritsar.",
  "The clinic is clean, staff are professional, and the results of my root canal treatment exceeded expectations. It’s rare to find such a smooth and painless experience. Highly recommend for anyone with dental issues.",
  "Dr. Keshvi handled my smile design treatment so beautifully. She paid attention to every detail and the final look has boosted my confidence tremendously. This is definitely the best dentist in Amritsar!",
  "They handled my mother's dentures with such patience and care. The fit and finish are perfect, and she’s so comfortable wearing them now. We’re grateful for the personalized approach this clinic offers.",
  "I was nervous about getting dental implants, but the entire procedure was surprisingly painless. From consultation to aftercare, everything was well-organized and smooth. Top dental implant service in Amritsar!",
  "The braces treatment here was affordable, efficient, and very professionally done. The doctors were supportive through each visit and explained everything clearly. Highly recommend for anyone looking for the best orthodontist in Amritsar.",
  "If you're looking for the best dental clinic in Amritsar, look no further. The hospitality, hygiene standards, and advanced technology used here are unmatched. I came for cleaning and ended up signing up for a full smile transformation.",
  "The team here was so understanding and supportive. I came in with extreme dental anxiety, but their calm and professional approach made the entire procedure feel effortless. My smile is brighter and healthier, and I couldn’t be more thankful.",
  "After years of covering my teeth while laughing, I finally have the confidence to smile openly. The smile designing service was top-notch, with great attention to detail. This is truly the best dental clinic in Amritsar.",
  "I visited this clinic for a second opinion and ended up choosing them for my full mouth rehabilitation. Their approach was transparent, and the results were beyond my expectations. The dentists here know what they’re doing, and they do it with compassion.",
  "Had a fantastic experience getting my teeth aligned through Damon braces. The transformation was smoother than I anticipated. I'm glad I found the best orthodontist in Amritsar!",
  "Being an NRI from the UK, I was skeptical about getting dental implants in India, but this clinic changed my perspective entirely. The level of hygiene, technology, and expertise was better than many places I’ve visited abroad.",
  "I walked into the clinic unsure about what I needed, but walked out with a clear treatment plan and a lot of confidence. They don’t upsell or pressure you. They simply provide the best dental care in Amritsar."
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


