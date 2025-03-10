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
  isPrivate?: boolean; // Add this line
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

  image: string;
  tags: string[];
  stack?: TechStack[];
  industry?: string[];
  liveUrl?: string;
}

export const works: WorkDetails[] = [
  {
    id: "algorizin-opt",
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
        icon: "/icons/vue.svg"
      },
      {
        name: "TensorFlow",
        icon: "/icons/tensorflow.svg"
      },
      {
        name: "AWS",
        icon: "/icons/aws.svg"
      }
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
    id: "printee",
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
        name: "React",
        icon: "/icons/react.svg"
      },
      {
        name: "Node.js",
        icon: "/icons/nodejs.svg"
      },
      {
        name: "AWS",
        icon: "/icons/aws.svg"
      }
    ],
    industry: ["E-commerce", "Print-on-Demand", "Custom Manufacturing"],
    liveUrl: "https://printee.co",
    content: [] // Empty content array for private project
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
