import { Feature } from "@/types/feature";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

interface IFeature {
  features?: Feature[];
}

const Features = (props: IFeature) => {
  const { features } = props;
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {(features || featuresData).map((feature) => (
              <SingleFeature
                key={feature.id || feature.title}
                {...feature}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
