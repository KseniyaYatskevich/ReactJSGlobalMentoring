import { createContext } from 'react';

// interface Movie {
//     id: number;
//     title: string;
//     tagline: string;
//     vote_average: number;
//     vote_count: number;
//     release_date: string;
//     poster_path: string;
//     overview: string;
//     budget: number;
//     revenue: number;
//     genres: string[];
//     runtime: number;
// }

interface MovieContextType {
    // poster_path: string;
    // title: string;
    // vote_average: string;
    // genres: string[];
    // release_date: string | number | Date;
    // runtime: number;
    // overview: string;
    movie: {
        id: number;
        title: string;
        tagline: string;
        vote_average: number;
        vote_count: number;
        release_date: string;
        poster_path: string;
        overview: string;
        budget: number;
        revenue: number;
        genres: string[];
        runtime: number;
    };
    setShowDescription: (arg0: boolean) => void;
    showDescription: boolean;
}

const MovieContext = createContext<MovieContextType>({
    movie: {
        id: 0,
        title: '',
        tagline: '',
        vote_average: 0,
        vote_count: 0,
        release_date: '',
        poster_path: '',
        overview: '',
        budget: 0,
        revenue: 0,
        genres: [],
        runtime: 0
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setShowDescription: () => {},
    showDescription: false
});

export default MovieContext;
