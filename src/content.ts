// ─── SITE CONTENT ───────────────────────────────────────────────────────────
// Edit this file to update all text, projects, and testimonials on the site.

export const nav = {
  avatarSrc: "/js-avatar.jpg",
  avatarAlt: "James Skinner",
};

export const menu = {
  /** Primary nav links — large 48px items in the left column */
  links: [
    { label: "Work",    href: "/#work" },
    { label: "About",   href: "/about" },
    { label: "Artwork", href: "/artwork" },
    { label: "Writing", href: "https://medium.com/@james.skinner1999" },
    { label: "CV",      href: "/cv.pdf" },
  ],
  /** Secondary right-column links */
  contact: {
    label: "Get in touch",
    href: "mailto:james.skinner99@outlook.com",
    subLinks: [
      { label: "james.skinner99@outlook.com", href: "mailto:james.skinner99@outlook.com" },
    ],
  },
  socials: {
    label: "Socials",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/penand_inks/" },
      { label: "LinkedIn",  href: "https://www.linkedin.com/in/james-skinner-" },
    ],
  },
};

export type Project = {
  id: string;
  title: string;
  description: string;
  /** hex colour for the card background thumbnail */
  color: string;
  /** one of "cross" | "lightning" — the emblem overlay on the thumbnail */
  emblem: "cross" | "lightning";
  /** emblem colour (defaults to the design palette) */
  emblemColor?: string;
  /** optional image src — replaces the colour+emblem thumbnail entirely */
  imageSrc?: string;
  tags: string[];
  /** optional link – omit to make the card non-clickable */
  href?: string;
};

export type CarouselSection = {
  id: string;
  /** Company / section heading shown above the project grid */
  companyName: string;
  /** Subtitle shown below the company name */
  description: string;
  /** One or more logo image srcs — rendered as a horizontal row */
  logoSrcs?: string[];
  projects: Project[];
};

