/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import Link from "next/link";

const Hrstyle = {
  width: "58px",
  height: "5px",
  m: "0 6px 0 0",
  display: "inline-block",
  backgroundImage: "linear-gradient(to right, #CB0F22 , #006BAD)",
  border: "none",
};

const News = ({ Newsheading, desc, date, imgUrl }) => {
  return (
    <Link href="/">
      <a sx={{ cursor:"pointer" }}>
      <Flex
        sx={{
          flexDirection: [null, "column", "row", "row", "row"],
          flexWrap: "wrap",
          width: "90%", m: "0 5% 3% 5%",
          justifyContent: "space-between",
           flex: [null, "1", "0.35", "0.35", "0.25"],
        }}
      >
        <Flex
          sx={{
            flex: [null, "1", "0.35", "0.35", "0.25"],
            justifyContent: "center",
          }}
        >
          <img sx={{ width: "100%", height: "auto" }} src={imgUrl} />
        </Flex>
        <Flex
          sx={{
            flex: [null, "1", "0.6", "0.6", "0.72"],
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Styled.h3>{Newsheading}</Styled.h3>
          <span
            sx={{
              backgroundColor: "red",
              width: [null, "26%", "20%", "15%", "12%"],
            }}
          >
            {date}
          </span>
          <Styled.p>{desc}</Styled.p>
          <Link
            href="/"
          >
            <a  sx={{ color: "black", textDecoration: "none", fontWeight: "bold",cursor:"pointer" }}>Read More</a>
          </Link>
        </Flex>
      </Flex>
      </a>
    </Link>
  );
};
export default News;
