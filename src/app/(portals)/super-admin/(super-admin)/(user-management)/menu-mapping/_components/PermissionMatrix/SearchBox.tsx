import React, { ChangeEvent } from 'react';

import { Input } from '@components/index';

import styles from './styles.module.scss';

interface SearchBoxProps {
    searchState: string;
    handleSearchState: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = (props: SearchBoxProps) => {
    const { searchState, handleSearchState } = props;

    return (
        <Input
            name='search'
            value={searchState}
            placeholder='Search'
            className={styles['search-box']}
            onChange={handleSearchState}
        />
    );
};
export default SearchBox;
