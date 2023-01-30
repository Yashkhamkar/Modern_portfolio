import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Social = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/Yashkhamkar"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://leetcode.com/xash" target="_blank" rel="noreferrer">
          <SiLeetcode />
        </a>
      </div>
      <div>
        <a
          href="https://codeforces.com/profile/yashkhamkar1100"
          target="_blank"
          rel="noreferrer"
        >
          <SiCodeforces />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/xassh__"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default Social;
