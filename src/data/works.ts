import { ReactNode } from "react";

interface TechStack {
  name: string;
  icon: string;
}

interface SectionContent {
  heading: string;
  content: string;
}

export interface WorkDetails {
  id: string;
  title: string;
  client: string;
  type?: string;
  description: {
    overview: ReactNode;
    situation: SectionContent;
    task: SectionContent;
    action: SectionContent;
    result: SectionContent;
  };
  images: string[];
  content: {
    type: 'text' | 'image';
    content: string;
    index: number;
  }[];
  year: string;
  image: string;
  tags: string[];
  stack?: TechStack[];
  industry?: string[];
  liveUrl?: string;
}

export const works: WorkDetails[] = [
  {
    id: "algorizin-opt",
    title: "Transforming Self-Employment for International Students with Algorizin OPT",
    client: "Algorizin",
    year: "2024",
    description: {
      overview: "Led the end-to-end design and development of a groundbreaking platform that simplifies the OPT self-employment process for international students. By merging legal compliance with an intuitive user experience, the platform empowers students to establish self-employed businesses without the risks of non-compliance or procedural missteps.",
      situation: {
        heading: "Complex OPT Self-Employment Process",
        content: `International students looking to pursue self-employment under OPT (Optional Practical Training) face a highly complex and often confusing set of USCIS regulations. Many struggle with:

• Unclear eligibility criteria and documentation requirements.
• Risk of visa complications due to improper filings or missing paperwork.
• Lack of accessible, structured guidance on legal business formation.
• Manual and inefficient processes that lead to delays and compliance risks.

Without a streamlined system in place, students often resort to unreliable sources for information, putting their immigration status in jeopardy. Algorizin identified this critical gap and sought to create a comprehensive, user-friendly solution to bridge it.`
      },
      task: {
        heading: "Building a Compliant Self-Employment Platform",
        content: `The goal was to design an intuitive and scalable platform that:

✔ Simplifies the end-to-end OPT self-employment process.
✔ Ensures full USCIS compliance by integrating automated document generation and legal guidance.
✔ Provides a clear, structured pathway to help users register and manage their self-employment efficiently.
✔ Incorporates expert consultations to guide students through legal and financial complexities.
✔ Implements a strategic revenue model while maintaining accessibility for international students.

The platform needed to balance ease of use, legal accuracy, and commercial sustainability, making it a game-changer in the legal tech and immigration space.`
      },
      action: {
        heading: "Comprehensive Platform Development",
        content: `To bring this vision to life, I led the product design and UX research, ensuring that every aspect of the platform was built for clarity, efficiency, and compliance. Key initiatives included:

  • End-to-End User Experience Design: Crafted a seamless and self-guided onboarding process with step-by-step assistance, reducing friction and confusion
  • Automated Document Generation: Integrated auto-populated legal documents to streamline compliance and minimize user errors
  • Real-Time Status Tracking: Developed a dashboard that provides students with updates on their business formation progress, next steps, and compliance status
  • Expert Consultation Access: Built a booking system that allows students to connect with legal advisors and mentors directly through the platform
  • Strategic Monetization Model: Implemented a tiered payment system—offering free initial guidance while monetizing expert consultations and premium services
  • Optimized for Accessibility & Growth: Designed a mobile-friendly, scalable system to accommodate the increasing number of users across different regions`
      },
      result: {
        heading: "Empowering International Students",
        content: `The platform saw significant adoption and revenue growth, proving its effectiveness in addressing a critical need.

• Increased platform adoption, successfully onboarding hundreds of international students in the first few months
• Helped users establish legally compliant self-employment businesses, leading to an impressive approval rate
• Strengthened user trust and engagement, positioning Algorizin as a leading solution for self-employed OPT students

By transforming a once-complicated process into an accessible, automated, and compliant solution, Algorizin OPT has empowered thousands of students to take control of their career paths—without the fear of immigration risks.`
      }
    },
    image: "/images/works/Alghero.jpg",
    images: [
      "/images/works/Alghero.jpg",    // Hero image
      "/images/works/Alg1.jpg",              // Situation - Full width
      "/images/works/Alg2.jpg",              // Situation - Split left
      "/images/works/Alg3.jpg",              // Situation - Split right
      "/images/works/Alg4.jpg",        // Task - Full width
      "/images/works/Alg5.jpg",        // Task - Split left
      "/images/works/Alg6.jpg",        // Task - Split right
      "/images/works/Alg7.jpg",      // Action - Full width
      "/images/works/Alg8.jpg",      // Action - Split left
      "/images/works/Alg9.jpg",      // Action - Split right
    ],
    tags: ["Product Design", "Web Development", "UX Research"],
    stack: [

      {
        name: "Figma",
        icon: "/icons/Figma.svg"
      },
      {
        name: "ClickUp",
        icon: "/icons/Clickup.svg"
      }
    ],
    industry: ["Legal Tech", "Education", "Immigration"],
    liveUrl: "https://algorizin.com",
    content: [/* ... content blocks ... */]
  },
  {
    id: "profyl-ai",
    title: "Building Profyl.ai from the Ground Up – A New Era of Job Matching",
    client: "Profyl.ai",
    year: "2024",
    description: {
      overview: "Designed and developed an AI-powered job matching platform that revolutionizes how job seekers and employers connect, using advanced machine learning algorithms for precise matches.",
      situation: {
        heading: "Inefficient Job Matching",
        content: "Traditional job platforms failed to effectively match candidates with suitable positions, resulting in wasted time and resources for both parties."
      },
      task: {
        heading: "AI-Powered Job Platform",
        content: "Build an intelligent platform that leverages AI to create more accurate job matches while providing a seamless user experience."
      },
      action: {
        heading: "Innovative Algorithm Development",
        content: "Created an innovative matching algorithm and intuitive interface that analyzes multiple data points to generate highly relevant job recommendations."
      },
      result: {
        heading: "Improved Hiring Efficiency",
        content: "Achieved an 85% successful match rate, reducing hiring time by 60% for partner companies."
      }
    },
    image: "/images/works/profyl-hero.jpg",
    images: [
      "/images/works/profyl-hero.jpg",       // Hero image
      "/images/works/profyl-situation-1.jpg", // Situation - Full width
      "/images/works/profyl-situation-2.jpg", // Situation - Split left
      "/images/works/profyl-situation-3.jpg", // Situation - Split right
      "/images/works/profyl-task-1.jpg",     // Task - Full width
      "/images/works/profyl-task-2.jpg",     // Task - Split left
      "/images/works/profyl-task-3.jpg",     // Task - Split right
      "/images/works/profyl-action-1.jpg",   // Action - Full width
      "/images/works/profyl-action-2.jpg",   // Action - Split left
      "/images/works/profyl-action-3.jpg",   // Action - Split right
    ],
    tags: ["AI/ML", "Product Design", "Full-Stack Development", "UX/UI"],
    stack: [
      {
        name: "Python",
        icon: "/icons/python.svg"
      },
      {
        name: "TensorFlow",
        icon: "/icons/tensorflow.svg"
      },
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg"
      }
    ],
    industry: ["HR Tech", "Artificial Intelligence", "Recruitment"],
    liveUrl: "https://profyl.ai",
    content: [/* ... content blocks ... */]
  },
  {
    id: "fizclo-ecommerce",
    title: "Revolutionizing E-Commerce with AI-Powered Personalization in FIZCLO",
    client: "FIZCLO",
    year: "2024",
    description: {
      overview: "Transformed the online shopping experience through AI-driven personalization, helping FIZCLO achieve unprecedented customer engagement and sales growth.",
      situation: {
        heading: "Generic Shopping Experience",
        content: "FIZCLO struggled with generic product recommendations and high cart abandonment rates in their e-commerce platform."
      },
      task: {
        heading: "Personalized Shopping System",
        content: "Implement an AI-powered personalization system that delivers tailored shopping experiences to each customer."
      },
      action: {
        heading: "Smart Recommendation Engine",
        content: "Developed a sophisticated recommendation engine and personalized user interface that adapts to individual shopping patterns."
      },
      result: {
        heading: "Significant Growth Metrics",
        content: "Increased conversion rates by 45% and customer retention by 60% within the first quarter of implementation."
      }
    },
    image: "/images/works/fizclo-hero.jpg",
    images: [
      "/images/works/fizclo-hero.jpg",       // Hero image
      "/images/works/fizclo-situation-1.jpg", // Situation - Full width
      "/images/works/fizclo-situation-2.jpg", // Situation - Split left
      "/images/works/fizclo-situation-3.jpg", // Situation - Split right
      "/images/works/fizclo-task-1.jpg",     // Task - Full width
      "/images/works/fizclo-task-2.jpg",     // Task - Split left
      "/images/works/fizclo-task-3.jpg",     // Task - Split right
      "/images/works/fizclo-action-1.jpg",   // Action - Full width
      "/images/works/fizclo-action-2.jpg",   // Action - Split left
      "/images/works/fizclo-action-3.jpg",   // Action - Split right
    ],
    tags: ["E-commerce", "AI Integration", "UX Design", "Frontend Development"],
    stack: [
      {
        name: "Vue.js",
        icon: "/icons/vue.svg"
      },
      {
        name: "AWS",
        icon: "/icons/aws.svg"
      },
      {
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg"
      }
    ],
    industry: ["E-commerce", "Retail", "Fashion Tech"],
    liveUrl: "https://fizclo.com",
    content: [/* ... content blocks ... */]
  }
];

export const getWork = (id: string | undefined): WorkDetails | undefined => {
  return works.find(work => work.id === id);
};

export const getAdjacentWorks = (id: string | undefined) => {
  if (!id) return { prev: undefined, next: undefined };
  
  const currentIndex = works.findIndex(work => work.id === id);
  if (currentIndex === -1) return { prev: undefined, next: undefined };
  
  const prev = currentIndex > 0 ? works[currentIndex - 1] : undefined;
  const next = currentIndex < works.length - 1 ? works[currentIndex + 1] : undefined;
  
  return { prev, next };
};
