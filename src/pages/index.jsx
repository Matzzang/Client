import styled from "styled-components";
import Image from "next/image";
import moreBtn from "../../public/main/moreBtn.svg";
import makeMattzangBtn from "../../public/main/makeMattzangBtn.svg";
import shopEx from "../../public/common/shopEx.png";

export default function Home() {
  return (
    <Root>
      <TitleWrapper>
        <MainTitle>
          맛집 리스트를 등록하고 <br />
          같이 맛집 뿌시러 가요!
        </MainTitle>
      </TitleWrapper>
      <ButtonContainer>
        <Image
          src={makeMattzangBtn}
          alt="makeMattzangBtn"
          width={40}
          height={40}
        />
        <ButtonDiscription>맛짱 모임 만들기</ButtonDiscription>
      </ButtonContainer>
      <ListTitleContainer>
        <ListTItle>맛집 리스트 보러가기</ListTItle>
        <Image src={moreBtn} alt="moreBtn" width={38} height={38} />
      </ListTitleContainer>
      <ListImagesContianer>
        <ListContentBox>
          <Image src={shopEx} alt="shopEx" width={160} height={160} />
          온달집 건대점
        </ListContentBox>
        <ListContentBox>
          <Image src={shopEx} alt="shopEx" width={160} height={160} />
          온달집 건대점
        </ListContentBox>
        <ListContentBox>
          <Image src={shopEx} alt="shopEx" width={160} height={160} />
          온달집 건대점
        </ListContentBox>
      </ListImagesContianer>
      <TitleWrapper>
        <MyRankingTitle>나의 맛짱 랭킹</MyRankingTitle>
      </TitleWrapper>
      <MyRankingContainer>
        <Nickname>쪙이와리니는행복해 님</Nickname>
        <ScoreWrapper>
          <MyRank>176</MyRank>
          <TotalRankCount>/ 765</TotalRankCount>
        </ScoreWrapper>
      </MyRankingContainer>
      <TitleWrapper>
        <MattzangRandingTitle>맛짱 랭킹 TOP 3</MattzangRandingTitle>
      </TitleWrapper>
      <MattzangRandingContainer>
        <RankingBox>
          <RankingNumber>1</RankingNumber>
          <ProfileImage />
          <RankedNickName>젼이가지켜본다</RankedNickName>
        </RankingBox>
        <RankingBox>
          <RankingNumber>1</RankingNumber>
          <ProfileImage />
          <RankedNickName>젼이가지켜본다</RankedNickName>
        </RankingBox>
        <RankingBox>
          <RankingNumber>1</RankingNumber>
          <ProfileImage />
          <RankedNickName>젼이가지켜본다</RankedNickName>
        </RankingBox>
      </MattzangRandingContainer>
    </Root>
  );
}

const Root = styled.section`
  padding: 0 2.4rem 0 2.4rem;
  width: 32rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.article`
  width: 100%;
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 2rem;

  margin-left: 0;
`;

const ButtonContainer = styled.article`
  height: 10.3rem;
  width: 100%;

  background-color: #f6f6f6;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1.2rem;
`;

const ButtonDiscription = styled.strong`
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.7rem;

  margin-top: 0.8rem;
`;

const ListTitleContainer = styled.div`
  height: 2.4rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3.6rem;
`;

const ListTItle = styled.h2`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const ListImagesContianer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-around;

  font-weight: 500;
  font-size: 1.2;
  line-height: 1.7;

  margin-top: 1.2rem;
`;

const ListContentBox = styled.article`
  height: 12.1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MyRankingTitle = styled.h2`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;

  margin-top: 4.2rem;
`;

const MyRankingContainer = styled.div`
  height: 6rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f6f6f6;

  border-radius: 1rem;
`;

const Nickname = styled.h3`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;

  margin-left: 2rem;
`;

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;

  margin-right: 2rem;
`;

const MyRank = styled.strong`
  font-weight: 900;
  font-size: 2rem;
  line-height: 2.9rem;

  margin-right: 0.8rem;
`;

const TotalRankCount = styled.strong`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const MattzangRandingTitle = styled.h2`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;

  margin-top: 4.2rem;
`;

const MattzangRandingContainer = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;
`;

const RankingBox = styled.li`
  height: 5.2rem;
  width: 100%;

  display: flex;
  align-items: center;

  border: solid 0.1rem #ffcdcd;
  border-radius: 2.6rem;

  margin-bottom: 1rem;
`;

const RankingNumber = styled.strong`
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 2.3rem;

  margin-left: 2.2rem;
`;

const ProfileImage = styled.div`
  height: 3.2rem;
  width: 3.2rem;

  background-color: #f6f6f6;

  border-radius: 1.5rem;

  margin-left: 1.6rem;
`;

const RankedNickName = styled.strong`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.7rem;

  margin-left: 1.6rem;
`;
