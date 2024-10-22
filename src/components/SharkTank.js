import "../styles/shark-tank.css";

const SharkTank = () => {
  return (
    <div className="promo">
      <div className="des">
        <h1>Funngro @ Shark Tank</h1>
        <p>
          Lakhs of Teens love Funngro, Hundreds of Companies love Funngro and
          now Sharks also loved Funngro
        </p>
      </div>
      <div className="vid">
        <iframe
          width="700"
          height="400"
          src="https://www.youtube.com/embed/I0XgtabN8rI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default SharkTank;
