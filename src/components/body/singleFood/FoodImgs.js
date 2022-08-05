import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

import Image from "mui-image";

const FoodImgs = ({ imgList }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {imgList.map((linkImg) =>
        linkImg ? (
          <SwiperSlide>
            <Image
              src={linkImg}
              height="500px"
              fit="scale-down"
              duration={3000}
              easing="cubic-bezier(0.7, 0, 0.6, 1)"
              showLoading={true}
              errorIcon={true}
              shift={null}
              distance="100px"
              shiftDuration={900}
              bgColor="inherit"
              className="hellin"
              style={{
                margin: "auto",
              }}
            />
          </SwiperSlide>
        ) : (
          ""
        )
      )}
    </Swiper>
  );
};

export default FoodImgs;
