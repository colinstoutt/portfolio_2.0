import "../scss/Index.scss";

const Index = () => {
  return (
    <div className="index">
      <div className="index__container">
        <div className="index__link">
          <span>01</span>
          <h1>ABOUT</h1>
        </div>
        <div className="index__link">
          <span>02</span>
          <h1>PROJECTS</h1>
        </div>
        <div className="index__link">
          <span>03</span>
          <h1>CONTACT</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
