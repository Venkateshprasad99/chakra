import { useState } from 'react';
import { Link } from 'react-router-dom';
import{useForm,UseFieldArray, Controller} from 'react-router-dom';
import {
  Box,
  Input,
    FormControl,
    FormLabel,
    Button,
    Flex,
    Heading,
    FormErrorMessage,
  Stack,
  } from '@chakra-ui/react'
  import {
    Table, 
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
  import {ArrowbackIcon,DeleteIcon} from '@chakra-ui/icons'
  import { Select } from '@chakra-react-select';
  const Dynamicform = () =>{
  const{
    register,
    handlesubmit,
    form: {error},
    control,

  }=useForm();
  
  const onformsubmit = (data) => console.log(data);
return(
  <>
    
  <Box bg='tomato' mb='5' p={4} style={{borderRadius: "10px"}}>
<Flex alignItems = "center" gap = {2}>
    <Link to = "">
        <ArrowbackIcon w = {6} h = {6}/>
    </Link>
    <Heading as= "h3" size="lg" color="grey">
        DYNAMIC FORM
</Heading>

</Flex>
</Box>
</>
);

}
export default Dynamicform;