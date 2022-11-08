import { ChangeEvent } from 'react';
import { Dropdown } from '../DropDown/DropDown';

import styles from './SortingDropDown.module.scss';

export const SortingDropdown = () => {
    const sortByParam = 'release_date';

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
        console.log(e.target.value);
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
