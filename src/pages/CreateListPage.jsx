import { PageContent, Heading, InputField } from 'bumbag'

const CreateListPage = () => {
    
    return (
      <PageContent>
          <Heading>
              Create Movie List!
          </Heading>
          <InputField label="Name of your list" placeholder="Enter list name here ..." />
      </PageContent>
    );
  }
  
  export default CreateListPage;