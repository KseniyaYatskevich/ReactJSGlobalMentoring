import { useState } from 'react';
import { clsx } from 'clsx';

import { genres } from './data';

import styles from './Navigation.module.scss';

export const Navigation = () => {
    const [active, setactive] = useState('All');

    return (
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {genres.map((genre) => {
                    return (
                        <li
                            role="menuitem"
                            className={clsx(styles.item, active === genre.name && styles.active)}
                            key={genre.id}
                            tabIndex={0}
                            onClick={() => setactive(genre.name)}
                            onKeyDown={() => setactive(genre.name)}
                        >
                            <a className={styles.link} href="#genre.name">
                                {genre.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.selector}>
                <span className={styles.label}>Sort by:</span>
                <select className={styles.selectWrapper}>
                    <option className={styles.selectItem} value="release date" defaultValue="release date">
                        release date
                    </option>
                    <option className={styles.selectItem} value="rating">
                        rating
                    </option>
                    <option className={styles.selectItem} value="popularity">
                        popularity
                    </option>
                </select>
            </div>
        </div>
    );
};
