import { Render } from "@measured/puck";

export function Preview(props) {
  const { config, data } = props;
  return <Render config={config} data={data} />;
}
