import React from 'react'
import { Box, Flex, Wrap } from '@chakra-ui/react'
import Item from './Item'

const ItemList = ({catalogo}) => {
  return (
    <>
      <Box mt='8'>
          <Flex flexWrap='wrap' justifyContent='center' gap='3rem'>
          {catalogo.map((prod) => (
                <Item
                    key={prod.id}
                    id={prod.id}
                    nombre={prod.title}
                    precio={prod.price}
                    img={prod.image}
                    categoria={prod.category}
                    stock={prod.count}
                    />
          ))}
          </Flex>
      </Box>
    </>
  )
}

export default ItemList