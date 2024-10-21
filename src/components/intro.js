import "../styles/intro.css"
const Intro = ()=>{
    return(
        <section className="intro">
            <div className="title">
                <h1>Funngro Teenlancer</h1>
                <p className="description">Smart Teenagers meet Smart Companies</p>
            </div>
            <img
                src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 35vw"
                srcset="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63fe05934db7ce0d3580d0dd_Funngro.png 586w"
                alt="Funngro App"
                class="image-full-width"
            ></img>
        </section>
    )
}
export default Intro;