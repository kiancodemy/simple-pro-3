import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setindex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const next = () => {
    if (index < 3) {
      let neww = index + 1;
      setindex(neww);
    } else {
      setindex(0);
    }
  };
  const random = () => {
    const random = Math.trunc(Math.random() * 3);
    setindex(random);
  };
  const before = () => {
    if (index > 0) {
      let neww = index - 1;
      setindex(neww);
    } else {
      setindex(3);
    }
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-conrtainer">
          <button className="prev-btn" onClick={before}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
        <button
          style={{ marginTop: "1rem" }}
          onClick={random}
          className="btn btn-hipster"
        >
          Random choice
        </button>
      </article>
    </main>
  );
};
export default App;
