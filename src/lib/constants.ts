// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Stories", href: "/stories" },
  { name: "Films", href: "/films" },
  // { name: "Blogs", href: "/blog" },
  { name: "Get in Touch", href: "/get-in-touch" },
] as const;

// Page Routes
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  STORIES: "/stories",
  FILMS: "/films",
  CONTACT: "/get-in-touch",
  // BLOG: "/blog",
} as const;

export const footerLinks = [
  { name: "HOME", href: ROUTES.HOME },
  { name: "ABOUT", href: ROUTES.ABOUT },
  { name: "STORIES", href: ROUTES.STORIES },
  { name: "FILMS", href: ROUTES.FILMS },
  // { name: "BLOGS", href: ROUTES.BLOG },
  { name: "GET IN TOUCH", href: ROUTES.CONTACT },
];

// Social Media Links
export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    iconPath:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    iconPath:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    iconPath:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    iconPath:
      "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z",
  },
] as const;

// Hero Images
export const HERO_IMAGES = [
  "/images/home/hero1.jpg",
  "/images/home/hero2.jpg",
  "/images/home/hero3.jpg",
  "/images/home/hero4.jpg",
  "/images/home/hero5.jpg",
  "/images/home/hero6.jpg",
  "/images/home/hero7.jpg",
  "/images/home/hero8.jpg",
  "/images/home/hero9.jpg",
  "/images/home/hero10.jpg",
  "/images/home/hero11.png",
  "/images/home/hero12.jpg",
  "/images/home/hero13.jpeg",
  "/images/home/hero14.png",
  "/images/home/hero15.jpg",
  "/images/home/hero16.jpeg",
  "/images/home/hero17.jpg",
  "/images/home/hero18.jpg",
  "/images/home/hero19.jpeg",
] as const;

// Experience Section Images
export const EXPERIENCE_LEFT_IMAGE = "/images/Experience/expleft.jpg";
export const EXPERIENCE_RIGHT_IMAGE = "/images/Experience/expright.jpg";

// CTA Section Images
export const CTA_STORIES_IMAGE = "/images/CTAImages/ImagesLeft.jpg";
export const CTA_FILMS_IMAGE = "/images/CTAImages/FilmsRight.jpeg";

// Dedication Section Media
export const DEDICATION_VIDEO = "/videos/portrait.mp4";
export const DEDICATION_IMAGE = "/images/ImagesScroll/scroll26.jpg";

// Footer Section Images
export const FOOTER_BG_IMAGE = "/images/Footer/footerBg.jpg";

// Portfolio Section Images
export const PORTFOLIO_IMAGES = [
  "/images/PortfolioSection/malvika&nicholas.jpg",
  "/images/PortfolioSection/tabitha&michael.jpg",
  "/images/PortfolioSection/mariam&adiy.jpg",
  "/images/PortfolioSection/priyantha&julian.jpg",
  "/images/PortfolioSection/natasha&anthony.jpg",
  "/images/PortfolioSection/dharti&Shubham.jpg",
] as const;

// Scroll Images Section
export const SCROLL_IMAGES = [
  "/images/ImagesScroll/scroll1.jpg",
  "/images/ImagesScroll/scroll2.jpg",
  "/images/ImagesScroll/scroll3.jpg",
  "/images/ImagesScroll/scroll4.jpg",
  "/images/ImagesScroll/scroll5.jpg",
  "/images/ImagesScroll/scroll6.jpg",
  "/images/ImagesScroll/scroll7.jpg",
  "/images/ImagesScroll/scroll8.jpg",
  "/images/ImagesScroll/scroll9.jpg",
  "/images/ImagesScroll/scroll10.jpeg",
  "/images/ImagesScroll/scroll11.jpeg",
  "/images/ImagesScroll/scroll12.jpeg",
  "/images/ImagesScroll/scroll13.jpg",
  "/images/ImagesScroll/scroll14.jpeg",
  "/images/ImagesScroll/scroll15.jpg",
  "/images/ImagesScroll/scroll16.jpeg",
  "/images/ImagesScroll/scroll17.jpg",
  "/images/ImagesScroll/scroll18.jpeg",
  "/images/ImagesScroll/scroll19.jpg",
  "/images/ImagesScroll/scroll20.jpg",
  "/images/ImagesScroll/scroll21.jpg",
  "/images/ImagesScroll/scroll22.jpg",
  "/images/ImagesScroll/scroll23.jpeg",
  "/images/ImagesScroll/scroll24.jpg",
  "/images/ImagesScroll/scroll25.jpg",
] as const;

