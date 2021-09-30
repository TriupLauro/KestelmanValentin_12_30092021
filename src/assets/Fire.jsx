import * as React from "react";

function SvgFire(props) {
  return (
    <svg
      width={17}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.905 7.866S11.838 2.381 8.032 0A6.713 6.713 0 015.5 4.859C3.875 6.287.819 9.5.851 12.925A7.856 7.856 0 005.165 20a4.98 4.98 0 011.742-3.444 4.066 4.066 0 001.558-2.731 7.32 7.32 0 013.875 6.101v.017a7.354 7.354 0 004.285-6.383c.27-3.218-1.492-7.593-3.056-9.023a8.49 8.49 0 01-2.664 3.33z"
        fill="red"
      />
    </svg>
  );
}

export default SvgFire;
