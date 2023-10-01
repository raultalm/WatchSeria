import { getRating } from "../../tools/tools";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import { Genres } from "../Genres/Genres";
import style from "./style.module.css";

export function TVShowDetail({ tvShow, genres }) {
    const rating = getRating(tvShow)

    return <div>
        <div className={style.title}>
            {tvShow.name}
        </div>
        <div className={style.rating_container}>
            <FiveStarRating rating={rating} />
            <span className={style.rating}>{rating}/5</span>

        </div>
        <Genres genres={genres} />
        <div className={style.overview}>
            {tvShow.overview}
        </div>
    </div>;
}