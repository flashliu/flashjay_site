import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper";
import ReactDOM from "react-dom";
interface PreviewerProps {
  imgs: string[];
  onClose?: () => void;
  index: number;
}
const PreviewerFC: FC<PreviewerProps> = ({ imgs, onClose, index = 0 }) => {
  const [cur, setCur] = useState(index);
  return (
    <div
      className="Previewer bg-black absolute top-0 left-0 right-0 bottom-0 z-10"
      onClick={onClose}
    >
      <div className="w-full h-full relative">
        <div className="absolute top-[env(safe-area-inset-top)] pt-5 text-white w-full text-center text-sm">
          {cur + 1} / {imgs.length}
        </div>
        <Swiper
          className="w-full h-full"
          initialSlide={index}
          mousewheel
          keyboard
          modules={[Mousewheel, Keyboard]}
          onSlideChange={(v) => setCur(v.activeIndex)}
        >
          {imgs.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex justify-center items-center w-full h-full">
                  <img src={item} className='object-cover max-h-full' />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
const open = (info: PreviewerProps) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  info.onClose = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };
  ReactDOM.render(<PreviewerFC {...info}></PreviewerFC>, div);
};
export default Object.assign(PreviewerFC, { open });
