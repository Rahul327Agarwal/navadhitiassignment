import React from "react";
import "./styles.css";

export default function Comp(props) {
    const data = props.data;
    return (
        <>
            {data !== undefined && data.type === "dropdown" && (
                <>
                    <label for="cars">{data.label}:</label>
                    <br />
                    <select required={data.isRequired} readonly={data.isReadonly}>
                        {data.items.map((item) => {
                            return <option value={item.value}>{item.text}</option>;
                        })}
                    </select>
                    <br />
                </>
            )}
            {data !== undefined && data.type !== "dropdown" && (
                <>
                    <label>{data.label}:</label>
                    <br />
                    <input
                        type={data.type}
                        readonly={data.isReadonly}
                        required={data.isRequired}
                    />
                    <br />
                </>
            )}
        </>
    );
}
