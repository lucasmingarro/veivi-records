import React from "react";

const TidalIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width={props.size || "24"}
        height={props.size || "24"}
        {...props}
    >
        <path d="M-0.489,59.215L28.787,88.42l29.276-29.205L28.787,30.011L-0.489,59.215zM58.224,59.215L87.5,88.42l29.276-29.205L87.5,30.011L58.224,59.215zM146.213,30.011l-29.276,29.205l29.276,29.205l29.276-29.205L146.213,30.011z M58.224,117.784L87.5,146.989l29.276-29.205L87.5,88.58L58.224,117.784z"/>
    </svg>
);

export default TidalIcon;
