import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Empty,
  Language,
  Url,
} from "./styles";

const Footer = ({ t }: any) => {

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>IFS R&D International (Pvt) Ltd</Para>
              <Para>Dr Danister De Silva Mawatha</Para>
              <Para>Colombo 09</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Url href="https://www.ifs.com/">
                {t("About")}
              </Url>
              <Url href="https://blog.ifs.com/">
                {t("Blog")}
              </Url>
              <Url href="https://community.ifs.com/">
                {t("Community")}
              </Url>
              <Url href="https://www.ifs.com/about/careers-at-ifs">
                {t("Careers @ IFS")}
              </Url>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="IFS_logo_2021.png"
                  aria-label="homepage"
                  width="220px"
                  height="100px"
                />
              </LogoContainer>
            </NavLink>
            <Url>
                {t("@satrlk")}
              </Url>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
