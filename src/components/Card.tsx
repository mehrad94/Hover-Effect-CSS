
interface CardProps {
  caseStudy: string;
  review?: string;
  logoSrc: string;
  imageSrc?: string;
}

const Card = ({ caseStudy, review, logoSrc, imageSrc }: CardProps) => {
  return (
    <div className="group relative w-[300px] h-[420px] rounded-[10px] [perspective:1400px] cursor-pointer">
      <div className="absolute w-full h-full p-4 bg-[#07040e] border border-[rgba(82,62,155,0.2)] rounded-[10px] origin-top-right">
       
      </div>
      <div className="absolute left-0 bottom-0 w-3/4 h-3/4 bg-[radial-gradient(circle,rgba(100,47,210,1)_0%,rgba(37,17,92,1)_100%)] border border-[rgba(82,62,155,0.5)] rounded-[10px] transition-transform duration-500 group-hover:-translate-x-10 group-hover:-rotate-6">
        <p className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 text-white text-[10px] font-semibold uppercase tracking-[2px]">Tap to read</p>
      </div>
      <div className=" absolute w-full h-full p-8 bg-[radial-gradient(circle,rgba(29,20,61,0.95)_0%,rgba(27,13,39,0.95)_50%,rgba(8,5,16,0.95)_100%)] backdrop-blur-[25px] border border-[rgba(82,62,155,0.25)] rounded-[10px] text-white [transform-style:preserve-3d] origin-top-right transition-transform duration-500 group-hover:rotate-y-40">
        <img src={imageSrc} alt="Card image" className="w-full h-auto object-center w-full h-full" />

        {/* <div className="absolute bottom-0 w-[125px] h-[100px]">
          <img src={'/img-1.jpg'} alt="Logo" className="w-full h-full object-contain" />
        </div> */}
      </div>
    </div>
  );
};

export default Card;
