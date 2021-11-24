import * as React from "react";

function SvgMessage(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.7 0H3.3C1.48 0 0 1.645 0 3.67v16.66C0 22.352 1.48 24 3.3 24h17.4c1.82 0 3.3-1.647 3.3-3.67V3.67C24 1.644 22.52 0 20.7 0zM3.3 2h17.4c.828 0 1.5.747 1.5 1.667v.952l-9.66 7.156a.892.892 0 01-1.08-.003L1.8 4.619v-.952C1.8 2.747 2.472 2 3.3 2zm17.4 19.997H3.3c-.828 0-1.5-.746-1.5-1.666V6.963l8.688 6.44c.46.341.986.512 1.512.512.528 0 1.052-.171 1.512-.511l8.688-6.44v13.363c0 .92-.672 1.666-1.5 1.666v.004z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessage;
