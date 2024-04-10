import PurifyText from "@/dashboard/editor/common/PurifyText";
import { Feature } from "@/types/feature";

const SingleFeature = (feature: Feature) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <PurifyText text={icon} />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <div className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          <PurifyText text={paragraph} />
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;