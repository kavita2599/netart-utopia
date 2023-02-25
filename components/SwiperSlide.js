/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react"
import { jsx, IconButton } from "theme-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay,Mousewheel } from "swiper";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

SwiperCore.use([Navigation, Pagination, Autoplay,Mousewheel]);

const postBottom = {
  position: "relative",
  width: "100%",
  color: "white",
  display: "flex",
  justifyContent: "center",
  tapHighlightColor: "transparent",
  alignItems: "center",
  cursor: "pointer",
  p: "20px 0",
};

const postTop = {
  position: "absolute",
  width: "96%",
  m:"0 1.8%",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  tapHighlightColor: "transparent",
  alignItems: "center",
  cursor: "pointer",
  p: "20px 0",
  outline:"none",
  top: "42%",
};

const BtnTopStyle = {
  width: "35px",
  height:"35px",
  outline: "none",
  cursor:"pointer",
  borderRadius: "50%",
  bg: 'templatePrimary',
  ":hover":{
    bg: "templatePrimary",
  }
};

const PaginationStyle = {
  margin: "20px auto 0px",
  display: "flex",
  height:"20px",
  webkitBoxPack: "center",
  justifyContent: "center",
  ".swiper-pagination-bullet": {
       border: "1px solid rgb(46, 80, 240)",
      margin: "0px 6px",
      cursor: "pointer",
      bg: "rgba(4, 229, 229,0.7)"
  },
  ".swiper-pagination-bullet-active": {
      bg: "rgb(4, 229, 229)"
  },
  ".pagination-index": {
      opacity: 0
  }
}

export default function Slides({ children,config,btn,totalNo,Variant,name,caseStudy,pagination}) {

  var props = {
    spaceBetween: 5,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    slidesPerView: 1,
    pagination: {
      el: ".pagination",
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span  class="' + className + '">' + "</span>";
      },
    },
    ...config,
  };

  var Var = {
   // For CaseStudy
    Variant1: { div: { ...postTop,zIndex:"10" }, btn: { ...BtnTopStyle }, ml: { mr: "10px" },span: { display: "none" },},
  // For Testimonial
    Variant2: {div: { ...postBottom }, btn: { width: "5em", outline: "none", color: "black", cursor:"pointer", },span: { color: "black" },},
  };

  return (
    <>
    <Swiper {...props} className={caseStudy? "portfolio-slider":null}>
      {children.map((x, index) => (
        <SwiperSlide key={name+index}>
          <div sx={{ height: "95%" }}>
            {x}
          </div>
          {btn ? (
              <div sx={{ ...Var[Variant].div }}>
                <div id="prev-btn" className="prev">
                  <IconButton sx={{ ...Var[Variant].btn, ...Var[Variant].ml }}>
                    <BiChevronLeft sx={{ fontSize: "25px" }} />
                  </IconButton>
                </div>
                {/* <span sx={{ padding: "0 20px", fontSize: "20px", ...Var[Variant].span,}}>
                  {index + 1}/{totalNo}
                </span> */}
                <div id="next-btn" className="next">
                  <IconButton sx={{ ...Var[Variant].btn }}>
                    <BiChevronRight sx={{ fontSize: "25px" }} />
                  </IconButton>
                </div>
              </div>
            ) : null}
        </SwiperSlide>
      ))}
    </Swiper>
     {pagination ?
      <div className="pagination" sx={PaginationStyle}>
      </div> :
      null}
      </>
  );
}
