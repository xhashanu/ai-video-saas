import daBoiAvatar from "../client/static/da-boi.webp";
import kivo from "../client/static/examples/kivo.webp";
import messync from "../client/static/examples/messync.webp";
import microinfluencerClub from "../client/static/examples/microinfluencers.webp";
import promptpanda from "../client/static/examples/promptpanda.webp";
import reviewradar from "../client/static/examples/reviewradar.webp";
import scribeist from "../client/static/examples/scribeist.webp";
import searchcraft from "../client/static/examples/searchcraft.webp";
import { BlogUrl, DocsUrl } from "../shared/common";
import type { GridFeature } from "./components/FeaturesGrid";

export const features: GridFeature[] = [
  {
    name: "Video Ranking",
    description: "Combine videos and rank them — perfect for top lists and viral reviews.",
    emoji: "📊",
    href: DocsUrl,
    size: "medium",
  },
  {
    name: "Auto Clipping",
    description: "AI finds viral moments and cuts them into short clips.",
    emoji: "✂️",
    href: DocsUrl,
    size: "medium",
  },
  {
    name: "Video Commentary",
    description: "Convert scripts into screen-ready video commentaries.",
    emoji: "💬",
    href: DocsUrl,
    size: "large",
  },
  {
    name: "Text Story",
    description: "Create text-based stories, complete with gameplay elements and crisp AI voiceovers.",
    emoji: "📝",
    href: DocsUrl,
    size: "large",
  },
  {
    name: "Generate AI Voiceover",
    description: "Create humanlike AI voices in seconds, generate any voice with stunning accuracy.",
    emoji: "🎙️",
    href: DocsUrl,
    size: "medium",
  },
  {
    name: "Generate Image",
    description: "Create a clip in seconds with the power of our AI tools.",
    emoji: "🖼️",
    href: DocsUrl,
    size: "small",
  },
  {
    name: "Video Transcriber",
    description: "Instantly turn any video into a readable script with timestamps.",
    emoji: "📝",
    href: DocsUrl,
    size: "small",
  },
  {
    name: "Split Screen",
    description: "Easily generate top/bottom split screen videos for high engagement.",
    emoji: "🪟",
    href: DocsUrl,
    size: "medium",
  },
  {
    name: "AI Video Generator",
    description: "Turn your ideas into complete videos with just a text prompt.",
    emoji: "🎥",
    href: DocsUrl,
    size: "small",
  },
];

export const testimonials = [
  {
    name: "Da Boi",
    role: "Wasp Mascot",
    avatarSrc: daBoiAvatar,
    socialUrl: "https://twitter.com/wasplang",
    quote: "I don't even know how to code. I'm just a plushie.",
  },
  {
    name: "Mr. Foobar",
    role: "Founder @ Cool Startup",
    avatarSrc: daBoiAvatar,
    socialUrl: "",
    quote: "This product makes me cooler than I already am.",
  },
  {
    name: "Jamie",
    role: "Happy Customer",
    avatarSrc: daBoiAvatar,
    socialUrl: "#",
    quote: "My cats love it!",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Whats the meaning of life?",
    answer: "42.",
    href: "https://en.wikipedia.org/wiki/42_(number)",
  },
];

export const footerNavigation = {
  app: [
    { name: "Documentation", href: DocsUrl },
    { name: "Blog", href: BlogUrl },
  ],
  company: [
    { name: "About", href: "https://wasp.sh" },
    { name: "Privacy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export const examples = [
  {
    name: "Example #1",
    description: "Describe your example here.",
    imageSrc: kivo,
    href: "#",
  },
  {
    name: "Example #2",
    description: "Describe your example here.",
    imageSrc: messync,
    href: "#",
  },
  {
    name: "Example #3",
    description: "Describe your example here.",
    imageSrc: microinfluencerClub,
    href: "#",
  },
  {
    name: "Example #4",
    description: "Describe your example here.",
    imageSrc: promptpanda,
    href: "#",
  },
  {
    name: "Example #5",
    description: "Describe your example here.",
    imageSrc: reviewradar,
    href: "#",
  },
  {
    name: "Example #6",
    description: "Describe your example here.",
    imageSrc: scribeist,
    href: "#",
  },
  {
    name: "Example #7",
    description: "Describe your example here.",
    imageSrc: searchcraft,
    href: "#",
  },
];
