import { Link } from "react-router-dom";
import "../styles/options.css";
const Options = () => {
  return (
    <section className="options">
      <div className="fraic">
        <Link to="./teen" style={{ color: "black", textDecoration: "none" }}>
          <div className="spin-border">
            <div class="option1">
              <img
                src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/639448ddea7b3ae801fe5503_teen-svg.svg"
                loading="lazy"
                alt="Teen Icon"
                class="circle-image"
              />
              <h3 class="circle-heading">TEENLANCERS</h3>
              <p class="circle-text">Be Independent</p>
            </div>
          </div>
        </Link>
        <Link to="./company" style={{ color: "black", textDecoration: "none" }}>
          <div className="spin-border">
            <div class="option1" style={{ backgroundColor: "#B8EDFC" }}>
              <img
                src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/639448dd2c8cc33d283d4469_company-svg.svg"
                loading="lazy"
                alt="Teen Icon"
                class="circle-image"
              />
              <h3 class="circle-heading">Comapny</h3>
              <p class="circle-text">Smart Talent Solution</p>
            </div>
          </div>
        </Link>
        <Link to="./parent" style={{ color: "black", textDecoration: "none" }}>
          <div className="spin-border">
            <div class="option1" style={{ backgroundColor: "#FFEFC1" }}>
              <img
                src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/639448dec9e9c81a645ebdfd_parent-svg.svg"
                loading="lazy"
                alt="Teen Icon"
                class="circle-image"
              />
              <h3 class="circle-heading">Parent</h3>
              <p class="circle-text">Expremental Learning For Teens</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="promo">
        <div className="des">
          <h1>Funngro @ Shark Tank</h1>
          <p>
            Loved by lakhs of Teenlancers, thousands of Companies & now loved by
            SHARKS!!
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
      <div className="footer" style={{background : "#121E2C"}}>
        <p>©All Copyrights reserved 2024 by</p><p style={{color:"#337C42"}}>FUNNGRO</p>
      </div>
    </section>
  );
};

export default Options;
