import { Heading, Divider } from '@chakra-ui/react'
import { Card, CardBody, Stack, CardFooter,  Button, Text,Image } from '@chakra-ui/react'
import {Product} from '../Assets/items'
import { useShopping } from '../Context/ShoppingCartContext'
import { formatCurrency } from '../../Assets/Utilities/formatCurrency'






const CardComponent = ({id,name,price,image}:Product) => {
  const {getItemQuantity,increaseQuantity,decreaseQuantity,removeQuantity} =useShopping()
    let quantity=getItemQuantity(id)
  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src={image}
        alt={name}
       //height="200px"
        //objectFit="cover"
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text color='blue.600' fontSize='2xl'>
        {formatCurrency(price)}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
    {quantity === 0 ? (<Button onClick={() => increaseQuantity(id)}>Add to cart</Button>):<div >
                <div  >
                    <Button onClick={() => decreaseQuantity(id)} >-</Button>
                    <span>{quantity}  item add to cart</span>
                    <Button onClick={() => increaseQuantity(id)}>+</Button>
                </div>
                <Button onClick={() => removeQuantity(id)} >Remove</Button>
                        </div>}
   { /*<Button variant='ghost' colorScheme='blue'>
          Add to cart
  </Button>*/}
      
    </CardFooter>
  </Card>
  )
}

export default CardComponent