import * as React from "react";

function LoginArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={25} height={25} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)" fill="#fff">
        <path d="M24.841 11.03a.544.544 0 00-.768 0L12.5 22.602.927 11.03a.544.544 0 00-.768.768l11.957 11.957a.546.546 0 00.768 0l11.957-11.957a.544.544 0 000-.768z" />
        <path d="M24.841 1.246a.544.544 0 00-.768 0L12.5 12.819.927 1.247a.544.544 0 00-.768.768l11.957 11.957a.546.546 0 00.768-.001L24.841 2.014a.544.544 0 000-.768z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoLoginArrow = React.memo(LoginArrow);
export default MemoLoginArrow;
