const mongoose = require('mongoose');

const tourPackageSchema = new mongoose.Schema({
    package_name: { type: String, required: true },
    duration: { type: String, required: true }, // e.g., "7 days"
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    images: { type: [String], default: [] },
    price: { type: Number, required: true },
    included_items: {
        accommodation: [String], // List of included accommodation types
        meals: [String], // e.g., ["Breakfast", "Lunch", "Dinner"]
        transport: [String], // e.g., ["Bus", "Private Car"]
        tour_guide: { type: Boolean, required: true }, // Whether a guide is included
        activities: [String], // List of included activities
        entrance_fees: { type: Boolean, required: true }, // Whether entrance fees are included
    },
    destinations: [String], // List of destinations covered in the package
    itinerary: [
        {
            day: { type: String },
            activities: [String], // Activities for the day
            meals: [String], // Meals for the day
        }
    ],
    group_size: {
        min: { type: Number },
        max: { type: Number },
    },
    package_category: { type: String, enum: ['Adventure', 'Cultural', 'Beach', 'Nature', 'Family', 'Honeymoon', 'Luxury','Heritage','Cruise'], required: true },
    transport_options: [String], // e.g., ["Flight", "Bus"]
    booking_info: {
        reservation_conditions: String,
        availability: String,
    },
    insurance: { type: Boolean, required: true },
    discounts: {
        early_booking: { type: Boolean, required: true },
        group_booking: { type: Boolean, required: true },
    },
    customization_options: [String], // Customizations available, like adding extra days, activities
    additional_services: [String], // Optional services like spa, photography, shopping trips
    reviews: [
        {
            username: String,
            rating: Number,
            comment: String,
        }
    ],
    terms_and_conditions: String,
    age_limit: { type: String }, // E.g., "Family-friendly", "Adults only"
    accessibility: { type: Boolean, required: true }, // Whether the package is accessible to people with disabilities
    health_safety_measures: String, // Any health and safety info, especially for adventure tours
});

const Package = mongoose.model('Package', tourPackageSchema);
module.exports = Package;