// About Us Header Scroll Images
export const ABOUT_US_HEADER_SCROLL_IMAGES = [
  "/images/AboutUsHeaderScroll/scroll1.jpg",
  "/images/AboutUsHeaderScroll/scroll2.jpeg",
  "/images/AboutUsHeaderScroll/scroll4.jpg",
  "/images/AboutUsHeaderScroll/scroll10.jpg",
  "/images/AboutUsHeaderScroll/scroll5.jpeg",
  "/images/AboutUsHeaderScroll/scroll6.jpeg",
  "/images/AboutUsHeaderScroll/scroll7.jpg",
  "/images/AboutUsHeaderScroll/scroll8.jpeg",
  "/images/AboutUsHeaderScroll/scroll9.jpg",
  "/images/AboutUsHeaderScroll/scroll3.jpeg",
  "/images/AboutUsHeaderScroll/scroll11.jpeg",
  "/images/AboutUsHeaderScroll/scroll12.jpg",
  "/images/AboutUsHeaderScroll/scroll13.jpeg",
  "/images/AboutUsHeaderScroll/scroll14.jpg",
  "/images/AboutUsHeaderScroll/scroll15.jpeg",
  "/images/AboutUsHeaderScroll/scroll16.jpeg",
  "/images/AboutUsHeaderScroll/scroll17.jpeg",
  "/images/AboutUsHeaderScroll/scroll18.jpeg",
  "/images/AboutUsHeaderScroll/scroll19.jpg",
  "/images/AboutUsHeaderScroll/scroll20.jpeg",
  "/images/AboutUsHeaderScroll/scroll21.jpeg",
  "/images/AboutUsHeaderScroll/scroll22.jpg",
] as const;

export const ABOUT_JACKSON_IMAGE = "/images/JacksonImages/jackson1.jpg";
export const ABOUT_JACKSON_IMAGE_2 = "/images/JacksonImages/jackson2.jpeg";

export const OUR_BELIEFS_ITEMS = [
  {
    image: "/images/OurBeliefsImages/OurBelief1.jpeg",
    titleLines: [
      { text: "Stories Rooted", isScript: false },
      { text: "in soulful trust", isScript: true },
    ],
    quote:
      "We believe the most honest moments unfold when you feel seen, heard, and celebrated.",
    description:
      "Every collaboration starts with listening. We invest time in understanding your story so each frame reflects your personalities, the people you love, and the emotions that make your day unforgettable.",
  },
  {
    image: "/images/OurBeliefsImages/OurBelief2.jpeg",
    titleLines: [
      { text: "Artistry in Every", isScript: false },
      { text: "precious little detail", isScript: true },
    ],
    quote:
      "We believe craftsmanship lives in the quiet glances, the gentle gestures, and the spaces in between.",
    description:
      "From framing to finishing, our team obsesses over the little things—lighting, textures, and timing—so your wedding visuals feel cinematic yet timeless, with every detail thoughtfully preserved.",
  },
  {
    image: "/images/OurBeliefsImages/OurBelief3.jpeg",
    titleLines: [
      { text: "Emotions first,", isScript: false },
      { text: "poses second always", isScript: true },
    ],
    quote:
      "We believe heartfelt experiences matter more than perfection, and authenticity always wins.",
    description:
      "Instead of staged moments, we guide you into meaningful interactions that let your chemistry shine. The result: imagery filled with warmth, movement, and the kind of intimacy you can feel decades later.",
  },
  {
    image: "/images/OurBeliefsImages/OurBelief4.jpg",
    titleLines: [
      { text: "Legacy worth", isScript: false },
      { text: "sharing forevermore", isScript: true },
    ],
    quote:
      "We believe your wedding story should become a treasured heirloom, shared across generations.",
    description:
      "Our post-production team polishes every project with intention—beautiful color work, seamless storytelling, and archival quality—so your films and photographs feel as enduring as your promises.",
  },
] as const;

