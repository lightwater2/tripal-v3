/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const FullSizeBanner =  styled.div<{ img:string, height:number, width:number }>`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 20vh;
  padding-bottom: calc(${(props) => props.height / props.width} * 100%);
  background-size: cover;
  background-repeat: no-repeat;
`;
