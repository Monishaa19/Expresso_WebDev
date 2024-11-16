module.exports = {
  data: [
    {
      package_name: "Golden Triangle Tour",
      image:"https://media.istockphoto.com/id/507913346/photo/wat-arun-temple-at-sunset-in-bangkok-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=oP-jaDWsiQ794kjyiHGiYAUfHeFA6umJ-VcaDw7r7zg=",
      duration: "7 days",
      start_date: new Date("2024-12-01"),
      end_date: new Date("2024-12-07"),
      price: 15000,
      included_items: {
        accommodation: ["3-Star Hotel", "Luxury Resort"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        transport: ["Private Car", "Train"],
        tour_guide: true,
        activities: [
          "Taj Mahal Visit",
          "Jaipur City Tour",
          "Delhi Sightseeing",
        ],
        entrance_fees: true,
      },
      destinations: ["Delhi", "Agra", "Jaipur"],
      itinerary: [
        {
          day: "1",
          activities: ["Arrival in Delhi", "Visit Qutub Minar"],
          meals: ["Dinner"],
        },
        {
          day: "2",
          activities: ["Explore Red Fort", "Visit India Gate"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "3",
          activities: ["Train to Agra", "Visit Taj Mahal"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "4",
          activities: ["Visit Agra Fort", "Explore Fatehpur Sikri"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "5",
          activities: ["Drive to Jaipur", "Visit Amber Fort"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "6",
          activities: ["Jaipur Sightseeing", "Visit Hawa Mahal"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "7",
          activities: ["Return to Delhi", "Departure"],
          meals: ["Breakfast"],
        },
      ],
      group_size: { min: 2, max: 10 },
      package_category: "Cultural",
      transport_options: ["Private Car", "Train"],
      booking_info: {
        reservation_conditions:
          "50% deposit required at booking, balance before departure.",
        availability: "Available for all months of the year.",
      },
      insurance: true,
      discounts: { early_booking: true, group_booking: true },
      customization_options: [
        "Add extra day in Jaipur",
        "Private guide for Delhi sightseeing",
      ],
      additional_services: ["Photography", "Airport Pickup"],
      reviews: [
        {
          username: "john_doe",
          rating: 5,
          comment: "Wonderful experience, everything was well organized!",
        },
        {
          username: "sarah_k",
          rating: 4,
          comment: "Great tour, the guide was informative.",
        },
      ],
      terms_and_conditions:
        "Non-refundable after booking, cancellation charges apply.",
      age_limit: "Family-friendly",
      accessibility: true,
      health_safety_measures:
        "Masks required in crowded places, sanitized vehicles.",
    },
    {
      package_name: "Kerala Backwaters and Beaches",
      image:"https://media.istockphoto.com/id/2151723757/photo/nehatheeram-beach-chavakkad-kerala-aerial-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pf6Z3ak-a8z3owXjpW1pE6KMfvAcfbR5DRjsg8NwgPo=",
      duration: "5 days",
      start_date: new Date("2024-11-10"),
      end_date: new Date("2024-11-14"),
      price: 12000,
      included_items: {
        accommodation: ["Backwater Houseboat", "Beachfront Resort"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        transport: ["Private Car", "Boat Ride"],
        tour_guide: true,
        activities: ["Houseboat Ride", "Varkala Beach", "Cochin City Tour"],
        entrance_fees: true,
      },
      destinations: ["Cochin", "Alleppey", "Varkala"],
      itinerary: [
        {
          day: "1",
          activities: ["Arrival in Cochin", "Visit Fort Kochi"],
          meals: ["Dinner"],
        },
        {
          day: "2",
          activities: ["Explore Jewish Synagogue", "Visit Mattancherry Palace"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "3",
          activities: ["Drive to Alleppey", "Houseboat Cruise in Backwaters"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "4",
          activities: ["Drive to Varkala Beach", "Beach Relaxation"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "5",
          activities: ["Visit Janardhana Swamy Temple", "Departure"],
          meals: ["Breakfast"],
        },
      ],
      group_size: { min: 2, max: 8 },
      package_category: "Beach",
      transport_options: ["Private Car", "Boat"],
      booking_info: {
        reservation_conditions: "Full payment required at the time of booking.",
        availability: "Available from November to February.",
      },
      insurance: true,
      discounts: { early_booking: true, group_booking: true },
      customization_options: [
        "Extra day at Varkala",
        "Upgrade to luxury houseboat",
      ],
      additional_services: ["Spa", "Photography", "Airport Pickup"],
      reviews: [
        {
          username: "neha_p",
          rating: 5,
          comment: "A very relaxing tour, beautiful views and great service.",
        },
        {
          username: "mohit_j",
          rating: 4,
          comment: "Enjoyed the houseboat experience, very peaceful.",
        },
      ],
      terms_and_conditions:
        "No cancellation refund, 10% discount for group bookings over 5 people.",
      age_limit: "Family-friendly",
      accessibility: true,
      health_safety_measures:
        "Follow COVID protocols, sanitized boats and vehicles.",
    },
    {
      package_name: "Leh Ladakh Adventure Tour",
      image:"https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZaxyR5eUzrggJ5GTvJuo0YjiiAP0LzqUf6taZfwPF3Y=",
      duration: "8 days",
      start_date: new Date("2024-10-01"),
      end_date: new Date("2024-10-08"),
      price: 25000,
      included_items: {
        accommodation: ["Tent Camp", "Guest House"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        transport: ["Private SUV", "Bike Ride"],
        tour_guide: true,
        activities: ["Nubra Valley", "Pangong Lake", "Khardung La Pass"],
        entrance_fees: true,
      },
      destinations: ["Leh", "Nubra Valley", "Pangong Lake"],
      itinerary: [
        {
          day: "1",
          activities: ["Arrival in Leh", "Rest and acclimatization"],
          meals: ["Dinner"],
        },
        {
          day: "2",
          activities: ["Visit Nubra Valley", "Explore Diskit Monastery"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "3",
          activities: ["Camel Ride in Nubra", "Visit Turtuk Village"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "4",
          activities: ["Drive to Pangong Lake", "Camp by the Lake"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "5",
          activities: ["Explore Pangong Lake", "Return to Leh"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "6",
          activities: ["Visit Khardung La Pass", "Sightseeing in Leh"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "7",
          activities: ["Visit Leh Palace", "Shanti Stupa"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        { day: "8", activities: ["Departure"], meals: ["Breakfast"] },
      ],
      group_size: { min: 4, max: 12 },
      package_category: "Adventure",
      transport_options: ["Private SUV", "Motorbike"],
      booking_info: {
        reservation_conditions:
          "50% advance at the time of booking, balance before departure.",
        availability: "Available from May to September.",
      },
      insurance: true,
      discounts: { early_booking: false, group_booking: true },
      customization_options: [
        "Private tour",
        "Additional days in Nubra Valley",
      ],
      additional_services: ["Photography", "Motorbike Rental"],
      reviews: [
        {
          username: "ravi_s",
          rating: 5,
          comment:
            "Best adventure tour! Leh is beautiful, and the bike ride was amazing.",
        },
        {
          username: "sunita_k",
          rating: 4,
          comment: "A bit tough but totally worth it, especially Pangong Lake.",
        },
      ],
      terms_and_conditions:
        "No cancellation after booking, 5% discount for early booking.",
      age_limit: "Adventure lovers, 18+",
      accessibility: false,
      health_safety_measures:
        "Mandatory health check-up before departure, oxygen tanks available.",
    },
    {
      package_name: "Mysore and Coorg Honeymoon",
      image:"https://plus.unsplash.com/premium_photo-1697730407028-1c602ffb2e81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXlzb3JlJTIwcGFsYWNlfGVufDB8fDB8fHww",
      duration: "6 days",
      start_date: new Date("2024-11-15"),
      end_date: new Date("2024-11-20"),
      price: 18000,
      included_items: {
        accommodation: ["4-Star Hotel", "Luxury Resort"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        transport: ["Private Car"],
        tour_guide: true,
        activities: [
          "Mysore Palace",
          "Coffee Plantation Visit",
          "Dubare Elephant Camp",
        ],
        entrance_fees: true,
      },
      destinations: ["Mysore", "Coorg"],
      itinerary: [
        {
          day: "1",
          activities: ["Arrival in Mysore", "Visit Mysore Palace"],
          meals: ["Dinner"],
        },
        {
          day: "2",
          activities: ["Visit Chamundi Hill", "Explore Brindavan Gardens"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "3",
          activities: ["Drive to Coorg", "Visit Coffee Plantation"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "4",
          activities: ["Visit Abbey Falls", "Explore Coorg Town"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "5",
          activities: ["Visit Dubare Elephant Camp", "Relax at the Resort"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        { day: "6", activities: ["Departure"], meals: ["Breakfast"] },
      ],
      group_size: { min: 2, max: 4 },
      package_category: "Honeymoon",
      transport_options: ["Private Car"],
      booking_info: {
        reservation_conditions:
          "50% deposit at the time of booking, balance before departure.",
        availability: "Available throughout the year.",
      },
      insurance: true,
      discounts: { early_booking: true, group_booking: true },
      customization_options: [
        "Extra day in Coorg",
        "Private guide for Mysore sightseeing",
      ],
      additional_services: ["Spa", "Photography", "Candlelight Dinner"],
      reviews: [
        {
          username: "priya_m",
          rating: 5,
          comment:
            "Amazing honeymoon experience! Beautiful locations and great service.",
        },
        {
          username: "akshay_b",
          rating: 4,
          comment:
            "Coorg was very relaxing, loved the coffee plantation visit.",
        },
      ],
      terms_and_conditions:
        "No refunds after booking, 10% discount for honeymoon couples.",
      age_limit: "Couples",
      accessibility: true,
      health_safety_measures:
        "Sanitized vehicles and resorts, COVID protocols in place.",
    },
    {
      package_name: "Andaman Islands Beach Vacation",
      image:"https://media.istockphoto.com/id/496923233/photo/island-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hz_mwllNg4pvUftbHcpd4rJp8pZmmEZ786mD0o6n9FQ=",
      duration: "5 days",
      start_date: new Date("2024-12-10"),
      end_date: new Date("2024-12-14"),
      price: 22000,
      included_items: {
        accommodation: ["Beach Resort", "Private Villas"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        transport: ["Private Car", "Boat"],
        tour_guide: true,
        activities: ["Snorkeling", "Scuba Diving", "Beach Relaxation"],
        entrance_fees: true,
      },
      destinations: ["Port Blair", "Havelock Island", "Neil Island"],
      itinerary: [
        {
          day: "1",
          activities: ["Arrival in Port Blair", "Visit Cellular Jail"],
          meals: ["Dinner"],
        },
        {
          day: "2",
          activities: ["Boat to Havelock Island", "Beach Relaxation"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "3",
          activities: ["Snorkeling at Radhanagar Beach", "Relax at the Resort"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "4",
          activities: ["Scuba Diving", "Boat Ride to Neil Island"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "5",
          activities: ["Visit Kalapathar Beach", "Departure"],
          meals: ["Breakfast"],
        },
      ],
      group_size: { min: 2, max: 6 },
      package_category: "Beach",
      transport_options: ["Private Car", "Boat"],
      booking_info: {
        reservation_conditions: "Full payment at the time of booking.",
        availability: "Available throughout the year.",
      },
      insurance: true,
      discounts: { early_booking: true, group_booking: true },
      customization_options: [
        "Extra day at Havelock",
        "Private guide for Scuba Diving",
      ],
      additional_services: ["Photography", "Spa", "Beach Party"],
      reviews: [
        {
          username: "deepika_r",
          rating: 5,
          comment: "Incredible beaches and water sports. A must-visit place!",
        },
        {
          username: "manish_k",
          rating: 4,
          comment: "Scuba diving was an unforgettable experience.",
        },
      ],
      terms_and_conditions:
        "Non-refundable booking, 5% discount for early bookings.",
      age_limit: "Adults, 18+",
      accessibility: false,
      health_safety_measures:
        "Sanitized boats and resorts, masks required during activities.",
    },

    {
      package_name: "Goa Beach Escape",
      image:"https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.webp?a=1&b=1&s=612x612&w=0&k=20&c=B-EJFh_gBK-K1mj2s6S0ug65bM8LOkX7HcE_bTD4nag=",
      duration: "4 days",
      start_date: "2024-12-15",
      end_date: "2024-12-18",
      price: 15000,
      included_items: {
        accommodation: ["Beach Resort", "Beachfront Cottages"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        transport: ["Private Car"],
        tour_guide: true,
        activities: ["Beach Relaxation", "Water Sports", "Beach Party"],
        entrance_fees: true,
      },
      destinations: ["North Goa", "South Goa"],
      itinerary: [
        {
          day: "1",
          activities: ["Arrival in Goa", "Relax at the Beach"],
          meals: ["Dinner"],
        },
        {
          day: "2",
          activities: ["Visit Baga Beach", "Parasailing", "Visit Anjuna Beach"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "3",
          activities: ["Visit Colva Beach", "Water Sports", "Beach Party"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "4",
          activities: ["Shopping at Local Markets", "Departure"],
          meals: ["Breakfast"],
        },
      ],
      group_size: { min: 2, max: 6 },
      package_category: "Beach",
      transport_options: ["Private Car"],
      booking_info: {
        reservation_conditions: "Full payment at the time of booking.",
        availability: "Available throughout the year.",
      },
      insurance: true,
      discounts: { early_booking: true, group_booking: true },
      customization_options: [
        "Extra day in Goa",
        "Private guide for Water Sports",
      ],
      additional_services: ["Photography", "Beach Party"],
      reviews: [
        {
          username: "kavita_s",
          rating: 5,
          comment: "Perfect beach escape, the water sports were amazing!",
        },
        {
          username: "suresh_m",
          rating: 4,
          comment: "Loved the beaches and the beach party!",
        },
      ],
      terms_and_conditions:
        "Non-refundable booking, 10% discount for early bookings.",
      age_limit: "Adults, 18+",
      accessibility: true,
      health_safety_measures:
        "Sanitized vehicles and resorts, masks required during activities.",
    },
    {
      package_name: "Rajasthan Royal Tour",
      image:"https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFqYXN0aGFufGVufDB8fDB8fHww",
      duration: "6 days",
      start_date: "2024-12-01",
      end_date: "2024-12-06",
      price: 25000,
      included_items: {
        accommodation: ["Heritage Hotels", "Palaces"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        transport: ["Private Car"],
        tour_guide: true,
        activities: ["Camel Ride", "Palace Tours", "Cultural Performances"],
        entrance_fees: true,
      },
      destinations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
      itinerary: [
        {
          day: "1",
          activities: ["Arrival in Jaipur", "Visit Amber Fort"],
          meals: ["Dinner"],
        },
        {
          day: "2",
          activities: [
            "Visit City Palace",
            "Jantar Mantar",
            "Evening Cultural Performance",
          ],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "3",
          activities: ["Drive to Udaipur", "Visit City Palace and Jag Mandir"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "4",
          activities: ["Drive to Jodhpur", "Visit Mehrangarh Fort"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "5",
          activities: ["Drive to Jaisalmer", "Camel Ride in the Desert"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "6",
          activities: ["Visit Jaisalmer Fort", "Departure"],
          meals: ["Breakfast"],
        },
      ],
      group_size: { min: 2, max: 8 },
      package_category: "Heritage",
      transport_options: ["Private Car"],
      booking_info: {
        reservation_conditions:
          "50% deposit at the time of booking, balance before departure.",
        availability: "Available throughout the year.",
      },
      insurance: true,
      discounts: { early_booking: true, group_booking: true },
      customization_options: [
        "Extra day in Udaipur",
        "Private guide for Palace Tours",
      ],
      additional_services: ["Photography", "Cultural Dance Performance"],
      reviews: [
        {
          username: "rahul_b",
          rating: 5,
          comment: "A royal experience! Loved the palaces and camel ride.",
        },
        {
          username: "neha_d",
          rating: 4,
          comment: "Great tour, but the desert trip could be better.",
        },
      ],
      terms_and_conditions:
        "Non-refundable booking, 10% discount for early bookings.",
      age_limit: "Adults, 18+",
      accessibility: true,
      health_safety_measures:
        "Sanitized vehicles and hotels, COVID protocols in place.",
    },
    {
      package_name: "Mysore Heritage Tour",
      image:"https://media.istockphoto.com/id/179469330/photo/nandy-statue.webp?a=1&b=1&s=612x612&w=0&k=20&c=U3ERRbdfNj2FqdcYz1WjkYoPjZfw0lybSU7xujNeOa4=",
      duration: "3 days",
      start_date: "2024-12-20",
      end_date: "2024-12-22",
      price: 12000,
      included_items: {
        accommodation: ["3-Star Hotel", "Resort"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        transport: ["Private Car"],
        tour_guide: true,
        activities: [
          "Visit Mysore Palace",
          "Visit Chamundeshwari Temple",
          "Brindavan Gardens Visit",
        ],
        entrance_fees: true,
      },
      destinations: ["Mysore"],
      itinerary: [
        {
          day: "1",
          activities: ["Arrival in Mysore", "Visit Mysore Palace"],
          meals: ["Dinner"],
        },
        {
          day: "2",
          activities: [
            "Visit Chamundeshwari Temple",
            "Visit St. Philomena's Church",
            "Relax at Brindavan Gardens",
          ],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "3",
          activities: ["Shopping in Mysore", "Departure"],
          meals: ["Breakfast"],
        },
      ],
      group_size: { min: 2, max: 6 },
      package_category: "Heritage",
      transport_options: ["Private Car"],
      booking_info: {
        reservation_conditions: "Full payment at the time of booking.",
        availability: "Available throughout the year.",
      },
      insurance: true,
      discounts: { early_booking: true,group_booking:true },
      customization_options: [
        "Private guide for sightseeing",
        "Extra day in Mysore",
      ],
      additional_services: ["Photography", "Shopping Tour"],
      reviews: [
        {
          username: "priya_k",
          rating: 5,
          comment: "A perfect short getaway, loved the Mysore Palace!",
        },
        {
          username: "akshay_s",
          rating: 4,
          comment: "Beautiful temples and gardens.",
        },
      ],
      terms_and_conditions:
        "Non-refundable booking, 5% discount for early bookings.",
      age_limit: "Adults, 18+",
      accessibility: true,
      health_safety_measures:
        "Sanitized vehicles and hotels, masks required during activities.",
    },
    {
      package_name: "Kerala Backwaters Cruise",
      image:"https://media.istockphoto.com/id/1266651692/photo/houseboat-in-alappuzha-backwaters-kerala.webp?a=1&b=1&s=612x612&w=0&k=20&c=9OfxNDTJ6L3_9G8JZm9uk5rZJ6cOe2avYJ4PURf8qQg=",
      duration: "5 days",
      start_date: "2024-12-25",
      end_date: "2024-12-29",
      price: 18000,
      included_items: {
        accommodation: ["Houseboat", "Resort"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        transport: ["Houseboat", "Private Car"],
        tour_guide: true,
        activities: ["Houseboat Cruise", "Village Visit", "Cultural Program"],
        entrance_fees: true,
      },
      destinations: ["Alleppey", "Kumarakom", "Vembanad Lake"],
      itinerary: [
        {
          day: "1",
          activities: [
            "Arrival in Alleppey",
            "Board Houseboat",
            "Relax on the Backwaters",
          ],
          meals: ["Dinner"],
        },
        {
          day: "2",
          activities: ["Houseboat Cruise", "Visit Local Villages"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "3",
          activities: ["Continue Houseboat Cruise", "Cultural Program on Boat"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "4",
          activities: ["Visit Kumarakom", "Relax at the Resort"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "5",
          activities: ["Visit Vembanad Lake", "Departure"],
          meals: ["Breakfast"],
        },
      ],
      group_size: { min: 2, max: 6 },
      package_category: "Cruise",
      transport_options: ["Houseboat", "Private Car"],
      booking_info: {
        reservation_conditions: "Full payment at the time of booking.",
        availability: "Available throughout the year.",
      },
      insurance: true,
      discounts: { early_booking: true, group_booking: true },
      customization_options: ["Private houseboat", "Extra day in Kerala"],
      additional_services: ["Photography", "Traditional Kerala Massage"],
      reviews: [
        {
          username: "madhavi_p",
          rating: 5,
          comment: "A relaxing and beautiful experience on the backwaters!",
        },
        {
          username: "ravi_m",
          rating: 4,
          comment:
            "Great cultural experience, but the houseboat could be more luxurious.",
        },
      ],
      terms_and_conditions:
        "Non-refundable booking, 15% discount for early bookings.",
      age_limit: "Adults, 18+",
      accessibility: true,
      health_safety_measures:
        "Sanitized houseboats and resorts, masks required during activities.",
    },
    {
      package_name: "Sikkim Adventure Tour",
      image:"https://media.istockphoto.com/id/1129899951/photo/darjeeling-and-kangchenjunga-on-the-background-kanchenjunga-is-the-third-highest-mountain-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=Idgx1ujn4iMSE8UrCsdriSYw5OxdBUaG1rZrQh4iqTw=",
      duration: "7 days",
      start_date: "2024-12-10",
      end_date: "2024-12-16",
      price: 22000,
      included_items: {
        accommodation: ["3-Star Hotel", "Guest House"],
        meals: ["Breakfast", "Lunch", "Dinner"],
        transport: ["Private Car"],
        tour_guide: true,
        activities: ["Trekking", "River Rafting", "Cable Car Ride"],
        entrance_fees: true,
      },
      destinations: ["Gangtok", "Pelling", "Yuksom", "Tsomgo Lake"],
      itinerary: [
        {
          day: "1",
          activities: ["Arrival in Gangtok", "Visit MG Road"],
          meals: ["Dinner"],
        },
        {
          day: "2",
          activities: ["Trekking in Gangtok", "Visit Rumtek Monastery"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "3",
          activities: ["Drive to Pelling", "Explore Pelling"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "4",
          activities: ["Drive to Yuksom", "Visit Norbugang Park"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "5",
          activities: ["Trekking in Yuksom", "Visit Khecheopalri Lake"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "6",
          activities: ["Visit Tsomgo Lake", "River Rafting"],
          meals: ["Breakfast", "Lunch", "Dinner"],
        },
        {
          day: "7",
          activities: ["Departure from Gangtok"],
          meals: ["Breakfast"],
        },
      ],
      group_size: { min: 2, max: 8 },
      package_category: "Adventure",
      transport_options: ["Private Car"],
      booking_info: {
        reservation_conditions:
          "50% deposit at the time of booking, balance before departure.",
        availability: "Available throughout the year.",
      },
      insurance: true,
      discounts: { early_booking: true,group_booking:false },
      customization_options: [
        "Trekking with private guide",
        "Extra day in Gangtok",
      ],
      additional_services: ["Photography", "Cultural Experience"],
      reviews: [
        {
          username: "anita_r",
          rating: 5,
          comment:
            "An unforgettable adventure tour, beautiful landscapes and thrilling activities!",
        },
        {
          username: "vikram_s",
          rating: 4,
          comment: "The trekking was amazing, but the roads could be better.",
        },
      ],
      terms_and_conditions:
        "Non-refundable booking, 10% discount for early bookings.",
      age_limit: "Adults, 18+",
      accessibility: false,
      health_safety_measures:
        "Sanitized vehicles and accommodations, masks required during activities.",
    },
  ],
};