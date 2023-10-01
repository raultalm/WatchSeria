import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import style from "./style.module.css";
import movieLogo from "../../assets/images/movieLogo.png";
import { getRating } from "../../tools/tools";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import { Genres } from "../Genres/Genres";

const MAX_TITLE_CHAR = 20;
export function TVShowListItem({ tvShow, onClick, genres }) {

    const rating = getRating(tvShow);

    function getGenres() {
        const list = genres.filter(g => tvShow.genre_ids.includes(g.id));
        return list.map(g => g.name);
    }

    const onClick_ = () => {
        onClick(tvShow);
    };
    return <>
        <div className={style.container} onClick={onClick_}>
            {tvShow.backdrop_path
                ? <div className={style.imageContainer}>
                    <img alt={tvShow.name} src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
                        className={style.img} />
                    <Genres className={style.textOverlay} genres={getGenres()} />
                </div>
                : <div className={style.img_replacement}>
                    <img className={style.img_logo} src={movieLogo} alt="Logo" />
                    <Genres className={style.textOverlay} genres={getGenres()} />
                </div>}
            <div className={style.title}>
                {(tvShow.name.length > MAX_TITLE_CHAR) ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..." : tvShow.name}
                <FiveStarRating rating={rating} />
            </div>
        </div>
    </>
}