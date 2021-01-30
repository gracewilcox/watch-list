import React, { useState } from 'react';
import { Button, InputField, PageContent, Heading, Provider as BumbagProvider } from 'bumbag';

const ListPage = () => {
  const [movies, setMovies] = useState(null);

  const fetchData = async() => {
    const response = "hello"
    setMovies(response)
  }

  return (
    <PageContent>
        <Heading>
            Watch List
        </Heading>
        <InputField label="Add to List" placeholder="Enter the movie here ..." />
    </PageContent>
  );
}

export default ListPage;
