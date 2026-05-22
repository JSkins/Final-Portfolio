// ─── SITE CONTENT ───────────────────────────────────────────────────────────
// Edit this file to update all text, projects, and testimonials on the site.

export const nav = {
  // TODO: Replace with a permanent image — e.g. /images/avatar.jpg in /public
  // Current URL is a Figma temporary asset that expires after ~7 days.
  avatarSrc: "https://www.figma.com/api/mcp/asset/fd83cef5-550b-45d0-8d59-794d6da7ab30",
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
        id: "mb-1",
        title: "Investing Onboarding",
        description: "End-to-end redesign of the ISA & GIA account-opening flows.",
        color: "#AECECE",
        emblem: "cross",
        emblemColor: "#F4C440",
        tags: ["UX Research", "Prototyping"],
        href: "/work/investing-onboarding",
      },
      {
        id: "mb-2",
        title: "Portfolio Dashboard",
        description: "Real-time portfolio view with performance charts and insights.",
        color: "#F4C440",
        emblem: "lightning",
        emblemColor: "#E8553E",
        tags: ["Data Viz", "Design System"],
        href: "/work/portfolio-dashboard",
      },
      {
        id: "mb-3",
        title: "Payments & Withdrawals",
        description: "Streamlined fund transfer flows reducing drop-off by 22%.",
        color: "#3DA87A",
        emblem: "lightning",
        emblemColor: "#AECECE",
        tags: ["Flow Design", "A/B Testing"],
      },
      {
        id: "mb-4",
        title: "Notifications Centre",
        description: "Unified notification hub and user-controlled preferences.",
        color: "#CC88CC",
        emblem: "cross",
        emblemColor: "#3DA87A",
        tags: ["System Design", "User Research"],
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
        id: "he-1",
        title: "VAR Review Interface",
        description: "Match-official tooling for on-field video review decisions.",
        color: "#E8553E",
        emblem: "lightning",
        emblemColor: "#CC88CC",
        tags: ["Industrial UX", "Real-time Systems"],
      },
      {
        id: "he-2",
        title: "Broadcast Graphics",
        description: "Live tennis data visualisations broadcast to 50M+ viewers.",
        color: "#AECECE",
        emblem: "cross",
        emblemColor: "#F4C440",
        tags: ["Motion Design", "Data Viz"],
      },
      {
        id: "he-3",
        title: "Officiating Platform",
        description: "Web platform for umpires and tournament directors worldwide.",
        color: "#F4C440",
        emblem: "lightning",
        emblemColor: "#E8553E",
        tags: ["Product Design", "Research"],
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
        id: "fl-vv",
        title: "Voulez Vous",
        description: "Your go-to cocktail guide at your fingertips.",
        color: "#F4C440",
        emblem: "lightning",
        emblemColor: "#E8553E",
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
        color: "#3DA87A",
        emblem: "lightning",
        emblemColor: "#AECECE",
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
    name: "Luke Digweed",
    role: "Senior Product Manager",
    company: "Hawk-Eye Innovations",
    // TODO: Replace with a permanent image — e.g. /images/luke-digweed.jpg
    avatarSrc: "https://www.figma.com/api/mcp/asset/71c985e8-9462-4557-a48c-8867ada61786",
    quote:
      "James has an excellent attention to detail and was able to grasp a knowledge of any subject matter in question very quickly. This meant all his designs were both visually appealing and functional in equal measure. His designs and workflows allowed us to implement software now used at all major global Tennis events for officiating purposes — that's some serious impact!",
  },
  {
    id: "t2",
    name: "Bill Bloggs",
    role: "Senior Engineer",
    company: "Moneybox",
    // TODO: Replace with a permanent image — e.g. /images/bill-bloggs.jpg
    avatarSrc: "https://www.figma.com/api/mcp/asset/654aa1ed-f905-4bb9-afcd-2066c395a1ec",
    quote:
      "Working with James was a genuine pleasure. He brings clarity to complex problems and always advocates for the user without losing sight of technical constraints. Every handoff was thorough and every design decision was well-considered.",
  },
];

export const footer = {
  location: "London, UK",
  title: "Product Designer",
  copyright: "© James Skinner 2026",
  ctaLabel: "Get in touch",
  ctaHref: "mailto:hello@jamesskinner.co.uk",
};
