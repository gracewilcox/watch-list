import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import { useHistory } from 'react-router-dom'
import { Box, Button, PageContent, Stack, Heading, Paragraph, InputField, FieldStack } from 'bumbag'

const CreateListPage = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  return (
    <PageContent>
      <Stack>
        <Heading>Create Movie List</Heading>
        <Paragraph>Create your own personal movie list here</Paragraph>
        <Formik
          initialValues={{ listName: ''}}
          onSubmit={ (data) => {
            setLoading(true);
            console.log(data);
            history.push('/1234')
            setLoading(false);
          }}
        >
          <Form>
            <FieldStack>
              <Field component={InputField.Formik} name='listName' label='listName' />
              <Box alignX='right'>
                <Button isLoading={loading} type='submit' palette='primary'>
                  Create List
                </Button>
              </Box>
            </FieldStack>
          </Form>
        </Formik>
      </Stack>
    </PageContent>
  );
  
}
  
 export default CreateListPage;