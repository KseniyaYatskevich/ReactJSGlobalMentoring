import { useState } from 'react';

import styles from './MovieForm.module.scss';

interface MovieFormProps {
    title: string;
}

export const MovieForm = ({ title }: MovieFormProps) => {
    const [name, setName] = useState('');

    return (
        <>
            <div className={styles.title}>{title}</div>
            <form className={styles.form}>
                <div className={styles.inputSection}>
                    <label htmlFor="title" className={styles.label}>
                        Title
                    </label>
                    <input
                        id="title"
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Moana"
                    />
                </div>
                <div className={styles.inputSection}>
                    <label htmlFor="release_date" className={styles.label}>
                        Release date
                    </label>
                    <input
                        id="release_date"
                        className={styles.input}
                        type="date"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Select date"
                    />
                </div>
                <div className={styles.inputSection}>
                    <label htmlFor="filmTitle" className={styles.label}>
                        Movie url
                    </label>
                    <input
                        id="filmTitle"
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="https://"
                    />
                </div>
                <div className={styles.inputSection}>
                    <label htmlFor="filmTitle" className={styles.label}>
                        Rating
                    </label>
                    <input
                        id="filmTitle"
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="7.8"
                    />
                </div>
                <div className={styles.inputSection}>
                    <label htmlFor="filmTitle" className={styles.label}>
                        Genre
                    </label>
                    <input
                        id="filmTitle"
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Select genres"
                    />
                </div>
                <div className={styles.inputSection}>
                    <label htmlFor="filmTitle" className={styles.label}>
                        Runtime
                    </label>
                    <input
                        id="filmTitle"
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="minutes"
                    />
                </div>
                <div className={styles.textAreaSection}>
                    <label htmlFor="filmTitle" className={styles.label}>
                        Overview
                    </label>
                    <textarea
                        id="filmTitle"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Movie description"
                    />
                </div>
                <div className={styles.actionBtn}>
                    <button type="reset" className={styles.btn}>
                        Reset
                    </button>
                    <button type="submit" className={styles.btn}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};
