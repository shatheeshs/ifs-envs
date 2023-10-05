import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, ContentWrapper ,LatestMsgContent} from "./styles";
import EnvTab from "../EnvTab";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}



const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  return (
    <MiddleBlockSection id="middleblock">
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
          <LatestMsgContent>Why hurry, 24R1 coming soon.</LatestMsgContent>
          <EnvTab release = '24R1' tabtype ="RELEASE"/>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
