import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import { Box, Button, PageContent, Stack, Heading, Paragraph, InputField, FieldStack } from 'bumbag'

const CreateListPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <PageContent>
      <Stack>
        <Heading>Create Movie List</Heading>
        <Paragraph>Create your own personal movie list here</Paragraph>
        <Formik
          initialValues={{ listName: ''}}
          onSubmit={async (data) => {
            setLoading(true);
            console.log(data);
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