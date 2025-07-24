
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
  "My Invisalign treatment at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, was an outstanding experience. Dr. Ankur provided a thorough consultation and explained the entire process in great detail. The Invisalign aligners were virtually invisible and very comfortable to wear. The treatment was smooth, and the progress was evident within a short period. Now, my teeth are perfectly aligned, and my smile has never looked better. Dr. Ankur's expertise and patient-centric approach made the entire journey pleasant and stress-free. I highly recommend him as the best dentist in Amritsar for Invisalign treatment.",
  "I had an amazing experience with aligners at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, under the care of Dr. Ankur. From the initial consultation to the final result, Dr. Ankur was professional, knowledgeable, and attentive. The aligners were custom-made to fit my teeth perfectly, and the treatment plan was clear and easy to follow. The progress was visible within a few weeks, and my teeth are now beautifully aligned. Dr. Ankur's expertise and commitment to patient care made the entire process smooth and enjoyable. I highly recommend him as the best dentist in Amritsar.",
  "My experience with Invisalign at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, has been fantastic. Dr. Ankur provided a detailed consultation and ensured that I understood every aspect of the treatment. The Invisalign aligners were comfortable and easy to wear, and the progress was noticeable within a few weeks. Dr. Ankur's attention to detail and commitment to patient care were evident throughout the treatment. Now, my teeth are perfectly aligned, and I couldn't be happier with the results. I highly recommend Dr. Ankur, the best dentist in Amritsar, for anyone considering Invisalign.",
  "I had a great experience with braces at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur was very professional and attentive throughout the treatment. He explained each step and ensured that I was comfortable with the treatment plan. The braces were fitted perfectly, and the adjustments were smooth and painless. My teeth are now perfectly aligned, and I couldn't be happier with the results. Dr. Ankur's expertise and dedication make him the best dentist in Amritsar. I highly recommend him for anyone needing braces.",
  "Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, provided exceptional care during my aligners treatment. He was very attentive and ensured that I was comfortable throughout the process. The aligners were custom-made to fit my teeth perfectly, and the progress was noticeable within a few weeks. Dr. Ankur's professionalism and dedication to patient care were evident throughout the treatment. My teeth are now beautifully aligned, and I am extremely satisfied with the results. I highly recommend Dr. Ankur, the best dentist in Amritsar, for aligners.",
  "I am extremely happy with my Invisalign treatment at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur provided a detailed treatment plan and ensured that I was comfortable with each step. The Invisalign aligners were virtually invisible and very comfortable to wear. The progress was quick, and my teeth are now perfectly aligned. Dr. Ankur's professionalism and attention to detail made the entire process smooth and enjoyable. I highly recommend him as the best dentist in Amritsar for Invisalign.",
  "I had a great experience getting braces at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur was very professional and attentive throughout the process. He explained each step and ensured that I was comfortable with the treatment plan. The braces were fitted perfectly, and the adjustments were smooth and painless. My teeth are now perfectly aligned, and I couldn't be happier with the results. Dr. Ankur's expertise and dedication make him the best dentist in Amritsar. Highly recommend him for anyone needing braces.",
  "Choosing Dr. Ankur for my aligners treatment at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, was a fantastic decision. The aligners were comfortable and easy to use, and the progress was visible within a few weeks. Dr. Ankur was very attentive and ensured that I was comfortable throughout the treatment. My teeth are now beautifully aligned, and I am extremely satisfied with the results. Dr. Ankur's professionalism and dedication to patient care make him the best dentist in Amritsar. Highly recommend his services.",
  "My experience with Invisalign at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, has been outstanding. Dr. Ankur provided a thorough consultation and explained the entire treatment process in detail. The Invisalign aligners were virtually invisible and very comfortable to wear. The progress was noticeable within a few weeks, and now my teeth are perfectly aligned. Dr. Ankur's expertise and patient-centric approach made the entire journey pleasant and stress-free. I highly recommend him as the best dentist in Amritsar for Invisalign treatment.",
  "I had a great experience getting braces at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur was very professional and attentive throughout the process. He explained each step and ensured that I was comfortable with the treatment plan. The braces were fitted perfectly, and the adjustments were smooth and painless. My teeth are now perfectly aligned, and I couldn't be happier with the results. Dr. Ankur's expertise and dedication make him the best dentist in Amritsar. Highly recommend him for anyone needing braces.",
  "Choosing Dr. Ankur for my aligners at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, was a fantastic decision. The aligners were custom-made to fit my teeth perfectly, and the treatment plan was explained in detail. Dr. Ankur was always available to answer any questions and made sure I was comfortable throughout the process. The aligners were easy to use and resulted in a significant improvement in my teeth alignment. I am extremely satisfied with the results and highly recommend Dr. Ankur, the best dentist in Amritsar, for aligners.",
  "My Invisalign journey with Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, has been incredible. Dr. Ankur provided a detailed treatment plan and ensured that I was comfortable with each step. The Invisalign aligners were virtually invisible and very comfortable to wear. The progress was noticeable within a few weeks, and now my teeth are perfectly aligned. Dr. Ankur's professionalism and expertise made the entire process smooth and enjoyable. I highly recommend him as the best dentist in Amritsar for Invisalign treatment.",
  "Getting braces was a big decision, and I am glad I chose Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur was very patient and explained everything clearly. The braces were fitted with precision, and the regular adjustments were always done professionally. The entire treatment was smooth, and I experienced minimal discomfort. The results are amazing – my teeth are straight, and my smile looks great. Dr. Ankur is truly the best dentist in Amritsar, and I highly recommend him for braces.",
  "I opted for Invisalign treatment with Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, and the results have been fantastic. Dr. Ankur was very knowledgeable and provided a detailed explanation of the treatment process. The Invisalign aligners were comfortable and almost invisible, making them perfect for my lifestyle. The progress was quick, and my teeth are now perfectly aligned. Dr. Ankur's expertise and professionalism made the entire process smooth and enjoyable. I highly recommend him as the best dentist in Amritsar for Invisalign.",
  "Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, provided exceptional care during my braces treatment. He was very attentive and ensured that I was comfortable throughout the process. The braces were fitted perfectly, and the regular adjustments were always done with care. The treatment was completed on time, and the results are amazing – my teeth are straight, and my smile is beautiful. Dr. Ankur's expertise and dedication make him the best dentist in Amritsar. I highly recommend him for braces.",
  "I am extremely happy with my aligners treatment at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur provided a detailed treatment plan and ensured that I was comfortable with each step. The aligners were custom-made to fit my teeth perfectly and were very comfortable to wear. The progress was visible within a few weeks, and now my teeth are beautifully aligned. Dr. Ankur's professionalism and attention to detail made the entire process smooth and enjoyable. I highly recommend him as the best dentist in Amritsar for aligners.",
  "My experience with Invisalign at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, has been wonderful. Dr. Ankur provided a thorough explanation of the treatment process and ensured that I was comfortable throughout. The Invisalign aligners were virtually invisible and very comfortable to wear. The progress was quick, and my teeth are now perfectly aligned. Dr. Ankur's expertise and professionalism made the entire process smooth and enjoyable. I highly recommend him as the best dentist in Amritsar for Invisalign treatment.",
  "I had a great experience getting braces at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur was very professional and attentive throughout the process. He explained each step and ensured that I was comfortable with the treatment plan. The braces were fitted perfectly, and the adjustments were smooth and painless. My teeth are now perfectly aligned, and I couldn't be happier with the results. Dr. Ankur's expertise and dedication make him the best dentist in Amritsar. Highly recommend him for anyone needing braces.",
  "I am extremely happy with my aligners treatment at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur provided a detailed treatment plan and ensured that I was comfortable with each step. The aligners were custom-made to fit my teeth perfectly, and the progress was noticeable within a few weeks. Dr. Ankur's professionalism and dedication to patient care were evident throughout the treatment. My teeth are now beautifully aligned, and I am very satisfied with the results. I highly recommend Dr. Ankur, the best dentist in Amritsar, for aligners.",
  "Choosing Invisalign with Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, was one of the best decisions I made for my dental health. Dr. Ankur provided a thorough consultation and explained the entire treatment process in great detail. The Invisalign aligners were comfortable and easy to wear, and the progress was noticeable within a few weeks. My teeth are now perfectly aligned, and my smile has never looked better. Dr. Ankur's expertise and dedication to patient care made the entire process smooth and enjoyable. I highly recommend him as the best dentist in Amritsar for Invisalign treatment.",
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


