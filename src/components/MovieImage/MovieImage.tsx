import { useState } from 'react';

import brokenImage from '../../asset/images/emptyPoster.jpg';

import styles from './MovieImage.module.scss';

interface MovieImageProps {
    path: string;
    title: string;
}

export const MovieImage = ({ path, title }: MovieImageProps) => {
    const [imageFailed, setImageFailed] = useState(false);

    return (
        <>
            {!imageFailed ? (
                <img
                    src={path}
                    className={styles.image}
                    alt={title}
                    onError={() => setImageFailed(true)}
                    loading="lazy"
                />
            ) : (
                <img src={brokenImage} alt={title} className={styles.brokenImage} />
            )}
        </>
    );
};
