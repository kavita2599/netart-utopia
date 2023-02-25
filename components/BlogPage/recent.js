/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, Styled, Flex } from "theme-ui";
import Link from "next/link";

const RecentPost = ({ slug, blog_data, color, featuredImage, Variant, num }) => {

  var Var = {
    // For Individual Recent Blog
    Variant1: { img: { display: "block" }, num: { display: "none" }, },
    // For Individual Blog List
    Variant2: {
      img: { display: "none" }, num: { display: "block" },
      mainDiv: { padding: "22px 0", borderBottom: "1px solid rgba(0, 0, 0, 0.05)" },
      FirstDiv: {  height: "100%" },
    },
    // For  Blog Page Recent 
    Variant3: { img: { display: "block" }, num: { display: "none" }, SecondDiv: { color: "white" ,width: [null, "60%", "82%", "82%","65%" ]},FirstDiv:{width: [null, "35%", "16%", "16%","30%"]} }

  };

  return (
    <Link href={`/blogs/${slug}`}>
      <a className="recent-link-div" sx={{ ...RecentLinkStyle, ...Var[Variant].mainDiv }}>
        <div sx={{ ...FirstDiv, ...Var[Variant].FirstDiv }}>
          <img
            sx={{ width: "100%", height: "100%", objectFit: "cover", ...Var[Variant].img }}
            src={featuredImage.node.sourceUrl} />
          <div sx={{ ...NumDiv, ...Var[Variant].num }}>{num}</div>
        </div>
        <Flex sx={{ ...SecondDiv, ...Var[Variant].SecondDiv }}>
          <Styled.p sx={{ ...HeadingDiv }}>{blog_data.heading}</Styled.p>
          {/* <span>{props.blog_data.date}</span> */}
        </Flex>
      </a>
    </Link>
  );
};

export default RecentPost;

const HeadingDiv = { mb: "5px", fontWeight: "strong", ":hover": { color: "templatePrimary" } }

const FirstDiv = { width: [null, "35%", "16%", "16%","25%" ], height: "60px", textAlign: "center", cursor: "pointer" }
const SecondDiv = { width: [null, "60%", "82%", "82%","72%" ], flexDirection: "column", ml: "5px", color: "black" }

const NumDiv = { fontWeight: 600, fontSize: "30px", color: "black" }

const RecentLinkStyle = {
  textDecoration: "none !important", color: "white", cursor: "pointer",
  alignItems: "start", justifyContent: "space-between", m: "20px 0px", display: "flex", flexWrap: "wrap"
}