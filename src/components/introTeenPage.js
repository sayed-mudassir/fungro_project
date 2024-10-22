import { Carousel } from "antd";
import "../styles/introTeen.css";
const IntroTeenPage = () => {
  return (
    <section className="intro-teen">
      <div className="desc"> 
        <h1>TEENLANCERS</h1>
        <p>Real companies, real projects, real earnings and real <br/> money</p>
        <p>Smart opportunities for the smart generation</p>
        <div className="download">
        <p>Download App</p>
        <img
          src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png"
          loading="lazy"
          alt="Get it on Google Play Banner"
          class="image-small-width"
        ></img>
        <img
          src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png"
          loading="lazy"
          alt="Download on the App Store Banner"
          class="image-small-width"
        ></img>
        </div>
      </div>
      <div>
      <Carousel
        effect="fade"
        // arrows
        autoplay
        // easing = "ease-in-out"
        waitForAnimate
        autoplaySpeed="45"
        style={{
          width: "950px",
          height: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom:"20px"
        }}
        infinite={true}
      >
        <div>
          <img
            src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png"
            loading="lazy"
            // sizes="(max-width: 479px) 100vw, (max-width: 890px) 90vw, 20vw"
            style={{
              width: "700px",
              height: "700px",
            }}
            // srcset="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png 586w"
            alt="Funngro App"
            class="image-full-width"
          ></img>
        </div>
        <div>
          <img
            src="https://i.ytimg.com/vi/sGysgwm02YY/maxresdefault.jpg"
            loading="lazy"
            style={{
              justifySelf: "center",
              width: "950px",
              height: "700px",
            }}
            // sizes="(max-width: 479px) 100vw, (max-width: 890px) 92vw, 20vw"
            // srcset="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png 586w"
            alt="Funngro App"
            class="image-full-width"
          ></img>
        </div>
        <div>
          <img
            src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fdf416648a6375d0f9db21_Funngro%20-%20Shark%20Tank%203.png"
            loading="lazy"
            style={{
              justifySelf: "center",
              width: "950px",
              height: "700px",
            }}
            // sizes="(max-width: 500px) 100vw, (max-width: 890px) 92vw, 20vw"
            // srcset="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png 586w"
            alt="Funngro App"
            class="image-full-width"
          ></img>
        </div>

        <div className="carosel">
          <img
            src="https://fueler.io/storage/users/timeline_image/1702390420-teyrq2jerzwqxysl3flo.jpg"
            loading="lazy"
            // sizes="(max-width: 500px) 100vw, (max-width: 890px) 92vw, 20vw"
            style={{
              justifySelf: "center",
              width: "800px",
              height: "700px",
            }}
            // srcset="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png 586w"
            alt="Funngro App"
            class="image-full-width"
          ></img>
        </div>
      </Carousel>
      </div>
      
    </section>
  );
};
export default IntroTeenPage;
