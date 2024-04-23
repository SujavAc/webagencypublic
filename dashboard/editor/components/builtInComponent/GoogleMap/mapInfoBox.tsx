import { InfoBox, InfoBoxProps } from "@react-google-maps/api";
interface InfoBoxComponentprops extends InfoBoxProps {
  children?: React.ReactElement;
}
export default function InfoBoxComponent(props: InfoBoxComponentprops) {
  const { children, ...rest } = props;
  return <InfoBox {...rest}>{children}</InfoBox>;
}
