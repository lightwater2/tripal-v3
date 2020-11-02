import * as React from 'react';
import styled from 'styled-components';
import { FullSizeBanner } from 'styled/components';
const titleImage = require('assets/titleImage.png').default;
const iphoneImage = require('assets/iphoneImage.png').default;
const essenceImage = require('assets/essenceImage.png').default;
const doorImage = require('assets/doorImage.png').default;
export default () => (
  <>
    <FullSizeBanner img={titleImage} height={1080} width={1920}>
      <Head1>TRIP WITH PALS, TOGETHER WITH PALS</Head1>
      <br />
      <Head2>THAT'S TRIPAL!</Head2>
    </FullSizeBanner>
    <Background2>
      <Head3>THE JOY THAT UNFAMILIER PLACES GIVE US</Head3>
      <Context1>We have the pleasure from doing the new things. But when it comes to the pleasure, you would face with many obstacles. Such as Finding, moving, booking a place, and facing unexpected accidents.</Context1>
      <Context2>If you have pals in the local place, you don’t have to go through this.</Context2>
    </Background2>
    <FullSizeBanner img={iphoneImage} height={908} width={1920}>
      <Head4>TRIPAL YOUR TRIP-PAL!</Head4>
      <Context3>We are always around you. 
        <br />
        You don't have a boring trip, you can do a real activities that Tripals offers you. 
        <br />
        The activities are best know by Tripal!</Context3>
    </FullSizeBanner>
    <Background3>
      <Head5>ESSENCE OF TRAVEL</Head5>
      <Context4>
        Various platforms show off their technology,
        <br />
        but we care more people than its technology. 
        <br />
        Our core value is the connection between people.
        <br />
        Find the answer from Tripal, which you've never found.
      </Context4>
      <EssenceImage src={essenceImage}/>
    </Background3>
    <FullSizeBanner img={doorImage} width={1920} height={1281}>
      <Head6>
        TRAVEL IS GOING TO BE PERFECT WITH THE TRIPAL APP
      </Head6>
      <Context5>
        With a just simple app, you can enjoy restaurants and activities as the local do. User-friendly interface offers a variety of activities in the region you want.
      </Context5>
    </FullSizeBanner>
    <Background4>
      <Head7>
        CORE VALUES
      </Head7>
      <Context6>
      Team Tripal is making the service we only need the most. 
      <br />
      We will make everything possible for local travelers suffering from various difficulties.
      </Context6>
    </Background4>
    <Background5>
      <Head8>CONTACT</Head8>
      <Context7>
        e-Mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Bold>tripal2030@gmail.com</Bold>
        <br />
        Phone  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Bold>+82)10 9671-1131</Bold>
        <br />
        Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Bold>서울특별시 영등포구 경인로 77길 49, 109동 상가2층 201-137호</Bold>
        

      </Context7>
    </Background5>
  </>
);
const Head1 = styled.div`
  font-size:40px;
  font-family: 'Poppins';
  font-weight: 500;
  color:white;
  padding-left: 278px;
  padding-top: 674px;
  height: 56px;
`;
const Head2 = styled.div`
  font-size:80px;
  font-family: 'Poppins';
  font-weight: 800;
  color:white;
  margin-top: 62px;
  padding-left: 278px;
  letter-spacing: 4px;
`;
const Head3 = styled.div`
  font-size: 40px;
  font-family: 'Poppins';
  font-weight: 700;
  color:#707070;
  padding-top: 445px;
  padding-left: 278px;
`;
const Context1 = styled.div`
  width: 1329px;
  font-size: 25px;
  font-family: 'Poppins';
  color:#707070;
  padding-top: 21px;
  margin-left: 278px;
  line-height:1.5;
`;
const Context2 = styled.div`
  width: 1329px;
  font-size: 25px;
  font-family: 'Poppins';
  font-weight: 500;
  color:#707070;
  margin-left: 278px;
  line-height:1.5;
`;
const Background2 = styled.div`
  height:1080px;
`;
const Head4 = styled.div`
  font-size: 40px;
  font-family: 'Poppins';
  font-weight: 700;
  color:white;
  padding-top:253px;
  padding-left:278px;
`;
const Context3 = styled.div`
  width: 720px;
  font-size: 25px;
  font-family: 'Poppins';
  font-weight: 500;
  color:white;
  padding-top: 21px;
  margin-left: 278px;
  line-height:1.6;
  letter-spacing: 0.25px;
`;
const Background3 = styled.div`
  height:1080px;
`;
const Head5 = styled.div`
  font-size: 40px;
  font-family: 'Poppins';
  font-weight: 700;
  color:#707070;
  padding-top: 445px;
  padding-left: 278px;
  line-height:1.6;
`;
const Context4 = styled.div`
  font-size: 25px;
  font-family: 'Poppins';
  font-weight: 600;
  color: #707070;
  margin-left: 278px;
  width: 710px;
  letter-spacing: 0.25px;
  line-height:1.6;
`;
const EssenceImage = styled.img`
  position:relative;
  left:1009px;
  top: -370px;
`;
const Head6 = styled.div`
  font-size: 50px;
  font-family: 'Poppins';
  font-weight: 700;
  color: white;
  margin-left: 294px;
  padding-top: 225px;
`;
const Context5 = styled.div`
  font-size: 25px;
  font-family: 'Poppins';
  font-weight: 600;
  color: white;
  width: 1025px;
  margin-left: 416px;
  padding-top: 70px;
  line-height:1.6;
`;
const Background4 = styled.div`
  height: 1080px;
`;
const Head7 = styled.div`
  font-size: 40px;
  font-family: 'Poppins';
  font-weight: 700;
  color: #707070;
  margin-left: 278px;
  padding-top: 340px;

`;
const Context6 = styled.div`
  font-size: 25px;
  font-family: 'Poppins';
  font-weight: 600;
  color: #707070;
  margin-left: 278px;
  padding-top: 20px;
  letter-spacing: 0.25px;
  line-height:1.6;
`;
const Background5 = styled.div`
  height: 1080px;
`;
const Head8 = styled.div`
  font-size: 40px;
  font-family: 'Poppins';
  font-weight: 700;
  color: #707070;
  margin-left: 286px;
`;
const Context7 = styled.div`
  font-size: 25px;
  font-family: 'Poppins';
  font-weight: 600;
  color: #707070;
  margin-left: 286px;
  padding-top: 40px;
  line-height:2.5;
`;
const Bold = styled.span`
  color: black;
`;