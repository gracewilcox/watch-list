import React, { useState } from 'react';
import { Button, InputField, PageContent, Heading, Provider as BumbagProvider } from 'bumbag';

function App() {
  const [movies, setMovies] = useState(null);

  const fetchData = async() => {
    const response = "hello"
    setMovies(response)
  }

  return (
    <BumbagProvider>
      <PageContent>
        <Heading>
          Watch List
        </Heading>
        <InputField label="Add to List" placeholder="Enter the movie here ..." />
      </PageContent>
    </BumbagProvider>
  );
}

export default App;
