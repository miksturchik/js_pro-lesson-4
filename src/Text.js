import "./Text.css";

function Text({ text, textColor, textSize, underline }) {
    let line = "";
    if (underline === true) {
        line = "underline";
    } else {
        line = "none";
    }
    const styles = {
        fontSize: textSize,
        color: textColor,
        underline: line,
    };
    return (
        <div className="Text" style={styles}>
            {text}
        </div>
    );
}

export default Text;
