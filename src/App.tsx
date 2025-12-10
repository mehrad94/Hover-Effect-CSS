import Card from "./components/Card";

const App = () => {
  return (
    <div className="w-screen h-screen font-sans flex justify-center items-center bg-[radial-gradient(circle,rgba(29,17,56,1)_0%,rgba(7,4,14,1)_100%)] flex-col gap-14">
      <header>
        <h1 className="text-white text-3xl font-medium text-center">My Awesome App</h1>
      </header>
      <div className="cards flex gap-40">
        <Card 
          caseStudy="Case Study 1"
          logoSrc="/logo.svg"
          imageSrc="/img-1.jpg"
        />
       
      </div>
    </div>
  );
};

export default App;
