import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, HStack, Divider} from '@chakra-ui/react'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({ producto }) => {
    const { agregarItem, quitarItem, limpiarCarrito , existeProducto, carrito } = useContext( CartContext) 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [cantidad, setCantidad] = useState(0)
    
    const { id, image:img, title:nombre, description:descripcion,} = producto;
    const stockInicial = 10; //Acá deberia estar el stock de fakeAPI
    const [stock, setStock] = useState(stockInicial)

    const agregarAlCarrito = () => {
        agregarItem( producto, cantidad )
        setStock( stock-cantidad )
    }

    const vaciarCarrito = () => {
        limpiarCarrito()
        onClose()
        setStock(stockInicial)
    }

    const quitarDelCarrito = () => {
        quitarItem(id)
        setStock(stock+cantidad)
    }

  return (
    <div key={id}>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={img}
                alt={nombre}
            />

            <Stack>
                <CardBody>
                <Heading size='md'>{nombre}</Heading>

                <Text py='2'>
                    {descripcion}
                </Text>
                </CardBody>

                <Divider/>

                <CardFooter>
                    <Stack spacing='2vh'>
                        <Text size='10' ml='5'>
                            Stock: {stock}
                        </Text>

                        <HStack spacing='4vh'>
                            <ItemCount 
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                stock={stock}
                            />

                            {stock<=cantidad || cantidad === 0 ? 
                                <Button isDisabled onClick={agregarAlCarrito} variant='solid' colorScheme='blue'>
                                    Agregar al carrito
                                </Button> : 
                                <Button onClick={agregarAlCarrito} variant='solid' colorScheme='blue'>
                                    Agregar al carrito
                                </Button>}
                            
                            {existeProducto(id)? 
                                <Button onClick={quitarDelCarrito} variant='solid' colorScheme='red'>
                                    Quitar del carrito
                                </Button> : 
                                <Button isDisabled onClick={quitarDelCarrito} variant='solid' colorScheme='red'>
                                    Quitar del carrito
                                </Button>}
                            {console.log(existeProducto(id))}

                            {carrito.length === 0 ? 
                                <Button isDisabled onClick={onOpen} variant='solid' colorScheme='red'>
                                    Vaciar carrito
                                </Button> : 
                                <>
                                    <Button onClick={onOpen} variant='solid' colorScheme='red'>
                                        Vaciar carrito
                                    </Button>

                                    <AlertDialog
                                        isOpen={isOpen}
                                        onClose={onClose}
                                    >
                                        <AlertDialogOverlay>
                                        <AlertDialogContent>
                                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                            Atencion
                                            </AlertDialogHeader>

                                            <AlertDialogBody>
                                            ¿Estas seguro que quieres vaciar el carrito?
                                            </AlertDialogBody>

                                            <AlertDialogFooter>
                                            <Button onClick={onClose}>
                                                Cancelar
                                            </Button>
                                            <Button colorScheme='red' onClick={vaciarCarrito} ml={3}>
                                                Borrar
                                            </Button>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                        </AlertDialogOverlay>
                                    </AlertDialog>
                                </>
                            }
                        </HStack>

                    </Stack>
                        
                </CardFooter>
            </Stack>
        </Card>
    </div>
  )
};

export default ItemDetail