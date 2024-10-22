import "../styles/teen-footer.css";

const linksMap = {
  "Home": "./",
  "About": "#",
  "Blogs": "#",
  "FAQs": "https://www.funngro.com/faq",
  "Careers": "https://www.funngro.com/careers",
  "Investors": "https://www.funngro.com/investors",
  "Login": "https://portal.funngro.com/login/",
  "Contact Us": "https://www.funngro.com/contact",
  "Privacy Policy": "https://www.funngro.com/privacy-policy",
  "Terms & Conditions": "https://www.funngro.com/terms-and-conditions",
};

const TeenFooter = () => {
  return (
    <div className="teen-footer">
      <img
        src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/6390122253829667e405c893_Funngrow%20Logo.svg"
        loading="lazy"
        alt=""
        className="footer-logo" // Change 'class' to 'className'
      />
      <div className="footer-links-wrapper">
        {Object.entries(linksMap).map(([key, value]) => {
          return (
            <a key={key} href={value} className="links">
              {key}
            </a> // Add a 'key' prop for each link
          );
        })}
      </div>
      <p class="text-footer">
        Enable Smart Teenagers and Smart Companies to realize their full
        potentials. It’s fun to grow.
      </p>
      <div class="footer-cta-wrapper">
        <div class="text-block">Download&nbsp;App</div>
        <div class="download-app-wrapper">
          <a
            href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro"
            class="download-app-cta w-inline-block"
          >
            <img
              src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png"
              loading="lazy"
              alt="Get it on Google Play Banner"
              className="image-full-width"
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/funngro/id1579361075"
            class="download-app-cta w-inline-block"
          >
            <img
              src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png"
              loading="lazy"
              alt="Download on the App Store Banner"
              className="image-full-width"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeenFooter;
