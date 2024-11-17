//require dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const cookieParser = require('cookie-parser');
const flash=require("connect-flash");
const Destination = require("./models/destinations"); // Adjust path if necessary
const Room = require("./models/rooms");
const Package = require("./models/packages");
const Booking = require("./models/bookings"); // Booking model
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
MONGO_URL = "mongodb://localhost:27017/espresso";
const address = require("address");
require("dotenv").config();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
const Like=require("./models/likes");
// const Swal = require('sweetalert2');
// const toastr = require('toastr');
// // import 'toastr/build/toastr.min.css';
const fs = require('fs');
const { GoogleGenerativeAI } = require("@google/generative-ai");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
const sessionOption = {
  // store:store,
  secret: 'espresso',
  resave: false,
  saveUninitialized: true,
  cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly:true,
  },
};
main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

//-------------------------------------------------------------------

//use middleware
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(cookieParser());
app.use(session(sessionOption));
// app.use(flash);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));



//---------------------FUNCTIONS----------------------------------------------

async function gemini(){
  ip = address.ip();
  console.log("Detected IP:", ip);

  var fetch = require("node-fetch");
  var requestOptions = {
    method: "GET",
  };
  responseJSON='';
  fetch(
    "https://api.geoapify.com/v1/ipinfo?&apiKey=40885c1cd64e40c8a0198cf5e381d5b5",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      responseJSON =  geminiAPI(result.city.name);
      return responseJSON;
    })
    .catch((error) => console.log("error", error));

    
}


geminiAPI = async (place) => {
  console.log(`Place received: ${place}`);

  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const genAI = new GoogleGenerativeAI(
    "AIzaSyDNlcDPG9J6wAAukxFklXYRoFDLFObedfg"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `Tell me about the local cuisine, tourist attractions, hidden gems,  and handicrafts/products famous around ${place} give entire answer in json format like cuisine : ;etc etc; it must be structly in json and most importantly in your response you dont give anything else , like remember to do that , ask for any help , anything , because i will directly inject your response into my db and dont mention bactick json at start and end`;

  try {
    

    const result = await model.generateContent(prompt); // Wait for model response
    response=result.response.text();
    console.log(response);
   

  // Simulate the result you want to append to a file

  
  
  
  // Specify the file path
  const filePath = 'location.json';
  
  // Append the result to the file
  fs.writeFile(filePath, response + '\n', (err) => {
      if (err) {
          console.error('Error appending to file:', err);
      } else {
          console.log('Result successfully appended to file!');
      }
  });
    
    // res.json({ success: true, message: response });
  } catch (error) {
    if (
      error.response &&
      error.response.status === 503 &&
      retryCount < MAX_RETRIES
    ) {
      console.log(`Retrying... Attempt ${retryCount + 1}`);
      retryCount++;
      setTimeout(fetchGeminiData, 5000); // Retry after 5 seconds
    } else {
      console.error("Error fetching data from Gemini API:", error);
    }
    // res.status(500).json({ success: false, message: "Error processing request" });
  }
};

function saveJson(msg){
  const fs = require('fs');

  // Simulate the result you want to append to a file

  
  const cleanedMsg = msg.replace(/^```json\n|\n```$/g, '');

  
  // Specify the file path
  const filePath = 'results.json';
  
  // Append the result to the file
  fs.writeFile(filePath, cleanedMsg + '\n', (err) => {
      if (err) {
          console.error('Error appending to file:', err);
      } else {
          console.log('Result successfully appended to file!');
      }
  });
}

// Middleware to check if the user is logged in
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login'); // Redirect if not authenticated
}




//------------------ROUTES---------------------------------

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});

app.get("/demouser", async (req, res) => {
  let fakeUser = new User({
    email: "student5@gmail.com",
    username: "delta-student",
  });

  let registeredUser = await User.register(fakeUser, "helloworld");
  res.send(registeredUser);
});

app.get("/", async (req, res) => {

  gemini();
  res.render("listings/index.ejs");
});



app.get("/dest", async (req, res) => {
  // Call this function when the user lands on your website

  try {
    const destinations = await Destination.find(); // Query all destinations
    res.render("listings/listings.ejs", { destinations }); // Pass data to template
  } catch (err) {
    console.error("Error fetching destinations:", err);
    res.status(500).send("Error retrieving destinations");
  }
});

app.get("/room", async (req, res) => {
  try {
    const rooms = await Room.find(); // Query all rooms
    res.render("listings/rooms.ejs", { rooms }); // Pass data to template
  } catch (err) {
    console.error("Error fetching rooms:", err);
    res.status(500).send("Error retrieving rooms");
  }
});

app.get("/package", async (req, res) => {
  try {
    const packages = await Package.find(); // Query all packages
    res.render("listings/packages.ejs", { packages }); // Pass data to template
  } catch (err) {
    console.error("Error fetching packages:", err);
    res.status(500).send("Error retrieving packages");
  }
});

app.get("/dest/:id", (req, res) => {
  const destinationId = req.params.id; // Get the ID from the URL

  // Find the destination by ID in the database
  Destination.findById(destinationId)
    .then((destination) => {
      if (!destination) {
        // If no destination found, return a 404 or error message
        return res.status(404).send("Destination not found");
      }

      // If the destination is found, render the page and pass the destination data
      res.render("listings/show.ejs", { destination }); // 'destinationDetails' is the name of your EJS file
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving destination");
    });
});

