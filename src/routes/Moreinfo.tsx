import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import "../assets/styles/Moreinfo.css"

function Moreinfo(props:any) {
    const isMobile = props.isMobile;
    const screenSize = props.screenSize;
    const _v = props.viewport_info;

    return (
        <div className="container-moreinfo">
            Moreinfo
        </div>
    )
}

export default Moreinfo;