/*
  EDIT YOUR PROFILE HERE
  ----------------------
  PROFILE.photo   Your DP. Put a photo in this folder (e.g. "dp.jpg") and write its name here.
                  Empty = "PJ" monogram.

  POSTS           The works list: one tile per category. Tapping a tile opens its slides.
    title         Full name, shown on the post and in messages.
    label         Short name printed on the tile (it has to fit in a small square).
    cover         The tile image in the covers/ folder (portrait 3:4, 810 x 1080 or larger).
    color         Background colour of text slides.
    ratio         Shape of the opened post on phones, e.g. "1/1", "4/5", "16/10".
    about         true = shown under the third (About) tab instead of in the works grid.
    slides        What opens on tap. Two kinds:
                    image slide: { file: "name-in-work-folder.webp", title: "", text: "" }
                    text slide:  { heading: "", sub: "", lines: ["", ""] }
                  Add link: "https://..." to an image slide to show a "Visit website" button.

  BRANDS          The circles on the Home screen. Each brand opens a story of the work you did for it.
                  logo    image in the brands/ folder (square, white background). Empty = a coloured
                          monogram is drawn from "mono" and "tone".
                  slides  Any mix of:
                            text:   { heading: "", sub: "", lines: ["", ""] }
                            picture:{ file: "name-in-work-folder.webp", title: "", text: "" }
                            video:  { video: "name-in-work-folder.mp4", title: "", text: "" }
                  To add a story to a brand, add a slide to its list. New brand: copy one block.

  HIGHLIGHTS      The round circles under the buttons. Tapping one opens a full-screen story with
                  progress bars. Each slide: { heading, sub, lines: [], links: [{ kind }] }.
                  from: "experience" reuses the slides of that post, so the text lives in one place.
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
    id: "websites", likes: 0, cover: "websites.webp?5", label: "Web Studio", title: "Website development", ratio: "16/10", color: "#16233f",
    caption: "Websites I designed and built. Swipe to see them all.",
    slides: [
      { file: "web-a.webp", title: "Talc Investment", text: "Corporate website", link: "" },
      { file: "web-b.webp", title: "Desert Planners", text: "Tours and holiday booking website", link: "" },
      { heading: "Website development and design", sub: "Websites, landing pages and UI/UX", lines: ["Designed and developed websites", "High-converting landing pages", "UI/UX interfaces for Smart Chain, AqarChain and Sokos.io", "Clear paths from visitor to customer"] },
    ],
  },
  {
    id: "apps", likes: 0, cover: "apps.webp?5", label: "App Studio", title: "Apps & software development", ratio: "4/5", color: "#1d2740",
    caption: "Custom-built apps and software. Examples are being added.",
    slides: [
      { heading: "Apps and software development", sub: "Custom-built solutions", lines: ["Built to turn visitors into customers", "Case studies are being added", "Message me to see examples"] },
    ],
  },
  {
    id: "reels", likes: 0, cover: "reels.webp?5", label: "Reel Studio", title: "Reels", color: "#3f1a27",
    caption: "Short-form video for restaurants, hotels and apps.",
    slides: [
      { file: "reels-3.webp", title: "Food and dining reels", text: "600K and 28.5K views" },
      { file: "reels-2.webp", title: "Restaurant reels", text: "66.6K and 18.2K views" },
      { file: "reels-1.webp", title: "App promos for Tendeal and Shozon", text: "103K and 60.5K views" },
    ],
  },
  {
    id: "social", likes: 0, cover: "social.webp?5", label: "Social Studio", title: "Social media management", ratio: "4/3", color: "#4a3018",
    caption: "Instagram accounts I managed, from content strategy to the daily feed.",
    slides: [
      { file: "social-instagram.webp", title: "Instagram management", text: "Qalat Baalbak, Fairmont Bab Al Bahr and Allo Beirut" },
    ],
  },
  {
    id: "branding", likes: 0, cover: "branding.webp?5", label: "Create Brands", title: "Branding", ratio: "4/3", color: "#1a342c",
    caption: "Brand identities, from the logo to how the feed looks.",
    slides: [
      { file: "brand-a.webp", title: "Mono Blanco", text: "Brand identity and social look" },
      { file: "brand-b.webp", title: "Ourvita", text: "Brand identity for a cosmetics brand" },
    ],
  },
  {
    id: "creative", likes: 0, cover: "creative.webp?5", label: "Shoot and Design", title: "Graphic, video & photo", ratio: "4/5", color: "#2a2320",
    caption: "Photography, video and graphic design I create.",
    slides: [
      { heading: "Graphic, video and photo", sub: "Created in-house", lines: ["Photography and videography", "Video editing", "Promotional creatives and digital content", "Coordinated photoshoots for a luxury hotel"] },
      { heading: "Examples", lines: ["Photo and graphic work is being added", "Message me to see it"] },
    ],
  },
  {
    id: "ai", likes: 0, cover: "ai.webp?5", label: "Automate with AI", title: "AI agents & workflow automation", ratio: "4/5", color: "#2a2438",
    caption: "Automation that handles the follow-ups so leads do not go cold.",
    slides: [
      { heading: "AI agents and workflow automation", sub: "Smart automation systems that handle:", lines: ["Lead follow-ups", "Customer interactions", "Everyday workflows"] },
      { heading: "Why it matters", lines: ["Saves time", "Increases conversions", "Leads get an answer straight away"] },
    ],
  },
  {
    id: "ads", likes: 0, cover: "ads.webp?5", label: "Lead Generation", title: "Paid ads & lead generation", ratio: "4/5", color: "#2f2418",
    caption: "Paid campaigns, lead generation and the CRM behind them.",
    slides: [
      { heading: "Paid ads and lead generation", sub: "Meta Ads and performance marketing", lines: ["Campaign setup and management", "Lead generation and conversion optimisation", "CRM management and follow-up", "Campaign analytics"] },
      { heading: "Campaign results", lines: ["Numbers are being added", "Message me for case studies"] },
    ],
  },
  {
    id: "seo", likes: 0, cover: "seo.webp?5", label: "SEO", title: "SEO", ratio: "4/5", color: "#1f2630",
    caption: "Helping websites and brands show up in search.",
    slides: [
      { heading: "SEO", sub: "Search engine optimisation", lines: ["SEO and digital branding", "Search visibility for websites and brands", "Examples are being added", "Message me to see them"] },
    ],
  },
  {
    id: "experience", likes: 0, cover: "experience.webp?5", label: "Experience", title: "Experience", ratio: "4/5", about: true, color: "#17181b",
    caption: "Three roles in the UAE: social, then design, then the whole marketing function.",
    slides: [
      { heading: "Marketing Manager", sub: "Luxury One Real Estate · Oct 2024 to present", lines: ["Led marketing and brand strategy", "Managed social media and website development", "Created, shot and edited marketing content", "Managed paid ads, lead generation and CRM", "Optimised campaigns and lead conversions"] },
      { heading: "Social Media Marketing Manager and UI/UX Designer", sub: "Smart Chain Group · Jan 2023 to Sep 2024", lines: ["Brands: Smart Chain, AqarChain and Sokos.io", "Social media and digital branding across three brands", "Content and campaigns for Web3, NFT and real estate", "Designed websites and UI/UX interfaces", "Supported brand growth and community engagement"] },
      { heading: "Social Media Marketing Manager", sub: "Fairmont Bab Al Bahr, Abu Dhabi · Jan to Dec 2022", lines: ["Social media content for a luxury hospitality brand", "Promotional content for hotel outlets, dining and events", "Coordinated photoshoots and digital campaigns", "Strengthened brand visibility and engagement"] },
    ],
  },
  {
    id: "skills", likes: 0, cover: "skills.webp?5", label: "Skills", title: "Skills", ratio: "4/5", about: true, color: "#272140",
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

window.BRANDS = [
  { id: "b-luxuryone", name: "Luxury One Real Estate", short: "Luxury One", mono: "LO", tone: "#6b5a3a", color: "#2a2418",
    slides: [
      { heading: "Luxury One Real Estate", sub: "Marketing Manager · Oct 2024 to present", lines: ["Led marketing and brand strategy", "Managed social media and website development", "Created, shot and edited marketing content", "Managed paid ads, lead generation and CRM", "Optimised campaigns and lead conversions"] },
    ] },
  { id: "b-fairmont", name: "Fairmont Bab Al Bahr", short: "Fairmont", logo: "fairmont.webp", color: "#1c1b24",
    slides: [
      { file: "b-fairmont.webp", title: "fairmontbabalbahr", text: "Instagram for a luxury hotel in Abu Dhabi" },
      { heading: "Fairmont Bab Al Bahr", sub: "Social Media Marketing Manager · Jan to Dec 2022", lines: ["Social media content for a luxury hospitality brand", "Promotional content for hotel outlets, dining and events", "Coordinated photoshoots and digital campaigns", "Strengthened brand visibility and engagement"] },
    ] },
  { id: "b-smartchain", name: "Smart Chain", short: "Smart Chain", logo: "smartchain.webp", color: "#1b2233",
    slides: [
      { heading: "Smart Chain", sub: "Smart Chain Group · Jan 2023 to Sep 2024", lines: ["Social media and digital branding", "Content and campaigns for Web3, NFT and real estate", "Designed websites and UI/UX interfaces", "Produced promotional creatives and digital content"] },
    ] },
  { id: "b-aqarchain", name: "AqarChain", short: "AqarChain", mono: "AC", tone: "#2f6f62", color: "#16262a",
    slides: [
      { heading: "AqarChain", sub: "One of the three brands I managed at Smart Chain Group", lines: ["Social media and digital branding", "Content and campaigns for Web3, NFT and real estate", "Supported brand growth and community engagement"] },
    ] },
  { id: "b-qalat", name: "Qalat Baalbak", short: "Qalat", logo: "qalat.webp", color: "#17262a",
    slides: [
      { file: "b-qalat.webp", title: "qalaatbaalbakrestaurant", text: "Instagram for a Lebanese restaurant" },
      { file: "reel-f3.webp", title: "Restaurant reel", text: "18.2K views" },
    ] },
  { id: "b-marcos", name: "Marco's by Marco Pierre White", short: "Marco's", logo: "marcos.webp", color: "#1c2a2c",
    slides: [
      { heading: "Marco's", sub: "Italian by Marco Pierre White", lines: ["A brand I have worked with", "Stories from this brand are being added"] },
    ] },
  { id: "b-allo", name: "Allo Beirut", short: "Allo Beirut", logo: "allo.webp", color: "#2a1a22",
    slides: [
      { file: "b-allo.webp", title: "allobeirutuae", text: "Instagram for a Lebanese restaurant brand" },
    ] },
  { id: "b-shozon", name: "Shozon", short: "Shozon", logo: "shozon.webp", color: "#1e1f23",
    slides: [
      { file: "reel-f4.webp", title: "Shozon app promo", text: "60.5K views" },
    ] },
  { id: "b-tendeal", name: "Tendeal", short: "Tendeal", logo: "tendeal.webp", color: "#2a2216",
    slides: [
      { file: "reels-1.webp", title: "Tendeal and Shozon app promos", text: "103K and 60.5K views" },
    ] },
  { id: "b-talc", name: "Talc Investment", short: "Talc", logo: "talc.webp", color: "#2a2619",
    slides: [
      { file: "web-a.webp", title: "Talc Investment", text: "Corporate website" },
    ] },
  { id: "b-desert", name: "Desert Planners", short: "Desert Planners", mono: "DP", tone: "#c4262e", color: "#2a1a1c",
    slides: [
      { file: "web-b.webp", title: "Desert Planners", text: "Tours and holiday booking website" },
    ] },
  { id: "b-monoblanco", name: "Mono Blanco", short: "Mono Blanco", mono: "MB", tone: "#e06a12", color: "#2a1d12",
    slides: [
      { file: "brand-a.webp", title: "Mono Blanco", text: "Brand identity and social look" },
    ] },
  { id: "b-ourvita", name: "Ourvita", short: "Ourvita", mono: "OV", tone: "#4f8a5e", color: "#16241b",
    slides: [
      { file: "brand-b.webp", title: "Ourvita", text: "Brand identity for a cosmetics brand" },
    ] },
  { id: "b-sokos", name: "Sokos", short: "Sokos", logo: "sokos.webp", color: "#161d33",
    slides: [
      { heading: "Sokos", sub: "A brand I have worked with", lines: ["Stories from this brand are being added"] },
    ] },
  { id: "b-guiltfree", name: "Guilt-Free Pâtisserie", short: "Guilt-Free", logo: "guiltfree.webp", color: "#2a2318",
    slides: [
      { heading: "Guilt-Free Pâtisserie", sub: "A brand I have worked with", lines: ["Stories from this brand are being added"] },
    ] },
  { id: "b-cafesushi", name: "Café Sushi", short: "Café Sushi", logo: "cafesushi.webp", color: "#26201c",
    slides: [
      { heading: "Café Sushi", sub: "A brand I have worked with", lines: ["Stories from this brand are being added"] },
    ] },
];

window.HIGHLIGHTS = [
  { id: "hl-experience", from: "experience", story: true, ratio: "4/5", title: "Experience", icon: "briefcase" },
  { id: "hl-skills", from: "skills", story: true, ratio: "4/5", title: "Skills", icon: "bolt" },
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
];
