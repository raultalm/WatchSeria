import { useState } from "react";
import style from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function SearchBar({ onSubmit }) {

    const [value, setValue] = useState("");

    function submit(event) {
        if (event.key === "Enter" && event.target.value.trim() !== "") {
            onSubmit(event.target.value);
            setValue("");
        }
    }

    function handleChange(event) {
        setValue(event.target.value);
    }

    return <>
        <SearchIcon size={27} className={style.icon} />
        <input onKeyUp={submit}
            onChange={handleChange}
            className={style.input}
            type="text"
            value={value}
            placeholder="Search a TV show you may like"></input>
    </>;
}