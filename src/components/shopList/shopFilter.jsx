import styled from "styled-components";
import Image from "next/image";
import dropDownBtn from "../../../public/shopList/dropDownBtn.svg";

export default function ShopFilter() {
  return (
    <FilterWrapper>
      전체
      <Image src={dropDownBtn} alt="dropDownBtn" />
    </FilterWrapper>
  );
}

const FilterWrapper = styled.article`
  height: 3.3rem;
  width: 9.6rem;

  border: solid 0.1rem #f34141;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 1.6rem;

  padding: 0 1.6rem;

  color: #f34141;

  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.7rem;
`;
