import React, { FC } from "react";
import ReactDOM from "react-dom";
import Profile from "./pages/Profile/Profile";
import ProjectExperience from "./pages/ProjectExperience/ProjectExperience";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import "./index.css";

const App: FC = () => {
  return (
    <div style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Swiper
        direction="vertical"
        style={{ height: "100%" }}
        mousewheel={{ forceToAxis: true }}
        keyboard
        modules={[Mousewheel, Keyboard]}
        longSwipesMs={500}
      >
        <SwiperSlide>
          <Profile></Profile>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectExperience></ProjectExperience>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
