import { Row } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  NotHidden,
  CustomNavLinkSmall,
  Span,
  MainMsg
} from "./styles";

const Header = ({ t }: any) => {
  
  const ReleaseItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("middleblock")}>
          <Span>{t("24R1")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("Cloud Support NGSM")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("APPS10/APPS9")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{t("Build Servers")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("touchapps")}>
          <Span>{t("Touch App Servers")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("junks")}>
          <Span>{t("Junks")}</Span>
        </CustomNavLinkSmall>
      </>
    );
  };


  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="IFS_logo_2021.png" width="140px" height="64px" />
          </LogoContainer>
          <NotHidden>
          </NotHidden>
        </Row>
        <Row justify="space-between" >
          <NotHidden >
            <ReleaseItem />
          </NotHidden>
        </Row>
      </Container>
      <MainMsg>
        {process.env.REACT_APP_MAIN_MSG}
      </MainMsg>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
