/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import Link from "next/link";

const vlstyle = {
  borderLeft: "6px solid blue",
  height: "30px",
  mt: "5%",
  p: "2% 5%",
  display:"flex",
  alignItems:"center"
};

const BlogTopCont = {
  textDecoration: "none",
  display: "flex",
  flexWrap: "wrap",
  bg: "templateGray",
  color: "white",
  width: [null,'95%',"100%"],
  m: "auto",
  height:[null,"max-content",null,null,"45vh","45vh"],
  justifyContent: "space-between",
  flexDirection:[null,"column-reverse","row"]
};
const Heading2Style = {
  color:"white",
  ":hover": {
    color: "templatePrimary",
    transition: "color 0.5s ease",
  },
};

const BlogTop = ({ heading, date, slug, image }) => {
  return (
      <div sx={{ ...BlogTopCont,borderRadius:"4px"  }}>
        <Flex sx={{ width: [null, "100%", "50%"], flexDirection: "column",height:"100%",pb:"20px"}}>
            {date ?<div sx={vlstyle}>{date}</div> :null}
          <Link href={slug} className="blog_top">
          <a sx={{textDecoration:"none !important",cursor:"pointer"}}>
            <Styled.h2 sx={{...Heading2Style, p: "2% 5%",}}>{heading}</Styled.h2>
            <Styled.p sx={{...hoverStyle}}>Read More</Styled.p>
            </a>
          </Link>
        </Flex>
        <Flex sx={{ width: [null, "100%", "40%"],height:[null,"30vh","auto",null,"100%"] }}>
         <Link href={slug}><a sx={{cursor:"pointer",height:"100%",textDecoration:"none"}}>
         <img
            sx={{ width: "100%", objectFit: "cover", height: "100%",borderRadius:[null,"4px 4px 0 0","0 4px 4px 0"] }}
            src={image}
          />
           </a></Link>
        </Flex>
      </div>
  );
};

export default BlogTop;


const hoverStyle={
  p:"0 5%",
  ":hover": {
    color: "templatePrimary",
    transition: "color 0.5s ease",
  },
  color: "white",
}