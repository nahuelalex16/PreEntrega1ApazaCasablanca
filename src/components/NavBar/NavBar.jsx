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
import { Link, useParams } from 'react-router-dom'

const NavBar = () => {
  const {} = useParams()

  return (
    <div>
        

        <Flex minWidth='max-content' alignItems='center' gap='2' padding='2' bgColor='gray.100'>
          <Box p='2'>

            <Link to={`/`}>
              <Heading fontSize='xl' fontWeight='bold' color='#2874A6'>My Ecommerce</Heading>
            </Link>
            
          </Box>
          <Spacer/>
          <ButtonGroup gap='2'>
            
{/*             <Link to={"/contaco"}>
 */}              <Button color='#5DADE2'>Contacto</Button>
{/*             </Link> */}
            
{/*             <Link to={"/catalogo"}> */}
              <Button color='#5DADE2'>Catalogo</Button> 
{/*             </Link> */}
                       
          </ButtonGroup>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>Categorias</MenuButton>
            <MenuList>
              <MenuItem>categoria1</MenuItem>
            </MenuList>
          </Menu>

          <Box>
            {/* <Link to={"/carrito"}> */}
              <CartWidget/>
            {/* </Link> */}
          </Box>
          



        </Flex>
    </div>
  )
}



export default NavBar