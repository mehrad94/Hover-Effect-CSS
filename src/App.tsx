import "./App.css";
const App = () => {
  return (
    <div className="container">
      <div className="header"></div>
      <div className="cards">
        <div className="card">
          <div className="card-bg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, labore! Sapiente at
              enim ab ut laboriosam voluptatibus eaque, nihil quod perferendis ea, earum architecto
              impedit commodi quo quaerat quis sunt.
            </p>
          </div>
          <div className="card-cta">
            <p>Tap to read</p>
          </div>
          <div className="card-fg">
            <p className="case-study">Case Stydy</p>
            <p className="review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni impedit placeat
              ut perferendis soluta numquam, quos, quidem, officiis dolor saepe totam ea.
              Repudiandae maiores soluta blanditiis assumenda ipsa? Sint!
            </p>
            <div className="logo">
              <img src="/logo.svg" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
