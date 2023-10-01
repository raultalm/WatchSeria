import style from "./style.module.css";

export function Genres({ genres, className }) {
    return <div className={`${className}`}>
        <ul className={`${style.genresList}`}>
            {genres && genres.map((g, index) => <li key={g + index}>{g}</li>)}
        </ul>
    </div>;
}