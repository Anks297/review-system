
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
  "Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, provided exceptional care during my aligners treatment. He was very attentive and ensured that I was comfortable throughout the process. The aligners were custom-made to fit my teeth perfectly, and the progress was noticeable within a few weeks. Dr. Ankur's professionalism and dedication to patient care were evident throughout the treatment. My teeth are now beautifully aligned, and I am extremely satisfied with the results. I highly recommend Dr. Ankur, the best dentist in Amritsar, for aligners.",
  "I had a great experience getting braces at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur was very professional and attentive throughout the process. He explained each step and ensured that I was comfortable with the treatment plan. The braces were fitted perfectly, and the adjustments were smooth and painless. My teeth are now perfectly aligned, and I couldn't be happier with the results. Dr. Ankur's expertise and dedication make him the best dentist in Amritsar. Highly recommend him for anyone needing braces.",
  "My experience with Invisalign at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, has been outstanding. Dr. Ankur provided a thorough consultation and explained the entire treatment process in detail. The Invisalign aligners were virtually invisible and very comfortable to wear. The progress was noticeable within a few weeks, and now my teeth are perfectly aligned. Dr. Ankur's expertise and patient-centric approach made the entire journey pleasant and stress-free. I highly recommend him as the best dentist in Amritsar for Invisalign treatment.",
  "Getting braces was a big decision, and I am glad I chose Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur was very patient and explained everything clearly. The braces were fitted with precision, and the regular adjustments were always done professionally. The entire treatment was smooth, and I experienced minimal discomfort. The results are amazing – my teeth are straight, and my smile looks great. Dr. Ankur is truly the best dentist in Amritsar, and I highly recommend him for braces.",
  "I opted for Invisalign treatment with Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, and the results have been fantastic. Dr. Ankur was very knowledgeable and provided a detailed explanation of the treatment process. The Invisalign aligners were comfortable and almost invisible, making them perfect for my lifestyle. The progress was quick, and my teeth are now perfectly aligned. Dr. Ankur's expertise and professionalism made the entire process smooth and enjoyable. I highly recommend him as the best dentist in Amritsar for Invisalign.",
  "My experience with Invisalign at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, has been wonderful. Dr. Ankur provided a thorough explanation of the treatment process and ensured that I was comfortable throughout. The Invisalign aligners were virtually invisible and very comfortable to wear. The progress was quick, and my teeth are now perfectly aligned. Dr. Ankur's expertise and professionalism made the entire process smooth and enjoyable. I highly recommend him as the best dentist in Amritsar for Invisalign treatment.",
  "Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, has changed my life with his excellent dental implant work. From the moment I walked into the clinic, I felt at ease. The procedure was explained thoroughly, and the surgery was painless. The implants are indistinguishable from my natural teeth. I highly recommend Dr. Ankur, the best dentist in Amritsar, for dental implants.",
  "I recently received dentures from Dr. Keshvi at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, and the experience was fantastic. Dr. Keshvi was very patient and took the time to ensure that the dentures were a perfect fit. She explained the entire process and answered all my questions, which made me feel at ease. The dentures are comfortable and look very natural. They have made a significant difference in my ability to eat and speak. I am extremely satisfied with the care and service provided by Dr. Keshvi, who is truly the best dentist in Amritsar.",
  "I had been struggling with missing teeth for a while and finally decided to get dental implants. Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, made the entire process seamless. From the initial consultation to the final fitting, everything was handled professionally. The implants look and feel natural. I'm very pleased with the outcome. Truly, Dr. Ankur is the best dentist in Amritsar.",
  "My experience with Dr. Keshvi for smile designing at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, has been wonderful. She listened to all my concerns and created a treatment plan that suited my needs perfectly. The procedures were done with great care, and I am thrilled with the new look of my smile. The confidence it has given me is immeasurable. Thank you, Dr. Keshvi, the best dentist in Amritsar.",
  "Having a tooth extraction was a daunting thought, but Dr. Ankur at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, made it surprisingly easy. He explained the procedure in detail and ensured I was comfortable throughout. The extraction itself was quick and virtually painless. The follow-up care was excellent, with clear instructions that helped me recover swiftly. I highly recommend Dr. Ankur, the best dentist in Amritsar, for any dental needs.",
  "I recently had my teeth capped by Dr. Keshvi at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, and the results are fantastic. The caps look natural and have greatly improved my oral health. Dr. Keshvi was meticulous in her work, ensuring that the fit was perfect and that I was comfortable throughout the process. Her attention to detail and professionalism are commendable. She is truly the best dentist in Amritsar.",
  "After losing several teeth, I opted for full mouth dental implants. Dr. Ankur's expertise in this area is remarkable. The entire process, though extensive, was managed efficiently and with minimal discomfort. The implants are sturdy and look very natural. This procedure has significantly improved my quality of life, and I am grateful to Dr. Ankur and his team at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. He is the best dentist in Amritsar.",
  "Getting dentures can be a life-changing decision, and I'm glad I chose Dr. Keshvi at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, for this journey. She was very understanding and patient, explaining every step of the process. The final product is comfortable and fits perfectly. I can now eat and speak without any issues, and my confidence has soared. Dr. Keshvi's care and attention made all the difference. She is the best dentist in Amritsar.",
  "Dr. Ankur's approach to dental extraction is highly professional and compassionate. I was very nervous about the procedure, but he explained everything clearly and ensured I was comfortable throughout. The extraction was quick and painless, and the aftercare provided was excellent. I would not hesitate to recommend Dr. Ankur, the best dentist in Amritsar, to anyone needing dental services. Truly, Dr. Mohindru's Medical & Dental Care is the best dental clinic in Amritsar.",
  "I recently had a capping treatment done by Dr. Keshvi at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, and I couldn't be happier with the results. The procedure was conducted with great care and precision. The new caps fit perfectly and have greatly enhanced my dental health and appearance. Dr. Keshvi's expertise and attention to detail are truly impressive. She is undoubtedly the best dentist in Amritsar.",
  "Dr. Ankur's dental implants are perfect! Best dentist in Amritsar at the best dental clinic in Amritsar.",
  "Love my new smile, thanks to Dr. Keshvi! Best dentist in Amritsar.",
  "Painless extraction by Dr. Ankur. Excellent! Best dentist in Amritsar.",
  "Great capping work by Dr. Keshvi! Best dental clinic in Amritsar.",
  "Amazing full mouth implants by Dr. Ankur! Best dental clinic in Amritsar.",
  "Dr. Keshvi's dentures fit perfectly. Very happy! Best dentist in Amritsar.",
  "Highly recommend Dr. Ankur for implants! Best dentist in Amritsar.",
  "Dr. Keshvi is the best for smile designing! Best dental clinic in Amritsar.",
  "Quick and easy extraction by Dr. Ankur! Best dentist in Amritsar.",
  "Dr. Keshvi did a fantastic job with my caps! Best dental clinic in Amritsar.",
  "I had been considering dental implants for a long time and finally decided to go ahead with it at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur was recommended to me by a friend, and I couldn't be more grateful. The initial consultation was thorough, and Dr. Ankur explained the entire procedure in detail. The surgery itself was smooth, and I experienced minimal discomfort. The implants have integrated well, and they look and feel just like my natural teeth. The follow-up care was excellent, and I was given clear instructions for maintenance. Dr. Ankur's expertise and dedication are truly commendable. He is undoubtedly the best dentist in Amritsar.",
  "Dr. Keshvi at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, is a true artist when it comes to smile designing. I had always been conscious of my uneven teeth and gaps, but Dr. Keshvi's meticulous work has given me a smile I can be proud of. She took the time to understand my concerns and designed a treatment plan that was tailored to my needs. The procedures were carried out with great precision, and the results are stunning. My new smile has boosted my confidence, and I can't thank Dr. Keshvi enough for her outstanding work. She is truly the best dentist in Amritsar.",
  "I had a severely decayed tooth that needed extraction, and I was very anxious about the procedure. However, my experience at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar, was excellent. Dr. Ankur was incredibly reassuring and took the time to explain every step of the process. The extraction was quick and painless, and I felt comfortable throughout. Dr. Ankur provided detailed aftercare instructions, which made my recovery smooth and uneventful. His professionalism and gentle approach have made me a loyal patient. Without a doubt, he is the best dentist in Amritsar.",
  "When I needed capping treatment for several worn-out teeth, I chose Dr. Keshvi at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Keshvi's attention to detail and dedication to patient care were evident from the start. She made sure that the caps were a perfect fit and matched the natural color of my teeth. The whole process was smooth and stress-free. The results have exceeded my expectations, and my teeth look and feel much better now. I highly recommend Dr. Keshvi, the best dentist in Amritsar, for anyone needing dental care.",
  "After losing multiple teeth, I decided to get full mouth dental implants at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur handled my case with exceptional skill and professionalism. The procedure was extensive, but Dr. Ankur ensured that I was comfortable and well-informed at every stage. The implants are of high quality and look incredibly natural. This procedure has significantly improved my ability to eat and speak, and I feel more confident about my appearance. I am grateful to Dr. Ankur for his excellent work and consider him the best dentist in Amritsar.",
  "I had a great experience getting braces at Dr. Mohindru's Medical & Dental Care, the best dental clinic in Amritsar. Dr. Ankur was very professional and attentive throughout the process. He explained each step and ensured that I was comfortable with the treatment plan. The braces were fitted perfectly, and the adjustments were smooth and painless. My teeth are now perfectly aligned, and I couldn't be happier with the results. Dr. Ankur's expertise and dedication make him the best dentist in Amritsar. Highly recommend him for anyone needing braces.",
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


