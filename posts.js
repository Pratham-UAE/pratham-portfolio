/*
  EDIT YOUR PROFILE HERE
  ----------------------
  PROFILE.photo   Your DP. Put a photo in this folder (e.g. "dp.jpg") and write its name here.
                  Empty = "PJ" monogram.

  POSTS           The tiles in the grid. Tapping a tile opens its slides.
    cover         Your own cover design. Put the image in the covers/ folder
                  (portrait 3:4, 1080 x 1440 works best) and write its name here, e.g. "websites.jpg".
                  Empty = the built-in cover: a preview of the first slide plus the title.
    scene         Built-in mockup cover: "laptop", "reels", "phones", "cards", "badge" or "apps".
                  Remove it (or set cover) to stop using the mockup.
    accent        Glow colour of the mockup cover.
    count         Small line under the title on the mockup cover, e.g. "2 sites".
    frames/views  (reels cover only) the frames that play in the phone, and the views badge.
    color         Background colour of the built-in cover and of text slides.
    mark          (optional) big number shown on the built-in cover of a text post, e.g. "03".
    ratio         Shape of the opened post on phones, e.g. "1/1", "4/5", "16/10".
    about         true = also shown under the third (About) tab.
    slides        What opens on tap. Two kinds:
                    image slide: { file: "name-in-work-folder.webp", title: "", text: "" }
                    text slide:  { heading: "", sub: "", lines: ["", ""] }
                  Add link: "https://..." to an image slide to show a "Visit website" button.

  HIGHLIGHTS      The round circles under the buttons. Tapping one opens a full-screen story with
                  progress bars. Each slide: { heading, sub, lines: [], links: [{ kind }] }.
                  Link kinds: "call", "whatsapp", "email", "cv", "dm" (opens the message screen).

  likes           On a post: the number of likes shown when nobody has liked it yet. Visitors add 1
                  by tapping the heart or double-tapping. Their like is saved in their own browser,
                  so the total is not shared between visitors. Leave it 0 to show "Be the first to
                  like this", or put your real Instagram like count.

  REELS           The reels on the Reels screen, one per reel.
                  poster   still image in work/ (shown until the video loads, and if there is none)
                  video    video file in work/, e.g. "falafel.mp4". Vertical 9:16, under about 8 MB,
                           H.264 .mp4 plays everywhere. Empty = the still image is shown instead.
                  views    text shown on the reel, e.g. "600K views"
                  likes    starting likes, same as for posts
*/
window.PROFILE = {
  photo: "dp.webp?1",
  username: "prathamjoshi",
  name: "Pratham Joshi",
  role: "Marketing Manager",
  bio: "I build brands people stop scrolling for.\nStrategy, content, paid ads and CRM for luxury real estate, hospitality and F&B brands across the UAE.\nI plan it, shoot it, edit it and run the ads myself.\nMeta Ads · Lead Generation · Websites · AI Automation",
  place: "📍 Dubai",
  location: "Dubai, UAE",
  phone: "+971 50 9696 324",
  email: "prathamjoshiom@gmail.com",
  cv: "Pratham-Joshi-CV.pdf",
  stats: [
    { value: "4.5+", label: "years" },
    { value: "15+", label: "brands" },
    { value: "4", label: "industries" },
  ],
};

