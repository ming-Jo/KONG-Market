import React from "react";
import { Link } from "react-router-dom";
import iconInsta from "@assets/icon-insta.svg";
import iconFacebook from "@assets/icon-fb.svg";
import iconYoutube from "@assets/icon-yt.svg";

const Footer = () => {
  return (
    <footer className="py-16 bg-light-gray">
      <div className="max-w-[138rem] px-20 mx-auto text-[1.4rem]">
        <div className="flex justify-between pb-[2rem] border-b border-disabled-gray">
          <ul className="flex items-center gap-14 footer-list">
            <li>
              <Link to="/">콩마켓 소개</Link>
            </li>
            <li>
              <Link to="/">이용약관</Link>
            </li>
            <li>
              <Link to="/">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="/">전자금융거래약관</Link>
            </li>
            <li>
              <Link to="/">청소년보호정책</Link>
            </li>
            <li>
              <Link to="/">제휴문의</Link>
            </li>
          </ul>
          <ul className="flex gap-6">
            <li>
              <Link to="/">
                <img src={iconInsta} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={iconFacebook} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={iconYoutube} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-12 leading-10 text-dark-gray">
          <p className="font-bold">KONG MARKET Co.,Ltd</p>
          <address className="not-italic">
            제주특별자치도 푸들시 땅콩로 123-45
          </address>
          <dl className="flex">
            <dt>사업자등록번호</dt>
            <dd className="before:content-[':'] before:inline-block before:px-2">
              000-00-00000
            </dd>
            <dd className="before:content-['|'] before:inline-block before:px-2">
              통신판매업
            </dd>
          </dl>
          <dl className="flex">
            <dt>대표</dt>
            <dd className="before:content-[':'] before:inline-block before:px-2">
              조민지
            </dd>
          </dl>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
