export const CarouselConfig = {
  id: { type: "text" },
  className: { type: "textarea" },
  options: {
    type: "object",
    objectFields: {
      type: {
        type: "select",
        options: [
          { label: "Slide", value: "slide" },
          { label: "Loop", value: "loop" },
          { label: "Fade", value: "fade" },
        ],
      },
      role: {
        type: "text",
      },
      label: {
        type: "text",
      },
      speed: {
        type: "number",
      },
      rewind: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      rewindSpeed: {
        type: "number",
      },
      rewindByDrag: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      width: {
        type: "text",
      },
      height: {
        type: "text",
      },
      fixedWidth: {
        type: "text",
      },
      fixedHeight: {
        type: "text",
      },
      heightRatio: {
        type: "number",
      },
      autoWidth: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      autoHeight: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      start: {
        type: "number",
      },
      perPage: {
        type: "number",
      },
      perMove: {
        type: "number",
      },
      clones: {
        type: "number",
      },
      cloneStatus: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      focus: {
        type: "text",
      },
      gap: {
        type: "number",
      },
      padding: {
        type: "object",
        objectFields: {
          top: { type: "number" },
          right: { type: "number" },
          bottom: { type: "number" },
          left: { type: "number" },
        },
      },
      arrows: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      pagination: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      paginationKeyboard: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      paginationDirection: {
        type: "select",
        options: [
          { label: "Left to right", value: "ltr" },
          { label: "Right to left", value: "rtl" },
          { label: "Top to bottom", value: "ttb" },
        ],
      },
      easing: {
        type: "text",
      },
      drag: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      snap: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      noDrag: {
        type: "text",
      },
      dragMinThreshold: {
        type: "object",
        objectFields: {
          mouse: { type: "number" },
          touch: { type: "number" },
        },
      },
      flickPower: {
        type: "number",
      },
      flickMaxPages: {
        type: "number",
      },
      waitForTransition: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      arrowPath: {
        type: "text",
      },
      autoplay: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      interval: {
        type: "number",
      },
      pauseOnHover: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      pauseOnFocus: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      resetProgress: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      lazyLoad: {
        type: "select",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
          { label: "Nearby", value: "nearby" },
        ],
      },
      preloadPages: {
        type: "number",
      },
      keyboard: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      wheel: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      wheelMinThreshold: {
        type: "number",
      },
      wheelSleep: {
        type: "number",
      },
      releaseWheel: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      direction: {
        type: "select",
        options: [
          { label: "Left to right", value: "ltr" },
          { label: "Right to left", value: "rtl" },
          { label: "Top to bottom", value: "ttb" },
        ],
      },
      cover: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      slideFocus: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      focusableNodes: {
        type: "text",
      },
      isNavigation: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      trimSpace: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      omitEnd: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      updateOnMove: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      destroy: {
        type: "select",
        options: [
          { label: "True", value: true },
          { label: "Completely", value: "completely" },
        ],
      },
      mediaQuery: {
        type: "select",
        options: [
          { label: "Minimum", value: "min" },
          { label: "Maximun", value: "max" },
        ],
      },
      live: {
        type: "radio",
        options: [
          { label: "False", value: false },
          { label: "True", value: true },
        ],
      },
      breakpoints: {
        type: "object",
        objectFields: {
          600: {
            type: "object",
            objectFields: {
              perPage: { type: "number" },
            },
          },
          900: {
            type: "object",
            objectFields: {
              perPage: { type: "number" },
            },
          },
          1200: {
            type: "object",
            objectFields: {
              perPage: { type: "number" },
            },
          },
          1536: {
            type: "object",
            objectFields: {
              perPage: { type: "number" },
            },
          },
        },
      },
      reducedMotion: {
        type: "object",
        objectFields: {},
      },
      classes: {
        type: "object",
        objectFields: {},
      },
    },
  },
};
