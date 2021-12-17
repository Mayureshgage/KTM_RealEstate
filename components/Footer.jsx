import { Flex,Box, Text } from '@chakra-ui/layout';

const Footer = () => (
  <div>
    <Flex display='flex' justifyContent='center' alignItems="center" marginTop="50"  paddingBottom='0'>
    <Box textAlign='center'  color='gray.600' borderTop='1px' borderColor='black'>
   <Text fontWeight='bold' fontSize='3xl'> Contact us @</Text>
   <Text fontSize='xl'> NCRD'S Sterling Enterprises.</Text>
   <Text fontSize='xl'> Near seawoods Railway station.</Text>
   <Text fontSize='xl'> +91-22-27702282.</Text>
   <Text textAlign='center' p='10' color='gray.600' borderTop='1px' borderColor='gray.100'>
    © 2021 KTM RealEsate, Inc.
  </Text>
  </Box>
  
  </Flex>
  </div>
  
);

export default Footer;