import React from 'react'
import { useState } from "react";
import { Box, Flex, Button } from '@chakra-ui/react'

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1)

  return (
    <div>
        <Flex gap='2'>
            <Button variant='outline' bg='gray.100' onClick={() => cantidad > 1 ? setCantidad(cantidad - 1) : true}>-</Button>
            <Box borderRadius='md' bg='gray.100' maxW='sm' p='2'>
                {cantidad}
            </Box>
            <Button variant='outline' bg='gray.100' onClick={() => setCantidad(cantidad + 1)}>+</Button>
        </Flex>
    </div>
  )
}

export default ItemCount