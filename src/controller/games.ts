import { map, Observable } from "rxjs";
import { rawgWrap } from "../model/games";
import { deferrer } from "../util/promise2Observable";
import env from "../util/config";
import axiosMaster from "axios";

const axios = axiosMaster.create({
  baseURL: `${env.RAWG_API_URL}`,
  timeout: 1000,
});

axios.interceptors.request.use(function (config) {
  const token = env.RAWG_API_KEY;
  config.params = { ...config.params, key: token };
  return config;
});

const getAllGames = (): Observable<rawgWrap> => {
  console.log("axios call");
  return deferrer(axios.get(`/games`)).pipe(map((res) => res.data));
};

const getGamesFiltered = (filter: string): Observable<rawgWrap> => {
  return deferrer(axios.get(`/games?search=${filter}`));
};

export { getAllGames, getGamesFiltered };