app.get("/room/:id", (req, res) => {
  const RoomId = req.params.id; // Get the ID from the URL

  // Find the Room by ID in the database
  Room.findById(RoomId)
    .then((room) => {
      if (!room) {
        // If no Room found, return a 404 or error message
        return res.status(404).send("Room not found");
      }

      // If the Room is found, render the page and pass the Room data
      res.render("listings/showroom.ejs", { room }); // 'RoomDetails' is the name of your EJS file
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving Room");
    });
});

app.get("/package/:id", (req, res) => {
  const PackageId = req.params.id; // Get the ID from the URL

  // Find the Package by ID in the database
  Package.findById(PackageId)
    .then((pkg) => {
      if (!pkg) {
        // If no Package found, return a 404 or error message
        return res.status(404).send("Package not found");
      }

      // If the Package is found, render the page and pass the Package data
      res.render("listings/showpack.ejs", { pkg }); // 'PackageDetails' is the name of your EJS file
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving Package");
    });
});

app.post("/book/dest/:id", async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    const { date, guests } = req.body;

    if (!destination) {
      return res.status(404).send("Destination not found.");
    }

    const booking = new Booking({
      destination: req.params.id,
      // user: req.user._id, // Assuming user is authenticated
      date,
      guests,
    });

    await booking.save();
    res.render("includes/conformation.ejs", { booking });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error.");
  }
});

app.post("/book/room/:id", async (req, res) => {
  try {
    const destination = await Room.findById(req.params.id);
    const { date, guests } = req.body;

    if (!destination) {
      return res.status(404).send("Lodge not found.");
    }

    const booking = new Booking({
      destination: req.params.id,
      // user: req.user._id, // Assuming user is authenticated
      date,
      guests,
    });

    await booking.save();
    res.render("includes/conformation.ejs", { booking });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error.");
  }
});

app.post("/book/package/:id", async (req, res) => {
  try {
    const destination = await Package.findById(req.params.id);
    const { date, guests } = req.body;

    if (!destination) {
      return res.status(404).send("Package not found.");
    }

    const booking = new Booking({
      destination: req.params.id,
      // user: req.user._id, // Assuming user is authenticated
      date,
      guests,
    });

    await booking.save();
    res.render("includes/conformation.ejs", { booking });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error.");
  }
});
app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required!");
  }

  try {
    // Create a new user object
    const newUser = new User({ email });

    // Register the user with the password
    const registeredUser = await User.register(newUser, password);

    // Automatically log in the user after registration
    req.login(registeredUser, (err) => {
      if (err) return next(err); // Pass error to Express error handler
      res.redirect("/dest"); // Redirect to the desired route
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send("An error occurred during registration.");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // Validate inputs
  if (!email || !password) {
    return res.render("signup", { error: "Email and password are required!", email: "", password: "" });
  }

  try {
    const newUser = new User({ email });
    await User.register(newUser, password);

    req.login(newUser, (err) => {
      if (err) return next(err);
      res.redirect("/dest");
    });
  } catch (error) {
    console.error("Error during signup:", error);

    let errorMessage = "An error occurred during signup.";
    if (error.name === "UserExistsError") {
    
      errorMessage = "A user with this email already exists.";
    }

    // Render the signup form with an error message and reset values
   
    res.redirect("/");
  }
});

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

// Middleware setup
app.post('/like', async (req, res) => {
  console.log(req.body);
  console.log("ok")
  let {schema , id} = req.body;
  const document = new Like({ schema, id });

  const result = await document.save();
  

  res.json({ message: 'Item liked!' });
});

app.post('/unlike', async (req, res) => {
  let {schema , id} = req.body;
  const result = await Like.deleteOne({ id });  

  res.json({ message: 'Item unliked!'});
});

app.get('/askgemini',async(req,res)=>{




})

app.get('/search', async (req, res) => {
  const searchValue = req.query.search; // Access the 'query' value from the form
  console.log('Search Value:', searchValue); // Log the search value
  
  const genAI = new GoogleGenerativeAI("AIzaSyCdPQ_ehleQRqvCQg7EOcYfgz0GW2mELSw");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = `give me the following data about the place ${searchValue} in JSON format to add to my MongoDB
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
    it must be structly the same that too in json and most importantly in your response you dont give anything else , like remember to do that , ask for any help , anything , because i will directly inject your response into my db and dont mention bactick json at start and end
  `;
  
  try {
    const result = await model.generateContent(prompt); // Wait for model response
    const response = result.response.text();
    console.log('Generated response:', response);
    
    // Save the JSON response to file
    fs.writeFile('results.json', response, 'utf8', (err) => {
      if (err) {
        console.error('Error saving JSON file:', err);
        return res.status(500).send('Error saving JSON file');
      }

      // Read the saved JSON file and pass it to EJS template
      fs.readFile('results.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading JSON file:', err);
          return res.status(500).send('Error reading JSON file');
        }

        const destination = JSON.parse(data); // Parse the JSON data
        console.log('Destination data sent to EJS:', destination);
        
        // Render the page with the data
        res.render('listings/show.ejs', { destination });
      });
    });
    
  } catch (error) {
    console.error('Error fetching data from Gemini API:', error);
    res.status(500).json({ success: false, message: "Error processing request" });
  }
});

app.get('/location' , async(req,res)=>{
  
    // Read the saved JSON file and pass it to EJS template
    fs.readFile('location.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading JSON file:', err);
        return res.status(500).send('Error reading JSON file');
      }

      const destination = JSON.parse(data); // Parse the JSON data
      console.log('Destination data sent to EJS:', destination);
      
      // Render the page with the data
      res.render('listings/show.ejs', { destination });
    });
  });
