import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik'
import { Divider, Paragraph, InputField, PageContent, Heading, FieldStack, Box, Button, Stack, Card } from 'bumbag';
import { useParams } from 'react-router-dom'
//import MovieList from '../components/MovieList'

const ListPage = () => {
  const [loading, setLoading] = useState(false);

  let movies = ['hi', 'my']

  let { listId } = useParams();

  return (
    <PageContent>
        <Stack>
        <Heading>
            Watch List
        </Heading>
        <Paragraph>
            You can access your list any time at url/{listId}
        </Paragraph>
        <Formik
          initialValues={{ movieName: ''}}
          onSubmit={ (data) => {
            setLoading(true);
            console.log(data)
            setLoading(false);
          }}
        >
          <Form>
            <FieldStack>
              <Field component={InputField.Formik} name='movieList' label='Add movie to list' />
              <Box alignX='right'>
                <Button isLoading={loading} type='submit' palette='primary'>
                  Add movie
                </Button>
              </Box>
            </FieldStack>
          </Form>
        </Formik>
        <Divider />
        { movies.map(movie => 
            <Card>{movie}</Card>
        ) }
        </Stack>
    </PageContent>
  );
}

export default ListPage;
