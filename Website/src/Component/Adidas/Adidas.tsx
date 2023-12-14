
import CardComponent from './CardComponent'
import {Product, Storeitems} from '../Assets/items'
import { Box, Flex, Heading, Radio, RadioGroup,  } from '@chakra-ui/react'
import { useState } from 'react'



const Adidas = () => {
  const [value, setValue] = useState<string>('');
  let newStoreitems: Product[] = Storeitems.map((product) => ({ ...product }));
  const handleChange = (newValue: string) => {
    setValue(newValue);
    console.log(value)
  };
if (value === 'low'){
  newStoreitems=[...Storeitems].sort((a, b) => a.price - b.price);
  
}else{
  newStoreitems=[...Storeitems].sort((a, b) => b.price - a.price);
}


  return (
    <>
     <Box p={4}>
     <Heading>Sort By</Heading>
        <RadioGroup onChange={handleChange} value={value}>
          <Radio value="low">low to high</Radio>
          <Radio value="high">high to low</Radio>
          
        </RadioGroup>
      </Box>
    <Flex wrap="wrap" gap={6}  padding="4" justify="center">
      {newStoreitems.map((product) => (
        <CardComponent key={product.id} {...product}/>
      ))}
    </Flex>
    </>

   
  )
}

export default Adidas