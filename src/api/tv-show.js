import axios from "axios";
import { BASE_URL } from "../config";

export class TVShowAPI {
    static async fetchPopulars() {
        // perform request
        const response = await axios.get(`${BASE_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}&page=${Math.floor(Math.random() * 499)}`);

        // return the response
        return response.data.results;
    }

    static async fetchGenres() {
        // perform request
        const response = await axios.get(`${BASE_URL}genre/tv/list?api_key=${process.env.REACT_APP_API_KEY_PARAM}&language=en`);

        // return the response
        return response.data.genres;
    }


    static async fetchRecommendations(tvShowId) {
        // https://api.themoviedb.org/3/tv/{series_id}/recommendations

        // perform request
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`);

        // return the response
        return response.data.results;
    }

    static async fetchByTitle(title) {
        // https://api.themoviedb.org/3/search/tv

        // perform request
        const response = await axios.get(`${BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${title}`);

        // return the response
        return response.data.results;
    }

}