import { useState } from 'react';
import styles from './Search.module.scss';

export const Search = () => {
    const [search, setSearch] = useState('');

    const isSearchEmpty = search.trim().length === 0;
    const canSearch = search.trim().length > 1;

    const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const onSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Find your movie</h1>
            <form role="search" autoComplete="off" className={styles.search} onSubmit={onSearchSubmit}>
                <input
                    className={styles.input}
                    maxLength={50}
                    type="search"
                    placeholder="What do you want to watch?"
                    value={search}
                    onChange={onSearchValueChange}
                />
                <button
                    className={styles.button}
                    type="submit"
                    disabled={isSearchEmpty || !canSearch}
                    aria-label="Search"
                >
                    Search
                </button>
            </form>
        </div>
    );
};
