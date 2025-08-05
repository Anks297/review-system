
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
"I’m from Naushehra Pannuan and took my daughter to Dr. Mohindru for her teeth braces. The results have been wonderful, and we opted for ceramic braces. Dr. Ankur is very humble and one of the best orthodontists in Amritsar without doubt.",
  "Being from Sarhali Kalan, it’s hard to find a good dental clinic nearby. I travelled to Dr. Mohindru's clinic and it was worth it. Got a root canal done with no pain. Dr. Ankur is very soft-spoken and explains everything well. Best dentist near Sarhali Kalan.",
  "I came from Dubai to get my front tooth fixed which broke in an accident. Dr. Mohindru gave me a zirconia crown and it looks just like my natural tooth. Such a genuine and experienced doctor. Truly the best dental clinic in Amritsar for NRIs.",
  "I came from Canada for a short visit and had only 10 days to complete my dental work. Dr. Mohindru planned everything so well – scaling, fillings, and whitening – all done on time. The best dentist in Amritsar for NRIs with limited time.",
  "Visited Dr. Mohindru's Dental Care from Harike for a smile makeover. I got veneers on my front teeth. The change is so natural and beautiful. If you’re looking for cosmetic dental treatment in Amritsar, this is the place to go.",
  "Got my wisdom tooth extraction done by Dr. Mohindru. I was very scared initially, but the procedure was quick and painless. The clinic maintains top hygiene standards. One of the best oral surgeons in Amritsar.",
  "I had bleeding gums and visited Dr. Mohindru’s clinic in Amritsar on a friend’s recommendation. Got my deep cleaning and laser gum treatment done. The staff was very polite, and Dr. Ankur Mohindru gave a perfect diagnosis. Easily the best dentist in Amritsar for gum problems.",
  "I’m an NRI from the US and my grandfather needed full-mouth dentures. Dr. Mohindru treated him with so much care and patience. The fitting was perfect. I can say this is the most experienced dental clinic in Amritsar for senior citizens.",
  "I came from Canada to visit my family in Amritsar and had a wonderful experience at Dr. Mohindru’s Medical & Dental Care. I got my teeth cleaning and whitening done. The clinic is very modern, and Dr. Ankur Mohindru is truly the best dentist in Amritsar.",
  "I was visiting from the UK and had severe tooth pain. I visited Dr. Mohindru’s Medical & Dental Care for a painless root canal. Dr. Ankur is very skilled and polite. This is definitely the best dental clinic in Amritsar.",
  "I am from Tarn Taran and got my dental implants done at Dr. Mohindru’s Dental Care. The entire process was smooth, and the results are fantastic. If you are searching for the best dentist near Tarn Taran, this is the right place.",
  "As an NRI visiting from Australia, I got my wisdom tooth removed at Dr. Mohindru’s Medical & Dental Care. The procedure was painless, and the clinic has world-class facilities. Best dental clinic in Amritsar for sure!",
  "I had missing teeth for years, but Dr. Mohindru gave me fixed teeth with dental bridges. I am from Patti, and I can proudly say this is the best dentist near Patti.",
  "My mother needed dentures, and we went to Dr. Mohindru’s Dental Care. The entire process was comfortable, and she is very happy with the results. The best dental clinic in Amritsar for elderly patients.",
  "I travelled from the USA for my aligner treatment at Dr. Mohindru’s Medical & Dental Care. Dr. Ankur Mohindru is very professional and experienced. Truly the best dentist in Amritsar for braces and aligners.",
];

app.get('/get-review', (req, res) => {
  if (reviews.length === 0) {
    return res.json({ review: "No reviews left" });
  }
  const index = Math.floor(Math.random() * reviews.length);
  const selected = reviews[index];
  res.json({ review: selected }); // Removed the splice line
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


