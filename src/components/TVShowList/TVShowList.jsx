import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import style from "./style.module.css";

export function TVShowList({ list, onClickItem, genres }) {
    return (
        <div>
            <div className={style.title}>If You Loved This, Get Ready to ADORE These!</div>
            <div key={Math.random()} className={style.list}>
                {list.map((tvShow) => {
                    return (
                        <span className={style.tvShowItem} key={tvShow.id}>
                            <TVShowListItem
                                genres={genres}
                                tvShow={tvShow}
                                onClick={onClickItem} />
                        </span>
                    );
                })}
            </div>
        </div>
    );
}