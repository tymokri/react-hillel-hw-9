import React, {FC, ReactElement} from 'react';

type TProps = {
    avatar: string;
    username: string;
    children: React.ReactNode;
};

const PlayerPreview: FC<TProps> = ({avatar, username, children}): ReactElement => {
    return (
        <div className="column">
            <img
                className="avatar"
                src={avatar}
                alt="Avatar"
            />
            <h2
                className="username"
            >
                @{username}
            </h2>
            {children}
        </div>
    );
};

export default PlayerPreview;