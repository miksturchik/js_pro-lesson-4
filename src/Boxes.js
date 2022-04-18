import "./Boxes.css";

function Boxes({ cssClass, label, titleSize }) {
    const textStyle = {
        fontSize: titleSize + "px",
    };

    return (
        <div className={cssClass}>
            <p style={textStyle}>{label}</p>
        </div>
    );
}

export default Boxes;
