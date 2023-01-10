import React from "react";
import { useModal } from "src/context/ModalFrameContext";
import { FileWithId } from "src/hooks/useImages";
import "./ImageSwiperModal.scss";
import { VscClose } from "react-icons/vsc";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  images: FileWithId[];
};

const ImageSwiperModal = ({ images }: Props) => {
  const { closeModal } = useModal();
  return (
    <div className="image_swiper_modal_wrapper">
      <button onClick={closeModal}>
        <VscClose style={{ fontSize: 30 }} />
      </button>
      <div className="image_swiper_wrapper">
        <Swiper
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="swiper_slide_wrapper">
                <img src={image.img} alt="상품 이미지" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSwiperModal;
