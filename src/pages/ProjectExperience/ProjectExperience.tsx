import Previewer from "@/components/Previewer/Previewer";
import React, { FC } from "react";
import "./ProjectExperience.css";

const ProjectImage: FC<{ src: string; onClick: () => void }> = ({
  src,
  onClick,
}) => {
  return (
    <img
      onClick={onClick}
      className="rounded-md w-full h-[80px] lg:h-[100px] object-cover hover:scale-110 cursor-pointer"
      src={src}
    />
  );
};

interface ProjectItemProps {
  imgs?: string[];
  name: string;
  time: string;
  content: string;
}
const ProjectItem: FC<ProjectItemProps> = ({ imgs, name, time, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-[350px] md:w-[400px] lg:w-[500px]">
      <h2 className="text-gray-600 font-bold text-lg project-title">{name}</h2>
      <div className="text-sm text-gray-400 mt-2">{time}</div>
      <div className="text-gray-600 mt-3 leading-7 text-sm whitespace-pre-line">
        {content}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5">
        {imgs &&
          imgs.length > 0 &&
          imgs.map((item, i) => (
            <ProjectImage
              key={i}
              src={item}
              onClick={() => {
                Previewer.open({
                  imgs,
                  index: i,
                });
              }}
            ></ProjectImage>
          ))}
      </div>
    </div>
  );
};
const ProjectExperience: FC = () => {
  return (
    <div className="w-full h-full pt-14 bg-[#ecf1f4]">
      <h1 className="title">项目经验</h1>
      <div className="scroll">
        <div className="projectList">
          <ProjectItem
            name="镜知道眼镜销售辅助系统"
            time="2021.03 - 2021.04"
            content="1、使用flutter+getx等技术开发的眼睛销售辅助系统，完美还原个性化UI，实现了视频播放、利用高斯模糊模拟眼睛近视效果等(可访问http://www.jingzhidao.top/查看视频介绍)
          2、使用node、nestjs、mysql等技术提供后端接口服务"
            imgs={[
              "http://qiniu.jingzhidao.top/glass_splash.PNG",
              "http://qiniu.jingzhidao.top/glass_home.PNG",
              "http://qiniu.jingzhidao.top/glass_login.PNG",
              "http://qiniu.jingzhidao.top/glass_mock.PNG",
              "http://qiniu.jingzhidao.top/glass_diffrence.PNG",
            ]}
          ></ProjectItem>
          <ProjectItem
            name="大鑫牛商城"
            time="2020.09 - 2021.01"
            content="1、使用taro，mobx等技术开发大鑫牛c端小程序
          2、使用flutter、getx等技术开发商家端和骑手端app(IOS端在Appstore搜索大鑫牛下载，安卓端访问http://fir.daxinni u.cn/pbt2和http://fir.daxinniu.cn/rvke)
          3、编写APP下载介绍网站，并部署上线展示"
            imgs={[
              "http://qiniu.jingzhidao.top/dxn01.PNG",
              "http://qiniu.jingzhidao.top/dxn02.PNG",
              "http://qiniu.jingzhidao.top/dxn03.PNG",
              "http://qiniu.jingzhidao.top/dxn04.PNG",
              "http://qiniu.jingzhidao.top/dxn05.PNG",
            ]}
          ></ProjectItem>
          <ProjectItem
            name="云护工"
            time="2019.05 - 2020.10"
            content="1、使用taro，mobx等技术开发云护工c端小程序（微信小程序搜索云护工即可体验）
        2、使用flutter，provider等技术开发云护工服务商端及护工端app,实现了ios、android双平台上线（IOS端在Appstore搜索云护工下载，安卓端访问 http://fir.yihut.cn/n4rp和 http://fir.yihut.cn/mz3n下载）"
            imgs={[
              "http://qiniu.jingzhidao.top/yht01.jpg",
              "http://qiniu.jingzhidao.top/yht02.png",
              "http://qiniu.jingzhidao.top/yht03.png",
              "http://qiniu.jingzhidao.top/yht04.png",
              "http://qiniu.jingzhidao.top/yht05.png",
            ]}
          ></ProjectItem>
        </div>
      </div>
    </div>
  );
};
export default ProjectExperience;
