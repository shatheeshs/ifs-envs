import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import SupportNGSMContentBlock from "./SupportNGSMContentBlock";
import Apps10Apps9ContentBlock from "./Apps10Apps9ContentBlock";
import BuildServersContentBlock from "./BuildServersContentBlock"
import TouchAppsServersContentBlock from "./TouchAppsServersContentBlock"
import JunckStuffContentBlock from "./JunckStuffContentBlock"
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "supportngsm") return <SupportNGSMContentBlock {...props} />;
  if (props.type === "oldapps") return <Apps10Apps9ContentBlock {...props} />;
  if (props.type === "buildservers") return <BuildServersContentBlock {...props} />;
  if (props.type === "touchappsservers") return <TouchAppsServersContentBlock {...props} />;
  if (props.type === "junkstuff") return <JunckStuffContentBlock {...props} />;
  return null;
};

export default ContentBlock;
