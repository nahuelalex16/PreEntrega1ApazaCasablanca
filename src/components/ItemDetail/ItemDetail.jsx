import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom';
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter} from '@chakra-ui/react'
import { useState, useEffect } from 'react'



const ItemDetail = (productos) => {
    const { id } = useParams();

    const getProducto = async () =>{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
    
        return data
    };

    const [producto, setProducto] = useState([]);

    useEffect(() => {
      getProducto().then((producto) => setProducto(producto))
    }, []);
    
    /* const productoFiltro = productos.filter((prod) => prod.id == id); */
    const { image, title, description } = producto;
    console.log(producto)

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
                src={image}
                alt={title}
            />

            <Stack>
                <CardBody>
                <Heading size='md'>{title}</Heading>

                <Text py='2'>
                    {description}
                </Text>
                </CardBody>

                <CardFooter>
                <ItemCount/>
                </CardFooter>
            </Stack>
        </Card>
    </div>
  )
};

export default ItemDetail