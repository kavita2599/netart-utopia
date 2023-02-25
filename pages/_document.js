import Document, { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";
import Seo from "../components/Seo"

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    // Replace html lang attribute value with your language.
    return (
      <Html lang="en">
        <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
          <link rel="stylesheet" href="/swiper-bundle.css" />
          <link rel="icon" href="/images/Icon.png" />
          <link rel="stylesheet" href="/animate.css" />
          <link rel="stylesheet" href="/template.css" />
          <link rel="stylesheet" href="/bootstrap.css" />
          <Seo />
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NETART",
            "alternateName": "NETART - INDIA",
            "url": "https://netart.io/",
            "logo": "(add logo url)",
            "sameAs": [
              "https://www.facebook.com/netart.io",
              "https://twitter.com/NetArt_India",
              "https://www.instagram.com/_netart_/",
              "https://www.linkedin.com/company/netart-india"
            ]
          })
        }}
      />
          <meta name="google-site-verification" content="ethLFHMeKjzOOaltydV3epBfd0sgAeMoE2yaxsJAXLs" />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-9SBKTCGHTR"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9SBKTCGHTR', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <form style={{display:"none"}} netlify="true" name="contactForm" method="POST" data-netlify="true">
          <input  type="text" name="name" label="Name"  title="Name should not contains any numeric letters" pattern="[A-Za-z ]{1,32}"  placeholder="Name"  required/>
          <input   label="Email" type="mail" name="email" title="Please enter a valid email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email"  required/>
          <input  label="Mobile Number" type="tel" name="phone"  className="phone" placeholder="Phone" required />
          <textarea  placeholder="Message" label="Message" type="text" name="msg" required/>
        <button type="submit"  className="contactFormbtn"><span> Submit</span></button>
        </form>
          <NextScript />
        </body>
      </Html>
    );
  }
}
