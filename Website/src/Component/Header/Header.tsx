
import { Box, Button, Circle, Flex, Heading,  Icon,  Spacer, Stack,  } from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa';
import CustomNavLink from './CustomNavLink'
import { useShopping } from '../Context/ShoppingCartContext';
import { useState } from 'react';
import { CartItem } from '../Context/CartItem';
import { Storeitems, nikeItems } from '../Assets/items';
import { formatCurrency } from '../../Assets/Utilities/formatCurrency';




const Header = () => {
  const {cartQuantity,cartItem}=useShopping()
  const [showCard, setShowCard] = useState<boolean>(false);

  const handleClick = () => {
    setShowCard(true);
  };
  const closeHandler=()=>{
    setShowCard(false);
  }
    
  return (


    <Box bg="#666699" w='100%' p={4} color='white'   >
  <Flex minWidth='max-content' alignItems='center' gap='2' >
    <Box p='2'>
      <Heading size='md'>JUTTAPASAL</Heading>
    </Box>
    <Spacer />
    <CustomNavLink to="/" > Home</CustomNavLink>
    <CustomNavLink to="/adidas" > Adidas</CustomNavLink>
    <CustomNavLink to="/nike" > Nike</CustomNavLink>
    {cartQuantity>0 && <Button bg="#666699"  _hover={{ bg:'#666699' }} onClick={handleClick} >

    <Box position="relative">
        {/* Shopping Cart Circle */}
        <Circle size="40px" bg="teal.500" borderRadius="full" zIndex="1">
          {/* Shopping Cart Icon */}
          <Icon as={FaShoppingCart} color="white" boxSize={6} />
        </Circle>

        {/* Notification Circle */}
        <Circle
          size="19px"
          bg="red.500"
          borderRadius="full"
          position="absolute"
          top="-1"
          right="-1"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* Notification Count */}
          <Box color="white" fontSize="sm" fontWeight="bold">
           {cartQuantity}{/* Replace with the actual count or use dynamic data */}
          </Box>
        </Circle>
      </Box>
     
      {showCard && (
        
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100vh"
          background="rgba(0, 0, 0, 0.5)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="1"
         >
            <Box
            padding="4"
            borderRadius="md"
            background="white"
            shadow="md"
              >
           <Box>
           <Button onClick={closeHandler}>close</Button>
           </Box>
             <Stack gap={3}>
             {cartItem.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItem.reduce((total, cartItem) => {
                const item = Storeitems.find(i => i.id === cartItem.id) || nikeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
           </Stack>
           
          </Box>
         
        </Box>
      )}
     </Button>}
     </Flex>


  </Box>

  
  )
}

export default Header