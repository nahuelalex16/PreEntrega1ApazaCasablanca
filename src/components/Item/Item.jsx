import React, { useContext, useState } from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Badge, WrapItem, Tag, useDisclosure, Center, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, VStack } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({producto}) => {

    const { id, title:nombre, price:precio, image:img, category:categoria, rating:{count:stock} } = producto

    const { agregarItem } = useContext(CartContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const agregarAlCarrito = () => {
        agregarItem(producto, cantidad);
        onClose();
    }

    const [cantidad, setCantidad] = useState(0)

  return (
    <div>
        <WrapItem>
            <div key={id}>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src={img}
                            alt={nombre}
                            borderRadius='md'
                            maxH='30vh'
                            minW='15rem'
                        />
                        <Stack mt='6' spacing='1'>
                            <Heading size='md'>{nombre}</Heading>
                            <Text color='blue.600' fontSize='2xl'>
                                ${precio}
                            </Text>

                        </Stack>
                        <Tag>Categoria: {categoria}</Tag>
                    </CardBody>

                    <Divider />

                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Link to={`/item/${id}`}>
                                <Button variant='solid' colorScheme='blue'>
                                    Detalles
                                </Button>
                            </Link>
                            

                            <Button onClick={onOpen} variant='ghost' colorScheme='blue'>
                                Agregar al carrito
                            </Button>

                            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                <ModalHeader>{nombre}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>

                                    <Image
                                        src={img}
                                        alt={nombre}
                                        borderRadius='md'
                                        maxH='30vh'
                                        minW='15rem'
                                    />

                                    <Center>
                                        <VStack mt='6' mb='4' spacing='1'>
                                            <Heading size='md' textAlign='center'>{stock}</Heading>
                                            <Text color='blue.600' fontSize='2xl'>
                                                ${precio}
                                            </Text>
                                        

                                            <ItemCount 
                                                cantidad={cantidad}
                                                setCantidad={setCantidad}
                                                stock={stock}
                                            />
                                        </VStack>

                                    </Center>



                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={agregarAlCarrito} >
                                    Agregar al carrito
                                    </Button>
                                    <Button variant='ghost'onClick={onClose}>Cancelar</Button>
                                </ModalFooter>
                                </ModalContent>
                            </Modal>

                        </ButtonGroup>
                    </CardFooter>

                </Card>
            </div>
        </WrapItem>
    </div>
  )
}

export default Item