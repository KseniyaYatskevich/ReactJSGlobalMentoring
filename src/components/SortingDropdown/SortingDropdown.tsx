import { ChangeEvent } from 'react';
import { Dropdown } from '../DropDown/DropDown';

import styles from './SortingDropDown.module.scss';

interface SortingProps {
    sorting: string;
    handleSorting: (arg0: string) => void;
}

export const SortingDropdown = ({ sorting, handleSorting }: SortingProps) => {
    const sortByParam = sorting || 'release_date';

    const sortByOptions = [
        {
            value: 'release_date',
            text: 'release date'
        },
        {
            value: 'vote_count',
            text: 'popularity'
        },
        {
            value: 'vote_average',
            text: 'rating'
        }
    ];

    const onSortSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        handleSorting(e.target.value);
    };

    return (
        <div className={styles.sortingDropdown}>
            <label className={styles.label} htmlFor="sortingDropdown">
                Sort by:
            </label>
            <Dropdown options={sortByOptions} id="sortingDropdown" selected={sortByParam} onChange={onSortSelect} />
        </div>
    );
};
