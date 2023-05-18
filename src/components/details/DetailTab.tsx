import React, { useState } from "react";
import { DetailMenuButton } from "@components/button/CommonButton";

const DetailTab = () => {
  const [selectText, setSelectText] = useState("제품 상세");

  const handleSelectTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.textContent !== null) {
      setSelectText(event.currentTarget.textContent);
    }
  };

  return (
    <div className="col-[span_2/auto] mt-[10rem]">
      <ul className="grid grid-cols-4 text-[1.8rem]">
        <li>
          <DetailMenuButton
            clicked={selectText === "제품 상세" ? true : false}
            clickHandler={handleSelectTab}
          >
            제품 상세
          </DetailMenuButton>
        </li>
        <li>
          <DetailMenuButton
            clicked={selectText === "리뷰" ? true : false}
            clickHandler={handleSelectTab}
          >
            리뷰
          </DetailMenuButton>
        </li>
        <li>
          <DetailMenuButton
            clicked={selectText === "Q&A" ? true : false}
            clickHandler={handleSelectTab}
          >
            Q&A
          </DetailMenuButton>
        </li>
        <li>
          <DetailMenuButton
            clicked={selectText === "반품/교환정보" ? true : false}
            clickHandler={handleSelectTab}
          >
            반품/교환정보
          </DetailMenuButton>
        </li>
      </ul>
      <div className="mt-20 bg-light-gray h-[45rem] text-disabled-gray text-5xl font-medium text-center leading-[45rem]">
        {selectText}
      </div>
    </div>
  );
};

export default DetailTab;
