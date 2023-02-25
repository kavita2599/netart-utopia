/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { FaFacebookF } from "react-icons/fa";
import { SiTwitter, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { useState } from "react";

const iconBar = {
  position: "sticky",top: 0,
  left:"5%",
  zIndex:10,
  width:"50px",
  mb:"35px",
  display:[null,"none","none","unset"],
  height:"100%",
};

const iconBarLink = {
  display: "block",
  textAlign: "center",
  padding: ["6px", "6px", "6px", "10px"],
  color: "white",
  fontSize: ["10px", "10px", "10px", "16px"],
  cursor: "pointer",
  outline: "none",
  textDecoration:"none !important",
  ":hover":{
    color:"white"
  },
  color:"gray",
};

const logoDiv={
  margin:"5px",
  border:"1px solid gray",
  ":hover":{
    bg:"templatePrimary"
  },
  
}

const ShareBlog = () => {
  const [Path, setPath] = useState("");

  const handleSocial = () => {
    window.open("", "popup", "width=600,height=600");
    typeof window !== "undefined" ? setPath(location.href) : setPath("");
    console.log("hello", Path);
  };

  const content= <Link
  href={`http://www.facebook.com/share.php?u=${Path}`}
  passHref={true}
>
  <a target="popup" onClick={handleSocial} sx={iconBarLink}>
    <FaFacebookF />
  </a>
</Link>
  return (
      <div sx={iconBar}>
        <div sx={{...logoDiv,opacity:0}}>{content}</div>
        <div sx={{...logoDiv,opacity:0}}>{content}</div>
        <div sx={{...logoDiv}}>
          <Link
            href={`http://www.facebook.com/share.php?u=${Path}`}
            passHref={true}
          >
            <a target="popup" onClick={handleSocial} sx={iconBarLink}>
              <FaFacebookF />
            </a>
          </Link>
        </div>

        <div sx={{...logoDiv}}>
          <Link href={`http://twitter.com/home?status=${Path}`} passHref={true}>
            <a target="popup" onClick={handleSocial} sx={iconBarLink}>
              <SiTwitter />
            </a>
          </Link>
        </div>

        <div sx={{...logoDiv}}>
          <Link
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${Path}`}
            passHref={true}
          >
            <a target="popup" onClick={handleSocial} sx={iconBarLink}>
              <SiLinkedin />
            </a>
          </Link>
        </div>
      </div>
  );
};

export default ShareBlog;
