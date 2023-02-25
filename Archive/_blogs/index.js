/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui";
import Layout from "../../components/TemplateLayout/Layout";
import BlogPost from "../../components/BlogPage/blogIndexList";
import BlogTop from "../../components/BlogPage/blogIndexTop";
import RecentPost from "../../components/BlogPage/recent";
import { GraphqlClient } from "../../components/api";
import { blogQuery } from "../../Query/blogData";
import { Container } from "react-bootstrap";
import Seo from "../../components/Seo"

const post_layout = {
  width: "100%",
  height: [null, "30%", "60%", "80%", "90%", ],
  margin: "auto",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  color: "#000",
  padding: "15px 0 30px 0",
  flexDirection:"row",
};

const BlogDivStyle = {
  bg: "background",
  zIndex: "2",
  px:[null,"0 30px",0],
  pt: [null, "20vh", null, "20vh", "18vh"],
  position: "relative",
};

const RecentStyle = {
  display: "block",
  width: [null, "100%", "100%", "100%", "35%"],
  bg: "templateGray",
  height: "50%",
  padding:[null,"10px 20px","10px 35px"],
  m:"0",
  mb:"30px",
  borderRadius:"4px"
};

const FirstBlogStyle = {
  width: [null, "100%", null, null, "60%"],
  justifyContent: "space-between",
  height: "100%",
  flexDirection: "column",
};

const seoData={
  title:"Blog - Best Digital Branding Agency In India",
  metaDesc:"NetArt is one of the best digital branding agency in india strives to provide you the best-in-class digital products and services, with no margin of error.",
  opengraphUrl:"https://netart.io/blogs"
}

const AllBlogs = (props) => {
  const data = props.data.posts;
  return (
    <Layout>
      <Seo {...seoData}/>
      <Container sx={BlogDivStyle}>
        <Flex sx={{ flexWrap: "wrap",justifyContent:"space-between" }}>
          <Flex sx={FirstBlogStyle}>
            {/* First Recent Content */}
            <BlogTop
              heading={data.nodes[0].blog_data.heading}
              date={data.nodes[0].blog_data.date}
              slug={`/blogs/${data.nodes[0].slug}`}
              image={data.nodes[0].featuredImage.node.sourceUrl}
            />
            {/* List Of Blogs */}
            <Flex sx={post_layout} className="blog-lists">
              {data.nodes.slice(1).map((x, index) => {
                if(index%2==0){
                  return (
                    <BlogPost animation="fadeInLeft" delay={index*200}
                      heading={x.blog_data.heading}
                      date={x.blog_data.date}
                      slug={`/blogs/${x.slug}`}
                      image={x.featuredImage.node.sourceUrl}
                      key={"blogPost" + index}
                    />
                  );
                }
                else{
                  return (
                    <BlogPost  animation="fadeInRight" delay={index*200}
                      heading={x.blog_data.heading}
                      date={x.blog_data.date}
                      slug={`/blogs/${x.slug}`}
                      image={x.featuredImage.node.sourceUrl}
                      key={"blogPost" + index}
                    />
                  );
                }
              })}
            </Flex>
          </Flex>
          {/* Recent Section --*/}
          <div sx={RecentStyle}>
            <Styled.h3 sx={{ ...RecentHeading}} className="recent-title">Recent Blog </Styled.h3>
            {data.nodes.map((x, index) => (
              <RecentPost Variant={"Variant3"} {...x} key={"recentBlogPage1" + index} />
            ))}
          </div>
        </Flex>
      </Container>
    </Layout>
  );
};

export default AllBlogs;

const RecentHeading={color: "white", m: "20px 5px" ,position:"relative",pb:"6px",textAlign: [null, "center", "start"]}

export async function getStaticProps() {
  const resp = await GraphqlClient.post("", { query: blogQuery }, "");
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
