import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
    Box,
    Input,
      FormControl,
      FormLabel,
      Button,
      Flex,
      Heading,
      Spacer,
      FormErrorMessage,
    Stack,
} from '@chakra-ui/react'
import {ArrowBackIcon,AddIcon} from '@chakra-ui/icons'
const Form = () =>{
    const {register,handleSubmit,formState:{errors}} = useForm();
    const onFormSubmit = (data) => console.log(data);
    
    return(
        <>
          
        <Box bg='black' mb='5' p={4} style={{borderRadius: "10px"}}>
      <Flex alignItems = "center" gap = {2}>
          <Link to = "">
              <ArrowBackIcon w = {6} h = {6}/>
          </Link>
          <Heading as= "h3" size="lg" color="grey">
               Form
      </Heading>
      <Spacer/>
      <Link to = "">
        <Button colorScheme="red">
            <AddIcon w={4} h={4} pr={2}/>

        </Button>
        </Link>
        </Flex>
        </Box>
        <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box bg='white' mb='5' p={4} style={{borderRadius: "10px"}}>
            <Stack spacing={4}>

                <FormControl isInvalid={errors.name}>
                    <FormLabel color="green">Name</FormLabel>
                    <Input type="text"  placeholder="Name" {...register("name",{required: "Name Field is Empty"})}/>
                    <FormErrorMessage>
                    {errors?.name && errors.name.message}
                    </FormErrorMessage>
                  
                </FormControl>

                <FormControl isInvalid={errors.age}>
                    <FormLabel color="green">Age</FormLabel>
                    <Input type="text" placeholder="Age" {...register("age",
                    {required:
                         {value:true,message:"age field is not empty",},
                         min:{
                            value:20,
                            message: "age must be greater than 20 ",
                         },
                         })}/>
                    <FormErrorMessage>
                        {errors?.age && errors.age.message}
                    </FormErrorMessage>
                </FormControl>
                <Button colorScheme="blue" type="Submit">
                    Submit
                </Button>
                </Stack> 
                </Box>
        </form>
          
         
      
      
      </>
      );
};
export default Form;

