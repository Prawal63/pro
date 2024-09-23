// components/Section.jsx

const Section = ({ id, title, content, subcontent1, subcontent2, subcontent3,subcontent4,subcontent5,subcontent6,subcontent7}) => {
  return (
    <div id={id} className="flex justify-around pt-[150px]">
      <div className="w-[80%]  flex justify-between min-h-screen ">
      <div className="ml-[240px]">
      <h2 className="font-ppmedium text-[20px]">{title}</h2>
    </div>
    <div className="w-[50%] flex-col justify-between">
      <h2 className="font-ppmedium text-[28px] leading-[35px] ">{content}</h2>
      <div>
      <div className="mt-[200px]">
        {subcontent1}
      </div>
      <div className="mt-[50px]">
        {subcontent2}
      </div>
      <div className="mt-[50px]">
        {subcontent3}
      </div>
      <div className="mt-[50px]">
        {subcontent4}
      </div>
      <div className="mt-[50px]">
        {subcontent5}
      </div>
      <div className="mt-[50px]">
        {subcontent6}
      </div>
      <div className="mt-[50px]">
        {subcontent7}
      </div>
      </div>
      
    </div>
      </div>
   
  </div>
  );
};

export default Section;
