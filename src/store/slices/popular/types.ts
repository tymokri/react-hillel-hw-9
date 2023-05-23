export interface PopularState {
    selectedLanguage: string,
    isLoading: boolean,
    repos: Array<IRepos>,
    error: string,
    myParam: string | null
}

export interface IRepos {
    [key: string]: any
}

export type IReposArray = IRepos[]