// Hero Animated Phrases >> Not Using
export const HERO_PHRASES = [
  "Meaningful Narratives",
  "Authentic Connections",
  "Timeless Experiences",
  "Genuine Expressions",
  "Beautiful Beginnings",
  "Precious Memories",
  "Unforgettable Journeys",
  "Heartfelt Emotions",
  "Intimate Moments",
  "Cherished Legacies",
  "Love Stories",
  "Eternal Bonds",
  "Magical Celebrations",
  "Forever Memories",
  "Pure Romance",
  "Joyful Chapters",
  "Tender Embraces",
  "Lasting Impressions",
  "Perfect Moments",
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    couple: "Mariam & Adiy",
    image1: "/images/ClientPraise/Mariam&Adiy1.jpg",
    image2: "/images/ClientPraise/Mariam&Adiy2.jpg",
    testimonial:
      "Working with Jackson was an absolute dream! From the moment we met, we knew we were in the best hands. His ability to capture the raw emotions and candid moments of our wedding day was truly remarkable. Every photograph tells a story, and we find ourselves reliving those precious moments every time we look at them. Jackson's professionalism, creativity, and genuine warmth made us feel comfortable throughout the entire process. We couldn't have asked for a better photographer to document the most important day of our lives.",
  },
  {
    couple: "Tabitha & Michael",
    image1: "/images/ClientPraise/Tabitha&Michael1.jpg",
    image2: "/images/ClientPraise/Tabitha&Michael2.jpg",
    testimonial:
      "Jackson's photography is nothing short of magical. He has this incredible talent for being in the right place at the right time, capturing moments we didn't even realize were happening. Our wedding album is filled with authentic emotions, genuine laughter, and tears of joy. His artistic eye and attention to detail exceeded all our expectations. Jackson made us feel so natural and relaxed in front of the camera, and the results speak for themselves. We are forever grateful for the beautiful memories he has preserved for us.",
  },
] as const;

// FAQ Section
export const FAQS = [
  {
    id: 1,
    question: "What is candid wedding photography and videography?",
    answer:
      "Candid wedding photography and videography aims to capture authentic moments as they naturally unfold, without interrupting the flow of your day. It focuses on capturing genuine emotions, interactions, and the ambiance of your wedding, ensuring your memories are preserved beautifully. At Jackson James Photography, we specialize in crafting visually stunning and emotionally rich narratives that reflect each couple's unique story through high-quality photos and 4K cinematic films.",
  },
  {
    id: 2,
    question:
      "What makes candid photography & videography different from traditional styles?",
    answer:
      "Unlike traditional posed photography and videography, which involve directing subjects, candid style focuses on capturing real, spontaneous moments. It allows for a more authentic and emotional portrayal of your wedding day. Our approach combines documentary-style storytelling with editorial finesse, ensuring your memories are preserved beautifully for generations to come while maintaining the natural flow and genuine emotions of your celebration.",
  },
  {
    id: 3,
    question: "Do you offer both photography and videography services?",
    answer:
      "Yes, we specialize in both candid wedding photography and videography. Our handpicked team of skilled photographers, cinematographers, and editors seamlessly capture your special moments in both formats, ensuring a cohesive and comprehensive documentation of your wedding day. From intimate pre-wedding shoots to grand wedding celebrations, we deliver high-quality photos and 4K cinematic films that reflect each couple's unique story.",
  },
  {
    id: 4,
    question: "How experienced are your photographers and videographers?",
    answer:
      "Our photographers and videographers are highly experienced professionals with a passion for storytelling. They have over ten years of experience in candid wedding documentation and are adept at capturing the essence and emotions of your day. We've built our reputation through consistent quality and personal attention to each client, serving a distinguished clientele including business leaders, celebrities, and royal families across India and internationally.",
  },
  {
    id: 5,
    question:
      "Can we request specific shots or styles for our wedding photos and videos?",
    answer:
      "Yes, we welcome your input and are committed to accommodating your preferences. Whether you have specific shots in mind or prefer a particular editing style, we strive to tailor our services to reflect your unique vision. We believe that being friends with our clients and making them feel comfortable gives us an upper hand—it helps us bring the best in you, which results in a magical output that reflects your authentic story.",
  },
  {
    id: 6,
    question:
      "How long does it take to receive our photos and videos after the wedding?",
    answer:
      "We aim to deliver your edited photos and videos within eight to ten weeks after your wedding day. Each image and video is carefully edited to ensure they reflect the beauty, emotions, and significance of your special day. Our commitment to excellence, personalized service, and timely delivery has made us a trusted name among discerning clients. We've also streamlined our post-production workflow using AI-assisted editing tools for faster delivery without compromising quality.",
  },
  {
    id: 7,
    question: "Where are you based & do you travel for weddings?",
    answer:
      "We are based in multiple locations including Kochi, with operations spanning across India. Yes, we travel extensively for weddings! Our presence spans globally, having captured weddings and celebrations in iconic destinations like Italy, Brisbane, Dubai, and Bangkok. Additional fees will be applicable for travel or destination weddings outside our base locations, covering transportation, accommodation, and any additional expenses. We discuss these details transparently during the booking process.",
  },
  {
    id: 8,
    question: "Do you offer pre-wedding photo shoots?",
    answer:
      "Yes! We offer pre-wedding photo shoots as part of our comprehensive packages or as standalone sessions. From intimate pre-wedding shoots to grand wedding celebrations, we capture your love story with artistic flair. These shoots are perfect for getting comfortable with the camera, creating save-the-date materials, and building a connection with our team before your special day. Locations can be chosen together to reflect your unique story.",
  },
  {
    id: 9,
    question: "How far in advance should we reach out to book?",
    answer:
      "We accept bookings up to a year in advance. The sooner you reach out, the better chance you have of securing your date! We recommend booking early, especially for peak wedding seasons and destination weddings, to ensure availability and allow us to plan your special day thoroughly. Our team will guide you through the process, discuss package options, and ensure everything is in place to capture your wedding day beautifully.",
  },
  {
    id: 10,
    question: "What sets you apart from other photographers?",
    answer:
      "We have been told by our beloved clients that our dedication and artwork reflects in our pictures. You'll notice a smile on our faces while capturing the moments. We believe that being friends with our clients and making them feel comfortable gives us an upper hand—it helps us bring the best in you, which results in a magical output. Our commitment to creativity, reliability, and heartfelt storytelling, combined with our innovative approach using cutting-edge technology and a handpicked team of skilled professionals, sets us apart. We've grown from a passion project into a premium brand while staying true to our core values of excellence and personalized service.",
  },
] as const;

