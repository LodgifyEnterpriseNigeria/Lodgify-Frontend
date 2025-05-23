import React from 'react'
import { AccordionContent, Accordion, AccordionItem, AccordionTrigger } from '../components/ui/accordion'


function AccordionDisplay() {

    const AccordionArray = [
        {
          title: 'What is LodgifyNG?',
          content: 'LodgifyNG is a platform that connects users with housing and real estate services in Nigeria.'
        },
        {
          title: 'How does LodgifyNG work?',
          content: 'Users can browse listings, contact service providers, and access various real estate services through our platform.'
        },
        {
          title: 'Is LodgifyNG free to use?',
          content: 'Yes, LodgifyNG is free for users to browse listings and access information.'
        }
      ]

  return (
    <div>
        <h2 className='text-4xl font-bold text-center text-[#5B21B6] mb-6'>Frequently Asked Questions</h2>
        <p className='text-center text-gray-600 mb-10'>Answers to frequently asked questions</p>
        <Accordion className='container mx-auto'>
            {AccordionArray.map((item, index) => 
            <AccordionItem value={index+1} key={index} className={"border border-gray-200 p-4 mb-2 rounded-md"}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>            
            </AccordionItem>
            )}
          </Accordion>
    </div>
  )
}

export default AccordionDisplay