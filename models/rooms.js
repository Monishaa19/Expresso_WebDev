const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["Hotel", "Guest House", "Homestay","Resort","Lodge"], required: true },
  location: { type: String, required: true },
  nearby_tourist_spots: { type: [String] },
  amenities: { type: [String] },
  
  // Room details directly in the main schema
  rooms: [
    {
      room_type: { type: String, required: true },
      price_per_night: { type: Number, required: true },
      max_occupancy: { type: Number, required: true }
    }
  ],
  
  // Ratings and reviews directly in the main schema
  ratings: { type: Number, min: 1, max: 5 },
  reviews: [
    {
      username: { type: String, required: true },
      rating: { type: Number, min: 1, max: 5, required: true },
      comment: { type: String }
    }
  ],

  // Contact information directly in the main schema
  contact_info: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String }
  },

  // Images field for storing multiple image URLs
  images: { type: [String] },

  // Additional details
  distance_from_city_center: { type: String },
  cancellation_policy: { type: String },
  pet_friendly: { type: Boolean, default: false },
  smoking_policy: { type: String },
  check_in_time: { type: String, required: true },
  check_out_time: { type: String, required: true }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;

