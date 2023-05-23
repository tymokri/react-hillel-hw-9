import axios from "axios";
import {IRepos, IProfile, ISinglePlayerData, Players} from "./types";

const handleError = (error: string): void => console.log(error);

export const fetchPopularRepos = async (language: string): Promise<IRepos[] | undefined> => {
    try {
        const encodeURI: string = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
        const response = await axios.get(encodeURI);
        if (response.status === 200) {
            return response.data.items
        }
    } catch (error: any) {
        handleError(error);
        throw new Error(error);
    }
};

const getProfile = async (username: string): Promise<Response | undefined> => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        if (response.status === 200) {
            return response.data
        }
    } catch (error: any) {
        handleError(error);
        throw new Error(error);
    }
};

const getRepos = async (username: string): Promise<Response | undefined> => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error: any) {
        handleError(error);
        throw new Error(error);
    }
};

const getStarCount = (repos: Array<IRepos>): number => {
    return repos.reduce((acc: number, repo: IRepos) => acc + repo.stargazers_count, 0);
};

const calculateScore = (profile: IProfile, repos: Array<IRepos>): number => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);
    return followers * totalStars;
};

const getUserData = async (username: string): Promise<ISinglePlayerData | undefined> => {
    try {
        const [profile, repos]: [IProfile | undefined, any] = await Promise.all([
            getProfile(username),
            getRepos(username)
        ]);
        if (profile && repos) {
            return {
                profile,
                score: calculateScore(profile, repos)
            }
        }
    } catch (error: any) {
        handleError(error);
    }
};

const sortPlayers = (players: Array<ISinglePlayerData>): ISinglePlayerData[] => players.sort((a, b) => b.score - a.score);

export const goBattle = async (players: Players): Promise<ISinglePlayerData[] | undefined> => {
    try {
        const battleResult: Array<any> = await Promise.all(players.map(getUserData));
        if (battleResult) {
            return sortPlayers(battleResult);
        }
    } catch (error: any) {
        throw new Error(error);
    }
};