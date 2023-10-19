import React from 'react'
import { Heading } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
    <Heading as='h1' size='2xl' noOfLines={1} textAlign='center' marginTop='8rem'>
      {greeting}
    </Heading>
    </div>


  )
}

export default ItemListContainer