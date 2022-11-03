import styles from './Search.module.scss';

interface SearchProps {
    searchString: string;
    handleSearch: (arg0: string) => void;
}

export const Search = ({ searchString, handleSearch }: SearchProps) => {
    const isSearchEmpty = searchString.trim().length === 0;
    const canSearch = searchString.trim().length > 1;

    const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(event.target.value);
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
                    value={searchString}
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
