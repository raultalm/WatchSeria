import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import style from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import movieLogo from "./assets/images/movieLogo.png";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { randomNumber } from "./tools/tools";
import { Footer } from "./components/Footer/Footer";



export function App() {

    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);
    const [backupRecommendationId, setBackupRecommendationId] = useState();
    const [genres, setgenres] = useState([]);

    /**
     *  We are doing this because TVShowAPI.fetchPopulars() is "async" and we cannot use "async" with the function of "useEffect()".
     * 
     * It could be also achieved with an annonymous function inside useEffect() that is directly called.
     */
    async function fetchPopulars() {
        try {
            const popularTVShowList = await TVShowAPI.fetchPopulars();
            if (popularTVShowList.length > 0) {
                const index = randomNumber(0, popularTVShowList.length - 1)
                setCurrentTVShow(popularTVShowList[index]);
                setBackupRecommendationId(index <= 0 ? popularTVShowList[index + 1].id : popularTVShowList[index - 1].id)
            }
        } catch (error) {
            alert("Something went wrong when fetching the popular TV Shows");
        }

    }

    async function fetchGenres() {
        try {
            const genresList = await TVShowAPI.fetchGenres();
            if (genresList.length > 0) {
                setgenres(genresList);
            }
        } catch (error) {
            alert("Something went wrong when fetching the popular TV Shows");
        }

    }

    async function fetchRecommendations(tvShowId, retryCount = 0) {
        try {
            const recommendationListResp = await TVShowAPI.fetchRecommendations(tvShowId);
            if (recommendationListResp && recommendationListResp.length > 0) {
                setRecommendationList(recommendationListResp.slice(0, 10));
            } else if (recommendationListResp && recommendationListResp.length <= 0 &&
                backupRecommendationId && tvShowId !== backupRecommendationId && retryCount < 2) {
                fetchRecommendations(backupRecommendationId, retryCount + 1);
            }
        } catch (error) {
            alert("Something went wrong when fetching the recommendations");
        }
    }

    async function fetchByTitle(title) {
        try {
            const searchresponse = await TVShowAPI.fetchByTitle(title);
            if (searchresponse && searchresponse.length > 0) {
                setCurrentTVShow(searchresponse[0]);
            }
        } catch (error) {
            alert("Something went wrong when searching for " + title);
        }

    }

    useEffect(() => {
        fetchPopulars();
        fetchGenres();
    }, []);

    useEffect(() => {
        if (currentTVShow !== undefined && currentTVShow.id !== undefined) {
            fetchRecommendations(currentTVShow.id);
        }
    }, [currentTVShow]);

    function updateCurrentTVShow(tvShow) {
        setCurrentTVShow(tvShow);
    }

    function getGenres() {
        const list = genres.filter(g => currentTVShow.genre_ids.includes(g.id));
        return list.map(g => g.name);
    }

    return <>
        <div className={`${style.mainContainer}`}
            style={{
                background: currentTVShow && currentTVShow.backdrop_path
                    ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                    : 'black'
            }}>
            <div className={style.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo img={movieLogo} title={"WatchSeria"} subtitle="Find Your Next TV Gem!" />
                    </div>
                    <div className="col-md-12 col-lg-4 pt-4 pt-lg-0">
                        <SearchBar onSubmit={fetchByTitle} />
                    </div>
                </div>
            </div>
            <div className={style.tvShowDetail}>
                {currentTVShow && <TVShowDetail genres={getGenres()} tvShow={currentTVShow} />}
            </div>
            <div className={style.recommendedTvShows}>
                {currentTVShow && <TVShowList genres={genres} list={recommendationList} onClickItem={updateCurrentTVShow} />}
            </div>
        </div>
        <Footer />
    </>;
}