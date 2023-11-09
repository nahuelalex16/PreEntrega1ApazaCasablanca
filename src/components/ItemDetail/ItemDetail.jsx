import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom';
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter} from '@chakra-ui/react'


const ItemDetail = (productos) => {
    const { id } = useParams();
    const productosFiltro = productos.filter((producto) => producto.id == id);

  return (
    <>
    {productosFiltro.map((producto) => {
        <div key={producto.id}>
            
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={producto.image}
                alt={producto.title}
            />

            <Stack>
                <CardBody>
                <Heading size='md'>{producto.title}</Heading>

                <Text py='2'>
                    {producto.description}
                </Text>
                </CardBody>

                <CardFooter>
                <ItemCount/>
                </CardFooter>
            </Stack>
        </Card>
        </div>
    })}
    </>
  )
};

export default ItemDetail