import React, { useState } from 'react';
import { Paragraph, InputField, PageContent, Heading, Provider as BumbagProvider } from 'bumbag';
import { useParams } from 'react-router-dom'

const ListPage = () => {
  const [movies, setMovies] = useState(null);

  const fetchData = async() => {
    const response = "hello"
    setMovies(response)
  }

  let { listId } = useParams();

  return (
    <PageContent>
        <Heading>
            Watch List
        </Heading>
        <Paragraph>
            You can access your list any time at url/{listId}
        </Paragraph>
        <InputField label="Add to List" placeholder="Enter the movie here ..." />
    </PageContent>
  );
}

export default ListPage;
