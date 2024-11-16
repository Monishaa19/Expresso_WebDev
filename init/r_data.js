module.exports = {
  data:[
      // Eiffel Tower
      {
        name: "Parisian Elegance Hotel",
        image:"https://media.istockphoto.com/id/667738362/photo/empty-dining-tables-and-chairs-in-paris.webp?a=1&b=1&s=612x612&w=0&k=20&c=p8d058SzUVYuPwjJ60jYZkzLR6AZEiHdms6i9nq_G0w=",
        type: "Hotel",
        location: "Near Eiffel Tower, Paris, France",
        nearby_tourist_spots: ["Eiffel Tower", "Louvre Museum"],
        amenities: ["Free Wi-Fi", "Room Service", "City View", "Rooftop Dining"],
        rooms: [
          { room_type: "Single Room", price_per_night: 150, max_occupancy: 1 },
          { room_type: "Double Room", price_per_night: 250, max_occupancy: 2 }
        ],
        ratings: 4.7,
        reviews: [
          { username: "wanderlust01", rating: 5, comment: "Fantastic view of Eiffel!" }
        ],
        contact_info: {
          phone: "+33 1 23 45 67 89",
          email: "contact@parisianelegance.com",
          website: "https://www.parisianelegance.com"
        },
        
        distance_from_city_center: "1 km",
        cancellation_policy: "Free cancellation within 24 hours",
        pet_friendly: true,
        smoking_policy: "No smoking",
        check_in_time: "15:00",
        check_out_time: "12:00"
      },
      {
        name: "Chic Boutique Homestay",
        image:"https://media.istockphoto.com/id/1412857552/photo/dressing-room-interior-with-wooden-furniture-mirror-and-houseplants-stylish-accessories.webp?a=1&b=1&s=612x612&w=0&k=20&c=PoSv3A6W6cwQCDPM-pMln_tjJUpSc9Ds-AwM6I4WOEI=",
        type: "Homestay",
        location: "Near Eiffel Tower, Paris, France",
        nearby_tourist_spots: ["Eiffel Tower", "Seine River Cruise"],
        amenities: ["Free Wi-Fi", "Complimentary Breakfast", "Personal Guide"],
        rooms: [
          { room_type: "Deluxe Room", price_per_night: 180, max_occupancy: 2 }
        ],
        ratings: 4.5,
        reviews: [
          { username: "parislover", rating: 4, comment: "Very cozy and stylish!" }
        ],
        contact_info: {
          phone: "+33 2 34 56 78 90",
          email: "info@chichomestay.com",
          website: "https://www.chichomestay.com"
        },
        images: [
          "https://example.com/images/paris_homestay1.jpg",
          "https://example.com/images/paris_homestay2.jpg"
        ],
        distance_from_city_center: "0.5 km",
        cancellation_policy: "No refund after booking",
        pet_friendly: false,
        smoking_policy: "Smoking allowed in designated areas",
        check_in_time: "14:00",
        check_out_time: "11:00"
      },
    
      // Great Wall of China
      {
        name: "Beijing Palace Hotel",
        image:"https://media.istockphoto.com/id/1348257720/photo/summer-palace-at-beijing.webp?a=1&b=1&s=612x612&w=0&k=20&c=l-v2tkwJwF_iMWrlEAI8Q9b30aECMRA514RoEpXIC2s=",
        type: "Hotel",
        location: "Near Great Wall, Beijing, China",
        nearby_tourist_spots: ["Great Wall of China", "Ming Tombs"],
        amenities: ["Free Wi-Fi", "Traditional Dining", "Mountain View"],
        rooms: [
          { room_type: "Suite", price_per_night: 120, max_occupancy: 2 },
          { room_type: "Deluxe Suite", price_per_night: 180, max_occupancy: 4 }
        ],
        ratings: 4.6,
        reviews: [
          { username: "traveler_CN", rating: 5, comment: "Great location near the wall!" }
        ],
        contact_info: {
          phone: "+86 10 1234 5678",
          email: "stay@beijingpalace.com",
          website: "https://www.beijingpalace.com"
        },
        images: [
          "https://example.com/images/beijing_hotel1.jpg",
          "https://example.com/images/beijing_hotel2.jpg"
        ],
        distance_from_city_center: "20 km",
        cancellation_policy: "Full refund 48 hours before check-in",
        pet_friendly: true,
        smoking_policy: "No smoking",
        check_in_time: "16:00",
        check_out_time: "11:00"
      },
      {
        name: "Authentic Chinese Homestay",
        image:"https://plus.unsplash.com/premium_photo-1676468382110-48ba5daf2d21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXV0aGVudGljJTIwQ2hpbmVzZSUyMEhvbWVzdGF5fGVufDB8fDB8fHww",
        type: "Homestay",
        location: "Near Great Wall, Beijing, China",
        nearby_tourist_spots: ["Great Wall of China", "Beijing Ancient Observatory"],
        amenities: ["Free Wi-Fi", "Traditional Tea Ceremony", "Cultural Workshops"],
        rooms: [
          { room_type: "Private Room", price_per_night: 100, max_occupancy: 2 }
        ],
        ratings: 4.8,
        reviews: [
          { username: "historybuff", rating: 5, comment: "Beautiful, authentic experience!" }
        ],
        contact_info: {
          phone: "+86 10 2345 6789",
          email: "authentic@chinesestay.com",
          website: "https://www.chinesestay.com"
        },
        images: [
          "https://example.com/images/beijing_homestay1.jpg",
          "https://example.com/images/beijing_homestay2.jpg"
        ],
        distance_from_city_center: "18 km",
        cancellation_policy: "Non-refundable",
        pet_friendly: false,
        smoking_policy: "Smoking permitted outdoors",
        check_in_time: "13:00",
        check_out_time: "10:00"
      },
    
      // Grand Canyon
      {
        name: "Canyon View Lodge",
        image:"https://media.istockphoto.com/id/1438616865/photo/green-house-on-the-side-of-the-himachal-pradesh-mountain-in-rasol-village.webp?a=1&b=1&s=612x612&w=0&k=20&c=rSW2IX4p9qonz2LcoKd_LyLprgsUj4tGGzVpgJB6elc=",
        type: "Hotel",
        location: "Near Grand Canyon, Arizona, USA",
        nearby_tourist_spots: ["Grand Canyon", "Bright Angel Trail"],
        amenities: ["Free Wi-Fi", "Breakfast Included", "Mountain View"],
        rooms: [
          { room_type: "Standard Room", price_per_night: 150, max_occupancy: 2 }
        ],
        ratings: 4.7,
        reviews: [
          { username: "adventuregal", rating: 5, comment: "Stunning views and great service!" }
        ],
        contact_info: {
          phone: "+1 928-555-1234",
          email: "info@canyonview.com",
          website: "https://www.canyonview.com"
        },
        images: [
          "https://example.com/images/canyon_lodge1.jpg",
          "https://example.com/images/canyon_lodge2.jpg"
        ],
        distance_from_city_center: "8 km",
        cancellation_policy: "Full refund within 24 hours",
        pet_friendly: true,
        smoking_policy: "No smoking",
        check_in_time: "15:00",
        check_out_time: "11:00"
      },
      {
        name: "Rustic Homestay Grand Canyon",
        image:"https://media.istockphoto.com/id/1025661150/photo/ghost-town-abandoned-building-ruins-mojave-desert.webp?a=1&b=1&s=612x612&w=0&k=20&c=ul0SpU-bTj7P3PxU_hEpOrLpyJVToeMPw5ZUeXWm5Yk=",
        type: "Homestay",
        location: "Near Grand Canyon, Arizona, USA",
        nearby_tourist_spots: ["Grand Canyon", "Horseshoe Bend"],
        amenities: ["Free Wi-Fi", "Outdoor Fire Pit", "Guided Tours"],
        rooms: [
          { room_type: "Cabin", price_per_night: 200, max_occupancy: 4 }
        ],
        ratings: 4.6,
        reviews: [
          { username: "naturelover", rating: 4, comment: "Beautiful setting, rustic charm!" }
        ],
        contact_info: {
          phone: "+1 928-555-5678",
          email: "rustichomestay@grandcanyon.com",
          website: "https://www.rustichomestay.com"
        }
        ,
        images: [
          "https://example.com/images/canyon_homestay1.jpg",
          "https://example.com/images/canyon_homestay2.jpg"
        ],
        distance_from_city_center: "6 km",
        cancellation_policy: "Non-refundable",
        pet_friendly: false,
        smoking_policy: "Smoking allowed in designated areas",
        check_in_time: "14:00",
        check_out_time: "12:00"
      },
      
      // ... Repeat similar objects for other locations ...
    // Lalbagh
  {
      name: "Garden City Inn",
      image:"https://plus.unsplash.com/premium_photo-1713991088871-614d45da7fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2FyZGVuJTIwQ2l0eSUyMElubnxlbnwwfHwwfHx8MA%3D%3D",
      type: "Hotel",
      location: "Near Lalbagh, Bangalore, India",
      nearby_tourist_spots: ["Lalbagh Botanical Garden", "Cubbon Park"],
      amenities: ["Free Wi-Fi", "24-hour Room Service", "Garden View"],
      rooms: [
        { room_type: "Standard Room", price_per_night: 60, max_occupancy: 2 }
      ],
      ratings: 4.3,
      reviews: [
        { username: "greenlover", rating: 4, comment: "Serene location with beautiful garden views!" }
      ],
      contact_info: {
        phone: "+91 80 5555 1234",
        email: "info@gardencityinn.com",
        website: "https://www.gardencityinn.com"
      },
      images: [
        "https://example.com/images/lalbagh_hotel1.jpg",
        "https://example.com/images/lalbagh_hotel2.jpg"
      ],
      distance_from_city_center: "3 km",
      cancellation_policy: "Free cancellation 24 hours before check-in",
      pet_friendly: false,
      smoking_policy: "No smoking",
      check_in_time: "13:00",
      check_out_time: "11:00"
    },
    {
      name: "Green Homestay",
      image:"https://media.istockphoto.com/id/1323459165/photo/mae-kampong-village-in-chiang-mai-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=yiQz9W-MKuHLyJ7Bv7bfWTjcJk9rRg8s3Gu6wg2WYr8=",
      type: "Homestay",
      location: "Near Lalbagh, Bangalore, India",
      nearby_tourist_spots: ["Lalbagh Botanical Garden", "Cubbon Park"],
      amenities: ["Free Wi-Fi", "Complimentary Breakfast", "Terrace Garden"],
      rooms: [
        { room_type: "Private Room", price_per_night: 55, max_occupancy: 2 }
      ],
      ratings: 4.1,
      reviews: [
        { username: "natureenthusiast", rating: 4, comment: "Great value and perfect location near Lalbagh!" }
      ],
      contact_info: {
        phone: "+91 80 5555 5678",
        email: "stay@greenhomestay.com",
        website: "https://www.greenhomestay.com"
      },
      images: [
        "https://example.com/images/lalbagh_homestay1.jpg",
        "https://example.com/images/lalbagh_homestay2.jpg"
      ],
      distance_from_city_center: "3 km",
      cancellation_policy: "Non-refundable",
      pet_friendly: true,
      smoking_policy: "Smoking allowed in outdoor areas",
      check_in_time: "14:00",
      check_out_time: "12:00"
    },
    
    // Bangalore Palace
    {
      name: "Palace Heritage Hotel",
      image:"https://media.istockphoto.com/id/693244834/photo/umaid-bhawan-palacel-in-jodhpu-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=_ssCDsrzyFE3U4sVZunWSMIuvnKFf4ud5jmVEZ801Sk=",
      type: "Hotel",
      location: "Near Bangalore Palace, Bangalore, India",
      nearby_tourist_spots: ["Bangalore Palace", "Vidhana Soudha"],
      amenities: ["Free Wi-Fi", "Traditional Dining", "Royal Decor"],
      rooms: [
        { room_type: "Deluxe Room", price_per_night: 80, max_occupancy: 2 }
      ],
      ratings: 4.5,
      reviews: [
        { username: "royaltylover", rating: 5, comment: "Feel like royalty staying here!" }
      ],
      contact_info: {
        phone: "+91 80 6666 2345",
        email: "contact@palaceheritage.com",
        website: "https://www.palaceheritage.com"
      },
      images: [
        "https://example.com/images/bangalore_palace_hotel1.jpg",
        "https://example.com/images/bangalore_palace_hotel2.jpg"
      ],
      distance_from_city_center: "1 km",
      cancellation_policy: "Full refund if canceled 48 hours before check-in",
      pet_friendly: false,
      smoking_policy: "No smoking",
      check_in_time: "15:00",
      check_out_time: "11:00"
    },
    {
      name: "Classic Homestay",
      image:"https://media.istockphoto.com/id/1838004332/photo/peach-color-orange-wall-color-living-room-interior-2024-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=WYBjeNiux_bhO-0OQO5jtBiy9usAaQM6QmFOVmufeYc=",
      type: "Homestay",
      location: "Near Bangalore Palace, Bangalore, India",
      nearby_tourist_spots: ["Bangalore Palace", "M.G. Road"],
      amenities: ["Free Wi-Fi", "City View", "Shared Kitchen"],
      rooms: [
        { room_type: "Double Room", price_per_night: 70, max_occupancy: 2 }
      ],
      ratings: 4.3,
      reviews: [
        { username: "cityexplorer", rating: 4, comment: "Convenient and comfortable stay!" }
      ],
      contact_info: {
        phone: "+91 80 6666 9876",
        email: "classic@homestay.com",
        website: "https://www.classichomestay.com"
      },
      images: [
        "https://example.com/images/bangalore_palace_homestay1.jpg",
        "https://example.com/images/bangalore_palace_homestay2.jpg"
      ],
      distance_from_city_center: "1.5 km",
      cancellation_policy: "No refund on cancellation",
      pet_friendly: false,
      smoking_policy: "Smoking allowed on balcony",
      check_in_time: "13:00",
      check_out_time: "12:00"
    },
    
    // Cubbon Park
    {
      name: "Cubbon Green Hotel",
      image:"https://media.istockphoto.com/id/945390922/photo/a-the-city-view-of-kennedy-town-hong-kong.webp?a=1&b=1&s=612x612&w=0&k=20&c=8wbL5gLc-hYNci7AXumjc5gFxXIB8Xc4JJQgTXoVOfg=",
      type: "Hotel",
      location: "Near Cubbon Park, Bangalore, India",
      nearby_tourist_spots: ["Cubbon Park", "Vidhana Soudha"],
      amenities: ["Free Wi-Fi", "Park View", "Pet-Friendly"],
      rooms: [
        { room_type: "Single Room", price_per_night: 60, max_occupancy: 1 },
        { room_type: "Double Room", price_per_night: 100, max_occupancy: 2 }
      ],
      ratings: 4.4,
      reviews: [
        { username: "parkenthusiast", rating: 5, comment: "Lovely hotel right by the park!" }
      ],
      contact_info: {
        phone: "+91 80 7777 5432",
        email: "contact@cubbongreen.com",
        website: "https://www.cubbongreen.com"
      },
      images: [
        "https://example.com/images/cubbon_hotel1.jpg",
        "https://example.com/images/cubbon_hotel2.jpg"
      ],
      distance_from_city_center: "1 km",
      cancellation_policy: "Free cancellation 24 hours before check-in",
      pet_friendly: true,
      smoking_policy: "No smoking indoors",
      check_in_time: "12:00",
      check_out_time: "10:00"
    },
    {
      name: "Parkside Homestay",
      image:"https://media.istockphoto.com/id/1281670693/photo/residential-skyscraper-in-kathmandu-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=l6Xpyqw5zgOYr8cOJfkpnCT8zN6jzcQXE5MBNMKPfNk=",
      type: "Homestay",
      location: "Near Cubbon Park, Bangalore, India",
      nearby_tourist_spots: ["Cubbon Park", "UB City Mall"],
      amenities: ["Free Wi-Fi", "Garden View", "Self-Catering"],
      rooms: [
        { room_type: "Double Room", price_per_night: 80, max_occupancy: 2 }
      ],
      ratings: 4.2,
      reviews: [
        { username: "relaxedtraveler", rating: 4, comment: "Perfect location for nature lovers!" }
      ],
      contact_info: {
        phone: "+91 80 7777 8765",
        email: "stay@parksidehomestay.com",
        website: "https://www.parksidehomestay.com"
      },
      images: [
        "https://example.com/images/cubbon_homestay1.jpg",
        "https://example.com/images/cubbon_homestay2.jpg"
      ],
      distance_from_city_center: "1.2 km",
      cancellation_policy: "Non-refundable",
      pet_friendly: false,
      smoking_policy: "Smoking allowed in designated areas",
      check_in_time: "15:00",
      check_out_time: "11:00"
    },
    // Bannerghatta
  {
      name: "Wildlife Retreat",
      image:"https://media.istockphoto.com/id/1299305921/photo/drone-view-of-woman-snorkelling-in-the-maldives.webp?a=1&b=1&s=612x612&w=0&k=20&c=bQoeBs6eAjdh66yOX3qRACRN5md6a2UKo_jFJ-BrnAk=",
      type: "Resort",
      location: "Near Bannerghatta National Park, Bangalore, India",
      nearby_tourist_spots: ["Bannerghatta National Park"],
      amenities: ["Swimming Pool", "Safari Booking", "Restaurant", "Nature Walks"],
      rooms: [
        { room_type: "Luxury Suite", price_per_night: 150, max_occupancy: 4 },
        { room_type: "Eco Lodge", price_per_night: 80, max_occupancy: 2 }
      ],
      ratings: 4.6,
      reviews: [
        { username: "safarilover", rating: 5, comment: "Perfect stay for wildlife lovers, great service!" }
      ],
      contact_info: {
        phone: "+91 80 8888 2345",
        email: "info@wildliferetreat.com",
        website: "https://www.wildliferetreat.com"
      },
      images: [
        "https://example.com/images/bannerghatta_resort1.jpg",
        "https://example.com/images/bannerghatta_resort2.jpg"
      ],
      distance_from_city_center: "23 km",
      cancellation_policy: "Full refund if canceled 72 hours before check-in",
      pet_friendly: false,
      smoking_policy: "No smoking",
      check_in_time: "13:00",
      check_out_time: "11:00"
    },
    {
      name: "Forest View Homestay",
      image:"https://media.istockphoto.com/id/1323459165/photo/mae-kampong-village-in-chiang-mai-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=yiQz9W-MKuHLyJ7Bv7bfWTjcJk9rRg8s3Gu6wg2WYr8=",
      type: "Homestay",
      location: "Near Bannerghatta National Park, Bangalore, India",
      nearby_tourist_spots: ["Bannerghatta National Park"],
      amenities: ["Free Breakfast", "Guided Treks", "Fire Pit"],
      rooms: [
        { room_type: "Private Cabin", price_per_night: 70, max_occupancy: 3 }
      ],
      ratings: 4.3,
      reviews: [
        { username: "naturebuff", rating: 4, comment: "Beautiful and peaceful, ideal for families." }
      ],
      contact_info: {
        phone: "+91 80 8888 6789",
        email: "stay@forestviewhomestay.com",
        website: "https://www.forestviewhomestay.com"
      },
      images: [
        "https://example.com/images/bannerghatta_homestay1.jpg",
        "https://example.com/images/bannerghatta_homestay2.jpg"
      ],
      distance_from_city_center: "22 km",
      cancellation_policy: "No refund on cancellation",
      pet_friendly: true,
      smoking_policy: "Smoking allowed in outdoor areas only",
      check_in_time: "14:00",
      check_out_time: "12:00"
    },
    
    // Coorg
    {
      name: "Coorg Mountain Inn",
      image:"https://media.istockphoto.com/id/859820868/photo/beautiful-tropical-beach-at-island-koh-chang.webp?a=1&b=1&s=612x612&w=0&k=20&c=eNW1FhNk4OybRg4DmN07pm7SZ1BZELlgAPc5sdNPHmA=",
      type: "Resort",
      location: "Coorg, Karnataka, India",
      nearby_tourist_spots: ["Abbey Falls", "Dubare Elephant Camp"],
      amenities: ["Spa Services", "Outdoor Pool", "Traditional Kodava Cuisine"],
      rooms: [
        { room_type: "Deluxe Suite", price_per_night: 140, max_occupancy: 2 },
        { room_type: "Family Suite", price_per_night: 180, max_occupancy: 4 }
      ],
      ratings: 4.7,
      reviews: [
        { username: "hikingfan", rating: 5, comment: "Amazing mountain views and top-notch service!" }
      ],
      contact_info: {
        phone: "+91 80 7777 5678",
        email: "info@coorgmountaininn.com",
        website: "https://www.coorgmountaininn.com"
      },
      images: [
        "https://example.com/images/coorg_resort1.jpg",
        "https://example.com/images/coorg_resort2.jpg"
      ],
      distance_from_city_center: "5 km",
      cancellation_policy: "Full refund if canceled 48 hours before check-in",
      pet_friendly: true,
      smoking_policy: "No smoking",
      check_in_time: "14:00",
      check_out_time: "11:00"
    },
    {
      name: "Coffee Trails Homestay",
      image:"https://plus.unsplash.com/premium_photo-1664189121640-fb3b18702981?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29mZmVlJTIwVHJhaWxzJTIwSG9tZXN0YXklMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      type: "Homestay",
      location: "Coorg, Karnataka, India",
      nearby_tourist_spots: ["Madikeri Fort", "Coffee Plantations"],
      amenities: ["Complimentary Breakfast", "Fireplace", "Garden"],
      rooms: [
        { room_type: "Private Room", price_per_night: 90, max_occupancy: 2 }
      ],
      ratings: 4.4,
      reviews: [
        { username: "coffeelover", rating: 4, comment: "Cozy homestay with wonderful hosts and amazing coffee." }
      ],
      contact_info: {
        phone: "+91 80 8888 1234",
        email: "contact@coffeetrailshomestay.com",
        website: "https://www.coffeetrailshomestay.com"
      },
      images: [
        "https://example.com/images/coorg_homestay1.jpg",
        "https://example.com/images/coorg_homestay2.jpg"
      ],
      distance_from_city_center: "6 km",
      cancellation_policy: "Non-refundable",
      pet_friendly: false,
      smoking_policy: "Smoking allowed on balconies only",
      check_in_time: "13:00",
      check_out_time: "11:00"
    },
    
    // Hampi
    {
      name: "Heritage Stay Hampi",
      image:"https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGVyaXRhZ2UlMjBTdGF5JTIwSGFtcGklMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      type: "Hotel",
      location: "Near Hampi Bazaar, Karnataka, India",
      nearby_tourist_spots: ["Virupaksha Temple", "Lotus Mahal"],
      amenities: ["Free Wi-Fi", "Complimentary Breakfast", "Guided Tours"],
      rooms: [
        { room_type: "Heritage Room", price_per_night: 100, max_occupancy: 2 }
      ],
      ratings: 4.5,
      reviews: [
        { username: "historybuff", rating: 5, comment: "Beautiful heritage hotel with exceptional service!" }
      ],
      contact_info: {
        phone: "+91 80 9999 1234",
        email: "contact@heritagehampi.com",
        website: "https://www.heritagehampi.com"
      },
      images: [
        "https://example.com/images/hampi_hotel1.jpg",
        "https://example.com/images/hampi_hotel2.jpg"
      ],
      distance_from_city_center: "2 km",
      cancellation_policy: "Free cancellation within 48 hours before check-in",
      pet_friendly: false,
      smoking_policy: "No smoking",
      check_in_time: "13:00",
      check_out_time: "11:00"
    },
    {
      name: "Rock View Homestay",
      image:"https://plus.unsplash.com/premium_photo-1692314888405-427d6656e63b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um9jayUyMFZpZXclMjBIb21lc3RheSUyMGhvdGVsfGVufDB8fDB8fHww",
      type: "Homestay",
      location: "Near Hampi Rocks, Karnataka, India",
      nearby_tourist_spots: ["Matanga Hill", "Hampi Rocks"],
      amenities: ["Free Wi-Fi", "Terrace View", "Traditional Meals"],
      rooms: [
        { room_type: "Private Room", price_per_night: 75, max_occupancy: 2 }
      ],
      ratings: 4.3,
      reviews: [
        { username: "traveler123", rating: 4, comment: "Peaceful homestay with a great view of the rocks!" }
      ],
      contact_info: {
        phone: "+91 80 9999 5678",
        email: "stay@rockviewhomestay.com",
        website: "https://www.rockviewhomestay.com"
      },
      images: [
        "https://example.com/images/hampi_homestay1.jpg",
        "https://example.com/images/hampi_homestay2.jpg"
      ],
      distance_from_city_center: "3 km",
      cancellation_policy: "Non-refundable",
      pet_friendly: false,
      smoking_policy: "Smoking allowed in designated areas only",
      check_in_time: "14:00",
      check_out_time: "11:00"
    },
    
    // Jog Falls
    {
      name: "Waterfall Retreat",
      image:"https://media.istockphoto.com/id/661468290/photo/brother-and-sister-playing-in-resort-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=KxCSiyLnrnk90tCSLtCTiCNO_hKdvPwqipjP103xeWY=",
      type: "Resort",
      location: "Near Jog Falls, Karnataka, India",
      nearby_tourist_spots: ["Jog Falls"],
      amenities: ["Free Breakfast", "River View Rooms", "Nature Walks"],
      rooms: [
        { room_type: "River View Room", price_per_night: 120, max_occupancy: 3 }
      ],
      ratings: 4.6,
      reviews: [
        { username: "waterlover", rating: 5, comment: "Amazing stay with breathtaking views of the falls!" }
      ],
      contact_info: {
        phone: "+91 80 7777 1234",
        email: "info@waterfallretreat.com",
        website: "https://www.waterfallretreat.com"
      },
      images: [
        "https://example.com/images/jogfalls_resort1.jpg",
        "https://example.com/images/jogfalls_resort2.jpg"
      ],
      distance_from_city_center: "0.5 km",
      cancellation_policy: "Free cancellation within 72 hours",
      pet_friendly: true,
      smoking_policy: "No smoking",
      check_in_time: "13:00",
      check_out_time: "12:00"
    },
    
   // Badami Caves
  {
      name: "Badami Heritage Resort",
      image:"https://plus.unsplash.com/premium_photo-1690527101950-5bc2b81ca773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFkYW1pJTIwSGVyaXRhZ2UlMjBSZXNvcnR8ZW58MHx8MHx8fDA%3D",
      type: "Resort",
      location: "Badami, Karnataka, India",
      nearby_tourist_spots: ["Badami Caves", "Agastya Lake"],
      amenities: ["Swimming Pool", "Restaurant", "Yoga Sessions", "Sightseeing Tours"],
      rooms: [
        { room_type: "Heritage Room", price_per_night: 100, max_occupancy: 2 }
      ],
      ratings: 4.4,
      reviews: [
        { username: "heritagehunter", rating: 4, comment: "Lovely resort with a great view of the caves!" }
      ],
      contact_info: {
        phone: "+91 80 9999 2345",
        email: "info@badamiheritageresort.com",
        website: "https://www.badamiheritageresort.com"
      },
      images: [
        "https://example.com/images/badami_resort1.jpg",
        "https://example.com/images/badami_resort2.jpg"
      ],
      distance_from_city_center: "4 km",
      cancellation_policy: "Full refund if canceled 48 hours before check-in",
      pet_friendly: false,
      smoking_policy: "Smoking allowed in designated areas",
      check_in_time: "14:00",
      check_out_time: "11:00"
    },
    
    // Chikmagalur
    {
      name: "Chikmagalur Coffee Estate Resort",
      image:"https://plus.unsplash.com/premium_photo-1661962821338-c07da63995f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpa21hZ2FsdXIlMjBDb2ZmZWUlMjBFc3RhdGUlMjBSZXNvcnQlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D",
      type: "Resort",
      location: "Chikmagalur, Karnataka, India",
      nearby_tourist_spots: ["Mullayanagiri", "Baba Budangiri"],
      amenities: ["Coffee Plantation Tour", "Outdoor Pool", "Free Wi-Fi", "Trekking"],
      rooms: [
        { room_type: "Estate View Room", price_per_night: 120, max_occupancy: 3 }
      ],
      ratings: 4.8,
      reviews: [
        { username: "coffeeaddict", rating: 5, comment: "Great experience, loved the coffee plantation tour!" }
      ],
      contact_info: {
        phone: "+91 80 8888 3456",
        email: "stay@chikmagalurcoffeeresort.com",
        website: "https://www.chikmagalurcoffeeresort.com"
      },
      images: [
        "https://example.com/images/chikmagalur_resort1.jpg",
        "https://example.com/images/chikmagalur_resort2.jpg"
      ],
      distance_from_city_center: "8 km",
      cancellation_policy: "Non-refundable",
      pet_friendly: true,
      smoking_policy: "Smoking allowed in outdoor areas only",
      check_in_time: "13:00",
      check_out_time: "11:00"
    },
    
    // Kabini
    {
      name: "Kabini River Lodge",
      image:"https://media.istockphoto.com/id/1215193616/photo/paran%C3%A1-foz-do-igua%C3%A7u.webp?a=1&b=1&s=612x612&w=0&k=20&c=heHaMU93uSbKWnSgxlxLEX2H9aAfRngLtTpSNBqQAsE=",
      type: "Lodge",
      location: "Kabini, Karnataka, India",
      nearby_tourist_spots: ["Kabini River", "Nagarhole National Park"],
      amenities: ["Wildlife Safari", "Free Breakfast", "Barbecue", "Fishing"],
      rooms: [
        { room_type: "River View Lodge", price_per_night: 180, max_occupancy: 2 }
      ],
      ratings: 4.7,
      reviews: [
        { username: "naturelover", rating: 5, comment: "Amazing stay with fantastic wildlife safari!" }
      ],
      contact_info: {
        phone: "+91 80 5555 6789",
        email: "info@kabiniriverlodge.com",
        website: "https://www.kabiniriverlodge.com"
      },
      images: [
        "https://example.com/images/kabini_lodge1.jpg",
        "https://example.com/images/kabini_lodge2.jpg"
      ],
      distance_from_city_center: "5 km",
      cancellation_policy: "Full refund if canceled 72 hours before check-in",
      pet_friendly: true,
      smoking_policy: "No smoking",
      check_in_time: "12:00",
      check_out_time: "11:00"
    },
    
    // Mysore Palace
    {
      name: "Mysore Heritage Hotel",
      image:"https://media.istockphoto.com/id/146778881/photo/india-udaipur.webp?a=1&b=1&s=612x612&w=0&k=20&c=s1y4fow8HKMvBulSiemSC1bUtIAJtEpQVYYTEeaTpGs=",
      type: "Hotel",
      location: "Mysore, Karnataka, India",
      nearby_tourist_spots: ["Mysore Palace", "Chamundi Hill"],
      amenities: ["Free Breakfast", "Free Wi-Fi", "24/7 Room Service", "Sightseeing Tours"],
      rooms: [
        { room_type: "Palace View Room", price_per_night: 150, max_occupancy: 2 }
      ],
      ratings: 4.6,
      reviews: [
        { username: "palacevisitor", rating: 5, comment: "The view of the palace from the room is breathtaking!" }
      ],
      contact_info: {
        phone: "+91 80 7777 1234",
        email: "info@mysoreheritagehotel.com",
        website: "https://www.mysoreheritagehotel.com"
      },
      images: [
        "https://example.com/images/mysorepalace_hotel1.jpg",
        "https://example.com/images/mysorepalace_hotel2.jpg"
      ],
      distance_from_city_center: "2 km",
      cancellation_policy: "Free cancellation within 48 hours",
      pet_friendly: false,
      smoking_policy: "Smoking not allowed inside the hotel",
      check_in_time: "14:00",
      check_out_time: "12:00"
    },
    
    // Ooty
    {
      name: "Ooty Lakeview Resort",
      image:"https://plus.unsplash.com/premium_photo-1724818361335-291394c25925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T290eSUyMExha2V2aWV3JTIwUmVzb3J0fGVufDB8fDB8fHww",
      type: "Resort",
      location: "Ooty, Tamil Nadu, India",
      nearby_tourist_spots: ["Ooty Lake", "Botanical Gardens"],
      amenities: ["Lake View", "Free Breakfast", "Trekking", "Restaurant"],
      rooms: [
        { room_type: "Lake View Deluxe Room", price_per_night: 110, max_occupancy: 2 }
      ],
      ratings: 4.7,
      reviews: [
        { username: "hillstationlover", rating: 5, comment: "The lake view from the room was incredible!" }
      ],
      contact_info: {
        phone: "+91 80 8888 1234",
        email: "info@ootylakeviewresort.com",
        website: "https://www.ootylakeviewresort.com"
      },
      images: [
        "https://example.com/images/ooty_resort1.jpg",
        "https://example.com/images/ooty_resort2.jpg"
      ],
      distance_from_city_center: "3 km",
      cancellation_policy: "Full refund if canceled 72 hours before check-in",
      pet_friendly: true,
      smoking_policy: "Smoking allowed in outdoor areas only",
      check_in_time: "14:00",
      check_out_time: "11:00"
    },
    
    // Alleppey
    {
      name: "Alleppey Backwaters Resort",
      image:"https://plus.unsplash.com/premium_photo-1675039871139-06cc792da9a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWxsZXBwZXklMjBCYWNrd2F0ZXJzJTIwUmVzb3J0fGVufDB8fDB8fHww",
      type: "Resort",
      location: "Alleppey, Kerala, India",
      nearby_tourist_spots: ["Alleppey Beach", "Backwaters of Alleppey"],
      amenities: ["Boating", "Free Breakfast", "Ayurvedic Spa", "Restaurant"],
      rooms: [
        { room_type: "Deluxe Room", price_per_night: 130, max_occupancy: 3 }
      ],
      ratings: 4.5,
      reviews: [
        { username: "backwaterlover", rating: 5, comment: "Amazing resort, perfect for a relaxing weekend!" }
      ],
      contact_info: {
        phone: "+91 80 7777 1234",
        email: "stay@alleppeybackwatersresort.com",
        website: "https://www.alleppeybackwatersresort.com"
      },
      images: [
        "https://example.com/images/alleppey_resort1.jpg",
        "https://example.com/images/alleppey_resort2.jpg"
      ],
      distance_from_city_center: "5 km",
      cancellation_policy: "Full refund if canceled 48 hours before check-in",
      pet_friendly: true,
      smoking_policy: "Smoking allowed in outdoor areas only",
      check_in_time: "14:00",
      check_out_time: "11:00"
    },
    // Kumarakom
  {
      name: "Kumarakom Lake Resort",
      image:"https://plus.unsplash.com/premium_photo-1661846577575-560fd37a2a19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8S3VtYXJha29tJTIwTGFrZSUyMGhvdGVsfGVufDB8fDB8fHww",
      type: "Resort",
      location: "Kumarakom, Kerala, India",
      nearby_tourist_spots: ["Kumarakom Lake", "Vembanad Lake"],
      amenities: ["Boating", "Swimming Pool", "Spa", "Restaurant"],
      rooms: [
        { room_type: "Lake View Pool Villa", price_per_night: 200, max_occupancy: 2 }
      ],
      ratings: 4.9,
      reviews: [
        { username: "keralatravel", rating: 5, comment: "Absolutely serene, amazing stay with lake views!" }
      ],
      contact_info: {
        phone: "+91 80 9999 5555",
        email: "info@kumarakomlakeresort.com",
        website: "https://www.kumarakomlakeresort.com"
      },
      images: [
        "https://example.com/images/kumarakom_resort1.jpg",
        "https://example.com/images/kumarakom_resort2.jpg"
      ],
      distance_from_city_center: "2 km",
      cancellation_policy: "Free cancellation within 48 hours",
      pet_friendly: false,
      smoking_policy: "Smoking not allowed inside the resort",
      check_in_time: "14:00",
      check_out_time: "11:00"
    },
    
    // Rameshwaram
    {
      name: "Rameswaram Beach Resort",
      image:"https://plus.unsplash.com/premium_photo-1681338224373-9669c2497c05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJhbWVzd2FyYW0lMjBCZWFjaCUyMGhvdGVsfGVufDB8fDB8fHww",
      type: "Resort",
      location: "Rameswaram, Tamil Nadu, India",
      nearby_tourist_spots: ["Rameswaram Beach", "Ramanathaswamy Temple"],
      amenities: ["Beach Access", "Free Breakfast", "Sightseeing Tours", "Restaurant"],
      rooms: [
        { room_type: "Ocean View Room", price_per_night: 150, max_occupancy: 2 }
      ],
      ratings: 4.6,
      reviews: [
        { username: "beachlover", rating: 5, comment: "Great place to relax by the beach and explore the temple!" }
      ],
      contact_info: {
        phone: "+91 80 5555 8765",
        email: "stay@rameswarambeachresort.com",
        website: "https://www.rameswarambeachresort.com"
      },
      images: [
        "https://example.com/images/rameswaram_resort1.jpg",
        "https://example.com/images/rameswaram_resort2.jpg"
      ],
      distance_from_city_center: "3 km",
      cancellation_policy: "Free cancellation within 72 hours",
      pet_friendly: true,
      smoking_policy: "Smoking allowed in designated areas",
      check_in_time: "14:00",
      check_out_time: "11:00"
    },
    
    // Taj Mahal
    {
      name: "Taj View Hotel",
      image:"https://images.unsplash.com/photo-1724947053227-2335bf21d0ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFqJTIwSG90ZWx8ZW58MHx8MHx8fDA%3D",
      type: "Hotel",
      location: "Agra, Uttar Pradesh, India",
      nearby_tourist_spots: ["Taj Mahal", "Agra Fort"],
      amenities: ["Taj Mahal View", "Free Wi-Fi", "Restaurant", "Free Parking"],
      rooms: [
        { room_type: "Taj View Suite", price_per_night: 250, max_occupancy: 2 }
      ],
      ratings: 4.7,
      reviews: [
        { username: "historybuff", rating: 5, comment: "Amazing view of the Taj Mahal from the room!" }
      ],
      contact_info: {
        phone: "+91 80 8888 4321",
        email: "info@tajviewhotel.com",
        website: "https://www.tajviewhotel.com"
      },
      images: [
        "https://example.com/images/tajview_hotel1.jpg",
        "https://example.com/images/tajview_hotel2.jpg"
      ],
      distance_from_city_center: "2 km",
      cancellation_policy: "Free cancellation within 48 hours",
      pet_friendly: false,
      smoking_policy: "No smoking inside the hotel",
      check_in_time: "14:00",
      check_out_time: "12:00"
    },
    
    // Leh Ladakh
    {
      name: "Leh Ladakh Himalayan Resort",
      image:"https://plus.unsplash.com/premium_photo-1693966067170-2835a8a17a18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFqJTIwSG90ZWx8ZW58MHx8MHx8fDA%3D",
      type: "Resort",
      location: "Leh, Ladakh, India",
      nearby_tourist_spots: ["Pangong Lake", "Nubra Valley"],
      amenities: ["Mountain Views", "Free Wi-Fi", "Trekking", "Restaurant"],
      rooms: [
        { room_type: "Mountain View Room", price_per_night: 180, max_occupancy: 2 }
      ],
      ratings: 4.8,
      reviews: [
        { username: "adventuretraveler", rating: 5, comment: "The view of the mountains is stunning and peaceful!" }
      ],
      contact_info: {
        phone: "+91 80 5555 1234",
        email: "info@lehladakhresort.com",
        website: "https://www.lehladakhresort.com"
      },
      images: [
        "https://example.com/images/lehladakh_resort1.jpg",
        "https://example.com/images/lehladakh_resort2.jpg"
      ],
      distance_from_city_center: "5 km",
      cancellation_policy: "Non-refundable",
      pet_friendly: false,
      smoking_policy: "No smoking inside the resort",
      check_in_time: "13:00",
      check_out_time: "11:00"
    },
    
    // Jaipur
    {
      name: "Jaipur Royal Heritage Hotel",
      image:"https://plus.unsplash.com/premium_photo-1661963123153-5471a95b7042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGVoJTIwTGFkYWtoJTIwSGltYWxheWFuJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
      type: "Hotel",
      location: "Jaipur, Rajasthan, India",
      nearby_tourist_spots: ["Amber Fort", "City Palace", "Hawa Mahal"],
      amenities: ["Heritage Architecture", "Restaurant", "Free Wi-Fi", "Sightseeing Tours"],
      rooms: [
        { room_type: "Heritage Deluxe Room", price_per_night: 120, max_occupancy: 2 }
      ],
      ratings: 4.7,
      reviews: [
        { username: "rajasthantravel", rating: 5, comment: "Beautiful heritage hotel, perfectly located near the main attractions!" }
      ],
      contact_info: {
        phone: "+91 80 7777 5678",
        email: "info@jaipurroyalheritage.com",
        website: "https://www.jaipurroyalheritage.com"
      },
      images: [
        "https://example.com/images/jaipurheritage_hotel1.jpg",
        "https://example.com/images/jaipurheritage_hotel2.jpg"
      ],
      distance_from_city_center: "3 km",
      cancellation_policy: "Free cancellation within 24 hours",
      pet_friendly: false,
      smoking_policy: "Smoking allowed in designated outdoor areas",
      check_in_time: "14:00",
      check_out_time: "12:00"
    },
    
    // Varanasi
    {
      name: "Varanasi Ganga View Guest House",
      image:"https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGVoJTIwTGFkYWtoJTIwSGltYWxheWFuJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
      type: "Guest House",
      location: "Varanasi, Uttar Pradesh, India",
      nearby_tourist_spots: ["Ganges River", "Kashi Vishwanath Temple"],
      amenities: ["River View", "Free Wi-Fi", "Yoga Classes", "Restaurant"],
      rooms: [
        { room_type: "Ganga View Room", price_per_night: 100, max_occupancy: 2 }
      ],
      ratings: 4.6,
      reviews: [
        { username: "spiritualtraveler", rating: 5, comment: "Amazing experience staying next to the Ganges!" }
      ],
      contact_info: {
        phone: "+91 80 6666 4321",
        email: "stay@varanasigangaview.com",
        website: "https://www.varanasigangaview.com"
      },
      images: [
        "https://example.com/images/varanasi_guesthouse1.jpg",
        "https://example.com/images/varanasi_guesthouse2.jpg"
      ],
      distance_from_city_center: "1 km",
      cancellation_policy: "Free cancellation within 24 hours",
      pet_friendly: true,
      smoking_policy: "No smoking inside the guest house",
      check_in_time: "12:00",
      check_out_time: "11:00"
    },
    
    // Amritsar
    {
      name: "Golden Temple View Hotel",
      image:"https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExlaCUyMExhZGFraCUyMEhpbWFsYXlhbiUyMGhvdGVsfGVufDB8fDB8fHww",
      type: "Hotel",
      location: "Amritsar, Punjab, India",
      nearby_tourist_spots: ["Golden Temple", "Jallianwala Bagh"],
      amenities: ["Golden Temple View", "Free Breakfast", "Free Wi-Fi", "Spa"],
      rooms: [
        { room_type: "Golden Temple View Suite", price_per_night: 150, max_occupancy: 2 }
      ],
      ratings: 4.8,
      reviews: [
        { username: "templevisitor", rating: 5, comment: "Excellent stay with a view of the Golden Temple from the room!" }
      ],
      contact_info: {
        phone: "+91 80 5555 9876",
        email: "info@goldentempleviewhotel.com",
        website: "https://www.goldentempleviewhotel.com"
      },
      images: [
        "https://example.com/images/goldentempleview_hotel1.jpg",
        "https://example.com/images/goldentempleview_hotel2.jpg"
      ],
      distance_from_city_center: "2 km",
      cancellation_policy: "Free cancellation within 48 hours",
      pet_friendly: false,
      smoking_policy: "Smoking allowed in designated areas",
      check_in_time: "14:00",
      check_out_time: "12:00"
    }
    
    
    ]
    
  };