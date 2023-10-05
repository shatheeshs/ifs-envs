import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara
} from "./styles";
import JunckTab from "../../JunkTab";

const JunckStuffContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
                
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
          <h6>GIT Repo</h6>
          <JunckTab release = 'REPOSGIT' tabtype ="JUNK" subtabtype="REPO"/>
          <h6>SVN Repo</h6>
          <JunckTab release = 'REPOSSVN' tabtype ="JUNK" subtabtype="REPO"/>
          <h6>Real Junk</h6>
          <JunckTab release = 'REALJUNK' tabtype ="JUNK" subtabtype="REALJUNK"/>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(JunckStuffContentBlock);
