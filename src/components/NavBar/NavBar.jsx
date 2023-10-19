import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Flex, Spacer, Box, Button, Heading, ButtonGroup } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'


const NavBar = () => {
  return (
    <div>
        

        <Flex minWidth='max-content' alignItems='center' gap='2' padding='2' bgColor='gray.100'>
          <Box p='2'>
            <Heading fontSize='xl' fontWeight='bold' color='#2874A6'>My Ecommerce</Heading>
          </Box>
          <Spacer/>
          <ButtonGroup gap='2'>
            <Button color='#5DADE2'>Contacto</Button>
            <Button color='#5DADE2'>Catalogo</Button>            
          </ButtonGroup>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>Categorias</MenuButton>
            <MenuList>
              <MenuItem>Categoria 1</MenuItem>
              <MenuItem>Categoria 2</MenuItem>
              <MenuItem>Categoria 3</MenuItem>
            </MenuList>
          </Menu>

          <Box m='1'>
            <CartWidget/>
          </Box>


        </Flex>
        
        
    </div>
  )
}

export default NavBar