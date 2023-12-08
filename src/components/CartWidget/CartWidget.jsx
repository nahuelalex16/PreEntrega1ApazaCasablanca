import React from 'react'
import { Tag } from '@chakra-ui/react'
import { CiShoppingCart } from "react-icons/ci";

const CartWidget = ({ cantidad }) => {

  return (
    <div>
        <CiShoppingCart size={30}/>
        <span>
          {/* {cantidad == null ? <Tag>0</Tag> : <Tag>{cantidad.length}</Tag>} */}
          <Tag>{cantidad}</Tag>
        </span>
    </div>
  )
}

export default CartWidget