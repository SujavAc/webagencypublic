import Link from "next/link";
import { Hero } from "@/types/hero";
import PurifyText from "../../common/PurifyText";

const Hero = (props: Hero) => {
  const { title, description, buttons, bottomLeftSvg, rightTopSvg } = props;
  return (
    <>
      <section
        id="home"
        className="z-1 relative overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                {title && (
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    {title}
                  </h1>
                )}
                {description && (
                  <div className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    <PurifyText text={description} />
                  </div>
                )}
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {buttons &&
                    buttons?.map((link) => (
                      <Link
                        key={link?.label}
                        href={link?.href}
                        className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                        target={link?.openInNewTab ? "_blank" : "_self"}
                      >
                        {link?.label}
                      </Link>
                    ))}
                  {/* <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[0] opacity-30 lg:opacity-100">
          <PurifyText text={rightTopSvg} />
        </div>
        <div className="absolute bottom-0 left-0 z-[0] opacity-30 lg:opacity-100">
          <PurifyText text={bottomLeftSvg} />
        </div>
      </section>
    </>
  );
};

export default Hero;
