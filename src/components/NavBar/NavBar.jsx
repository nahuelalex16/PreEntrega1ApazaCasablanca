import React, { useContext } from 'react'
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
import { CartContext } from '../../context/CartContext'

const NavBar = () => {
  const {} = useParams();

  const { cantidadProductos } = useContext(CartContext);

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
              <Link to={"/category/men's clothing"}>
                <MenuItem>Ropa de Hombre</MenuItem>
              </Link>
                
              <Link to={'/category/jewelery'}>
                <MenuItem>Joyeria</MenuItem>
              </Link>

              <Link to={'/category/electronics'}>
                <MenuItem>Electronicos</MenuItem>
              </Link>

              <Link to={"/category/women's clothing"}>
                <MenuItem>Ropa de Mujer</MenuItem>
              </Link>
  
            </MenuList>
          </Menu>

          <Box>
            <Link to={"/carrito"}>
              <CartWidget cantidad={cantidadProductos}/>
            </Link>
          </Box>
          



        </Flex>
    </div>
  )
}



export default NavBar