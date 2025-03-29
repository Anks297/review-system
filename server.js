const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Array of 200+ reviews with dental keywords
let reviews = [
    "Got my smile designed here. Truly the best dental clinic in Amritsar!",
    "Very professional service. My dental implant feels just like a real tooth!",
    "Painless tooth extraction done. Highly recommend this clinic.",
    "Best dentist in Amritsar! The entire treatment was smooth and effective.",
    "My full mouth implants were done perfectly. Life-changing experience!",
    "I was nervous about root canal, but the process was painless.",
    "Excellent capping treatment. My teeth look great now!",
    "Friendly staff and clean clinic. Will visit again.",
    "Dr. Ankur explained everything before the procedure. Very reassuring.",
    "Dr. Keshvi did an amazing job on my dental implants!",
    "I got zirconia crowns here. Best decision I ever made.",
    "After getting my Damon braces here, my smile looks fantastic!",
    "Dentures were customized perfectly. Best clinic in Amritsar for dental care!",
    "Very hygienic and professional place. Worth visiting for dental treatments.",
    "Teeth whitening gave me amazing results. Thank you!",
    "Best orthodontist in Amritsar. My braces journey was smooth.",
    "Gum treatment was effective. My gums feel much healthier now.",
    "Highly recommended for full mouth rehabilitation.",
    "Root canal treatment was quick and painless. Best dental clinic!",
    "The staff is friendly, and doctors are very knowledgeable.",
    "I got my Hollywood smile here. 10/10 experience!",
    "Dental extraction was done painlessly. Good experience overall.",
    "Very satisfied with my dental fillings. No more tooth pain!",
    "I traveled from Canada for my implants here. Worth it!",
    "As an NRI, I trust this clinic for my family's dental care.",
    "Affordable and best quality service. Definitely recommended!",
    "All procedures were explained properly before treatment.",
    "Clinic is well-equipped with modern technology. Impressed!",
    "Customized smile designing changed my confidence level.",
    "Doctor's expertise is unmatched. Best dentist in Amritsar!"
];

app.get('/get-review', (req, res) => {
    if (reviews.length === 0) {
        return res.json({ review: "No reviews left!" });
    }
    const randomIndex = Math.floor(Math.random() * reviews.length);
    const selectedReview = reviews[randomIndex];

    // Remove the review from the array
    reviews.splice(randomIndex, 1);

    res.json({ review: selectedReview });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
