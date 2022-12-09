import styled from "styled-components";
import Image from "next/image";
import searchIcon from "../../public/shopList/searchIcon.svg";
import Shop from "../components/shopList/shop";
import ShopFilter from "../components/shopList/shopFilter";

export default function ShopList() {
  return (
    <Root>
      <SearchSection>
        <SearchIconWrapper>
          <Image src={searchIcon} alt="searchIcon" width={13} height={14} />
        </SearchIconWrapper>
        <InputBox placeholder="맛집 검색하기" />
      </SearchSection>
      <FilterContainer>
        <ShopFilter />
        <ShopFilter />
        <ShopFilter />
      </FilterContainer>
      <ListContainer>
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
      </ListContainer>
    </Root>
  );
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.8rem 2.4rem 0 2.4rem;
`;

const SearchSection = styled.section`
  height: 4.4rem;
  width: 31.2rem;

  background-color: #f9f9f9;

  border-radius: 2.2rem;

  display: flex;
  align-items: center;

  margin-bottom: 2rem;
`;

const SearchIconWrapper = styled.span`
  margin-left: 16px;
`;

const InputBox = styled.input`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #b8b8b8;

  margin-left: 1.5rem;
`;

const FilterContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-around;

  margin-bottom: 2.8rem;
`;

const ListContainer = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
