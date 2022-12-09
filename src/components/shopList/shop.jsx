import styled from "styled-components";
import Image from "next/image";
import shopEx from "../../../public/common/shopEx.png";

export default function Shop() {
  return (
    <ShopContainer>
      <Image src={shopEx} alt="shopEx" width={150} height={150} />
      <MatzzangCount>30회</MatzzangCount>
      <DiscriptionBox>
        <ShopName>온달집 건대점</ShopName>
        <ShopScore>4.2</ShopScore>
      </DiscriptionBox>
    </ShopContainer>
  );
}

const ShopContainer = styled.article`
  margin-bottom: 2.8rem;

  position: relative;
`;

const DiscriptionBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.6rem;
`;

const ShopName = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.7rem;
`;

const ShopScore = styled.strong`
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.7rem;

  color: #ff7035;
`;

const MatzzangCount = styled.div`
  height: 2rem;
  width: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;

  background-color: #f34141;
  box-shadow: 0.2rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.7rem;

  color: white;

  position: absolute;
  right: 0.8rem;
  top: 12.2rem;
`;