window.POSTS = [
  {
    id: "websites", likes: 0, scene: "laptop", accent: "#4c8dff", count: "2 sites", ratio: "16/10", title: "Websites", kicker: "Design + build", color: "#16233f", cover: "websites.webp?4",
    caption: "Websites I designed and built. Swipe to see them all.",
    slides: [
      { file: "web-a.webp", title: "Talc Investment", text: "Corporate website", link: "" },
      { file: "web-b.webp", title: "Desert Planners", text: "Tours and holiday booking website", link: "" },
    ],
  },
  {
    id: "reels", likes: 0, scene: "reels", count: "Shot + edited", views: "870K+ views", frames: ["reel-f1.webp", "reel-f2.webp", "reel-f3.webp", "reel-f4.webp"], title: "Reels", kicker: "Shot + edited", color: "#3f1a27", cover: "reels.webp?4",
    caption: "Short-form video for restaurants, hotels and apps.",
    slides: [
      { file: "reels-3.webp", title: "Food and dining reels", text: "600K and 28.5K views" },
      { file: "reels-2.webp", title: "Restaurant reels", text: "66.6K and 18.2K views" },
      { file: "reels-1.webp", title: "App promos for Tendeal and Shozon", text: "103K and 60.5K views" },
    ],
  },
  {
    id: "social", likes: 0, scene: "phones", accent: "#b06bff", count: "3 accounts", ratio: "4/3", title: "Social Media", kicker: "Management", color: "#4a3018", cover: "social.webp?4",
    caption: "Instagram accounts I managed, from content strategy to the daily feed.",
    slides: [
      { file: "social-instagram.webp", title: "Instagram management", text: "Qalat Baalbak, Fairmont Bab Al Bahr and Allo Beirut" },
    ],
  },
  {
    id: "branding", likes: 0, scene: "cards", accent: "#2fd08a", count: "2 brands", ratio: "4/3", title: "Branding", kicker: "Identity", color: "#1a342c", cover: "branding.webp?4",
    caption: "Brand identities, from the logo to how the feed looks.",
    slides: [
      { file: "brand-a.webp", title: "Mono Blanco", text: "Brand identity and social look" },
      { file: "brand-b.webp", title: "Ourvita", text: "Brand identity for a cosmetics brand" },
    ],
  },
  {
    id: "experience", likes: 0, scene: "badge", accent: "#ffb347", count: "3 roles", ratio: "4/5", about: true, title: "Experience", kicker: "2022 to now", mark: "03", color: "#17181b", cover: "experience.webp?4",
    caption: "Three roles in the UAE: social, then design, then the whole marketing function.",
    slides: [
      { heading: "Marketing Manager", sub: "Luxury One Real Estate · Oct 2024 to present", lines: ["Led marketing and brand strategy", "Managed social media and website development", "Created, shot and edited marketing content", "Managed paid ads, lead generation and CRM", "Optimised campaigns and lead conversions"] },
      { heading: "Social Media Marketing Manager and UI/UX Designer", sub: "Smart Chain Group · Jan 2023 to Sep 2024", lines: ["Brands: Smart Chain, AqarChain and Sokos.io", "Social media and digital branding across three brands", "Content and campaigns for Web3, NFT and real estate", "Designed websites and UI/UX interfaces", "Supported brand growth and community engagement"] },
      { heading: "Social Media Marketing Manager", sub: "Fairmont Bab Al Bahr, Abu Dhabi · Jan to Dec 2022", lines: ["Social media content for a luxury hospitality brand", "Promotional content for hotel outlets, dining and events", "Coordinated photoshoots and digital campaigns", "Strengthened brand visibility and engagement"] },
    ],
  },
  {
    id: "skills", likes: 0, scene: "apps", accent: "#8b7bff", count: "16 skills", ratio: "4/5", about: true, title: "Skills", kicker: "Toolkit", mark: "16", color: "#272140", cover: "skills.webp?4",
    caption: "What I do, from the plan to the final edit.",
    slides: [
      { heading: "Brand and strategy", lines: ["Digital marketing strategy", "Brand management", "Multi-brand management", "Marketing project management"] },
      { heading: "Paid and leads", lines: ["Performance marketing and Meta Ads", "Lead generation and conversion optimisation", "CRM management", "Campaign management and analytics"] },
      { heading: "Content", lines: ["Content creation and strategy", "Social media management", "Photography and videography", "Video editing"] },
      { heading: "Web, design and AI", lines: ["Website development", "UI/UX design", "SEO and digital branding", "Marketing automation and AI tools"] },
    ],
  },
];

window.REELS = [
  { title: "Food reel", views: "600K views", likes: 0, poster: "reel-f1.webp", video: "" },
  { title: "Drinks reel", views: "66.6K views", likes: 0, poster: "reel-f2.webp", video: "" },
  { title: "Qalat Baalbak", views: "18.2K views", likes: 0, poster: "reel-f3.webp", video: "" },
  { title: "Shozon app promo", views: "60.5K views", likes: 0, poster: "reel-f4.webp", video: "" },
];

window.HIGHLIGHTS = [
  {
    id: "brands", story: true, ratio: "4/5", title: "Brands", icon: "star", color: "#4a3018",
    slides: [
      { heading: "Real estate and investment", sub: "Brands I have worked with", lines: ["Luxury One Real Estate", "AqarChain", "Talc Investment"] },
      { heading: "Hospitality and food", lines: ["Fairmont Bab Al Bahr", "Qalat Baalbak", "Allo Beirut", "Café Sushi", "Marco's by Marco Pierre White", "Guilt-Free Pâtisserie"] },
      { heading: "Web3, tech and travel", lines: ["Smart Chain", "Sokos.io", "Shozon", "Tendeal", "Desert Planners"] },
      { heading: "Brand identities", lines: ["Mono Blanco", "Ourvita"] },
    ],
  },
  {
    id: "education", story: true, ratio: "4/5", title: "Education", icon: "cap", color: "#1a342c",
    slides: [
      { heading: "Bachelor of Engineering", sub: "Computer Engineering", lines: ["ITM (SLS) Baroda University", "Jan 2019 to Dec 2022"] },
      { heading: "Technical skills", sub: "From my CV", lines: ["Website development", "UI/UX design", "Marketing automation and AI tools"] },
    ],
  },
  {
    id: "contact", story: true, ratio: "4/5", title: "Contact", icon: "phone", color: "#16233f",
    slides: [
      { heading: "Let's talk", sub: "Dubai, UAE", lines: ["Marketing Manager", "Message me about a role, a brand or a campaign"], links: [{ kind: "dm" }] },
      { heading: "Call or message", lines: ["Reach me directly"], links: [{ kind: "call" }, { kind: "whatsapp" }] },
      { heading: "Email and CV", lines: ["Send me an email or take my CV with you"], links: [{ kind: "email" }, { kind: "cv" }] },
    ],
  },
];
