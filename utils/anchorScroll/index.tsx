import { useEffect } from "react";

export const ManageScroll = (props) => {
  const path = window?.location?.hash;
  const id = path?.replace("#", "");

  const findElementById = (id, interval = 1000, maxAttempts = 10, callback) => {
    let attempts = 0;

    const checkElement = () => {
      const element = document.getElementById(id);
      if (element) {
        // If the element is found, invoke the callback and return
        callback(element);
      } else if (attempts < maxAttempts) {
        // If the element is not found and maxAttempts is not reached, try again after interval milliseconds
        attempts++;
        setTimeout(checkElement, interval);
      } else {
        // If maxAttempts is reached and the element is still not found, stop looking
        return;
      }
    };

    checkElement();
  };

  useEffect(() => {
    findElementById(id, 1000, 10, (element) => {
      // Do something with the found element, such as scrolling to it
      const header = document?.getElementsByTagName("header");
      const headerReactangle = header[0].getBoundingClientRect();
      const r = element?.getBoundingClientRect();
      window.top.scroll({
        top: r?.top - (headerReactangle?.height + 20),
        behavior: "smooth",
      });
    });
  }, [id, path]);
  return <>{props?.children}</>;
};