// About Films Section Video
export const ABOUT_FILMS_VIDEO = "/videos/portrait.mp4";

// YouTube Videos for Films Page
export const YOUTUBE_VIDEOS = [
  {
    id: 1,
    videoId: "_HGPtqIv5d0",
    startTime: 137,
    coupleName: "Aditya & Namya",
  },
  {
    id: 2,
    videoId: "PWkGauMnjoM",
    startTime: 2,
    coupleName: "Melissa & Tanvir",
  },
  {
    id: 3,
    videoId: "1-hqTKFcuuk",
    startTime: 47,
    coupleName: "Priyantha & Julian",
  },
  {
    id: 4,
    videoId: "ZBhziXijGdQ",
    startTime: 73,
    coupleName: "Konika & Shubham",
  },
  {
    id: 5,
    videoId: "ejkS3eaI2fk",
    startTime: 132,
    coupleName: "Amy & Lars",
  },
  {
    id: 6,
    videoId: "XVQLKTJQZ5c",
    startTime: 4,
    coupleName: "Anisha & Emil",
  },
  {
    id: 7,
    videoId: "Ff_OqIeIVuE",
    startTime: 0,
    coupleName: "Charn & Pranav",
  },
  {
    id: 8,
    videoId: "EYw13Y73iy4",
    startTime: 86,
    coupleName: "Ravneet & Sanju",
  },
] as const;

// Stories Page - Couple Images
export const STORIES_COUPLES = [
  "Priyantha&Julian",
  "Malavika&Nicholas",
  "Mariyam&Nithin",
  "Neha&Yakzan",
  "Shivali&Samir",
  "Vandita&Tejasvi",
  "Deanna&Karan",
  "Aditya&Aakriti",
  "Akshita&Ranjith",
  "Anisha&Emil",
  "Femy&Quentin",
  "Mariam&Adiy",
  "Tessa&Vishnu",
  "Ria&Thomas",
  "Anna&Thomas",
  "Dharti&Shubham",
  "Anuja&Arjun",
  "Chandni&Akshar",
  "Cheyenne&Rohit",
  "Rizwana&Mishad",
  "Gayathri&Rangith",
  "Kavya&Joseph",
  "Tabitha&Michael",
  "Sonali&Yashas",
  "Liya&Derek",
  "Liz&Joseph",
  "Naina&Abhishek",
  "Merline&Ashwin",
  "Monica&Allan",
  "Monica&Allan(wedding)",
  "Nikhita&Ravi",
  "Sanchia&Akshay",
  "Reeshna&Sohrab",
  "Nisha&Mike",
  "Sincy&Shinoy",
  "Swati&Rajeev",
  "Zeba&Lawson",
] as const;

// Mapping of couple names to their file extensions
export const STORIES_COUPLE_IMAGE_EXTENSIONS: Record<string, string> = {
  "Anisha&Emil": ".jpg",
  "Anna&Thomas": ".jpg",
  "Dharti&Shubham": ".jpg",
  "Malavika&Nicholas": ".jpg",
  "Mariam&Adiy": ".jpg",
  "Monica&Allan(wedding)": ".jpeg",
  "Naina&Abhishek": ".jpg",
  "Priyantha&Julian": ".jpg",
  "Shivali&Samir": ".jpg",
  "Sonali&Yashas": ".jpg",
  "Tabitha&Michael": ".jpg",
  "Tessa&Vishnu": ".jpg",
} as const;
