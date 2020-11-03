import * as React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
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
      <Block1 container direction="row" justify="space-between" alignItems="center">
        <Context4>
          <Head5>ESSENCE OF TRAVEL</Head5>
          Various platforms show off their technology,
          but we care more people than its technology.
          Our core value is the connection between people.
          Find the answer from Tripal, which you've never found.
        </Context4>
      <EssenceImage src={essenceImage}/>
      </Block1>
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
  font-size:calc(1.563vw + 10px);
  font-family: 'Poppins';
  font-weight: 500;
  color:white;
  padding-left: 14.479vw;
  padding-top: 35.104vw;
  height: 2.917vw;
`;
const Head2 = styled.div`
  font-size:calc(3.127vw + 20px);
  font-family: 'Poppins';
  font-weight: 800;
  color:white;
  margin-top: 2.5vw;
  padding-left: 14.479vw;
  letter-spacing: 4px;
`;
const Head3 = styled.div`
  font-size: calc(1.303vw + 15px);
  font-family: 'Poppins';
  font-weight: 700;
  color:#707070;
  padding-top: 23.177vw;
  padding-left: 14.479vw;
  margin-right: 15.885vw;
`;
const Context1 = styled.div`
  width: 69.219vw;
  font-size: calc(0.782vw + 10px);
  font-family: 'Poppins';
  color:#707070;
  padding-top: 1.094vw;
  margin-left: 14.479vw;
  line-height:1.5;
  margin-right: 15.885vw;
`;
const Context2 = styled.div`
  width: 69.219vw;
  font-size: calc(0.782vw + 10px);
  font-family: 'Poppins';
  font-weight: 500;
  color:#707070;
  margin-left: 14.479vw;
  line-height:1.5;
  margin-right: 15.885vw;
`;
const Background2 = styled.div`
  height:calc(48.438vw + 150px);
`;
const Head4 = styled.div`
  font-size: calc(1.303vw + 15px);
  font-family: 'Poppins';
  font-weight: 700;
  color:white;
  padding-top:calc(11.615vw + 30px);
  padding-left:14.479vw;
`;
const Context3 = styled.div`
  width: calc(27.084vw + 150px);
  font-size: calc(0.782vw + 10px);
  font-family: 'Poppins';
  font-weight: 500;
  color:white;
  padding-top: 1.094vw;
  margin-left: 14.479vw;
  line-height:1.6;
  letter-spacing: 0.25px;
`;
const Background3 = styled.div`
  height:calc(48.438vw + 200px);
`;
const Block1 = styled(Grid)`
  padding-top:16vw;
  padding-right:10vw;
  
  padding-left: 14.479vw;
`;
const Head5 = styled.div`
  font-size: calc(1.303vw + 15px);
  font-family: 'Poppins';
  font-weight: 700;
  color:#707070;
  line-height:1.6;
  
`;

const Context4 = styled.div`
  font-size: calc(0.782vw + 10px);
  font-family: 'Poppins';
  font-weight: 600;
  color: #707070;
  width: calc(25.208vw + 150px);
  letter-spacing: 0.25px;
  line-height:1.6;
`;
const EssenceImage = styled.img`
  width:calc(34.636vw + 50px);
  margin:0 30px;
`;
const Head6 = styled.div`
  font-size: calc(1.823vw + 15px);
  font-family: 'Poppins';
  font-weight: 700;
  color: white;
  margin-left: 15.313vw;
  padding-top: 11.719vw;
`;
const Context5 = styled.div`
  font-size: calc(0.782vw + 10px);
  font-family: 'Poppins';
  font-weight: 600;
  color: white;
  width: 53.385vw;
  margin-left: 21.667vw;
  padding-top: 3.646vw;
  line-height:1.6;
`;
const Background4 = styled.div`
  height: calc(48.438vw + 200px);
`;
const Head7 = styled.div`
  font-size: calc(1.303vw + 15px);
  font-family: 'Poppins';
  font-weight: 700;
  color: #707070;
  margin-left: 14.479vw;
  padding-top: 17.708vw;

`;
const Context6 = styled.div`
  font-size: calc(0.782vw + 10px);
  font-family: 'Poppins';
  font-weight: 600;
  color: #707070;
  margin-left: 14.479vw;
  margin-right: 6vw;
  padding-top: 1.042vw;
  letter-spacing: 0.25px;
  line-height:1.6;
`;
const Background5 = styled.div`
  height: calc(48.438vw + 200px);
`;
const Head8 = styled.div`
  font-size: calc(1.303vw + 15px);
  font-family: 'Poppins';
  font-weight: 700;
  color: #707070;
  margin-left: 14.896vw;
`;
const Context7 = styled.div`
  font-size: calc(0.782vw + 10px);
  font-family: 'Poppins';
  font-weight: 600;
  color: #707070;
  margin-left: 14.896vw;
  padding-top: 2.083vw;
  line-height:2.5;
`;
const Bold = styled.span`
  color: black;
`;