const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Define the schema
const destinationSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], default: [] },  // Array of image URLs
    coordinates: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    category: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    historicalSignificance: { type: String },
    bestTimeToVisit: { type: String },
    entryFee: {
        currency: { type: String, default: "USD" },
        amount: { type: Number, default: 0 }
    },
    openingHours: {
        monday: { type: String, default: "Closed" },
        tuesday: { type: String, default: "Closed" },
        wednesday: { type: String, default: "Closed" },
        thursday: { type: String, default: "Closed" },
        friday: { type: String, default: "Closed" },
        saturday: { type: String, default: "Closed" },
        sunday: { type: String, default: "Closed" }
    },
    activities: { type: [String], default: [] },  // Array of activities
    nearbyAttractions: { type: [String], default: [] },
    accessibility: { type: String },
    travelTips: { type: String },
    contactInfo: {
        phone: { type: String },
        email: { type: String },
        website: { type: String }
    },
    reviews: [
        {
            username: { type: String, required: true },
            rating: { type: Number, min: 1, max: 5 },
            comment: { type: String },
            date: { type: Date, default: Date.now }
        }
    ],
    tags: { type: [String], default: [] },
    weatherInfo: {
        summer: { type: String },
        winter: { type: String }
    },
    safetyInfo: { type: String },
    popularityScore: { type: Number, default: 0 },
    travelGuideAvailable: { type: Boolean, default: false },
    photographersTips: { type: String }
});

// Create a model from the schema
const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;

