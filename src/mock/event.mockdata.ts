import { Event } from "../types/event.type";

export const eventMockData: Event[] = [
    {
        _id: "6588709c35543d885ed456a6",
        name: "Kolkata Music Fest",
        slug: "kolkata-music-fest-jan15-2024-jan17-2024",
        description: "<p>Get ready for an unforgettable musical journey as Darshan Raval, the heartthrob of Indian music, embarks on his much-anticipated nationwide tour - This extraordinary concert series promises to be a celebration of love, emotions, and the magic of Darshan Raval's soulful voice.</p><p>The tour kicks off in Surat and will traverse the length and breadth of India, bringing Darshan's chart-topping hits to fans across the country.</p>\n<p>Audiences can expect a visually stunning and immersive experience, with state-of-the-art stage production, lighting, and sound engineering to complement the musical extravaganza. Each concert is meticulously crafted to provide an intimate yet electrifying atmosphere, allowing fans to connect with Darshan Raval on a personal level.</p>",
        category: "Music",
        eventType: "physical",
        city: "Kolkata",
        venue: {
            address: {
                addressLine1: "Park Street",
                city: "Kolkata",
                stateOrUT: "West Bengal",
                pincode: "700016",
                country: "India",
            },
            geolocation: {
                latitude: 22.5537,
                longitude: 88.353,
            },
            name: "Kolkata Concert Grounds",
            _id: "6588709c35543d885ed456a7",
        },
        verticalCoverImage: "https://example.com/kolkata-music-fest-vertical.jpg",
        horizontalCoverImage: "https://example.com/kolkata-music-fest-horizontal.jpg",
        extraInfo: [
            {
                title: "For Age(s)",
                text: "All ages welcome",
                imageUrl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1687858058%2Fvch2batzrrmcqqk52ct7.png",
                _id: "abcdef123456789",
            },
            {
                title: "Languages",
                text: "English, Spanish",
                imageUrl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fres.cloudinary.com%2Fdwzmsvp7f%2Fimage%2Fupload%2Fv1593509931%2Fsalient-features%2Ficon-features-language.png",
                _id: "fedcba987654321",
            },
            {
                title: "Live Performance",
                text: "Immerse yourself in live music",
                imageUrl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fres.cloudinary.com%2Fdwzmsvp7f%2Fimage%2Fupload%2Fv1593509931%2Fsalient-features%2Ficon-features-live-performance.png",
                _id: "987654abcdef123",
            },
        ],
        terms: ["Terms and conditions apply"],
        safetyMesures: ["Mandatory masks, Temperature checks"],
        faqs: [
            {
                question: "Is there parking available?",
                answer: "Yes, there is ample parking space available.",
                _id: "6588709c35543d885ed456ab",
            },
            {
                question: "Can I bring my own food?",
                answer: "Outside food and beverages are not allowed.",
                _id: "6588709c35543d885ed456ac",
            },
        ],
        shareImages: [
            "https://example.com/share-image1.jpg",
            "https://example.com/share-image2.jpg",
        ],
        tags: ["Music", "Festival", "Kolkata"],
        soldOut: false,
        isFeatured: false,
        performances: [],
        __v: 0,
        showStartDate: "15-01-2024",
        showStartTime: "06:00 PM",
        showEndDate: "17-01-2024",
        showEndTime: "08:30 PM",
        dateTimeString: "January 15 | 6PM - January 17 | 8:30PM",
        priceDisplayString: "Free",
        locationDisplayString: 'Kolkata Concert Grounds, Kolkata',
        likesCount: 0,
        eventStatus: "draft",
    },
    {
        _id: "123456789abcdef",
        name: "Darshan Raval India Tour | Kolkata",
        slug: "another-music-fest-feb10-2024-feb12-2024",
        description: "Experience the magic of music in a vibrant atmosphere.",
        category: "Music",
        eventType: "physical",
        city: "Cityville",
        venue: {
            address: {
                addressLine1: "Downtown Avenue",
                city: "Cityville",
                stateOrUT: "Stateville",
                pincode: "543210",
                country: "Countryland",
            },
            geolocation: {
                latitude: 40.7128,
                longitude: -74.006,
            },
            name: "Cityville Music Arena",
            _id: "987654321fedcba",
        },
        verticalCoverImage: "https://example.com/another-music-fest-vertical.jpg",
        horizontalCoverImage: "https://example.com/another-music-fest-horizontal.jpg",
        extraInfo: [
            {
                title: "For Age(s)",
                text: "All ages welcome",
                imageUrl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1687858058%2Fvch2batzrrmcqqk52ct7.png",
                _id: "abcdef123456789",
            },
            {
                title: "Languages",
                text: "English, Spanish",
                imageUrl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fres.cloudinary.com%2Fdwzmsvp7f%2Fimage%2Fupload%2Fv1593509931%2Fsalient-features%2Ficon-features-language.png",
                _id: "fedcba987654321",
            },
            {
                title: "Live Performance",
                text: "Immerse yourself in live music",
                imageUrl: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fres.cloudinary.com%2Fdwzmsvp7f%2Fimage%2Fupload%2Fv1593509931%2Fsalient-features%2Ficon-features-live-performance.png",
                _id: "987654abcdef123",
            },
        ],
        terms: ["Terms and conditions may apply"],
        safetyMesures: ["Temperature checks at entry"],
        faqs: [
            {
                question: "Is there parking available?",
                answer: "Yes, there's ample parking nearby.",
                _id: "1234abcd5678efgh",
            },
            {
                question: "Can I bring my own food?",
                answer: "Outside food is allowed in designated areas.",
                _id: "5678efgh1234abcd",
            },
        ],
        shareImages: [
            "https://example.com/another-share-image1.jpg",
            "https://example.com/another-share-image2.jpg",
        ],
        tags: ["Music", "Festival", "Cityville"],
        soldOut: false,
        isFeatured: true,
        performances: [],
        __v: 0,
        showStartDate: "10-02-2024",
        showStartTime: "07:00 PM",
        showEndDate: "12-02-2024",
        showEndTime: "10:30 PM",
        dateTimeString: "February 10 | 7PM - February 12 | 10:30PM",
        priceDisplayString: "₹500 Onwards",
        locationDisplayString: "Cityville Music Arena, Kolkata",
        likesCount: 120,
        eventStatus: "published",
    },
    {
        _id: "65b2a2d3ab3e4e721a1e7c88",
        name: "Kolkata Marathon",
        slug: "kolkata-marathon-feb12-2024",
        description: "<p>Join us for the annual Kolkata Marathon, a celebration of fitness and community spirit. Whether you're a seasoned runner or a beginner, there's a race for everyone!</p>",
        category: "Sports",
        eventType: "physical",
        city: "Kolkata",
        venue: {
            address: {
                addressLine1: "Salt Lake City",
                city: "Kolkata",
                stateOrUT: "West Bengal",
                pincode: "700091",
                country: "India"
            },
            geolocation: {
                latitude: 22.5726,
                longitude: 88.3639
            },
            name: "Salt Lake Stadium",
            _id: "65b2a2d3ab3e4e721a1e7c89"
        },
        verticalCoverImage: "https://example.com/kolkata-marathon-vertical.jpg",
        horizontalCoverImage: "https://example.com/kolkata-marathon-horizontal.jpg",
        extraInfo: [],
        terms: [],
        safetyMesures: ["Mandatory masks, Temperature checks"],
        faqs: [],
        shareImages: ["https://example.com/kolkata-marathon-share-image1.jpg"],
        tags: ["Sports", "Marathon", "Fitness"],
        soldOut: false,
        isFeatured: true,
        performances: [],
        __v: 0,
        showStartDate: "12-02-2024",
        showStartTime: "06:00 AM",
        showEndDate: "12-02-2024",
        showEndTime: "10:00 AM",
        dateTimeString: "February 12 | 6AM - 10AM",
        priceDisplayString: "₹250 Onwards",
        locationDisplayString: "Salt Lake Stadium, Kolkata",
        likesCount: 0,
        eventStatus: "published"
    },
    {
        _id: "65b2a3a4ab3e4e721a1e7c8a",
        name: "Bangalore Food Fest",
        slug: "bangalore-food-fest-feb20-2024",
        description: "<p>Indulge in a culinary extravaganza at the Bangalore Food Fest, where the city's best chefs and food vendors come together to showcase their delicious creations.</p>",
        category: "Foods",
        eventType: "physical",
        city: "Bangalore",
        venue: {
            address: {
                addressLine1: "MG Road",
                city: "Bangalore",
                stateOrUT: "Karnataka",
                pincode: "560001",
                country: "India"
            },
            geolocation: {
                latitude: 12.9747,
                longitude: 77.6094
            },
            name: "MG Road Boulevard",
            _id: "65b2a3a4ab3e4e721a1e7c8b"
        },
        verticalCoverImage: "https://example.com/bangalore-food-fest-vertical.jpg",
        horizontalCoverImage: "https://example.com/bangalore-food-fest-horizontal.jpg",
        extraInfo: [],
        terms: [],
        safetyMesures: ["Mandatory masks, Hand sanitization"],
        faqs: [],
        shareImages: ["https://example.com/bangalore-food-fest-share-image1.jpg"],
        tags: ["Food", "Festival", "Bangalore"],
        soldOut: false,
        isFeatured: false,
        performances: [],
        __v: 0,
        showStartDate: "20-02-2024",
        showStartTime: "12:00 PM",
        showEndDate: "23-02-2024",
        showEndTime: "09:00 PM",
        dateTimeString: "February 20 | 12PM - February 23 | 9PM",
        priceDisplayString: "₹500 Onwards",
        locationDisplayString: "MG Road Boulevard, Bangalore",
        likesCount: 0,
        eventStatus: "published"
    },
    {
        _id: "65b2a465ab3e4e721a1e7c8c",
        name: "Mumbai Cricket Cup",
        slug: "mumbai-cricket-cup-mar10-2024",
        description: "<p>Experience the thrill of cricket at the Mumbai Cricket Cup. Watch as the city's top teams battle it out for glory in this exciting tournament.</p>",
        category: "Sports",
        eventType: "physical",
        city: "Mumbai",
        venue: {
            address: {
                addressLine1: "Churchgate",
                city: "Mumbai",
                stateOrUT: "Maharashtra",
                pincode: "400020",
                country: "India"
            },
            geolocation: {
                latitude: 18.9353,
                longitude: 72.8261
            },
            name: "Wankhede Stadium",
            _id: "65b2a465ab3e4e721a1e7c8d"
        },
        verticalCoverImage: "https://example.com/mumbai-cricket-cup-vertical.jpg",
        horizontalCoverImage: "https://example.com/mumbai-cricket-cup-horizontal.jpg",
        extraInfo: [],
        terms: [],
        safetyMesures: ["Temperature checks, Sanitization stations"],
        faqs: [],
        shareImages: ["https://example.com/mumbai-cricket-cup-share-image1.jpg"],
        tags: ["Cricket", "Sports", "Mumbai"],
        soldOut: false,
        isFeatured: false,
        performances: [],
        __v: 0,
        showStartDate: "10-03-2024",
        showStartTime: "03:00 PM",
        showEndDate: "15-03-2024",
        showEndTime: "10:00 PM",
        dateTimeString: "March 10 | 3PM - March 15 | 10PM",
        priceDisplayString: "₹500",
        locationDisplayString: "Wankhede Stadium, Mumbai",
        likesCount: 0,
        eventStatus: "published"
    },
    {
        _id: "65b2a3a4ab3e4e721a1e7c8a",
        name: "Mastering Indian Cuisine: Online Cooking Course",
        slug: "mastering-indian-cuisine-online-cooking-course",
        description: "<p>Join our online cooking course and master the art of Indian cuisine! Learn from renowned chefs and experts as they guide you through traditional and modern Indian recipes.</p>",
        category: "Culinary",
        eventType: "online",
        city: "Online",
        venue: null,
        verticalCoverImage: "https://example.com/mastering-indian-cuisine-vertical.jpg",
        horizontalCoverImage: "https://example.com/mastering-indian-cuisine-horizontal.jpg",
        extraInfo: [],
        terms: [],
        safetyMesures: [],
        faqs: [
            { question: "Is this course suitable for beginners?", answer: 'Yes' },
        ],
        shareImages: ["https://example.com/mastering-indian-cuisine-share-image1.jpg"],
        tags: ["Cooking", "Indian Cuisine", "Online Course"],
        soldOut: false,
        isFeatured: false,
        performances: [],
        __v: 0,
        showStartDate: "20-02-2024",
        showStartTime: "10:00 AM",
        showEndDate: "23-02-2024",
        showEndTime: "12:00 PM",
        dateTimeString: "February 20 - February 23 | 10AM - 12PM",
        priceDisplayString: "₹1500",
        locationDisplayString: "Online",
        likesCount: 0,
        eventStatus: "published"
    },
    {
        _id: "65b2a3a4ab3e4e721a1e7c8a",
        name: "Mastering Stock Market: Online Course",
        slug: "mastering-stock-market-online-course",
        description: "<p>Join our online course and master the intricacies of the stock market! Learn from seasoned investors and analysts as they guide you through fundamental and technical analysis, trading strategies, and portfolio management.</p>",
        category: "Finance",
        eventType: "online",
        city: "Online",
        venue: null,
        verticalCoverImage: "https://example.com/mastering-stock-market-vertical.jpg",
        horizontalCoverImage: "https://example.com/mastering-stock-market-horizontal.jpg",
        extraInfo: [],
        terms: [],
        safetyMesures: [],
        faqs: [
            { question: "Is this course suitable for beginners?", answer: "Yes" },
            { question: "What topics will be covered in this course?", answer: "Fundamental analysis, technical analysis, trading strategies, portfolio management, etc." }
        ],
        shareImages: ["https://example.com/mastering-stock-market-share-image1.jpg"],
        tags: ["Finance", "Stock Market", "Online Course"],
        soldOut: false,
        isFeatured: false,
        performances: [],
        __v: 0,
        showStartDate: "20-02-2024",
        showStartTime: "10:00 AM",
        showEndDate: "23-02-2024",
        showEndTime: "12:00 PM",
        dateTimeString: "February 20 - February 23 | 10AM - 12PM",
        priceDisplayString: "₹2000",
        locationDisplayString: "Online",
        likesCount: 0,
        eventStatus: "published"
    },
    {
        _id: "65b2a3a4ab3e4e721a1e7c8a",
        name: "Creative Writing Workshop: Mastering the Art of Storytelling",
        slug: "creative-writing-workshop-mastering-the-art-of-storytelling",
        description: "<p>Unleash your creativity and master the art of storytelling in our interactive workshop! Led by experienced authors and storytellers, you'll learn essential techniques, receive personalized feedback, and create compelling narratives.</p>",
        category: "Arts & Humanities",
        eventType: "physical",
        city: "New York",
        venue: {
            address: {
                addressLine1: "123 Main Street",
                city: "New York",
                stateOrUT: "New York",
                pincode: "10001",
                country: "United States"
            },
            geolocation: {
                latitude: 40.7128,
                longitude: -74.0060
            },
            name: "Creative Hub",
            _id: "65b2a3a4ab3e4e721a1e7c8b"
        },
        verticalCoverImage: "https://example.com/creative-writing-workshop-vertical.jpg",
        horizontalCoverImage: "https://example.com/creative-writing-workshop-horizontal.jpg",
        extraInfo: [],
        terms: [],
        safetyMesures: ["Limited seating, Masks required"],
        faqs: [],
        shareImages: ["https://example.com/creative-writing-workshop-share-image1.jpg"],
        tags: ["Writing", "Workshop", "Storytelling"],
        soldOut: false,
        isFeatured: false,
        performances: [],
        __v: 0,
        showStartDate: "20-02-2024",
        showStartTime: "9:00 AM",
        showEndDate: "20-02-2024",
        showEndTime: "5:00 PM",
        dateTimeString: "February 20 | 9AM - 5PM",
        priceDisplayString: "₹1000",
        locationDisplayString: "Creative Hub, New York",
        likesCount: 0,
        eventStatus: "published"
    },
    {
        _id: "65b2a3a4ab3e4e721a1e7c8a",
        name: "Laugh Out Loud: Stand-up Comedy Night",
        slug: "laugh-out-loud-stand-up-comedy-night",
        description: "<p>Get ready for a night of laughter and fun at our stand-up comedy event! Join us for hilarious performances by top comedians as they tickle your funny bone and leave you in stitches.</p>",
        category: "Comedy",
        eventType: "online",
        city: "online",
        venue: null,
        verticalCoverImage: "https://example.com/stand-up-comedy-vertical.jpg",
        horizontalCoverImage: "https://example.com/stand-up-comedy-horizontal.jpg",
        extraInfo: [],
        terms: [],
        safetyMesures: ["Limited seating, Masks required"],
        faqs: [],
        shareImages: ["https://example.com/stand-up-comedy-share-image1.jpg"],
        tags: ["Comedy", "Entertainment", "Stand-up Comedy"],
        soldOut: false,
        isFeatured: false,
        performances: [],
        __v: 0,
        showStartDate: "20-02-2024",
        showStartTime: "8:00 PM",
        showEndDate: "20-02-2024",
        showEndTime: "10:00 PM",
        dateTimeString: "February 20 | 8PM - 10PM",
        priceDisplayString: "₹500",
        locationDisplayString: "Comedy Club, Los Angeles",
        likesCount: 0,
        eventStatus: "published"
    }

];


