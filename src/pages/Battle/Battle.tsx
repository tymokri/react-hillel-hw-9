import React, {FC, ReactElement, useEffect} from 'react';
import {Link} from "react-router-dom";
import PlayerInput from "../../components/PlayerInput";
import PlayerPreview from '../../components/PlayerPreview';
import {resetPlayerData} from '../../store/slices/battle/battle';
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks";


const Battle: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const playerData = useAppSelector(state => state.battle);

    useEffect(() => {
        handleResetPlayerData('playerOne');
        handleResetPlayerData('playerTwo');
    }, []);

    const handleResetPlayerData = (id: string): void => {
        dispatch(resetPlayerData(id));
    };

    return (
        <div>
            <div className="row">
                {!playerData.playerOneImage
                    ?
                    <PlayerInput
                        id='playerOne'
                        label='Player 1'
                    />
                    :
                    <PlayerPreview
                        avatar={playerData.playerOneImage}
                        username={playerData.playerOneName}
                    >
                        <button
                            className="reset"
                            onClick={() => handleResetPlayerData('playerOne')}
                        >
                            Reset
                        </button>
                    </PlayerPreview>}

                {!playerData.playerTwoImage
                    ?
                    <PlayerInput
                        id='playerTwo'
                        label='Player 2'
                    />
                    :
                    <PlayerPreview
                        avatar={playerData.playerTwoImage}
                        username={playerData.playerTwoName}
                    >
                        <button
                            className="reset"
                            onClick={() => handleResetPlayerData('playerTwo')}
                        >
                            Reset
                        </button>
                    </PlayerPreview>}
            </div>

            {playerData.playerOneImage && playerData.playerTwoImage &&
                <Link
                    className="button"
                    to={{
                        pathname: 'results',
                        search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
                    }}
                >
                    Battle
                </Link>}
        </div>
    );
};

export default Battle;