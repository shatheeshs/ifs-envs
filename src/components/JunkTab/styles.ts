import styled from "styled-components";

export const Tabs = styled("div")`
  display: flex;
  justify-content: space-between; 
`;

export const TabsContent = styled("div")`
  padding: 20px 0px;
  background-color: white;
  font-weight: 300;
  line-height: 30px;
  font-size: 16px;
  text-align: left;
`;

export const TabsContainer = styled("div")`
  width: 960px;
  margin: 0 auto;
  justify-content: left;
`;

export const TabsInfoContainer = styled("div")`
  width: 960px;
  margin: 0 auto;
  justify-content: left;
`;


export const TabsButton = styled("button")`
  background-color: lightgray;
  border: none;
  color: #003300;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease-out;

  &:hover {
    color: white;
    background-color: #4d004d;
  };

  &:disabled  {
    background: linear-gradient(245.39deg, #330033 -35.14%, #4d0099 143.06%);
    color: white;
  };

`;

export const UrlContent = styled("a")`
  padding: 0px 0px;
  background-color: white;
  font-weight: bold;
  line-height: 20px;
  font-size: 20px;
  text-align: left;
`;

export const EwContent = styled("a")`
  padding: 0px 0px;
  background-color: white;
  font-weight: none;
  line-height: 15px;
  font-size: 17px;
  text-align: left;
`;