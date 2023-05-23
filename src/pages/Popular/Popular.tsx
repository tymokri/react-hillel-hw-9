import React, {FC, ReactElement} from 'react';
import LanguagesList from '../../components/LanguagesList';
import ReposItems from '../../components/ReposItems';
import Loader from '../../components/Loader';
import {useAppSelector} from "../../hooks/storeHooks";


const Popular: FC = (): ReactElement => {
    const isLoading = useAppSelector(state => state.popular.isLoading)

    return (
        <div>
            <LanguagesList
                isLoading={isLoading}
            />
            {isLoading
                ? <Loader />
                : <ReposItems />}
        </div>
    );
};

export default Popular;