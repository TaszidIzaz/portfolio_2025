
export interface WorkDetails {
  id: string;
  title: string;
  client: string;
  type: string;
  description: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  images: string[];
  content: {
    type: 'text' | 'image';
    content: string;
    index: number;
  }[];
  year: string;
  image: string;
  tags: string[]; // Added tags property
}

export const works: WorkDetails[] = [
  {
    id: "arbok-furnitures",
    title: "Arbok Furnitures",
    client: "Arbok Inc.",
    type: "Product Design, Website",
    tags: ["UI/UX", "Web Design", "E-commerce"], // Added tags
    description: {
      situation: "Arbok Furnitures needed a complete digital transformation to compete in the modern furniture market.",
      task: "Design and develop a user-friendly e-commerce platform that showcases their premium furniture collection.",
      action: "Created a minimalist design system and implemented a seamless shopping experience with 3D product previews.",
      result: "Increased online sales by 150% within the first quarter of launch."
    },
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/327f7b17c883dede46ac55d37247dd32ed21d0b7",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ],
    content: [
      {
        type: "text",
        content: "The project began with extensive market research and competitor analysis to identify gaps in the online furniture retail space.",
        index: 1
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        index: 2
      },
      {
        type: "text",
        content: "We developed a comprehensive design system that emphasized the premium quality of Arbok's furniture while maintaining accessibility.",
        index: 3
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        index: 4
      },
      {
        type: "text",
        content: "The implementation phase focused on creating a seamless user experience with intuitive navigation and fast load times.",
        index: 5
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        index: 6
      },
      {
        type: "text",
        content: "Post-launch analytics showed significant improvements in user engagement and conversion rates.",
        index: 7
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        index: 8
      }
    ],
    year: "2024",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/327f7b17c883dede46ac55d37247dd32ed21d0b7"
  },
  {
    id: "arbok-furnitures-2",
    title: "Digital Marketing Campaign",
    client: "Tech Solutions Ltd",
    type: "Digital Marketing, Social Media",
    tags: ["Digital Marketing", "Social Media", "Content Strategy"], // Added tags
    description: {
      situation: "Tech Solutions needed to increase their market presence and lead generation.",
      task: "Develop and execute a comprehensive digital marketing strategy across multiple platforms.",
      action: "Implemented targeted social media campaigns, content marketing, and email marketing initiatives.",
      result: "Generated 200% more qualified leads and increased social media engagement by 300%."
    },
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a2ba1f405bb86e1b8ec16f3324118b0be722a4",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
    ],
    content: [
      {
        type: "text",
        content: "Our digital marketing campaign began with a comprehensive analysis of the target audience and market trends.",
        index: 1
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        index: 2
      },
      {
        type: "text",
        content: "We developed highly targeted content strategies for different social media platforms to maximize engagement.",
        index: 3
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
        index: 4
      }
    ],
    year: "2024",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a2ba1f405bb86e1b8ec16f3324118b0be722a4"
  },
  {
    id: "laperitif-reinvented",
    title: "Brand Identity Refresh",
    client: "Laperitif Restaurant",
    type: "Branding, Design",
    tags: ["Branding", "Visual Design", "Identity"], // Added tags
    description: {
      situation: "Laperitif Restaurant needed to modernize their brand while maintaining their heritage.",
      task: "Create a refreshed brand identity that appeals to a younger audience while respecting the brand's history.",
      action: "Developed a new visual identity system including logo, color palette, and brand guidelines.",
      result: "Successfully attracted 40% more millennial customers while retaining 95% of existing clientele."
    },
    images: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ef6ecfa73defbafca1fe891a3cde22881c099598",
      "https://images.unsplash.com/photo-1606836591695-4d58a73fac94",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
    ],
    content: [
      {
        type: "text",
        content: "The brand refresh process started with extensive research into current restaurant branding trends and customer preferences.",
        index: 1
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1606836591695-4d58a73fac94",
        index: 2
      },
      {
        type: "text",
        content: "We carefully balanced modern design elements with traditional aspects to create a timeless yet contemporary look.",
        index: 3
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        index: 4
      }
    ],
    year: "2024",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef6ecfa73defbafca1fe891a3cde22881c099598"
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
