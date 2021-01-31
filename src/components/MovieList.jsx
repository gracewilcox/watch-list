import React from 'react';
import { Card } from 'bumbag';

export default function MovieList({ movies }) {
    return (
        movies.map(movie => {
            return <Card>movie.name</Card>
        })
    );
}