import { PageContent, Heading, InputField } from 'bumbag'
import React, { useState, useEffect } from 'react';

const CreateListPage = () => {
	
	useEffect(() => {
		fetch('/createList').then(res => res.json()).then(data => {
			var id = data.id;
		});
	}, ["A Wacky List"]);
    
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