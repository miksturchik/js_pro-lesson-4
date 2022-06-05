import React, { ChangeEvent, FC, useState } from "react";
import "./Input.css";
interface PropsInputs {}

const Input: FC<PropsInputs> = () => {
    const [textInput, setText] = useState("");
    const [numberInput, setNumber] = useState(0);
    const [checkboxInput, setCheckbox] = useState(false);
    const [rangeInput, setRange] = useState(0);
    const [dateInput, setDate] = useState("");
    const [listInput, setList] = useState("One");
    const [radioInput, setRadio] = useState("");
    const [textareaInput, setTextarea] = useState("");
    const [resultInput, setResult] = useState(false);

    const onChange: Function = (
        event: ChangeEvent<HTMLInputElement>,
        setFunc: React.Dispatch<React.SetStateAction<any>>,
    ): void => {
        if (event.target.name === "checkbox") {
            setFunc(event.target.checked);
            return;
        }
        setFunc(event.target.value);
    };

    return (
        <div className="inputs">
            <label htmlFor="text">text</label>
            <input
                name="text"
                type="text"
                value={textInput}
                onChange={(event) => {
                    onChange(event, setText, String);
                }}
            />
            <label htmlFor="number">number</label>
            <input
                min={0}
                max={100}
                name="number"
                type="number"
                value={numberInput}
                onChange={(event) => {
                    onChange(event, setNumber, String);
                }}
            />
            <label htmlFor="checkbox">checkbox</label>
            <input
                name="checkbox"
                type="checkbox"
                checked={checkboxInput}
                onChange={(event) => {
                    onChange(event, setCheckbox, Boolean);
                }}
            />
            <label htmlFor="range">range {rangeInput}</label>
            <input
                min={0}
                max={100}
                name="range"
                type="range"
                value={rangeInput}
                onChange={(event) => {
                    onChange(event, setRange, String);
                }}
            />
            <label htmlFor="date">date {dateInput}</label>
            <input
                name="date"
                type="date"
                value={dateInput}
                onChange={(event) => {
                    onChange(event, setDate, String);
                }}
            />
            <label>list</label>

            <select
                value={onselect}
                onChange={(event) => {
                    onChange(event, setList, String);
                }}
            >
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
            </select>
            <label htmlFor="">radio</label>
            <form>
                <label htmlFor="radio">
                    <input
                        name="radio"
                        type="radio"
                        value="one"
                        checked={radioInput === "one"}
                        onChange={(event) => {
                            onChange(event, setRadio, String);
                        }}
                    />
                    one
                </label>
                <label htmlFor="radio1">
                    <input
                        name="radio"
                        type="radio"
                        value="two"
                        checked={radioInput === "two"}
                        onChange={(event) => {
                            onChange(event, setRadio, String);
                        }}
                    />
                    two
                </label>
                <label htmlFor="radio2">
                    <input
                        name="radio"
                        type="radio"
                        value="three"
                        checked={radioInput === "three"}
                        onChange={(event) => {
                            onChange(event, setRadio, String);
                        }}
                    />
                    three
                </label>
            </form>
            <label htmlFor="">textarea</label>
            <textarea
                value={textareaInput}
                onChange={(event) => {
                    onChange(event, setTextarea, String);
                }}
            ></textarea>

            <button
                onClick={() => {
                    setResult(!resultInput);
                }}
            >
                {resultInput ? "HIDE RESULT" : "VIEW RESULT"}
            </button>

            {resultInput && (
                <div className="result">
                    <h5>text: {textInput};</h5>
                    <h5>number: {numberInput};</h5>
                    <h5>checkbox: {String(checkboxInput)};</h5>
                    <h5>range: {rangeInput};</h5>
                    <h5>date: {dateInput};</h5>
                    <h5>list: {listInput};</h5>
                    <h5>radio: {radioInput};</h5>
                    <h5>textarea: {textareaInput}.</h5>
                </div>
            )}
        </div>
    );
};

export default Input;
