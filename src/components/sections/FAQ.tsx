import { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What are your pricings?",
      answer: "My pricing varies depending on the complexity and scope of the project. Landing pages start at as low as $499, while more extensive projects like full website design, product UI/UX, or branding are priced based on requirements."
    },
    {
      question: "What tools do you have expertise?",
      answer: "My primary design tool is Figma, which I've been using extensively for over three years. I also work with AE/Jitter for motion design, I use Next/React JS and no-code tools like Webflow for web development."
    },
    {
      question: "What kind of clients or companies do you typically work with?",
      answer: "I primarily collaborate with startups and digital product teams, because as a part of a Startup I understand their painpoints. But I am happy to work with any company that needs a design refresh."
    },
    {
      question: "What’s your design process?",
      answer: "My process typically involves user research, wireframing, prototyping, and iterative design based on user feedback. I also incorporate UX principles, Gestalt psychology, and visual storytelling( Check my Linkedin ) into my work."
    },
    {
      question: "How do you approach UX research?",
      answer: "I use methods like empathy mapping, affinity diagrams, and usability testing to understand user needs and pain points before designing solutions."
    },
    {
      question: "What’s your experience with motion design?",
      answer: "I frequently use Jitter for motion design and was recognized as one of 11 Jitter Experts on Contra. I create smooth animations that enhance user interactions and brand storytelling."
    },
    {
      question: "Can you help with branding and identity design?",
      answer: "Yes! I have a experienced team that can help design logos, visual identities, and brand guidelines that align with a company’s vision and values."
    },
    {
        question: "Are you open to full-time roles?",
        answer: "Yes, I'm open to opportunities that offer growth and where I can contribute to product design and create impactful experiences."
      }
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-24 px-4">
      <div className="flex items-center gap-4 mb-16">
        <svg
          width="350"
          height="24"
          viewBox="0 0 350 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black"
        >
          <path
            d="M22.2412 11.9994L22.7574 12.5157L23.2722 11.9994L22.7574 11.4832L22.2412 11.9994ZM21.7249 11.4832L15.8915 17.3166L16.924 18.3491L22.7574 12.5157L21.7249 11.4832ZM22.7574 11.4832L16.924 5.64978L15.8915 6.68229L21.7249 12.5157L22.7574 11.4832ZM22.2412 11.2703H0.729736V12.7286H22.2412V11.2703Z"
            fill="currentColor"
          />
          <text
            transform="translate(33.2726 -0.000183105)"
            fill="currentColor"
            style={{ whiteSpace: "pre" }}
            fontFamily="Mono45 Headline"
            fontSize="16"
          >
            <tspan x="0" y="16.3516">FREQUENTLY ASKED QUESTIONS</tspan>
          </text>
        </svg>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left Column */}
        <div className="md:w-1/3">
          <div className="sticky top-8">
            
            <div className="bg-[#181818] text-white rounded-lg p-8 shadow-lg">
              {/* <img src="/path-to-your-avatar.jpg" alt="Profile" className="w-12 h-12 rounded-full mb-4" /> */}
              <p className="text-lg mb-20">Didn't find the answer? I'm human being, just like you – ask me anything </p>
              <div className="space-y-3 w-full">
                <a 
                  href="mailto:Taszid.nahi@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white text-black rounded-md hover:bg-white/90 transition-colors"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 32 32" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z" fill="#ea4435"/>
                    <path d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" fill="#00ac47" transform="translate(53.0001 32.0007) rotate(180)"/>
                    <path d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z" fill="#ffba00"/>
                    <path d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z" fill="#4285f4"/>
                    <path d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z" fill="#c52528"/>
                  </svg>
                  Taszid.nahi@gmail.com
                </a>
                <a 
                  href="https://wa.me/8801873308005" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white text-black rounded-md hover:bg-white/90 transition-colors"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      fill="#25D366" 
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    />
                  </svg>
                  01873308005
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-none"
              >
                <button
                  className="w-full py-6 flex justify-between items-center text-left"
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  <span className="text-xl font-medium">{faq.question}</span>
                  <span className="text-2xl">
                    {openQuestion === index ? '−' : '+'}
                  </span>
                </button>
                {openQuestion === index && (
                  <div className="pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;