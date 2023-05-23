import React, {ChangeEvent, FC, ReactElement, useState} from 'react';
import {setPlayerData} from "../../store/slices/battle/battle";
import {useAppDispatch} from "../../hooks/storeHooks";

type TProps = {
    id: string;
    label: string;
};

const PlayerInput: FC<TProps> = ({id, label}): ReactElement => {
    const [userName, setUserName] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        dispatch(setPlayerData({
            id: id,
            value: userName
        }));
    };

    return (
        <form
            className="column"
            onSubmit={handleSubmit}
        >
            <label
                className="header"
                htmlFor="userName"
            >
                {label}
            </label>
            <input
                id="userName"
                type="text"
                placeholder="Github username"
                autoComplete="off"
                value={userName}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => setUserName(e.target.value)}
            />
            <button
                className="button"
                type="submit"
                disabled={!userName}
            >
                Submit
            </button>
        </form>
    );
};

export default PlayerInput;