import { clsx } from 'clsx';

import { genres } from './genres';

import { SortingDropdown } from '../SortingDropdown/SortingDropdown';

import styles from './Navigation.module.scss';

interface NavigationProps {
    selectedGenre: string;
    sorting: string;
    handleToggle: (arg0: string) => void;
    handleSorting: (arg0: string) => void;
}

export const Navigation = ({ selectedGenre, sorting, handleToggle, handleSorting }: NavigationProps) => {
    const activeGenre = selectedGenre ? selectedGenre : 'All';

    return (
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {genres.map((genre) => {
                    return (
                        <li
                            role="menuitem"
                            className={clsx(styles.item, activeGenre === genre.value && styles.active)}
                            key={genre.id}
                            tabIndex={0}
                            onClick={() => handleToggle(genre.value)}
                            onKeyDown={() => handleToggle(genre.value)}
                        >
                            <a className={styles.link} href="#genre.value">
                                {genre.value}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.selector}>
                <SortingDropdown handleSorting={handleSorting} sorting={sorting} />
            </div>
        </div>
    );
};
