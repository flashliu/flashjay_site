import React, { FC } from "react";
import avatar from "@/assets/avatar.jpg";

const Profile: FC = () => {
  return (
    <div className="bg-white w-full h-full px-5 flex flex-col justify-center space-y-16">
      <img src={avatar} className="w-[180px] h-[180px] rounded-full mx-auto" />
      <div className="text-3xl text-center text-gray-700">
        <h1 className="mb-2">刘杰</h1>
        <h1>一名独立全栈开发者</h1>
      </div>
      <p className="text-gray-500 max-w-[1000px] mx-auto">
        五年前端从业经验，有扎实的javascript基础，技术面广。熟悉常用框架vue，react。能熟练使用typeacript。熟悉scss、less等css预处理器。熟悉flutter等跨平台技术，有多个flutter上线项目的经验。熟悉nestjs框架及mysql、mongodb等数据库，能独立完成接口开发工作
      </p>
    </div>
  );
};
export default Profile;
