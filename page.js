// import TestAnimation from "@/components/TestAnimation";
// // import video from "../assets/video.mp4";

// export default function Home() {
//   return (
//     <>
//       <div className="relative h-screen flex flex-col justify-center items-center">
//         <div className="w-full video-background">
//           <video
//             className="w-full object-cover"
//             src="./video.mp4"
//             autoPlay
//             muted
//             loop
//             plays-inline="true"
//           />
//         </div>
//         <div className="w-full">
//           <h3 className="text-white text-4xl font-semibold text-center">
//             Our Mission <br />
//             テクノロジーとマネジメント力で、プロダクトの成長・成功へ最大限貢献する
//           </h3>
//         </div>
//       </div>
//       <TestAnimation />
//     </>
//   );
// }


import TestAnimation from "@/components/TestAnimation";
import Section from "@/components/Section";
// import video from "../assets/video.mp4";

export default function Home() {
  return (
    <>
      <div className="relative h-screen flex flex-col justify-center items-center">
        <div className="w-full video-background">
          <video
            className="w-full object-cover"
            src="./video.mp4"
            autoPlay
            muted
            loop
            plays-inline="true"
          />
        </div>
        <div className="w-full">
          <h3 className="text-white text-4xl font-semibold text-center">
            Our Mission <br />
            テクノロジーとマネジメント力で、プロダクトの成長・成功へ最大限貢献する
          </h3>
        </div>
      </div>

      <div className="relative">
        {/* Sections */}
        <Section
          id="what-we-do"
          title="01 - WHAT WE DO"
          content="At Emporium Concierge, we deliver exceptional business support to elevate your company’s success and expand its global influence. Our comprehensive suite of services is designed to meet the multifaceted demands of today’s enterprises, providing bespoke solutions that foster growth, innovation, and strategic leadership."
          subcontent1="Business Expansion & Market Entry
Seamlessly expand into new territories with our expert guidance. We conduct thorough market research, develop customized entry strategies, and forge critical partnerships to position your business for long-term success in any market.
"
        subcontent2="Strategic Partnerships & Talent Acquisition
Unlock access to top-tier talent and industry leaders. From executive placements and board appointments to strategic alliances, we leverage our vast network to connect you with the individuals and partnerships that drive your business forward.
"
        subcontent3="Operational Efficiency & Optimization
Maximize your company’s potential with our tailored operational solutions. We enhance efficiency, optimize processes, and provide strategic resource management to help you scale effectively and sustainably.
"
        subcontent4="Corporate Strategy & Advisory
Navigate complex business decisions with confidence. Our seasoned advisors offer strategic insights on mergers and acquisitions, organizational restructuring, and long-term planning, ensuring your business is primed for sustained growth and success.
"
        subcontent5="Exclusive Access & Networking
Gain unparalleled access to high-level business networks and exclusive events. We facilitate introductions and connections that open doors to new opportunities, from investment ventures to influential collaborations."
    
        subcontent6="Luxury Business Experiences & Client Engagement
Create unforgettable corporate experiences that resonate with your stakeholders. We curate unique events, executive retreats, and client engagements that reflect your brand’s prestige and build enduring relationships."
   
        subcontent7="Specialized Business Solutions
We provide bespoke services tailored to your unique business challenges, whether it’s navigating legal and regulatory landscapes, enhancing brand positioning, or managing high-value assets. Our flexible approach ensures we meet your specific needs with precision.
"
   />
        <div className="absolute inset-0 flex  items-center mb-[-70px]">
          <TestAnimation />
        </div>
        </div>

        <div className="relative">
        <Section
          id="who-we-are"
          title="02 - WHO WE ARE"
          content="An Elite concierge service founded on excellence. Emporium Concierge empowers your business to expand its global reach and unlock new growth potential. We offer exceptional support to navigate emerging markets, connect with top-tier talent, and tap into our extensive network of industry expertise. Our vast resources enable us to rapidly connect your company with the partnerships and opportunities needed to advance your strategic vision.
"
subcontent1="As your comprehensive business support partner, we deliver solutions that streamline operations, enhance scalability, and drive impactful results. From market expansion and executive placements to strategic alliances, our team tailors every service to your specific objectives, ensuring you have the competitive edge to excel.
"
subcontent2="With Emporium Concierge, you don’t just gain access—you gain a strategic partner dedicated to elevating your enterprise to new heights. Connect with us today to discover how we can help you redefine success."
/>
<div className="absolute inset-0 flex  items-center mb-[-750px]">
          <TestAnimation />
        </div>
        

        </div>

        <Section
          id="register"
          title="03 --- REGISTER"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Section
          id="talk-to-us"
          title="04 - TALK TO US"
          content="If you're a business looking to amplify your influence or a talent ready to make an impact, let's connect. Together, we can unlock new possibilities and achieve extraordinary results. Reach out to discover how Emporium Concierge can elevate your vision and turn ambition into reality."
        />

        {/* TestAnimation positioned relatively to the sections */}
        
      
    </>
  );
}
