export interface ResultsState {
    isLoading: boolean,
    players: Array<ISinglePlayerData>,
    error: null,
    standoff: boolean
}

export interface PlayerProfileData {
    [key: string]: any
}

export interface ISinglePlayerData {
    profile: PlayerProfileData,
    score: number
}

export type ISinglePlayerDataArray = ISinglePlayerData[]