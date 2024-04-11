import PurifyText from "@/dashboard/editor/common/PurifyText";

const SectionTitleComponent = ({
  title,
  paragraph,
  width = "570px",
  align,
  mb = "100px",
}: {
  title: string;
  paragraph?: string;
  width?: string;
  align?: string;
  mb?: string;
}) => {
  return (
    <div className="container">
      <div
        className={`wow fadeInUp w-full ${align}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        {paragraph && (
          <div className="text-base !leading-relaxed text-body-color md:text-lg">
            <PurifyText text={paragraph} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionTitleComponent;
