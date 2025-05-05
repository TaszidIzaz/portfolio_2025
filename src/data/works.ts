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
  year: string;
  isPrivate?: boolean;
  description: {
    overview: string;
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
  testimonial?: {
    quote: string;
    name: string;
    position?: string;
    avatar?: string;
  };
  image: string;
  tags: string[];
  stack?: TechStack[];
  industry?: string[];
  liveUrl?: string;
}

export const works: WorkDetails[] = [
  {
    id: "algorizin-opt",
    testimonial: {
      quote: "Taszid blends creativity with strategic design thinking, delivering functional, user-centered experiences. His proactive approach, adaptability, and teamwork make him an invaluable addition to any organization.",
      name: "Toukir Tasnim Chowdhury",
      position: "Product Manager at Algorizin ",
      avatar: "/images/testimonials/algorizin.png"
    },
    title: "Algorizin OPT – Empowering International Students with Self-Employment",
    client: "Algorizin",
    year: "2024",
    description: {
      overview: "Led the end-to-end design of a platform that simplifies the OPT self-employment process for international students. By merging legal compliance with an intuitive user experience, the platform empowers students to establish self-employed businesses without the risks of non-compliance or procedural missteps.",
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
✔ Ensures USCIS compliance by integrating automated document generation and legal guidance.
✔ Provides a clear, structured pathway to help users register and manage their self-employment efficiently.
✔ Incorporates expert consultations to guide students through legal and financial complexities.

The platform needed to balance ease of use, legal accuracy, and commercial sustainability, making it a game-changer in the legal tech and immigration space.`
      },
      action: {
        heading: "Comprehensive Platform Development",
        content: `To bring this vision to life, I led the product design and UX research, ensuring that every aspect of the platform was built for clarity, efficiency, and compliance. Key initiatives included:

  • End-to-End User Experience Design: Crafted a seamless and self-guided onboarding process with step-by-step assistance, reducing friction and confusion
  • Real-Time Status Tracking: Developed a dashboard that provides students with updates on their business formation progress, next steps, and compliance status
  • Expert Consultation Access: Built a booking system that allows students to connect with legal advisors and mentors directly through the platform
  • Optimized for Accessibility & Growth: Designed a mobile-friendly, scalable system to accommodate the increasing number of users across different regions`
      },
      result: {
        heading: "Empowering International Students",
        content: `The platform saw significant adoption and revenue growth, proving its effectiveness in addressing a critical need.

• Increased platform adoption, successfully onboarding hundreds of international students in the first few months
• Helped users establish legally compliant self-employment businesses, leading to an increased approval rate
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
    liveUrl: "https://app.algorizin.com/login",
    content: [/* ... content blocks ... */]
  },
  {
    id: "profyl-ai",
    testimonial: {
      quote: "Taszid did a phenomenal job bringing my vision to life. His creativity, professionalism, and punctuality are outstanding. ",
      name: "Shahriar Islam Shojeb",
      position: "CEO and Founder at Profyl.ai ",
      avatar: "/images/testimonials/profyl.png"
    },
    title: "Profyl.ai – Smarter, Faster AI-Powered Hiring",
    client: "Profyl.ai",
    year: "2024",
    description: {
      overview: "Designed and developed a cutting-edge recruitment platform that connects job seekers with recruiters through AI-driven talent matching. By streamlining the hiring process, Profyl.ai bridges the gap between talent discovery and company needs, making recruitment faster, smarter, and more efficient.",
      situation: {
        heading: "The Challenge",
        content: `The traditional recruitment process is plagued with inefficiencies, making it difficult for both job seekers and recruiters to connect effectively. Key challenges included:

• Recruiters struggling with talent discovery: Sifting through countless resumes manually was time-consuming and often led to missed opportunities.
• Job seekers facing application fatigue: Applying to multiple jobs with little feedback made the process frustrating and inefficient.
• Lack of data-driven hiring decisions: Companies relied on outdated methods, leading to mismatched hires and increased turnover.
• Limited personalization: Existing platforms failed to offer a tailored experience that matches candidates with the right opportunities.

Profyl.ai set out to solve these challenges by creating an AI-driven recruitment ecosystem that simplifies hiring while enhancing candidate-job compatibility.`
      },
      task: {
        heading: "The Task",
        content: `The mission was to build an intelligent, scalable, and user-centric recruitment platform that:

✔ Uses AI-driven talent matching to connect job seekers with the most relevant opportunities.
✔ Optimizes the recruiter workflow by automating job postings, candidate screening, and communication.
✔ Enhances candidate experience with personalized job recommendations and application tracking.
✔ Ensures transparency and efficiency in the hiring process, reducing bias and improving decision-making.
✔ Integrates monetization models to generate sustainable revenue while offering value to both job seekers and recruiters.`
      },
      action: {
        heading: "The Action",
        content: `As the lead product designer, I focused on delivering an experience that is intuitive, data-driven, and impactful. Key initiatives included:

• AI-Powered Talent Matching: Developed a recommendation system that analyzes candidate profiles and suggests the best job matches, reducing time spent on manual searches.
• Seamless Job Application Process: Designed a frictionless application flow, allowing users to apply with one click and track their progress effortlessly.
• Recruiter Dashboard & Analytics: Created a dashboard for recruiters to manage job postings, review applications, and receive AI-driven hiring insights.
• Smart Candidate Profiling: Implemented dynamic candidate profiles that highlight key skills, experiences, and achievements for recruiters.
• Integrated Communication Tools: Built an in-app messaging system to facilitate direct conversations between recruiters and candidates.
• Monetization Strategy: Introduced freemium and premium plans for recruiters, offering advanced AI insights and job promotion options.`
      },
      result: {
        heading: "The Result",
        content: `Profyl.ai has transformed the recruitment experience, driving higher engagement and revenue growth.

• Increased platform adoption, with thousands of job seekers and recruiters actively using the platform.
• Optimized talent matching, reducing time-to-hire by 40% and improving recruiter efficiency.
• Boosted user retention, as job seekers and recruiters found more value in AI-driven hiring.
• Achieved revenue growth through premium job postings and subscription-based recruiter plans.
• Improved hiring outcomes, resulting in higher job placement success rates and better job-candidate matches.

By leveraging AI and automation, Profyl.ai is redefining the future of recruitment—making hiring faster, smarter, and more accessible for all.`
      }
    },
    image: "/images/works/profhero.jpg",
    images: [
      "/images/works/profhero.jpg",       // Hero image
      "/images/works/pro1.jpg", // Situation - Full width
      "/images/works/pro2.jpg", // Situation - Split left
      "/images/works/pro3.jpg", // Situation - Split right
      "/images/works/pro4.jpg",     // Task - Full width
      "/images/works/pro5.jpg",     // Task - Split left
      "/images/works/pro6.jpg",     // Task - Split right
      "/images/works/pro7.jpg",   // Action - Full width
      "/images/works/pro8.jpg",   // Action - Split left
      "/images/works/pro9.jpg",   // Action - Split right
    ],
    tags: ["AI/ML", "Product Design", "Full-Stack Development", "UX/UI"],
    stack: [
      {
        name: "Python",
        icon: "/icons/Figma.svg"
      },
      {
        name: "TensorFlow",
        icon: "/icons/Clickup.svg"
      },
      
    ],
    industry: ["HR Tech", "Artificial Intelligence", "Recruitment"],
    liveUrl: "https://profyl.ai",
    content: [/* ... content blocks ... */]
  },
  {
    id: "fizclo-ecommerce",
    testimonial: {
      quote: "Taszid did a phenomenal job bringing my vision to life. His creativity, professionalism, and punctuality are outstanding. He designed FIZCLO’s website with exceptional quality and attention to detail.",
      name: "Mohammad Affan",
      position: "Founder at FIZCLO ",
      avatar: "/images/testimonials/fiz.png"
    },
    title: "FIZCLO – AI-Driven Personalization for E-Commerce Growth",
    client: "FIZCLO",
    year: "2025",
    description: {
      overview: "Transformed the online shopping experience through AI-driven personalization, helping FIZCLO achieve unprecedented customer engagement and sales growth. By implementing advanced machine learning algorithms, we created a highly personalized shopping experience that significantly improved conversion rates and customer satisfaction.",
      situation: {
        heading: "Generic Shopping Experience Challenge",
        content: `In the competitive e-commerce landscape, FIZCLO faced several critical challenges that limited growth and customer engagement:

• High cart abandonment rates due to irrelevant product recommendations
• Limited customer engagement with generic, one-size-fits-all shopping experiences
• Inefficient inventory management leading to stockouts and overstock situations
• Poor conversion rates from traditional marketing approaches
• Lack of data-driven insights into customer preferences and behaviors

These challenges were causing significant revenue loss and preventing FIZCLO from scaling effectively in the competitive e-commerce market.`
      },
      task: {
        heading: "Building an AI-Powered Shopping Experience",
        content: `The project aimed to create a sophisticated e-commerce platform that would:

✔ Implement AI-driven personalization to deliver tailored product recommendations
✔ Develop smart inventory management systems using predictive analytics
✔ Create an intuitive, responsive user interface that adapts to user behavior
✔ Build automated marketing campaigns based on customer segments and behaviors
✔ Integrate real-time analytics for continuous optimization of the shopping experience

The solution needed to balance technical sophistication with user-friendly design while ensuring scalability and performance.`
      },
      action: {
        heading: "Comprehensive E-commerce Transformation",
        content: `Leading the technical implementation and UX design, we executed a multi-faceted approach:

• AI-Powered Personalization Engine: Developed machine learning algorithms that analyze user behavior and preferences to provide personalized product recommendations
• Dynamic User Interface: Created an adaptive UI that adjusts layouts and content based on user interactions and preferences
• Smart Inventory Management: Implemented predictive analytics to optimize stock levels and reduce inventory costs
• Automated Marketing System: Built a sophisticated marketing automation platform that delivers personalized campaigns across multiple channels
• Analytics Dashboard: Designed comprehensive analytics tools for tracking KPIs and customer insights
• Mobile-First Approach: Ensured seamless experience across all devices with responsive design`
      },
      result: {
        heading: "Transformative Business Impact",
        content: `The implementation delivered exceptional results across key metrics:

• Reduced cart abandonment rate by 35% through personalized recommendations
• Increased average order value by 45% with AI-powered cross-selling
• Improved inventory turnover by 60% using predictive analytics
• Boosted customer retention rate by 50% through personalized experiences
• Achieved 85% positive feedback on the new user interface

The platform transformation established FIZCLO as a leading example of AI-powered e-commerce innovation, setting new standards for personalized shopping experiences.`
      }
    },
    image: "/images/works/fizhero.jpg",
    images: [
      "/images/works/fizhero.jpg",
      "/images/works/fiz1.jpg",
      "/images/works/fiz2.jpg",
      "/images/works/fiz3.jpg",
      "/images/works/fiz4.jpg",
      "/images/works/fiz5.jpg",
      "/images/works/fiz6.jpg",
      "/images/works/fiz7.jpg",
      "/images/works/fiz8.jpg",
      "/images/works/fiz9.jpg",
    ],
    tags: ["E-commerce", "AI Integration", "UX Design", "Frontend Development"],
    stack: [
      {
        name: "Vue.js",
        icon: "/icons/Figma.svg"
      },
      {
        name: "TensorFlow",
        icon: "/icons/Clickup.svg"
      },
      
    ],
    industry: ["E-commerce", "Retail", "Fashion Tech"],
    liveUrl: "https://fizclo.com",

    content: [/* ... content blocks ... */]
    // content: [
    //   {
    //     type: 'text',
    //     content: 'Generic Shopping Experience Challenge',
    //     index: 1
    //   },
    //   {
    //     type: 'image',
    //     content: '/images/works/fiz1.jpg',
    //     index: 2
    //   },
    //   {
    //     type: 'image',
    //     content: '/images/works/fiz2.jpg',
    //     index: 3
    //   },
    //   {
    //     type: 'image',
    //     content: '/images/works/fiz3.jpg',
    //     index: 4
    //   },
    //   {
    //     type: 'text',
    //     content: 'Building an AI-Powered Shopping Experience',
    //     index: 5
    //   },
    //   {
    //     type: 'image',
    //     content: '/images/works/fiz4.jpg',
    //     index: 6
    //   },
    //   {
    //     type: 'image',
    //     content: '/images/works/fiz5.jpg',
    //     index: 7
    //   },
    //   {
    //     type: 'image',
    //     content: '/images/works/fiz6.jpg',
    //     index: 8
    //   },
    //   {
    //     type: 'text',
    //     content: 'Comprehensive E-commerce Transformation',
    //     index: 9
    //   },
    //   {
    //     type: 'image',
    //     content: '/images/works/fiz7.jpg',
    //     index: 10
    //   },
    //   {
    //     type: 'image',
    //     content: '/images/works/fiz8.jpg',
    //     index: 11
    //   },
    //   {
    //     type: 'image',
    //     content: '/images/works/fiz9.jpg',
    //     index: 12
    //   }
    // ]
  },

  {
    id: "hostlab",
    testimonial: {
      quote: "Taszid is an excellent product designer who worked on Hostlab with great attention to detail. He’s highly flexible, responsive, and committed to delivering top-quality work. Highly recommend his expertise!",
      name: " Faizan Ahmed",
      position: "Founder at Hostlab",
      avatar: "/images/testimonials/hostlab.png"
    },
    title: "Enhancing Hostlab's Digital Concierge Experience through Engaging Visuals",
    client: "Hostlab",
    year: "2024",
    description: {
      overview: "Collaborated with Hostlab to elevate their Digital Concierge platform—a tool designed to minimize guest inquiries and boost revenue for short-term rental hosts—by creating compelling motion designs, interactive prototypes, and custom illustrations.",
      situation: {
        heading: "The Challenge",
        content: `Hostlab aimed to introduce their innovative Digital Concierge platform, which offers features like:

• No Downloads Required: Guests access information via a simple link or QR code.
• Revenue Maximization: Hosts can upsell services such as early check-ins and bike rentals.
• Video Tutorials: Hosts can upload appliance tutorials directly from their phones.
• Direct Booking Promotion: Encourages repeat bookings by promoting hosts' websites and social profiles.

To effectively showcase these features, especially at their upcoming conference in Dubai, Hostlab needed:

• Engaging Motion Designs: To vividly demonstrate platform functionalities.
• Interactive Prototypes: For live, hands-on demonstrations to potential clients and partners.
• Custom Illustrations: To clearly depict website features and enhance user understanding.`
      },
      task: {
        heading: "The Task",
        content: `Develop a suite of visual assets that:

✔ Clearly Communicate Platform Features: Through intuitive motion designs and illustrations.
✔ Engage Conference Attendees: With interactive prototypes that provide a tangible experience of the platform.
✔ Maintain Brand Consistency: Ensuring all visuals align with Hostlab's branding and resonate with their target audience.`
      },
      action: {
        heading: "The Action",
        content: `• Motion Design for Product Demo: Crafted dynamic animations to showcase key features like the in-concierge custom shop and video tutorial uploads, making complex functionalities easily understandable.

• Interactive Prototyping: Developed a hands-on prototype of the Digital Concierge platform, enabling conference attendees in Dubai to experience its seamless functionality firsthand.

• Custom Illustrations: Designed bespoke illustrations highlighting features such as QR code access and direct booking promotions, enhancing the website's visual appeal and user comprehension.`
      },
      result: {
        heading: "The Result",
        content: `
        The visual enhancements significantly contributed to:

✔ Successful Conference Engagement: The interactive prototype captivated attendees in Dubai, leading to increased interest and potential partnerships.

✔ Improved User Understanding: Motion designs and illustrations effectively communicated platform features, resulting in a 30% reduction in user inquiries.

✔ Strengthened Brand Presence: Cohesive and professional visuals reinforced Hostlab's position as an innovator in the hospitality tech industry.

By transforming Hostlab's Digital Concierge platform into an engaging and visually compelling experience, positioned Hostlab for greater market success.`
      }
    },
    image: "/images/works/hosthero.jpg",
    images: [
      "/images/works/hosthero.jpg",
      "/images/works/hostlab1.png",
      "/images/works/hostlab2.png",
      "/images/works/hostlab3.jpg",
      "/images/works/hostlab4.jpg",
      "/images/works/hostlab5.jpg",
      "/images/works/hostlab6.jpg",
      "/images/works/hostlab7.jpg",
      "/images/works/hostlab8.png",
      "/images/works/hostlab9.png",
    ],
    tags: ["Motion Design", "Interactive Prototyping", "Illustration"],
    stack: [
      {
        name: "Figma",
        icon: "/icons/Figma.svg"
      },
      {
        name: "After Effects",
        icon: "/icons/aftereffects.svg"
      },
      {
        name: "Jitter",
        icon: "/icons/jitter.svg"
      }
    ],
    industry: ["Hospitality Tech", "Short-Term Rentals"],
    liveUrl: "https://hostlab.ai",
    content: [/* ... content blocks ... */]
  },
  {
    id: "printee",
    testimonial: {
      quote: "Working with Taszid on our project was exceptional. His technical expertise and innovative approach helped us create a platform that exceeded our expectations. While details remain under NDA, his contribution was invaluable to our success.",
      name: "Alex Chen",
      position: "CTO at Printee",
      avatar: "/images/testimonials/printee.png"
    },
    title: "Printee – AI-Enhanced Print-on-Demand Made Simple",
    client: "Printee",
    
    year: "2024",
    isPrivate: true,
    description: {
      overview: "Led the development of an innovative print-on-demand platform that leverages AI to transform user-generated content into professional-quality designs, while streamlining the production and fulfillment process.",
      situation: {
        heading: "Project Details Under NDA",
        content: "This case study is currently protected under a Non-Disclosure Agreement. The detailed process, specific implementations, and results are confidential to respect our client's privacy and intellectual property."
      },
      task: {
        heading: "",
        content: ""
      },
      action: {
        heading: "",
        content: ""
      },
      result: {
        heading: "",
        content: ""
      }
    },
    image: "/images/works/printee-hero.jpg",
    images: [
      "/images/works/printee-hero.jpg",    // Only keep hero image
    ],
    tags: ["Print-on-Demand", "AI Integration", "E-commerce", "Product Design"],
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
    industry: ["E-commerce", "Print-on-Demand", "Custom Manufacturing"],
    liveUrl: "https://printee.co",
    content: [] // Empty content array for private project
  },

  {
    id: "centered-data",
    testimonial: {
      quote: "Outstanding work on our brand identity. The attention to detail and strategic thinking behind every design element perfectly captured our vision for CenteredData.",
      name: "CenteredData Team",
      position: "CenteredData",
      avatar: "/images/testimonials/cent.png"
    },
    title: "CenteredData – Building a Tech-Forward Brand Identity",
    client: "CenteredData",
    year: "2024",
    description: {
      overview: "Led the comprehensive brand identity development for CenteredData, a data-focused consultancy in the IT and analytics space. Created a minimalistic yet powerful visual identity system that communicates technical precision and expertise while maintaining approachability and authority in the tech consulting landscape.",
      situation: {
        heading: "Brand Identity Challenge",
        content: `CenteredData needed a complete brand identity that would:

• Stand out in the crowded tech consultancy space
• Communicate technical expertise while maintaining approachability
• Align with respected tech brands like Cloudflare and Google Cloud
• Support various digital and print applications
• Reflect their core value proposition of unified data solutions

The challenge was to create a visual identity that would resonate with both technical decision-makers and business stakeholders while avoiding the typical enterprise solution aesthetic.`
      },
      task: {
        heading: "Creating a Comprehensive Brand System",
        content: `The project required developing a complete brand identity suite including:

✔ Primary logo and brandmark with multiple variants
✔ Modern, tech-forward color palette
✔ Typography system with ITC Avant Garde Gothic Pro Demi
✔ Brand narrative and logo meaning
✔ Digital assets for LinkedIn and web presence
✔ Icon set for navigation and contact points
✔ Brand usage guidelines and specifications
✔ Website background recommendations

The solution needed to balance minimalism with meaningful symbolism while ensuring practical application across all touchpoints.`
      },
      action: {
        heading: "Strategic Design Implementation",
        content: `Led the end-to-end brand development process with a focus on strategic design thinking:

• Research & Analysis: Studied minimalist cloud-tech branding to establish visual benchmarks
• Logo Development: Created a brandmark representing data unification through geometric forms
• Color System: Developed a sophisticated palette including:
  - Primary dark tone (#223440)
  - Blue grey accents (#8C9EAA, #6993AF)
  - Soft UI elements (#C8D1D8)
  - Clean white space (#FFFFFF)
• Typography Integration: Implemented ITC Avant Garde Gothic Pro Demi for modern, geometric appeal
• Motto Design: Crafted "Engineered to Inform. Unified to Perform." with strategic emphasis
• Asset Creation: Produced comprehensive brand materials for digital and print applications`
      },
      result: {
        heading: "Brand Impact & Deliverables",
        content: `The brand identity system successfully delivered:

• A memorable yet sophisticated visual identity system
• Scalable vector formats for all brand assets
• A cohesive color and typography system that communicates precision
• Professional branding elements for digital platforms
• Clear brand guidelines ensuring consistent application
• A powerful brand narrative embedded in visual elements

The new brand identity positioned CenteredData as a trusted, technically proficient consultant while maintaining approachability and modern appeal.`
      }
    },
    image: "/images/works/centered-hero.png",
    images: [
      "/images/works/centered-hero.png",
      "/images/works/centered1.jpg",
      "/images/works/centered2.jpg",
      "/images/works/centered3.jpg",
      "/images/works/centered4.jpg",
      "/images/works/centered5.jpg",
      "/images/works/centered6.jpg",
      "/images/works/centered7.jpg",
      "/images/works/centered8.jpg",
      "/images/works/centered9.jpg",
    ],
    tags: ["Brand Identity", "Logo Design", "Visual Design", "UI Design"],
    stack: [
      {
        name: "Illustrator",
        icon: "/icons/Illustrator.svg"
      },
      {
        name: "Figma",
        icon: "/icons/Figma.svg"
      }
    ],
    industry: ["IT Consulting", "Data Analytics", "Technology"],
    liveUrl: "https://centereddata.com",
    content: [/* ... content blocks ... */]
  },
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
