import React from 'react'
import { Box, Flex, Button, Center } from '@chakra-ui/react'

const ItemCount = ({cantidad, setCantidad, stock}) => {

  const sumar = () => {
    if (cantidad === stock) return;
    setCantidad(cantidad+1)
  }

  const restar = () => {
    if (cantidad === 0) return;
    setCantidad(cantidad-1)
  }

  return (
    <div>
        <Flex gap='2'>
            {cantidad === 0 ? <Button isDisabled variant='outline' bg='gray.100' onClick={restar}>-</Button> : <Button variant='outline' bg='gray.100' onClick={restar}>-</Button>}
            <Box borderRadius='md' bg='gray.100' maxW='sm' py='2' px='5' textAlign='center'>
                {cantidad}
            </Box>
            {cantidad === stock ? <Button isDisabled variant='outline' bg='gray.100' onClick={sumar}>+</Button> : <Button variant='outline' bg='gray.100' onClick={sumar}>+</Button> }
        </Flex>
    </div>
  )
}

export default ItemCount