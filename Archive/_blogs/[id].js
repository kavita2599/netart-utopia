/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui";
import Layout from "../../components/TemplateLayout/Layout";
import Recent from "../../components/BlogPage/recent";
import ShareBlog from "../../components/BlogPage/shareBlog";
import { blogQuery, blogPageQuery } from "../../Query/blogData";
import { GraphqlClient } from "../../components/api";
import ReactHtmlParser from "react-html-parser";
import { FaFacebookF } from "react-icons/fa";
import { SiTwitter, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Seo from "../../components/Seo"
const socialIcon = {
  color: "rgb(117 117 117)",
  cursor: "pointer",
  margin: "5px",
  textDecoration:"none",
  ":hover":{
    color: "rgb(117 117 117)",
  }
};

const BlogsPage = (props) => {
  const [socialScroll, setSocailScroll] = useState(0);
  const [scrollCurrPos, setScrollCurrPos] = useState(0);
  const [recentData, setRecentData] = useState("");

  const blogdata = props.data.post.blog_data;
  const data = props.data.post;
  const seoData = props.data.post.seo;
  //for hiding the side social share icon when reaches bottom functionality.
  const onSetSocialScroll = (x) => {
    setSocailScroll(window.scrollMaxY - x);
  };
console.log("recentData",recentData)
  var recentBlog = true;

  useEffect(() => {
    if (recentBlog) {
      GraphqlClient.post("", { query: blogQuery }, "").then((resp) => {
        const RecentData = resp.data.data;
        setRecentData(RecentData);
      });
    }
  }, []);

  const parallex_bg = {
    backgroundImage: `url(${data.featuredImage.node.sourceUrl})`,
    minHeight: "450px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius:[null,"0","10px"],
    margin:[null,0,"10px",0]
  };

  const [Path, setPath] = useState("");

  const handleSocial = () => {
    window.open("", "popup", "width=600,height=600");
    typeof window !== "undefined" ? setPath(location.href) : setPath("");
    console.log("hello", Path);
  };

  const social = [
    {
      href: `http://www.facebook.com/share.php?u=${Path}`,
      icon: <FaFacebookF />,
    },
    { href: `http://twitter.com/home?status=${Path}`, icon: <SiTwitter /> },
    {
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${Path}`,
      icon: <SiLinkedin />,
    },
  ];

  return (
    <Layout bg={{bg: "white",}} navbg>
      <Seo {...seoData}/>
      <Container sx={{  padding: 0,pt:"15vh" }}>
        {/* ---Parallax Background Image--- */}
        <div sx={parallex_bg}></div>
        {/* Content Section */}
        <Flex sx={{ flexWrap: "wrap", width: "100%", justifyContent: "space-between",position:"relative",overflow:"visible" }}>
        <ShareBlog />
          {/* Description Section */}
          <div sx={{width: [null, "80%", "85%", "85%", "55%"], m: [null, "30px auto 0px auto",null,null, "50px auto 20px 30px"],}}>
            <Flex sx={{ marginBottom: "20px", justifyContent: "space-between", }}>
              <span>{`${data.blog_data.date}`}</span>
              <div>
                {social.map((x, index) => (
                  <Link href={x.href} passHref={true} key={"link" + index}>
                    <a target="popup" onClick={handleSocial} sx={socialIcon}>
                      {x.icon}
                    </a>
                  </Link>
                ))}
              </div>
            </Flex>
            <Styled.h2> {blogdata.heading} </Styled.h2>
            <Styled.p>{ReactHtmlParser(blogdata.content)}</Styled.p>
          </div>
          {/* Recent Blog Section */}
          <div sx={{ width: [null, "80%", "85%", null, "30%"], m: [null, "30px auto 40px auto",null,null, "50px 0 20px 0"], height: "100%", borderRadius: "10px",position:"sticky",top:0 }}>
           {/* FirstRecent Blog */}
           <Styled.h3 sx={BlogListStyle} className="recent-title" > Recent Blog</Styled.h3>
            {recentData
              ? recentData.posts.nodes.map((x, index) => (
                <Recent Variant={"Variant1"} {...x} key={"recentBlogPage" + index}  />
              ))
              : null}
            {/* Blog List  */}
            {/* Blog List Image */}
           <Styled.h3 sx={{...BlogListStyle,mt:"50px"}} className="recent-title"> Blog List</Styled.h3>
            <div sx={{position:"relative",}} key="REcentImg1">
            <Link href={recentData ? `/blogs/${recentData.posts.nodes[0].slug}` : "#"}>
              <a sx={{textDecoration:"none",cursor:"pointer"}}>
             <img className="recent-img-overlay" src={recentData ? recentData.posts.nodes[0].featuredImage.node.sourceUrl : "/images/bg1.jpg"} sx={{height:[null,"100%","100%","100%","200px"],width:"95%",borderRadius:"6px",objectFit:"cover"}}/>
              <div sx={OverlayBlogList}></div>
            <div sx={Blog1List}>
             <Styled.p sx={{width: [null, "35%", "16%", "16%","25%" ],textAlign:"center",alignItems:"center",fontWeight:600,fontSize:"30px"}}>1</Styled.p>
             <Styled.p sx={{width: [null, "60%", "82%", "82%","72%" ],}}>{recentData ? recentData.posts.nodes[0].blog_data.heading:"Blog Heading" }</Styled.p>
              </div>
              </a>
            </Link>
           </div> 
           {/* Blog List Text */}
            {recentData
              ? recentData.posts.nodes.slice(1).map((x, index) => (
                <Recent Variant={"Variant2"} num={index+2} {...x} key={"recentBlogPage" + index}  />
              ))
              : null}
           
          </div>
        </Flex>
      
      </Container>
    </Layout>
  );
};

export default BlogsPage;

const Blog1List={position:"absolute",bottom:0,left:0,color:"white",width:"95%",display: "flex", flexWrap: "wrap",justifyContent:"space-between",padding:"20px 0"}

const OverlayBlogList={position:"absolute",top:0,left:0,width:"95%",height:"100%",background:"rgba(0,0,0,0.6)",borderRadius:"6px"}

const BlogListStyle={
  m: "20px 0px", textAlign: [null, "center", "start"], position: "relative", pb: "6px"
}

export async function getStaticPaths() {
  const resp = await GraphqlClient.post("", { query: blogQuery }, "");
  const Data = resp.data.data;

  const paths = Data.posts.nodes.map((x) => ({ params: { id: x.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const resp = await GraphqlClient.post(
    "",
    { query: blogPageQuery, variables: { URL: params.id } },
    ""
  );
  const allLocations = resp.data.data;
  if (!resp.data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: allLocations,
    },
  };
}
