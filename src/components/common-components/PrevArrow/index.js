import React from 'react'

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "transparent", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", padding: "4px", color: "black" }}
            onClick={onClick}
        >
        </div>
    );
}

export default PrevArrow