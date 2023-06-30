import React from "react";

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book;
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandle = () => {
    alert("hello button");
  };
  const moreComplex = (authur) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" width="200" height="200" />
      <h1 onClick={() => console.log(title)}>{title} </h1>
      <h4>{author} </h4>
      <button type="button" onClick={clickHandle}>
        example
      </button>
      <button type="button" onClick={() => moreComplex(author)}>
        More Complex
      </button>
    </article>
  );
};

export default Book;
