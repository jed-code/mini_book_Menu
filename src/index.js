import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Booklist() {
  return (
    <div className="booklist">
      <Books />
      <Books />
      <Books />
      <Books />
    </div>
  );
}

const Books = () => {
  return (
    <div className="book">
      <Image />
      <Title />
      <Author />
    </div>
  );
};

const Title = () => <h4>The Rise And Fall</h4>;
const Author = () => <p>VanderBilt</p>;
const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/41H5veGs31S._AC_SX184_.jpg" />
);

ReactDOM.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>,
  document.getElementById("root")
);