export const carousels: CarouselSection[] = [
  {
    id: "moneybox",
    companyName: "Moneybox",
    description: "Moneybox is the UK's leading savings and investment platform, trusted by 2.5 million customers to manage more than £22.4 billion in assets. I've led multiple end-to-end investing products and features, on web and mobile.",
    logoSrcs: ["/moneybox-logo.png"],
    projects: [
      {
        id: "mb-6",
        title: "Promoting Story-telling",
        description: "Designing reusable component optimised to for engagement via storytelling.",
        color: "#F6CA4F",
        emblem: "lightning",
        emblemColor: "#ED6E43",
        tags: ["Design System", "Data Driven", "Inclusive Design"],
        href: "/work/promoting-storytelling",
      },
      {
        id: "mb-2",
        title: "Portfolio Insights",
        description: "Allowing customers to view their portfolio split between accounts, equities & cash savings.",
        color: "#0c2924",
        emblem: "lightning",
        emblemColor: "#E8553E",
        imageSrc: "/mb-portfolio-insights.png",
        tags: ["Data Viz", "Design System"],
        href: "/work/portfolio-dashboard",
      },
      {
        id: "mb-1",
        title: "Investing Onboarding",
        description: "End-to-end redesign of the Stocks and Shares ISA account opening flows.",
        color: "#AECECE",
        emblem: "cross",
        emblemColor: "#F4C440",
        tags: ["Data Analysis", "A/B Testing"],
        href: "/work/investing-onboarding",
      },
      {
        id: "mb-3",
        title: "Payments & Withdrawals",
        description: "Streamlined fund transfer flows reducing drop-off by 22%.",
        color: "#3DA87A",
        emblem: "lightning",
        emblemColor: "#AECECE",
        tags: ["Flow Design", "A/B Testing"],
        href: "/work/payments-withdrawals",
      },
      {
        id: "mb-5",
        title: "Designing Support",
        description: "Full redesign to Moneybox's learn and support pages as part of Wordpress to CMS Migration.",
        color: "#F4C440",
        emblem: "cross",
        emblemColor: "#ED6E43",
        tags: ["CMS Migration", "Information Architecture"],
        href: "/work/designing-support",
      },
      {
        id: "mb-4",
        title: "Invest Your Interest",
        description: "Aimed to convert cash savers into investors by mitigating the main barriers to entry, fear of loss.",
        color: "#CC88CC",
        emblem: "lightning",
        emblemColor: "#3DA87A",
        tags: ["User Research", "Access Points", "Experimentation"],
        href: "/work/notifications-centre",
      },
    ],
  },
  {
    id: "hawk-eye",
    companyName: "Hawk-Eye Innovations",
    description: "Hawk-Eye Innovations is a global leader in live sports technology, trusted by major leagues worldwide to deliver tracking, broadcast operations, and cutting-edge officiating. I supported the development of AR/VR products used for officiating and broadcasting to elevate fan experiences.",
    logoSrcs: ["/hei-logo.png", "/hawk-eye-logo.svg"],
    projects: [
      {
        id: "he-3",
        title: "Officiating Platform",
        description: "Automating Tennis Line Calling & Supporting Tennis Review Officials to make the right decision in an instant.",
        color: "#F4C440",
        emblem: "lightning",
        emblemColor: "#E8553E",
        imageSrc: "/he-officiating-thumbnail.png",
        tags: ["Research", "Fusing legacy systems"],
        href: "/work/officiating-platform",
      },
      {
        id: "he-1",
        title: "VAR Review Interface",
        description: "Match-official tooling for on-field video review decisions.",
        color: "#E8553E",
        emblem: "lightning",
        emblemColor: "#CC88CC",
        tags: ["Industrial UX", "Service Design", "Research"],
        href: "/work/var-review-interface",
      },
      {
        id: "he-2",
        title: "Broadcast Graphics",
        description: "Designing a AR & VR tool to output live data visualisations for broadcast across Cricket, Tennis, Football and Basketball.",
        color: "#AECECE",
        emblem: "cross",
        emblemColor: "#F4C440",
        tags: ["Motion Design", "Data Viz"],
        href: "/work/broadcast-graphics",
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    description: "My hobby projects.",
    logoSrcs: ["/js-app-logo.svg"],
    projects: [
      {
        id: "fl-t212-home",
        title: "Building Wealth, Not Just Hype",
        description: "Redesign concept of the T212 Home screen from a short-term trading view to a long-term perspective.",
        color: "#0d151c",
        emblem: "cross",
        emblemColor: "#00a7e1",
        imageSrc: "/t212-cover.svg",
        tags: ["FinTech", "Data Vis", "0-1"],
        href: "/work/building-wealth",
      },
      {
        id: "fl-zia",
        title: "Zia Smart Home",
        description: "Control & customise all your smart devices at home, inside one app.",
        color: "#0D9488",
        emblem: "cross",
        emblemColor: "#F4C440",
        imageSrc: "/zia-thumbnail.png",
        tags: ["Branding", "0-1", "Prototyping", "Design Sprint"],
        href: "/work/zia",
      },
      {
        id: "fl-vv",
        title: "Voulez Vous",
        description: "Your go-to cocktail guide at your fingertips.",
        color: "#0DAA82",
        emblem: "lightning",
        emblemColor: "#E8553E",
        imageSrc: "/vv-card-thumbnail.png",
        tags: ["0-1", "Branding", "Native App", "Web"],
        href: "/work/voulez-vous",
      },
    ],
  },
  {
    id: "articles",
    companyName: "Articles",
    description: "My writing & design thinking.",
    projects: [
      {
        id: "fl-1",
        title: "Escaping AI Sludge: why MVPs should be Delightful.",
        description: "Function is the floor, not the ceiling. It's time to raise the bar and prove that the most viable products are the ones that feel human.",
        color: "#CC88CC",
        emblem: "cross",
        emblemColor: "#3DA87A",
        imageSrc: "/delight-article-cover.svg",
        tags: ["Writing", "Design Thinking"],
        href: "https://medium.com/user-experience-design-1/escaping-ai-sludge-why-mvps-should-be-delightful-04d267292458",
      },
      {
        id: "fl-2",
        title: "Humanising Apps",
        description: "A UI series on bridging the gap between function and emotion.",
        color: "#CC88CC",
        emblem: "lightning",
        emblemColor: "#3DA87A",
        tags: ["Writing", "Design Thinking"],
        href: "https://medium.com/design-bootcamp/humanising-apps-d79ed0b32ffe",
      },
      {
        id: "fl-3",
        title: "Talking Squares",
        description: "How we can restore meetings from the guise of the interface to promote presence over UI features.",
        color: "#E8553E",
        emblem: "cross",
        emblemColor: "#CC88CC",
        imageSrc: "/talking-squares-cover.svg",
        tags: ["Writing", "Design Thinking"],
        href: "https://medium.com/design-bootcamp/talking-squares-399450aab448",
      },
    ],
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarSrc: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rafael Costa",
    role: "Senior Product Designer & Line manager",
    company: "Moneybox",
    avatarSrc: "/t-rafael.jpg",
    quote:
      "James has demonstrated herculon effort and skill as he juggles multiple projects, departments and dependencies. He actively optimises his (and his teams) ways of working while up-skilling, and all with a smile on his face!",
  },
  {
    id: "t2",
    name: "Luke Digweed",
    role: "Senior Product Manager",
    company: "Hawk-Eye Innovations",
    avatarSrc: "/t-luke.jpg",
    quote:
      "James has an excellent attention to detail and was able to grasp a knowledge of any subject matter in question very quickly. This meant all his designs were both visually appealing and functional in equal measure. His designs and workflows allowed us to implement software now used at all major global Tennis events for officiating purposes, that's some serious impact!",
  },
];

export const footer = {
  location: "London, UK",
  title: "Product Designer",
  copyright: "© James Skinner 2026",
  ctaLabel: "Get in touch",
  ctaHref: "mailto:hello@jamesskinner.co.uk",
};
