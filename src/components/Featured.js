import "../styles/featured.css"

const Featured = () => {
  return (
    <div className="Featured">
      <h1>We are Featured in</h1>
      <div>
        <p>
          The world is talking about Funngro, check out what everyone is saying
        </p>
        <img
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw"
          srcset="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo.png 512w"
          src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778e6c4c837fc2ef89c_Business%20News%20week%20new%20logo.png"
          loading="lazy"
          alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs"
          class="featured-in-image"
        />
        <img
          alt=""
          loading="lazy"
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw"
          src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a029eed4fdce11c2d34e80_FM%20live%20logo.png"
          class="featured-in-image"
          aria-hidden="true"
        ></img>
        <img
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw"
          srcset="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo.png 512w"
          src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c778a3f4b8074b9bf839_IBS%20Intelligence%20new%20logo.png"
          loading="lazy"
          alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs"
          class="featured-in-image"
          aria-hidden="true"
        ></img>
        <img
          alt=""
          loading="lazy"
          src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a02a16a363596ec9c5eefb_Times%20of%20India%20logo.png"
          class="featured-in-image"
          aria-hidden="true"
        ></img>
        <img
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 15vw, (max-width: 991px) 96px, 8vw"
          srcset="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo-p-500.png 500w, https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo.png 512w"
          src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6399c7787f63ad6273e07ba9_The%20Daily%20Brunch%20new%20logo.png"
          loading="lazy"
          alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs"
          class="featured-in-image"
          aria-hidden="true"
        ></img>
        <img
          alt="Teens financial empowerment, Learning with earning, Prepaid card, Freelance, Experience with real companies, project based jobs"
          loading="lazy"
          src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/63a029286e97ee36926d7bbf_Entracker.png"
          class="featured-in-image"
          aria-hidden="true"
        ></img>
      </div>
    </div>
  );
};
export default Featured;
