function Card({ imgUrl, text, textStyle }) {
  return (
    <a href="#" className="block">
      <div className="m-2">
        <img src={imgUrl} alt="" />
        <h3
          className={`m-auto bg-black p-2 ${
            textStyle
              ? `text-yellow-400 font-poppins`
              : `text-white font-roboto`
          } text-2xl text-center`}
        >
          {text}
        </h3>
      </div>
    </a>
  );
}

export default Card;
