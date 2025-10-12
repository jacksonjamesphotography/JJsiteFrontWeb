📸 photo-portfolio/
├── public/
│   ├── images/                      # Static fallback images, logos, etc.
│   ├── icons/
│   └── videos/                      # Optional local sample videos or backgrounds
│
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── layout.tsx               # Root layout (Navbar, Footer, etc.)
│   │   ├── page.tsx                 # Home page (you’ll design this yourself)
│   │
│   │   ├── stories/                 # Stories main page
│   │   │   ├── page.tsx             # Lists all couples' stories
│   │   │   └── [slug]/page.tsx      # Dynamic couple story page with photos
│   │
│   │   ├── films/                   # Films (videos) section
│   │   │   └── page.tsx
│   │
│   │   ├── about/                   # About page
│   │   │   └── page.tsx
│   │
│   │   ├── services/                # Services & pricing page
│   │   │   └── page.tsx
│   │
│   │   ├── faq/                     # FAQ section
│   │   │   └── page.tsx
│   │
│   │   └── get-in-touch/            # Contact / inquiry page
│   │       ├── page.tsx
│   │       └── success/page.tsx     # Optional thank-you / success page
│
│   ├── components/                  # Reusable React components
│   │   ├── layout/                  # Navbar, Footer, Header, etc.
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Logo.tsx
│   │
│   │   ├── ui/                      # ShadCN components (Button, Card, etc.)
│   │   ├── common/                  # Shared elements (Modal, ImageWrapper, etc.)
│   │   ├── sections/                # Page sections (Hero, GalleryPreview, etc.)
│   │   ├── animations/              # Framer Motion wrappers / transitions
│   │   └── forms/                   # Form components (Contact form, etc.)
│
│   ├── lib/                         # Configurations & utilities
│   │   ├── constants.ts             # Nav links, social links, etc.
│   │   ├── utils.ts
│   │   ├── animations.ts
│   │   ├── sanity/                  # For CMS integration later
│   │   └── api/                     # External APIs (YouTube, Mail, etc.)
│
│   ├── hooks/                       # Custom React hooks
│   │   ├── useScroll.ts
│   │   ├── useMediaQuery.ts
│   │   └── useTheme.ts
│
│   ├── styles/                      # Tailwind + Global styles
│   │   ├── globals.css
│   │   ├── theme.css
│   │   └── animations.css
│
│   ├── types/                       # TypeScript types & interfaces
│   │   ├── story.d.ts
│   │   ├── film.d.ts
│   │   ├── service.d.ts
│   │   ├── faq.d.ts
│   │   ├── contact.d.ts
│   │   └── index.d.ts
│
│   └── data/                        # Temporary static data before CMS
│       ├── stories.json
│       ├── films.json
│       ├── services.json
│       ├── faqs.json
│       └── contact.json
│
├── .env.local
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── README.md
