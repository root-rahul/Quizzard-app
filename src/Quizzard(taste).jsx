import { useState, useEffect } from "react";

const categories = [
  { id: 1, name: "Knowing the Organisation", icon: "🏢", color: "#22c55e", bg: "#16a34a" },
  { id: 2, name: "Music", icon: "🎵", color: "#8b5cf6", bg: "#7c3aed" },
  { id: 3, name: "Film & Television", icon: "🎬", color: "#ec4899", bg: "#db2777" },
  { id: 4, name: "Food & Drink", icon: "🍔", color: "#f59e0b", bg: "#d97706" },
  { id: 5, name: "Sports", icon: "🏆", color: "#f97316", bg: "#ea580c" },
  { id: 6, name: "Anagrams", icon: "🔤", color: "#6366f1", bg: "#4f46e5" },
  { id: 7, name: "AI", icon: "🤖", color: "#3b82f6", bg: "#2563eb" },
  { id: 8, name: "Picture Rounds", icon: "🖼️", color: "#14b8a6", bg: "#0f766e" },
  { id: 9, name: "Geography", icon: "🌍", color: "#0ea5e9", bg: "#0284c7" }
];

const questions = {
  // Knowing the Organisation
  1:[
  {
    q: "Where do you find Annual Salary Statement?",
    options: ["CoreConnect", "Ascent (ESS)", "Click2Request", "eConnect"],
    answer: 1
  },
  {
    q: "Please name the chatbot for HR related queries.",
    options: ["My Buddy", "Alexa", "InfoAssist", "QueryWise"],
    answer: 0
  },
  {
    q: "Name of the application where ideas can be submitted?",
    options: ["ITSM", "Ingenious Plus", "Ingenious", "iBuild"],
    answer: 1
  },
  {
    q: "Name of the application where objectives can be reviewed?",
    options: ["Click2Request", "Click2Reward", "eConnect", "Click2Learn"],
    answer: 3
  },
  {
    q: "Which application can be used to verify training details?",
    options: ["Click2Learn", "eConnect", "Click2Reward", "CoreConnect"],
    answer: 0
  },
  {
    q: "The Remote Internship offered by Sopra Steria is conducted for a duration of:",
    options: ["5 to 10 weeks", "4 to 12 weeks", "3 to 9 weeks", "2 to 6 weeks"],
    answer: 1
  },
  {
    q: "The existing OTL project code was discontinued from:",
    options: ["8 Jun'26", "29 May'26", "1 Jun'26", "31 May'26"],
    answer: 2
  },
  {
    q: "The name of New Hire Induction Program:",
    options: ["Samavesh", "New Employee Welcome Program", "Joining and Orientation Program", "Employee Onboarding Program"],
    answer: 0
  },
  {
    q: "Learning World Tour - India Edition was scheduled from:",
    options: ["29th Jun'26 to 1st Jul'26", "30th Jun'26 to 2nd Jul'26", "1st Jul'26 to 3rd Jul'26", "22nd Jun'26 to 24th Jun'26"],
    answer: 0
  },
  {
    q: "Form 16 for FY 2025-2026 can be downloaded from:",
    options: ["CoreConnect", "Ascent (ESS)", "Click2Request", "eConnect"],
    answer: 1
  },
  {
    q: "Medical Insurance Cards can be downloaded from Ascent ESS under which section?",
    options: ["My Documents", "VPF Request", "Personal Details", "LTA Claims"],
    answer: 0
  },
  {
    q: "An employee participating in which initiative can become a company shareholder?",
    options: ["Weshare", "FCPE", "TOM", "rAIse"],
    answer: 0
  },
  {
    q: "What are not instances of security incidents?",
    options: ["Theft of system/Data", "Security Breach", "Loss of Badge", "Loss of Pen drive"],
    answer: 3
  },
  {
    q: "Sopra Steria is primarily known for:",
    options: ["Manufacturing goods", "Consulting, digital services, and solutions", "Agriculture services", "Retail business"],
    answer: 1
  },
  {
    q: "Approximately how many employees does Sopra Steria Group have globally?",
    options: ["10,000", "25,000", "51,000", "75,000"],
    answer: 2
  },
  {
    q: "In how many countries does Sopra Steria operate (approx.)?",
    options: ["10", "20", "Nearly 30", "50"],
    answer: 2
  },
  {
    q: "What is Sopra Steria's tagline?",
    options: ["Think Different", "The World Is How We Shape It", "Innovate Together", "Powering Growth"],
    answer: 1
  },
  {
    q: "What is a key focus of Sopra Steria's services?",
    options: ["Food production", "Digital transformation", "Transport services", "Media production"],
    answer: 1
  },
  {
    q: "Which value emphasizes delivering high standards in work?",
    options: ["Team Spirit", "Professional Excellence", "Customer Focus", "Respect"],
    answer: 1
  },
  {
    q: "Which value focuses on meeting client needs?",
    options: ["Openness", "Customer Focus", "Respect", "Innovation"],
    answer: 1
  },
  {
    q: "Respect for Others means:",
    options: ["Ignoring feedback", "Valuing every individual's voice", "Only focusing on results", "Working independently"],
    answer: 1
  },
  {
    q: "Which value highlights collaboration within teams?",
    options: ["Innovation", "Team Spirit", "Leadership", "Efficiency"],
    answer: 1
  },
  {
    q: "What does Openness & Curiosity encourage?",
    options: ["Avoid change", "Follow fixed methods", "Embrace new ideas", "Reduce communication"],
    answer: 2
  },
  {
    q: "Which value promotes proactive action?",
    options: ["Respect", "Customer Focus", "Willingness to Act Positively", "Discipline"],
    answer: 2
  },
  {
    q: "Sopra Steria places ______ at the heart of everything it does.",
    options: ["Technology", "Profit", "People", "Management"],
    answer: 2
  },
  {
    q: "The company's approach combines technology with:",
    options: ["Farming knowledge", "Business sector expertise", "Marketing campaigns", "Logistics systems"],
    answer: 1
  },
  {
    q: "Which policy ensures employees follow ethical and professional conduct?",
    options: ["Leave Policy", "Code of Conduct", "Payroll Policy", "Travel Policy"],
    answer: 1
  },
  {
    q: "Which guideline is important when handling personal data?",
    options: ["Share freely", "Use for personal benefit", "Restrict access to authorized personnel", "Ignore regulations"],
    answer: 2
  },
  {
    q: "What kind of support does the Employee Welfare Fund provide?",
    options: ["Travel reimbursement", "Financial assistance during hardship", "Salary increase", "Bonus payments"],
    answer: 1
  },
  {
    q: "Which situations are covered under the Employee Welfare Fund?",
    options: ["Travel expenses", "Vacations", "Medical emergencies, disasters, financial distress", "Office supplies"],
    answer: 2
  },
  {
    q: "What type of achievements are recognized in Reward & Recognition programs?",
    options: ["Only attendance", "Individual and team excellence", "Only senior leadership", "Only finance teams"],
    answer: 1
  },
  {
    q: "Sopra Steria promotes a culture of:",
    options: ["Competition only", "Transparency and integrity", "Isolation", "Cost-cutting only"],
    answer: 1
  },
  {
    q: "Who is announced to join Sopra Steria India leadership (from recent update)?",
    options: ["Rajesh Krishnamurthy", "Arjun Nair", "Sunil Sharma", "Daniel Lee"],
    answer: 1
  },
  {
    q: "On completion of 30 years in the organization, an employee becomes part of which club?",
    options: ["Platinum", "Diamond", "Emerald", "Sapphire"],
    answer: 0
  },
  {
    q: "On completion of 5 years in the organization, an employee becomes part of which club?",
    options: ["Titanium", "Ruby", "Gold", "Sapphire"],
    answer: 2
  },
  {
    q: "How many earned leaves are credited each month?",
    options: ["1.5", "1", "2", "2.5"],
    answer: 0
  },
  {
    q: "Which of the following is NOT one of the Sopra Steria Excellence Awards?",
    options: ["SPOT Award", "Budding Star Award", "Kalam Award", "Pinnacle Award"],
    answer: 2
  },
  {
    q: "How many classification levels are defined based on the confidentiality requirements of information?",
    options: ["5", "7", "6", "4"],
    answer: 3
  },
  {
    q: "How many training hours must be completed by every employee?",
    options: ["30", "24", "35", "40"],
    answer: 2
  },
  {
    q: "What is the name of the induction program for new joiners in the organization?",
    options: ["Gold Heist", "Golden Start", "First Step", "Launch Pad"],
    answer: 0
  }
],
  // Music
  2: [
    { q: "Which musical instrument has keys, pedals, and strings?", options: ["Guitar", "Piano", "Flute", "Drum"], answer: 1 },
    { q: "Which genre of music is associated with Beyoncé?", options: ["Classical", "Pop/R&B", "Jazz", "Rock"], answer: 1 },
    { q: "How many notes are there in a standard musical scale?", options: ["5", "6", "7", "8"], answer: 2 },
    { q: "Which instrument is known as a wind instrument?", options: ["Violin", "Trumpet", "Drum", "Piano"], answer: 1 },
    { q: "Who is known as the 'King of Pop'?", options: ["Elvis Presley", "Justin Bieber", "Michael Jackson", "Bruno Mars"], answer: 2 },
    { q: "Which of the following is a string instrument?", options: ["Flute", "Guitar", "Trumpet", "Saxophone"], answer: 1 },
    { q: "Which music platform is known for streaming songs online?", options: ["Excel", "Spotify", "Word", "PowerPoint"], answer: 1 },
    { q: "What do you call a person who writes songs?", options: ["Painter", "Composer", "Actor", "Director"], answer: 1 },
    { q: "Which artist sang 'Shape of You'?", options: ["Coldplay", "Ed Sheeran", "BTS", "Maroon 5"], answer: 1 },
    { q: "Which instrument keeps the rhythm in most bands?", options: ["Violin", "Drum", "Piano", "Flute"], answer: 1 },
    { q: "What is the term for loud in music?", options: ["Piano", "Forte", "Allegro", "Largo"], answer: 1 },
    { q: "Which country is famous for K-Pop?", options: ["Japan", "China", "South Korea", "Thailand"], answer: 2 },
    { q: "Which of these is a famous classical composer?", options: ["Beethoven", "Drake", "Taylor Swift", "Eminem"], answer: 0 },
    { q: "Which instrument has six strings?", options: ["Violin", "Guitar", "Harp", "Flute"], answer: 1 },
    { q: "What is a group of musicians called?", options: ["Team", "Band", "Club", "Group"], answer: 1 },
    { q: "Which singer is known for the song 'Rolling in the Deep'?", options: ["Adele", "Rihanna", "Katy Perry", "Lady Gaga"], answer: 0 },
    { q: "What type of music is typically played by an orchestra?", options: ["Rock", "Pop", "Classical", "Hip-hop"], answer: 2 },
    { q: "Which instrument is played with a bow?", options: ["Guitar", "Violin", "Drum", "Piano"], answer: 1 },
    { q: "Who is known as the 'Queen of Pop'?", options: ["Madonna", "Ariana Grande", "Billie Eilish", "Shakira"], answer: 0 },
    { q: "What is the speed of music called?", options: ["Tempo", "Pitch", "Scale", "Tone"], answer: 0 },
    { q: "Which instrument is used in jazz music for improvisation?", options: ["Tabla", "Saxophone", "Harp", "Veena"], answer: 1 },
    { q: "Which singer is known as the 'King of Rock and Roll'?", options: ["Elvis Presley", "Freddie Mercury", "John Lennon", "Mick Jagger"], answer: 0 },
    { q: "Which musical term indicates a gradual increase in loudness?", options: ["Decrescendo", "Crescendo", "Forte", "Tempo"], answer: 1 },
    { q: "Which band released the album 'Abbey Road'?", options: ["Queen", "The Beatles", "Pink Floyd", "U2"], answer: 1 },
    { q: "Which Indian instrument is used in classical music?", options: ["Guitar", "Violin", "Sitar", "Trumpet"], answer: 2 },
    { q: "Which music genre originated in Jamaica?", options: ["Jazz", "Reggae", "Blues", "Rock"], answer: 1 },
    { q: "Who composed 'The Four Seasons'?", options: ["Mozart", "Beethoven", "Vivaldi", "Bach"], answer: 2 },
    { q: "Which female artist sang 'Bad Romance'?", options: ["Adele", "Lady Gaga", "Beyoncé", "Rihanna"], answer: 1 },
    { q: "Which symbol raises a musical note by one semitone?", options: ["Flat", "Sharp", "Natural", "Rest"], answer: 1 },
    { q: "Which band is Freddie Mercury associated with?", options: ["Beatles", "Queen", "Coldplay", "Nirvana"], answer: 1 },
    { q: "What is the standard tuning note for orchestras?", options: ["C", "D", "A", "G"], answer: 2 },
    { q: "Which music streaming service was launched by Apple?", options: ["Spotify", "Apple Music", "SoundCloud", "YouTube Music"], answer: 1 },
    { q: "Which instrument is associated with Ludwig van Beethoven?", options: ["Violin", "Piano", "Flute", "Harp"], answer: 1 },
    { q: "Which genre blends rap and rhythm & blues?", options: ["Hip-hop", "R&B", "Pop", "Country"], answer: 0 },
    { q: "Which famous festival is held for music and arts in California?", options: ["Tomorrowland", "Coachella", "Lollapalooza", "Sunburn"], answer: 1 },
    { q: "Which note lasts half the duration of a whole note?", options: ["Quarter note", "Half note", "Eighth note", "Sixteenth note"], answer: 1 },
    { q: "Which artist is known for the album 'Thriller'?", options: ["Prince", "Michael Jackson", "Bruno Mars", "Drake"], answer: 1 },
    { q: "What is the highest male singing voice?", options: ["Bass", "Baritone", "Tenor", "Alto"], answer: 2 },
    { q: "Which country is famous for flamenco music?", options: ["Italy", "Spain", "Mexico", "Brazil"], answer: 1 },
    { q: "Which instrument is used in Indian percussion?", options: ["Tabla", "Piano", "Saxophone", "Guitar"], answer: 0 }
    ],
  // Film & Television
  3: [
  { q: "Who played Iron Man in the Marvel Cinematic Universe?", options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], answer: 1 },
  { q: "Which film features Tom Hanks as Chuck Noland, a FedEx executive?", options: ["Cast Away","Forrest Gump","Titanic","Gladiator"], answer: 0},
  { q: "Who directed the movie Titanic?", options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Ridley Scott"], answer: 2 },
  { q: "What is the name of the red-billed hornbill in The Lion King?", options: [ "Scar", "Mufasa", "Rafiki", "Zazu"], answer: 3 },
  { q: "Which TV show features the company 'Dunder Mifflin'?", options: ["Friends", "The Office", "Brooklyn Nine-Nine", "Suits"], answer: 1 },
  { q: "Who played Jack Dawson in Titanic?", options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"], answer: 2 },
  { q: "What is the name of the coffee shop in Friends?", options: ["Coffee Bean", "Central Perk", "Java House", "Café 24"], answer: 1 },
  { q: "Who directed Jurassic Park?", options: ["James Cameron", "Steven Spielberg", "Quentin Tarantino", "Peter Jackson"], answer: 1 },
  { q: "What is the fictional continent in Game of Thrones?", options: ["Narnia", "Westeros", "Middle-earth", "Pandora"], answer: 1 },
  { q: "What alias does Walter White use in Breaking Bad?", options: ["Scarface", "Heisenberg", "Don Vito", "Joker"], answer: 1 },
  { q: "Which movie features a clownfish named Nemo?", options: [ "Shark Tale", "Finding Nemo", "Madagascar", "Ice Age"], answer: 1 },
  { q: "Who played the Joker in The Dark Knight (2008)?", options: ["Jared Leto", "Joaquin Phoenix", "Heath Ledger", "Jack Nicholson"], answer: 2 },
  { q: "Which animated film was the first full-length Disney feature?", options: ["Dumbo", "Snow White and the Seven Dwarfs", "Cinderella", "Pinocchio"], answer: 1 },
  { q: "Which movie features the quote 'Here's looking at you, kid'?", options: ["Gone with the Wind", "Casablanca", "Citizen Kane", "Titanic"], answer: 1 },
  { q: "Who created The Simpsons?", options: ["Trey Parker", "Matt Groening", "Seth MacFarlane", "Dan Harmon"], answer: 1 },
  { q: "What year was the original Star Wars film released?", options: ["1975", "1977", "1980", "1985"], answer: 1 },
  { q: "Which movie features Katniss Everdeen?", options: ["Twilight", "Divergent", "The Hunger Games", "Maze Runner"], answer: 2 },
  { q: "What is the name of the kingdom in Frozen?", options: ["Arendelle", "Avalon", "Eldoria", "Narnia"], answer: 0 },
  { q: "What is CGI short for?", options: ["Computer Graphic Interface", "Cinema Generated Image", "Computer Generated Imagery", "Creative Graphic Input"], answer: 2 },
  { q: "Which role oversees the creative direction of a film?", options: ["Producer", "Actor", "Director", "Editor"], answer: 2 },
  { q: "Which was India's first full-length sound film (talkie)?", options: ["Alam Ara", "Pakeezah", "Mughal-e-Azam", "Jhanak Jhanak Payal Baaje"], answer: 0 },
  { q: "Who was the first Indian costume designer to win an Academy Award (Oscar) for the film Gandhi?", options: ["Neeta Lulla", "Bhanu Athaiya", "Sabyasachi", "Manish Malhotra"], answer: 1 },
  { q: "Which iconic Aamir Khan movie became only the third Indian film to receive an Oscar nomination for Best Foreign Language Film?", options: ["Dhaakad", "Taare Zameen Par", "Laal Singh Chaddha", "Lagaan"], answer: 3 },
  { q: "Who composed the Oscar-winning soundtrack for Slumdog Millionaire (2008)?", options: ["Sivamani", "A. R. Rahman", "Nadeem-Shravan", "Anand Bakshi"], answer: 1 },
  { q: "Which beloved Hindi television sitcom centers around the residents of Gokuldham Society?", options: ["Bhabhiji Ghar Par Hain", "Kyunki Saas Bhi Kabhi Bahu Thi", "Gullak", "Taarak Mehta Ka Ooltah Chashmah"], answer: 3 },
  { q: "Which famous Bollywood actor hosted Kaun Banega Crorepati in 2000?", options: ["Amitabh Bachchan", "Shah Rukh Khan", "Rohit Shetty", "Salman Khan"], answer: 0 },
  { q: "In 3 Idiots, what was Rancho's real name?", options: ["Sonam Wangchuk", "Phunsukh Wangdu", "Ranchoddas Shamaldas Chanchad", "Chatur Ramalingam"], answer: 1 },
  { q: "Which iconic television epic was first broadcast on Doordarshan in 1987?", options: ["Mahabharata", "Luv Kush", "Ramayan", "Krishna"], answer: 2 },
  { q: "Which pair of singing reality shows have discovered many playback singers?", options: ["India's Got Talent and Dancing Superstar", "Indian Idol and Sa Re Ga Ma Pa", "Rising Star and Superstar Singer", "The Voice and Bharat Ki Shaan"], answer: 1 },
  { q: "What nickname was given to Manmohan in 3 Idiots?", options: ["Millimetre", "Centimetre", "Nanometre", "Micrometre"], answer: 0 },
  { q: "What was the name of Tulsi Virani's husband in Kyunki Saas Bhi Kabhi Bahu Thi?", options: ["Karan Virani", "Hemant Virani", "Mihir Virani", "Ansh Virani"], answer: 2 },
  { q: "Vanraj Shah is a character in which television serial?", options: ["Pavitra Rishta", "Kasautii Zindagii Kay", "Anupamaa", "Kyunki Saas Bhi Kabhi Bahu Thi"], answer: 2 },
  { q: "Which Jack Nicholson horror classic was released in 1980?", options: ["The Shining", "Psycho", "The Ring", "The Exorcist"], answer: 0 },
  { q: "Which Alfred Hitchcock film features Norman Bates?", options: ["The Shining", "Psycho", "The Ring", "The Exorcist"], answer: 1 },
  { q: "Who directed Pulp Fiction?", options: ["Quentin Tarantino", "Steven Spielberg", "James Cameron", "Ryan Coogler"], answer: 0 },
  { q: "In The Lion, the Witch and the Wardrobe, what magical country is always winter but never Christmas?", options: ["Arendelle", "Norse", "Gondor", "Narnia"], answer: 3 },
  { q: "Which of Snow White's seven dwarfs has a name that doesn't contain any letters from 'Snow White'?", options: ["Doc", "Bashful", "Grumpy", "Dopey"], answer: 2 },
  { q: "Nick and Amy Dunne are the main characters in which 2014 thriller?", options: ["Girl on the Train", "The Girl Next Door", "Gone Girl", "The Girl with the Dragon Tattoo"], answer: 2 },
  { q: "In the James Bond series, what letter is used to refer to the Head of MI6?", options: ["M", "W", "Q", "R"], answer: 0 },
  { q: "Which movie features a young lion prince named Simba fleeing his kingdom after his father's death?", options: ["Madagascar", "The Lion King", "Kung Fu Panda", "Tarzan"], answer: 1 }
],
  // Food & Drink
  4: [
  { q: "Which country is famous for the dish 'Paella'?", options: ["Italy", "Spain", "Mexico", "Greece"], answer: 1 },
  { q: "What is the main ingredient in Indian dish 'Dal'?", options: ["Rice", "Lentils", "Wheat", "Chickpeas"], answer: 1 },
  { q: "From which country does 'Sushi' originate?", options: ["China", "Thailand", "Japan", "Korea"], answer: 2 },
  { q: "What is the place of origin for 'Butter Chicken'?", options: ["UK", "Pakistan", "India", "USA"], answer: 2 },
  { q: "Which Indian dish is cooked in a clay oven?", options: ["Biryani", "Tandoori Chicken", "Dosa", "Idli"], answer: 1 },
  { q: "What is the primary ingredient in Italian 'Risotto'?", options: ["Pasta", "Rice", "Bread", "Cheese"], answer: 1 },
  { q: "Which Indian street food is made with mashed potato, chutneys, and crispy puri?", options: ["Samosa", "Pani Puri", "Vada Pav", "Pakora"], answer: 1 },
  { q: "Which country is the origin of 'Tacos'?", options: ["Spain", "Mexico", "Brazil", "USA"], answer: 1 },
  { q: "What is the main ingredient in 'Paneer Butter Masala'?", options: ["Tofu", "Cottage Cheese", "Meat", "Lentils"], answer: 1 },
  { q: "Which Indian dish is a fermented rice and lentil pancake?", options: ["Roti", "Paratha", "Dosa", "Naan"], answer: 2 },
  { q: "What is 'Tiramisu'?", options: ["Soup", "Dessert", "Salad", "Drink"], answer: 1 },
  { q: "What is the staple food of India?", options: ["Rice", "Lentils", "Millets", "Maize"], answer: 0 },
  { q: "Which country is famous for 'Croissant'?", options: ["Italy", "France", "Germany", "Belgium"], answer: 1 },
  { q: "What is the base ingredient of authentic South Indian 'Idli'?", options: ["Rice & Wheat", "Rice & Lentils", "Lentil only", "Millet only"], answer: 1 },
  { q: "Which famous Indian dessert is made from deep-fried dough soaked in sugar syrup?", options: ["Rasgulla", "Gulab Jamun", "Kheer", "Halwa"], answer: 1 },
  { q: "Which country is known for the dish 'Kimchi'?", options: ["Japan", "China", "South Korea", "Thailand"], answer: 2 },
  { q: "What is the base ingredient in 'Pizza'?", options: ["Toppings", "Sourdough", "Parmesan", "Mozzarella"], answer: 1 },
  { q: "What is the main ingredient in hummus?", options: ["Chickpeas", "Lentils", "Garden Peas", "Snow Peas"], answer: 0 },
  { q: "What is 'Naan'?", options: ["Flatbread", "Sourdough", "Pocket Flatbread", "Crusty Bread"], answer: 0 },
  { q: "Which famous dish is associated with Italy and thin slices of raw meat or fish?", options: ["Pasta", "Carpaccio", "Lasagna", "Risotto"], answer: 1 },
  { q: "What was the first food grown in space?", options: ["Potato", "Tomatoes", "Spring Onions", "Onions"], answer: 2 },
  { q: "Which spicy curry from Rajasthan is made with gram flour dumplings?", options: ["Gatte Ki Sabzi", "Kadhi Pakora", "Pithla", "Ker Sangri"], answer: 0 },
  { q: "What type of gas is dissolved in water to make fizzy water?", options: ["Nitrogen", "Carbon Monoxide", "Carbon Dioxide", "Fluorine"], answer: 2 },
  { q: "What fruit is dried to make raisins?", options: ["Currants", "Muscat", "Grapes", "Apple"], answer: 2 },
  { q: "What natural ingredient is used in bread to make it rise?", options: ["Baking Soda", "Baking Powder", "Yeast", "Eno"], answer: 2 },
  { q: "What oil is largely used in the cooking of South India?", options: ["Sunflower Oil", "Sesame Oil", "Coconut Oil", "Mustard Oil"], answer: 2 },
  { q: "Which city in India is famous for its Biryani?", options: ["Lucknow", "Kolkata", "Hyderabad", "Delhi"], answer: 2 },
  { q: "Litti Chokha is a famous dish of which Indian state?", options: ["Odisha", "Maharashtra", "Bihar", "Uttar Pradesh"], answer: 2 },
  { q: "Rogan Josh is the signature dish of which cuisine?", options: ["Mughlai", "Kashmiri", "Awadhi", "Rajasthani"], answer: 1 },
  { q: "Which sweet is deep-fried and soaked in sugar syrup, usually orange in color?", options: ["Amarti", "Jalebi", "Ras Malai", "Rasgulla"], answer: 1 },
  { q: "In 'Aloo Posto', 'Posto' refers to which ingredient?", options: ["Mustard Seeds", "Fenugreek Seeds", "Poppy Seeds", "Fennel Seeds"], answer: 2 },
  { q: "Which fiery Maharashtrian snack is served with spicy sprouted moth bean gravy?", options: ["Pav Bhaji", "Ragda Pattice", "Misal Pav", "Vada Pav"], answer: 2 },
  { q: "Which fish is known as the 'King of Fishes' in Bengali cuisine?", options: ["Hilsa", "Catla", "Bhetki", "Rohu"], answer: 0 },
  { q: "Shorshe Ilish is traditionally made using which fish?", options: ["Prawn", "Hilsa", "Pomfret", "Rohu"], answer: 1 },
  { q: "Which refreshing drink is made from raw mangoes?", options: ["Nimbu Paani", "Aam Panna", "Jal Jeera", "Kala Khatta"], answer: 1 },
  { q: "Which rose-flavoured syrup was invented in 1906 in Old Delhi?", options: ["Sharbat-e-Gulab", "Rasna", "Rooh Afza", "Gulkand"], answer: 2 },
  { q: "Which Parle soft drink used the slogan 'The Zing Thing'?", options: ["Campa Cola", "Limca", "Gold Spot", "Thums Up"], answer: 2 },
  { q: "India is the world's largest consumer and producer of which alcoholic beverage?", options: ["Rum", "Whisky", "Brandy", "Gin"], answer: 1 },
  { q: "Which malted wheat drink had the slogan 'Taller, Sharper, Stronger'?", options: ["Boost", "Complan", "Horlicks", "Nan Pro"], answer: 2 },
  { q: "Which is technically the largest size available on the regular Starbucks menu?", options: ["Tall", "Grande", "Trenta", "Demi"], answer: 2 }
  ],
    // Sports
  5: [
  { q: "How many players are there in a football (soccer) team on the field?", options: ["9", "10", "11", "12"], answer: 2 },
  { q: "Which country won the FIFA World Cup in 2018?", options: ["Germany", "Brazil", "France", "Argentina"], answer: 2 },
  { q: "Which country is famous for the sport of sumo wrestling?", options: ["China", "Japan", "Korea", "Thailand"], answer: 1 },
  { q: "Which sport is known as the 'king of sports'?", options: ["Basketball", "Football (Soccer)", "Cricket", "Baseball"], answer: 1 },
  { q: "How many rings are there in the Olympic symbol?", options: ["4", "5", "6", "7"], answer: 1 },
  { q: "Which sport is played at Wimbledon?", options: ["Golf", "Cricket", "Tennis", "Rugby"], answer: 2 },
  { q: "Who is known as the 'God of Cricket' in India?", options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Kapil Dev"], answer: 2 },
  { q: "What is the duration of a standard football match?", options: ["60 minutes", "70 minutes", "90 minutes", "120 minutes"], answer: 2 },
  { q: "In basketball, how many points is a free throw worth?", options: ["1", "2", "3", "4"], answer: 0 },
  { q: "Which sport is associated with the term 'home run'?", options: ["Cricket", "Baseball", "Hockey", "Rugby"], answer: 1 },
  { q: "Which player is known as 'CR7'?", options: ["Lionel Messi", "Neymar Jr.", "Cristiano Ronaldo", "Kylian Mbappé"], answer: 2 },
  { q: "Which country has won the most Cricket World Cups (Men's)?", options: ["India", "Australia", "England", "West Indies"], answer: 1 },
  { q: "In which sport would you perform a slam dunk?", options: ["Volleyball", "Basketball", "Tennis", "Football"], answer: 1 },
  { q: "Which sport is played on ice with sticks and a puck?", options: ["Field hockey", "Ice hockey", "Polo", "Rugby"], answer: 1 },
  { q: "Which Indian athlete is known for badminton?", options: ["PV Sindhu", "Mary Kom", "Sakshi Malik", "Dipa Karmakar"], answer: 0 },
  { q: "Which country won the ICC Cricket World Cup 2011?", options: ["Australia", "India", "England", "Sri Lanka"], answer: 1 },
  { q: "How many players are on a basketball team on the court?", options: ["4", "5", "6", "7"], answer: 1 },
  { q: "Which tennis tournament is played on grass courts?", options: ["US Open", "Wimbledon", "French Open", "Australian Open"], answer: 1 },
  { q: "Who holds the record for the most Olympic gold medals?", options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"], answer: 1 },
  { q: "Which country hosted the FIFA World Cup 2022?", options: ["Russia", "Brazil", "Qatar", "USA"], answer: 2 },
  { q: "Which sport uses the term 'ace'?", options: ["Cricket", "Tennis", "Football", "Hockey"], answer: 1 },
  { q: "Which country is famous for rugby?", options: ["India", "New Zealand", "China", "Japan"], answer: 1 },
  { q: "In which sport is Magnus Carlsen famous?", options: ["Chess", "Tennis", "Badminton", "Athletics"], answer: 0 },
  { q: "Which athlete is known as the fastest man alive?", options: ["Tyson Gay", "Usain Bolt", "Yohan Blake", "Justin Gatlin"], answer: 1 },
  { q: "How many sets are in a standard tennis match (men's Grand Slam)?", options: ["3", "5", "4", "2"], answer: 1 },
  { q: "Which Indian cricketer is known as 'Captain Cool'?", options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Rahul Dravid"], answer: 1 },
  { q: "Which country won FIFA World Cup 2022?", options: ["France", "Brazil", "Argentina", "Germany"], answer: 2 },
  ,
  { q: "In which sport do teams compete for the Stanley Cup?", options: ["Basketball", "Ice Hockey", "Baseball", "Rugby"], answer: 1 },
  { q: "What is the national sport of India (commonly recognized)?", options: ["Cricket", "Hockey", "Football", "Kabaddi"], answer: 1 },
  { q: "Which Grand Slam is played on clay courts?", options: ["Wimbledon", "French Open", "Australian Open", "US Open"], answer: 1 },
  { q: "Which country is known as the birthplace of baseball?", options: ["Japan", "USA", "Cuba", "Canada"], answer: 1 },
  { q: "Which sport uses a pommel horse?", options: ["Wrestling", "Gymnastics", "Athletics", "Polo"], answer: 1 },
  { q: "Who is a famous Formula 1 driver?", options: ["Roger Federer", "Lewis Hamilton", "Cristiano Ronaldo", "Tiger Woods"], answer: 1 },
  { q: "Which sport includes a 'free kick'?", options: ["Cricket", "Football", "Tennis", "Basketball"], answer: 1 },

  { q: "How long is a standard cricket pitch (between the two sets of wickets)?", options: ["22 yards", "33 yards", "30 yards", "27 yards"], answer: 0 },

  { q: "Which city is the headquarters of the International Olympic Committee (IOC)?", options: ["Lausanne, Switzerland", "London, United Kingdom", "Brisbane, Australia", "Los Angeles, USA"], answer: 0 },

  { q: "How many laps are driven in a Formula 1 Monaco Grand Prix?", options: ["90 laps", "88 laps", "78 laps", "80 laps"], answer: 2 },

  { q: "Naidu Cup belongs to which game?", options: ["Hockey", "Kabaddi", "Chess", "Cricket"], answer: 2 },

  { q: "Where was the first Cricket Test match played?", options: ["London", "Sydney", "Melbourne", "Kolkata"], answer: 2 },

  { q: "When was the first Cricket World Cup held?", options: ["1965", "1970", "1975", "1980"], answer: 2 },

  { q: "What is the term for a ball that bounces once before reaching the batsman at around waist height?", options: ["Yorker", "Full Toss", "Good Length", "Bouncer"], answer: 2 },

  { q: "Which sport is the only one to have ever been played on the moon?", options: ["Golf", "Football", "Rugby", "Sprint"], answer: 0 },

  { q: "What is the sandy, hollow area on a golf course called?", options: ["Dune", "Bunker", "Amen Corner", "Birdie"], answer: 1 },

  { q: "What does WWE stand for?", options: ["World Wrestling Engagement", "World Wrestling Ensemble", "World Wrestling Entertainment", "World Wrestling Enterprise"], answer: 2 },

  { q: "Which wrestler is known for his signature move 'Tombstone Piledriver'?", options: ["The Undertaker", "Hulk Hogan", "The Rock", "Edge"], answer: 0 },

  { q: "Which country has won the most FIFA World Cup titles?", options: ["Spain", "Argentina", "Brazil", "Mexico"], answer: 2 },

  { q: "Which player holds the record for the most goals scored in international football history?", options: ["Diego Maradona", "David Beckham", "Cristiano Ronaldo", "Pelé"], answer: 2 },

  { q: "Which Grand Slam is played on clay courts?", options: ["French Open", "Wimbledon", "US Open", "Australian Open"], answer: 0 },
  { q: "Which female tennis player wrote the autobiography 'Ace Against Odds'?", options: ["Steffi Graf", "Sania Mirza", "Maria Sharapova", "Serena Williams"], answer: 1 },

  { q: "Which country has won the most Olympic gold medals in men's field hockey?", options: ["Pakistan", "Netherlands", "India", "Australia"], answer: 2 },

  { q: "How many hurdles are there in a standard 400-metre hurdles race?", options: ["16", "12", "10", "15"], answer: 2 },

  { q: "What is the official distance of a marathon?", options: ["42 km", "24 km", "21 km", "41 km"], answer: 0 },

  { q: "In which ancient country did the Olympic Games originate?", options: ["France", "Spain", "Greece", "USA"], answer: 2 },

  { q: "Who was the first Indian athlete to win an individual Olympic gold medal?", options: ["Abhinav Bindra", "Neeraj Chopra", "Karnam Malleswari", "Mary Kom"], answer: 0 }

],
  // Anagrams
  6: [
    { q: "Which of these words is an anagram of spears?", options: ["Passer", "Papers", "Sparse", "Appear"], answer: 0 },
    { q: "Which of these words is an anagram of tinsel?", options: ["Lentil", "Titles", "Enlist", "Setlin"], answer: 2 },
    { q: "Which of these words is an anagram of colordice?", options: ["Coil Decor", "Crocodile", "Cooldicer", "Odd Circle"], answer: 1 },
    { q: "Which of these words is an anagram of sailed?", options: ["Ladles", "Aside", "Ideals", "Aisles"], answer: 2 },
    { q: "Which of these words is an anagram of neocosmic?", options: ["Incomes", "Economics", "Concisme", "Comicons"], answer: 1 },
    { q: "Which of these words is not an anagram of angle?", options: ["Angel", "Glean", "Galen", "Align"], answer: 3 },
    { q: "Which of these words is an anagram of coastline?", options: ["Esclation", "Sectional", "Societal", "Ceseation"], answer: 1 },
    { q: "Which of these words is an anagram of serpent?", options: ["Resents", "Penters", "Steeper", "Present"], answer: 3 },
    { q: "Which of these words is a 9-letter anagram of multitasking?", options: ["Simulating", "Mistaking", "Stimulate", "Millitants"], answer: 1 },
    { q: "Which of these words is a 10-letter anagram of nionoaviton?", options: ["Invitation", "Navigation", "Vacation", "Innovation"], answer: 3 },
    { q: "Which of these words is an anagram of formation?", options: ["Informant", "Rainstorm", "Romanian", "Formation"], answer: 2 },
    { q: "Which of these words cannot be formed using the letters from Corporate?", options: ["Cooperate", "Creator", "Reactor", "Carpet"], answer: 0 },
    { q: "Which of these are an anagram pair?", options: ["Debit - Credit", "Team - Mean", "Night - Thing", "Estate - Taste"], answer: 2 },
    { q: "Which of these words is the perfect anagram of Care?", options: ["Acre", "Race", "None of these", "Both A and B"], answer: 3 },
    { q: "Which of these words is the hidden anagram in Innovation?", options: ["Vacation", "Nation", "Invite", "Action"], answer: 1 },
    { q: "Which of these words is not possible from the letters of Leadership?", options: ["Dealer", "Shaper", "Spiral", "Shield"], answer: 2 },
    { q: "Which of these words forms an anagram with Dormitory?", options: ["Dirty Room", "Dorm Story", "Tiny Room", "Mid Room"], answer: 0 },
    { q: "Which of these words is an anagram of castor?", options: ["Actors", "Carrot", "Tacos", "Costar"], answer: 0 },
    { q: "Which sport is an anagram of stenins?", options: ["Sprint", "Snooker", "Tennis", "Skating"], answer: 2 },
    { q: "Which famous brand is an anagram of biancagale?", options: ["Columbia", "Starbucks", "Breitling", "Balenciaga"], answer: 3 }
],
  // AI
  7: [
  { q: "What does AI stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Interface", "Accurate Information"], answer: 1 },
  { q: "Which company developed ChatGPT?", options: ["Google", "Microsoft", "OpenAI", "Amazon"], answer: 2 },
  { q: "Which of the following is an example of AI?", options: ["Calculator", "Voice assistant (like Alexa)", "Toaster", "Printer"], answer: 1 },
  { q: "AI systems learn from which of the following?", options: ["Paint", "Data", "Music only", "Paper"], answer: 1 },
  { q: "Which AI tool is used for image generation?", options: ["Excel", "PowerPoint", "DALL·E", "Word"], answer: 2 },
  { q: "What is Machine Learning?", options: ["Machines that only store data", "Machines that learn from data", "Machines that sleep", "Machines that print"], answer: 1 },
  { q: "Which company developed Alexa?", options: ["Apple", "Amazon", "Google", "Meta"], answer: 1 },
  { q: "Which of these is a chatbot?", options: ["Excel", "ChatGPT", "Photoshop", "Notepad"], answer: 1 },
  { q: "What is the purpose of AI in businesses?", options: ["Increase manual work", "Automate tasks", "Slow down processes", "Increase errors"], answer: 1 },
  { q: "Which term refers to AI understanding human language?", options: ["NLP (Natural Language Processing)", "GPU", "CPU", "URL"], answer: 0 },
  { q: "Which of these is a popular AI programming language?", options: ["HTML", "Python", "CSS", "SQL"], answer: 1 },
  { q: "Which feature allows AI to recognize images?", options: ["Speech Recognition", "Computer Vision", "Data Entry", "Typing"], answer: 1 },
  { q: "Which AI is used in self-driving cars?", options: ["Robotics + AI", "Spreadsheet tools", "Email software", "Antivirus"], answer: 0 },
  { q: "Which company developed Google Assistant?", options: ["Apple", "Microsoft", "Google", "IBM"], answer: 2 },
  { q: "AI can help in which of the following?", options: ["Healthcare", "Finance", "Education", "All of the above"], answer: 3 },
  { q: "Which term means AI making decisions based on data?", options: ["Cooking", "Data-driven decision making", "Painting", "Singing"], answer: 1 },
  { q: "Which company makes the Siri voice assistant?", options: ["Google", "Apple", "Amazon", "Microsoft"], answer: 1 },
  { q: "Which AI tool helps write text and answer questions?", options: ["Calculator", "ChatGPT", "Paint", "Excel"], answer: 1 },
  { q: "What is a robot?", options: ["A human", "A machine that can perform tasks automatically", "A book", "A song"], answer: 1 },
  { q: "Which field combines AI with building physical machines?", options: ["Networking", "Robotics", "Accounting", "Marketing"], answer: 1 },
  { q: "Who is widely regarded as the Father of Artificial Intelligence?", options: ["Alan Turing", "John McCarthy", "Marvin Minsky", "Charles Babbage"], answer: 1 },
  { q: "Which of the following is NOT one of the primary AI domains?", options: ["Computer Vision", "Natural Language Processing", "Data Science", "Database Management System"], answer: 3 },
  { q: "What does the phrase 'Data is the new oil' primarily imply?", options: ["Data is a non-renewable resource", "Data is as valuable as oil", "Data is the raw fuel used to train intelligent machine learning models", "Data and oil both require refineries"], answer: 2 },
  { q: "What is the correct sequence of the AI Project Cycle?", options: ["Problem Scoping → Data Exploration → Data Acquisition → Modelling → Evaluation", "Problem Scoping → Data Acquisition → Data Exploration → Modelling → Evaluation", "Data Acquisition → Problem Scoping → Modelling → Data Exploration → Evaluation", "Evaluation → Data Exploration → Data Acquisition → Problem Scoping → Modelling"], answer: 1 },

  { q: "In which stage of the AI Project Cycle do we identify stakeholders and define the goal?", options: ["Modelling", "Data Acquisition", "Data Exploration", "Problem Scoping"], answer: 3 },

  { q: "Which programming language is the go-to standard for Artificial Intelligence and Machine Learning?", options: ["PHP", "Java", "Python", "Lisp"], answer: 2 },

  { q: "What is the output of the Python code: x='AI'; y='Class'; print(x+y)?", options: ["x + y", "AI Class", "AIClass", "Error"], answer: 2 },

  { q: "Which of the following refers to a major ethical concern where historical prejudices unfairly skew AI outcomes?", options: ["Data Visualization", "AI Bias", "Data Storytelling", "Machine Learning"], answer: 1 },

  { q: "AI systems designed to respond only to current inputs without storing past experiences are classified as:", options: ["Reactive Machines", "Limited Memory AI", "Theory of Mind AI", "Self-Aware AI"], answer: 0 },

  { q: "Which process removes errors, outliers, and missing values from a dataset?", options: ["Data Modeling", "Data Cleaning", "Data Visualization", "Data Evaluation"], answer: 1 },
  
  { q: "Which mathematical metric measures the ratio of True Positives to the total predicted positives?", options: ["Accuracy", "Recall", "Precision", "F1 Score"], answer: 2 },

  { q: "Which algorithm is most commonly used for object detection and image classification?", options: ["Support Vector Machine (SVM)", "Naïve Bayes", "K-Nearest Neighbors (KNN)", "Convolutional Neural Network (CNN)"], answer: 3 },

  { q: "What does the term 'Object Detection' specifically involve?", options: ["Identifying the file format of an image", "Detecting the shape of an object", "Object categorization + Location tracking", "Increasing the brightness of pixels"], answer: 2 },

  { q: "Artificial Neural Networks (ANN) are inspired by which biological system?", options: ["Human Brain", "Human Heart", "Nervous System", "Human Lungs"], answer: 0 },

  { q: "Which type of Neural Network is specifically designed for sequential data processing and natural language tasks?", options: ["CNN", "RNN", "GAN", "Perceptron"], answer: 1 },

  { q: "Which of the following is an example of a Generative AI model?", options: ["K-Means", "Decision Tree", "Large Language Model (LLM)", "Linear Regression"], answer: 2 },

  { q: "What is a primary ethical concern associated with Generative AI?", options: ["High storage costs", "Deepfakes and misinformation", "Slow processing speeds", "Coding errors"], answer: 1 },

  { q: "What is the primary difference between face detection and face recognition?", options: ["Face detection identifies a face; face recognition identifies who that face belongs to", "Face detection requires image data; face recognition uses audio data", "Face recognition uses deep learning; face detection uses rule-based programming", "Face detection identifies emotions; face recognition identifies age"], answer: 0 },

  { q: "Which of the following is NOT an application of Generative AI?", options: ["Writing text and essays", "Generating realistic images from text prompts", "Sorting data in a Database Management System (DBMS)", "Composing original music"], answer: 2 },

  { q: "Which of the following best defines Mean Squared Error (MSE)?", options: ["The sum of distances between median and mean values", "The sum of the cube of distances between actual and predicted values", "The sum of squared distances between actual and predicted values", "The difference between maximum and minimum values"], answer: 2 },

  { q: "What does NLP stand for in AI?", options: ["Neural Learning Process", "Natural Language Processing", "Network Logic Programming", "Numeric Language Protocol"], answer: 1 },

  { q: "Which AI model is used for generating text like ChatGPT?", options: ["CNN", "GPT", "RNN", "SVM"], answer: 1 },

  { q: "What type of AI is ChatGPT?", options: ["Narrow AI", "General AI", "Super AI", "Manual AI"], answer: 0 },

  { q: "Which company developed TensorFlow?", options: ["Microsoft", "Amazon", "Google", "IBM"], answer: 2 },

  { q: "Which branch of AI deals with understanding images?", options: ["NLP", "Robotics", "Computer Vision", "Networking"], answer: 2 },

  { q: "What is a neural network inspired by?", options: ["Computers", "Human brain", "Internet", "Robots"], answer: 1 },

  { q: "Which algorithm learns from labeled data?", options: ["Unsupervised Learning", "Reinforcement Learning", "Supervised Learning", "Random Learning"], answer: 2 },

  { q: "Which term refers to AI improving through experience?", options: ["Programming", "Learning", "Coding", "Testing"], answer: 1 },

  { q: "Which AI tool helps generate code?", options: ["GitHub Copilot", "Excel", "PowerPoint", "Outlook"], answer: 0 },

  { q: "What is the main use of Reinforcement Learning?", options: ["Language translation", "Training through rewards and penalties", "Image editing", "Video streaming"], answer: 1 },

  { q: "Which company developed Azure AI Services?", options: ["Google", "Microsoft", "Amazon", "IBM"], answer: 1 },

  { q: "What is an example of biometric AI?", options: ["Face recognition", "Calculator", "Email", "Printer"], answer: 0 },

  { q: "Which dataset is used to train AI models?", options: ["Random text", "Training data", "Email drafts", "Notes"], answer: 1 },

  { q: "Which AI technique is commonly used in recommendation systems?", options: ["Filtering", "Collaborative filtering", "Sorting", "Searching"], answer: 1 },

  { q: "What is bias in AI?", options: ["Correct output", "Error due to unfair data", "Faster processing", "Hardware issue"], answer: 1 },

  { q: "Which AI system is commonly used in fraud detection?", options: ["Rule-based only", "Machine Learning models", "Manual entry", "Typing tools"], answer: 1 },

  { q: "What is a chatbot primarily used for?", options: ["Cooking", "Communication", "Driving", "Painting"], answer: 1 },

  { q: "Which programming concept is used to improve AI models?", options: ["Compilation", "Training", "Debugging", "Printing"], answer: 1 },

  { q: "Which company developed Siri?", options: ["Google", "Apple", "Microsoft", "Amazon"], answer: 1 },

  { q: "What is Generative AI primarily used for?", options: ["Data deletion", "Creating new content", "File storage", "Networking"], answer: 1 },
],
    // Picture Rounds
  8: // Picture Roun
   [
    // { q: "How long is an elephant's pregnancy?", options: ["12 months", "16 months", "22 months", "28 months"], answer: 2 },
    // { q: "Which animal has the longest lifespan?", options: ["Tortoise", "Whale", "Elephant", "Parrot"], answer: 0 },
    // { q: "What is a baby kangaroo called?", options: ["Cub", "Pup", "Joey", "Kit"], answer: 2 },
    // { q: "How many eyes does a bee have?", options: ["2", "3", "5", "6"], answer: 2 },
    // { q: "Which is the largest species of big cat?", options: ["Lion", "Leopard", "Tiger", "Jaguar"], answer: 2 },
    { q: "What animal is the symbol of WWF?", options: ["Polar Bear", "Giant Panda", "Snow Leopard", "Elephant"], answer: 1 },
    { type: "show-answer-image", image: "/loreal.png", question: "What is L'Oréal's tagline?", answer: "Because you are worth it" },
    { type: "show-answer-image", image: "/emirates.png", question: "What is Emirates' tagline?", answer: "Fly Emirates, Fly better" },
    { q: "The Ultimate Driving Machine is the tagline of which luxury automaker?", options: ["Audi", "Mercedes", "BMW", "Lexus"], answer: 2 },
    { q: "Which payment network uses the tagline \"There are some things money can't buy. For everything else, there's ___\"?", options: ["Visa", "Mastercard", "American Express", "Discover"], answer: 1 },
    { q: "\"Connecting People\" is the nostalgic tagline of which historical telecommunications and tech brand?", options: ["Nokia", "Motorola", "Ericsson", "Siemens"], answer: 0 },
    { q: "\"The Happiest Place on Earth\" is the universally recognized tagline of which global entertainment brand?", options: ["Universal Studios", "Six Flags", "Disney", "Warner Bros"], answer: 2 },
    { q: "\"Think Different\" is the famous advertising slogan of which multinational technology company?", options: ["Apple", "Microsoft", "Samsung", "Sony"], answer: 0 },
    { type: "two-option-image", image: "/google-logo.png", question: "Which of these is the real Google logo?", options: ["Left", "Right"], answer: 1 },
    { type: "two-option-image", image: "/bmw-logo.png", question: "Which of these is the real BMW logo?", options: ["Left", "Right"], answer: 0 },
    { type: "two-option-image", image: "/starbucks-logo.png", question: "Which of these is the real Starbucks logo?", options: ["Left", "Right"], answer: 0 },
    { type: "two-option-image", image: "/lacoste-logo.png", question: "Which of these is the real Lacoste logo?", options: ["Left", "Right"], answer: 1 },
    { type: "two-option-image", image: "/cartoon-network-logo.png", question: "Guess the correct Cartoon Network logo", options: ["1", "2"], answer: 0 },
    { type: "two-option-image", image: "/baskin-robbins-logo.png", question: "Which logo is correct?", options: ["Left", "Right"], answer: 0 },
    { type: "show-answer-image", image: "/sphinx.jpg", question: "What is this monument called?", answer: "The Great Sphinx of Giza" },
    { type: "show-answer-image", image: "/russell-up.png", question: "Who is this character?", answer: "Russell" },
    { type: "show-answer-image", image: "/pumbaa.png", question: "Who is this character?", answer: "Pumba" },
    { type: "show-answer-image", image: "/mrs-potts.png", question: "Who is this character?", answer: "Mrs. Potts" },
    { type: "show-answer-image", image: "/oprah-winfrey.png", question: "Who is this?", answer: "Oprah Winfrey" },
    { type: "show-answer-image", image: "/steve-jobs.png", question: "Who is this?", answer: "Steve Jobs" },
    { type: "show-answer-image", image: "/shakuntla-devi.png", question: "Who is this?", answer: "Shakuntla Devi" },
    { type: "show-answer-image", image: "/ramanujan.png", question: "Who is this?", answer: "Shrinivas Ramanujan" },
    { type: "show-answer-image", image: "/tilak.png", question: "Who is this?", answer: "Bal Gangadhar Tilak" },
    { type: "show-answer-image", image: "/maharana-pratap.png", question: "Who is this, riding his horse?", answer: "Maharana Pratap with his horse Chetak" },
    { type: "show-answer-image", image: "/neymar.png", question: "Who is this footballer?", answer: "Neymar" },
    { type: "show-answer-image", image: "/jaspal-rana.png", question: "Who is this?", answer: "Jaspal Rana" },
    { type: "show-answer-image", image: "/ronald-reagan.png", question: "Who is this?", answer: "Ronald Reagan" },
    { type: "show-answer-image", image: "/bryan-adams.png", question: "Who is this singer?", answer: "Bryan Adams" },
    { type: "show-answer-image", image: "/monica-seles.png", question: "Who is this tennis player?", answer: "Monica Seles" },
    { type: "show-answer-image", image: "/sabyasachi-mukherjee.png", question: "Who is this designer?", answer: "Sabyasachi Mukherjee" },
    { type: "show-answer-image", image: "/stonehenge.png", question: "What is this monument called?", answer: "Stonehenge" },
    { type: "show-answer-image", image: "/kfc-logo.png", question: "Tag line for this brand?", answer: "Finger Licking Good" },
    { type: "show-answer-image", image: "/adidas-logo.png", question: "Tagline for this brand?", answer: "Impossible is Nothing" },
    { type: "show-answer-image", image: "/christ-redeemer.png", question: "Where is this monument located?", answer: "Christ the Redeemer, Rio de Janeiro, Brazil" },
    { type: "show-answer-image", image: "/golden-gate-bridge.png", question: "What is this bridge called & where is it located?", answer: "The Golden Gate Bridge, San Francisco" },
    { type: "show-answer-image", image: "/london-eye.png", question: "What is the name of this monument located in the United Kingdom?", answer: "London Eye" },
    { type: "show-answer-image", image: "/petronas-towers.png", question: "What is the name of this tower & where is it located?", answer: "Petronas Twin Towers, Malaysia" },
    { type: "show-answer-image", image: "/harry-potter.png", question: "Name the actor and the famous character he played.", answer: "Daniel Radcliffe as Harry Potter" },
    { type: "show-answer-image", image: "/nelson-mandela.png", question: "Name the famous activist and Nobel Prize Laureate.", answer: "Nelson Mandela" },
    { type: "show-answer-image", image: "/cristiano-ronaldo.png", question: "Who is this player?", answer: "Cristiano Ronaldo" },
  ],
    // Geography
  9: [
    { q: "Which country has the longest coastline in the world?", options: ["Russia", "Australia", "Canada", "Indonesia"], answer: 2 },
    { q: "Which desert is the largest hot desert on Earth?", options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Kalahari Desert"], answer: 1 },
    { q: "What is the capital city of New Zealand?", options: ["Auckland", "Christchurch", "Wellington", "Hamilton"], answer: 2 },
    { q: "Which is the smallest country in the world by area?", options: ["Monaco", "Vatican City", "Maldives", "San Marino"], answer: 1 },
    { q: "The latitude 'Tropic of Cancer' passes through how many Indian states?", options: ["5", "6", "7", "8"], answer: 3 },
    { q: "Which country is known as the 'Land of Thousand Lakes'?", options: ["Sweden", "Finland", "Norway", "Iceland"], answer: 1 },
    { q: "Which continent has the highest number of countries?", options: ["Europe", "Africa", "Asia", "South America"], answer: 1 },
    { q: "The Strait of Hormuz connects the Persian Gulf to which body of water?", options: ["Arabian Sea", "Red Sea", "Gulf of Oman", "Mediterranean Sea"], answer: 2 },
    { q: "Which line divides the Earth into the Northern and Southern Hemisphere?", options: ["Tropic of Cancer", "Greenwich Meridian", "Prime Meridian", "Equator"], answer: 3 },
    { q: "Which country shares the longest international border with India?", options: ["China", "Bangladesh", "Pakistan", "Nepal"], answer: 1 },
    { q: "The Great Barrier Reef is located off the coast of which country?", options: ["Australia", "Indonesia", "Philippines", "Fiji"], answer: 0 },
    { q: "Which European river passes through the most countries?", options: ["Rhine", "Seine", "Amazon", "Danube"], answer: 3 },
    { q: "Which is the only continent through which all the lines of longitude pass?", options: ["Asia", "Antarctica", "Australia", "Africa"], answer: 1 },
    { q: "Which mountain range separates Europe from Asia?", options: ["Alps", "Andes", "Great Dividing Range", "Ural Mountains"], answer: 3 },
    { q: "Which city is known as the 'City of Canals'?", options: ["Amsterdam", "Venice", "Copenhagen", "Stockholm"], answer: 1 },
    { q: "Which country is home to the Wonder of the World, 'Machu Picchu'?", options: ["Chile", "Mexico", "Peru", "Botswana"], answer: 2 },
    { q: "Which Indian river is called the 'Dakshin Ganga'?", options: ["Krishna", "Godavari", "Narmada", "Kaveri"], answer: 1 },
    { q: "Which country has the most volcanoes in the world?", options: ["Indonesia", "Japan", "USA", "Iceland"], answer: 0 },
    { q: "Which capital city lies on two continents?", options: ["Moscow", "Istanbul", "Cairo", "Athens"], answer: 1 },
    { q: "Which Indian state is the only state that shares borders with 7 other states?", options: ["Uttar Pradesh", "Delhi", "Madhya Pradesh", "Assam"], answer: 0 },
    { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
    { q: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
    { q: "Mount Everest is located in which mountain range?", options: ["Andes", "Alps", "Himalayas", "Rockies"], answer: 2 },
    { q: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "Korea"], answer: 1 },
    { q: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
    { q: "Which continent is India in?", options: ["Europe", "Africa", "Asia", "Australia"], answer: 2 },
    { q: "What is the capital of France?", options: ["Paris", "Rome", "Berlin", "Madrid"], answer: 0 },
    { q: "Which desert is the largest hot desert?", options: ["Gobi", "Kalahari", "Sahara", "Arabian"], answer: 2 },
    { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
    { q: "Which country has the most population?", options: ["USA", "India", "China", "Indonesia"], answer: 1 },
    { q: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: 1 },
    { q: "Which sea separates Europe and Africa?", options: ["Black Sea", "Mediterranean Sea", "Red Sea", "Baltic Sea"], answer: 1 },
    { q: "Which is the smallest continent?", options: ["Europe", "Australia", "Antarctica", "South America"], answer: 1 },
    { q: "Which country is famous for pyramids?", options: ["Mexico", "Peru", "Egypt", "Jordan"], answer: 2 },
    { q: "What is the capital of Italy?", options: ["Venice", "Milan", "Rome", "Naples"], answer: 2 },
    { q: "Which US state is known as the Sunshine State?", options: ["California", "Florida", "Texas", "Arizona"], answer: 1 },
    { q: "Which continent contains the Sahara Desert?", options: ["Asia", "Africa", "Australia", "South America"], answer: 1 },
    { q: "Which is the largest country by area?", options: ["Canada", "USA", "China", "Russia"], answer: 3 },
    { q: "The Amazon Rainforest is mainly in which country?", options: ["Brazil", "Colombia", "Peru", "Bolivia"], answer: 0 },
    { q: "What is the capital of Germany?", options: ["Munich", "Frankfurt", "Berlin", "Hamburg"], answer: 2 }
],
};

export default function Quizzard() {
  const [screen, setScreen] = useState("home");
  const [active, setActive] = useState(null);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [attemptedQuestions, setAttemptedQuestions] = useState(() => {
    try {
      const saved = localStorage.getItem("quizzard_attempted_questions");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [activeIndices, setActiveIndices] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem("quizzard_attempted_questions", JSON.stringify(attemptedQuestions));
    } catch {}
  }, [attemptedQuestions]);

  const startQuiz = (cat) => {
    const attempted = attemptedQuestions[cat.id] || [];
    const remaining = questions[cat.id]
      .map((q, idx) => ({ q, idx }))
      .filter(({ idx }) => !attempted.includes(idx));
    if (remaining.length === 0) return;
    setActiveQuestions(remaining.map((r) => r.q));
    setActiveIndices(remaining.map((r) => r.idx));
    setActive(cat);
    setSelected(null);
    setCurrentIdx(0);
    setShowAnswer(false);
    setScreen("quiz");
  };

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const q = activeQuestions[currentIdx];
    const correct = q.answer === idx;
    if (correct) setScore((s) => s + 1);
    setAnswered((prev) => ({ ...prev, [active.id]: correct }));
    const origIdx = activeIndices[currentIdx];
    setAttemptedQuestions((prev) => ({
      ...prev,
      [active.id]: [...new Set([...(prev[active.id] || []), origIdx])],
    }));
  };

  const handleNext = () => {
    const q = activeQuestions[currentIdx];
    if (q.type === "show-answer-image") {
      const origIdx = activeIndices[currentIdx];
      setAttemptedQuestions((prev) => ({
        ...prev,
        [active.id]: [...new Set([...(prev[active.id] || []), origIdx])],
      }));
    }
    const total = activeQuestions.length;
    if (currentIdx + 1 >= total) {
      setScreen("home");
      setActive(null);
      setSelected(null);
      setCurrentIdx(0);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
    }
    setShowAnswer(false);
  };

  const goHome = () => {
    setScreen("home");
    setActive(null);
    setSelected(null);
    setCurrentIdx(0);
    setShowAnswer(false);
  };

  const resetAll = () => {
    setScore(0);
    setAnswered({});
    setAttemptedQuestions({});
    goHome();
  };

  const completedCount = Object.keys(answered).length;

  if (screen === "quiz" && active) {
    const allQ = activeQuestions;
    const q = allQ[currentIdx];
    const correct = q.answer;
    const total = allQ.length;
    const isLast = currentIdx + 1 >= total;

    return (
      <div>
        {/* Navbar: logos only, solid light background, fixed height, no background image */}
        <div style={styles.navbar}>
          <img src="/BPS_Logo_8.png" alt="BPS Passion Trails" style={styles.logoLeft} />
          <img src="/bps-labs-logo.png" alt="BPS Labs" style={styles.logoCenter} />
          <img src="/soprasteriaLogo.png" alt="Sopra Steria" style={styles.logoRight} />
        </div>

        {/* Main Content: full-width purple background image starts right after the navbar */}
        <div style={styles.page}>
        <div style={styles.quizContainer}>
          <button onClick={goHome} style={styles.backBtn}>Home</button>

          {/* Category header */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <div style={{ ...styles.iconBox, background: active.bg, fontSize: 26 }}>{active.icon}</div>
            <div>
              <div style={styles.catLabel}>Category</div>
              <div style={styles.catName}>{active.name}</div>
            </div>
            {/* Progress */}
            <div style={{ marginLeft: "auto", fontSize: 13, color: "#9ca3af", fontWeight: 600 }}>
              {currentIdx + 1} / {total}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ width: "100%", height: 4, background: "#e5e7eb", borderRadius: 99, marginBottom: 24 }}>
            <div style={{
              height: 4,
              borderRadius: 99,
              background: active.bg,
              width: `${((currentIdx) / total) * 100}%`,
              transition: "width 0.3s",
            }} />
          </div>

          {/* Question card */}
<div style={styles.questionCard}>
  <div style={styles.qNum}>Question {String(currentIdx + 1).padStart(2, "0")}</div>
  {q.image !== undefined && (
    <img
      src={q.image || "https://placehold.co/360x220?text=Add+image+path"}
      alt="Question illustration"
      style={{ display: "block", width: "100%", maxWidth: 360, borderRadius: 12, margin: "12px auto" }}
    />
  )}
  <div style={styles.qText}>{q.question || q.q}</div>
</div>

          {/* Picture Round: show-answer-image type - no options, reveal-on-click answer */}
          {q.type === "show-answer-image" ? (
            <div style={styles.feedbackRow}>
              {!showAnswer ? (
                <button onClick={() => setShowAnswer(true)} style={{ ...styles.playBtn, background: active.bg }}>
                  Show Answer
                </button>
              ) : (
                <>
                  <div style={styles.correctMsg}>Answer: {q.answer}</div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={goHome} style={{ ...styles.playBtn, background: "#6b7280" }}>
                      ← Categories
                    </button>
                    <button onClick={handleNext} style={{ ...styles.playBtn, background: active.bg }}>
                      {isLast ? "Finish 🎉" : "Next Question →"}
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
          <>
          {/* Options */}
          <div style={styles.optionsGrid}>
            {q.options.map((opt, i) => {
              let bg = "#fff";
              let border = "1.5px solid #e5e7eb";
              let color = "#1a1a1a";
              let letterBg = "#f3f4f6";
              let letterColor = "#6b7280";
              if (selected !== null) {
                if (i === correct) {
                  bg = "#dcfce7"; border = "1.5px solid #16a34a"; color = "#15803d";
                  letterBg = "#16a34a"; letterColor = "#fff";
                } else if (i === selected && i !== correct) {
                  bg = "#fee2e2"; border = "1.5px solid #dc2626"; color = "#b91c1c";
                  letterBg = "#dc2626"; letterColor = "#fff";
                }
              }
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  style={{ ...styles.optBtn, background: bg, border, color, cursor: selected !== null ? "default" : "pointer" }}
                >
                  <span style={{ ...styles.optLetter, background: letterBg, color: letterColor }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Feedback + buttons */}
          {selected !== null && (
            <div style={styles.feedbackRow}>
              <div style={selected === correct ? styles.correctMsg : styles.wrongMsg}>
                {selected === correct ? "✓ Correct!" : `✗ The answer was: ${q.options[correct]}`}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={goHome} style={{ ...styles.playBtn, background: "#6b7280" }}>
                  ← Categories
                </button>
                <button onClick={handleNext} style={{ ...styles.playBtn, background: active.bg }}>
                  {isLast ? "Finish 🎉" : "Next →"}
                </button>
              </div>
            </div>
          )}
          </>
          )}
        </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Navbar: logos only, solid light background, fixed height, no background image */}
      <div style={styles.navbar}>
        <img src="/BPS_Logo_8.png" alt="BPS Passion Trails" style={styles.logoLeft} />
        <img src="/bps-labs-logo.png" alt="BPS Labs" style={styles.logoCenter} />
        <img src="/soprasteriaLogo.png" alt="Sopra Steria" style={styles.logoRight} />
      </div>

      {/* Main Content: full-width purple background image starts right after the navbar */}
      <div style={styles.page}>
      <div style={styles.container}>
        {/* Top bar */}
        <div style={styles.topBar}>
          <span style={styles.dot} />
          <span style={styles.topBarText}>Pick a category to begin</span>
        </div>

        <div style={styles.hero}>
          <h1 style={styles.title}>BPS Quizzard<span style={{ color: "#fff" }}>.</span></h1>
          <p style={styles.subtitle}>
            Nine categories. One question each. Tap a card, answer fast, and see how sharp your trivia really is.
          </p>
          <button
             onClick={resetAll} // need to comment this
             title="Clear all progress and start fresh"
             style={{
            
               marginTop: 14,
               background: "rgba(255,255,255,0.15)",
               border: "1px solid rgba(255,255,255,0.35)",
               color: "#fff",
               borderRadius: 99,
              //  cursor: "not-allowed", 
               padding: "5px 14px",
               fontSize: 12,
               fontWeight: 600,
               cursor: "pointer", // need to comment this
               letterSpacing: 0.3,
             }}
          >
              🔄 Reset Progress
          </button>

        </div>

        {/* Section header */}
        <div style={styles.sectionHeader}>
          <span style={styles.sectionLabel}>CATEGORIES</span>
          <div style={styles.divider} />
          <span style={styles.totalLabel}>9 total</span>
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {categories.map((cat, i) => {
            const done = answered[cat.id] !== undefined;
            const wasCorrect = answered[cat.id];
            const attemptedCount = (attemptedQuestions[cat.id] || []).length;
            const totalCount = questions[cat.id].length;
            const isCompleted = attemptedCount >= totalCount;
            return (
              <div
                key={cat.id}
                style={{
                  ...styles.card,
                  ...(done ? styles.cardDone : {}),
                  ...(isCompleted ? { opacity: 0.5, cursor: "not-allowed" } : {}),
                }}
                onClick={() => startQuiz(cat)}
              >
                <div style={styles.cardTop}>
                  <div style={{ ...styles.iconBox, background: cat.bg }}>{cat.icon}</div>
                  <span style={styles.cardNum}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div style={styles.cardName}>{cat.name}</div>
                <div style={styles.cardSub}>
                  {isCompleted
                    ? "✓ Completed"
                    : attemptedCount > 0
                    ? `${totalCount - attemptedCount} questions left · tap to continue`
                    : `${totalCount} questions · tap to start`}
                </div>
                {!isCompleted && <div style={{ ...styles.playRow, color: cat.bg }}>Play →</div>}
                {isCompleted ? (
                  <div style={{ ...styles.doneBadge, background: "#dcfce7", color: "#15803d" }}>✓</div>
                ) : (
                  done && (
                    <div style={{
                      ...styles.doneBadge,
                      background: wasCorrect ? "#dcfce7" : "#fee2e2",
                      color: wasCorrect ? "#15803d" : "#b91c1c",
                    }}>
                      {wasCorrect ? "✓" : "✗"}
                    </div>
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "calc(100vh - 100px)", background: "url('/QuizImg.png') center/cover no-repeat fixed", fontFamily: "'Inter', 'Helvetica Neue', sans-serif", padding: "40px 0 60px", backgroundPosition: "center", },
  container: { maxWidth: 960, margin: "0 auto", padding: "0 24px" },
  // Navbar: logos only, solid light background, fixed height (90-110px), sits in normal flow so the full-width background image starts right after it
  navbar: { position: "static", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "0 24px", height: 100, minHeight: 90, maxHeight: 110, boxSizing: "border-box", background: "#e5e7eb" },
  logoLeft: { height: 85, width: "auto", objectFit: "contain" },
  logoCenter: { height: 52, width: "auto", objectFit: "contain", background: "#fff", borderRadius: 8, padding: "4px 10px" },
  logoRight: { height: 34, width: "auto", objectFit: "contain", background: "#fff", borderRadius: 8, padding: "5px 9px" },
  topBar: { display: "flex", alignItems: "center", gap: 8, paddingTop: 28, paddingBottom: 4 },
  dot: { width: 8, height: 8, borderRadius: "50%", background: "#374151", display: "inline-block" },
  topBarText: { fontSize: 13, color: "#ffff", fontWeight: 500, letterSpacing: 0.2 },
  hero: { paddingTop: 12, paddingBottom: 32 },
  title: { fontSize: 64, fontWeight: 800, letterSpacing: -2, color: "#fff", margin: "0 0 12px", lineHeight: 1.05 },
  subtitle: { fontSize: 15, color: "#ffff", maxWidth: 440, lineHeight: 1.6, margin: 0 },
  scoreBadge: { display: "inline-flex", alignItems: "center", gap: 10, marginTop: 18, background: "#fff", border: "1.5px solid #e5e7eb", borderRadius: 99, padding: "6px 16px", fontSize: 14, color: "#374151" },
  resetBtn: { background: "none", border: "none", color: "#6b7280", fontSize: 13, cursor: "pointer", textDecoration: "underline", padding: 0, },
  sectionHeader: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 },
  sectionLabel: { fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: "#9ca3af", whiteSpace: "nowrap" },
  divider: { flex: 1, height: 1, background: "#e5e7eb" },
  totalLabel: { fontSize: 12, color: "#9ca3af", whiteSpace: "nowrap" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
  card: { background: "#fff", borderRadius: 16, padding: "22px 22px 18px", cursor: "pointer", position: "relative", border: "1.5px solid transparent", transition: "box-shadow 0.15s, transform 0.12s", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" },
  cardDone: { border: "1.5px solid #e5e7eb", opacity: 0.85 },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 },
  iconBox: { width: 42, height: 42, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 },
  cardNum: { fontSize: 12, color: "#d1d5db", fontWeight: 600, letterSpacing: 1 },
  cardName: { fontSize: 18, fontWeight: 700, color: "#111827", marginBottom: 4 },
  cardSub: { fontSize: 12, color: "#9ca3af", marginBottom: 16 },
  playRow: { fontSize: 13, fontWeight: 600 },
  doneBadge: { position: "absolute", top: 14, right: 44, fontSize: 11, fontWeight: 700, borderRadius: 99, padding: "2px 8px" },
  quizContainer: { maxWidth: 620, margin: "0 auto", padding: "40px 24px 60px" },
  backBtn: { background: "#008000", color: "#fff", border: "none", borderRadius: 15, fontSize: 13, cursor: "pointer", padding: "8px 30px", fontWeight: 800, display: "inline-block", marginBottom: 20 },
  catLabel: { fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: "#9ca3af", textTransform: "uppercase" },
  catName: { fontSize: 22, fontWeight: 700, color: "#111827" },
  questionCard: { background: "#fff", borderRadius: 16, padding: "28px 28px 24px", marginBottom: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.07)" },
  qNum: { fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: "#9ca3af", textTransform: "uppercase", marginBottom: 10 },
  qText: { fontSize: 20, fontWeight: 700, color: "#111827", lineHeight: 1.45 },
  optionsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 },
  optBtn: { display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 12, fontSize: 14, fontWeight: 600, textAlign: "left", transition: "background 0.15s" },
  optLetter: { width: 26, height: 26, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, transition: "background 0.15s, color 0.15s" },
  feedbackRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" },
  correctMsg: { fontSize: 15, fontWeight: 600, color: "#22c55e" },
  wrongMsg: { fontSize: 15, fontWeight: 600, color: "#ff6b6b" },
  playBtn: { color: "#fff", border: "none", borderRadius: 99, padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer" },
};
