import React, {ReactElement, useEffect} from 'react';
import {FC} from "react";
import {languages} from "../../service/GithubLanguagesList";
import {useSearchParams} from "react-router-dom";
import {setSelectedLanguage, setMyParam} from '../../store/slices/popular/popular';
import {getRepos} from "../../store/slices/popular/popular.thunk";
import {useAppDispatch, useAppSelector} from "../../hooks/storeHooks";

type TProps = {
    isLoading: boolean;
};

const LanguagesList: FC<TProps> = ({isLoading}): ReactElement => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedLanguage = useAppSelector(state => state.popular.selectedLanguage);
    const myParamValue: string | null = useAppSelector(state => state.popular.myParam);
    const currentMyParam: string | null = searchParams.get('lang');

    useEffect(() => {
        if(currentMyParam !== null) {
            setSearchParams({lang: currentMyParam});
        }
    }, []);

    useEffect(() => {
        setSearchParams({lang: selectedLanguage});
        dispatch(setMyParam(myParamValue));
        dispatch(getRepos(selectedLanguage));
    }, [selectedLanguage]);

    return (
        <ul className="languages">
            {languages.map((language, index) => (
                <li
                    key={index}
                    onClick={() => {
                        dispatch(setSelectedLanguage(language))
                    }}
                    style={{
                        color: language === selectedLanguage ? '#d0021b' : '#000000',
                        pointerEvents: isLoading ? 'none' : 'auto'
                    }}
                >
                    {language}
                </li>
            ))}
        </ul>
    );
};

export default LanguagesList;