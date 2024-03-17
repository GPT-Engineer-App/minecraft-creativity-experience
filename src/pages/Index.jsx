import React from "react";
import { Box, Heading, Text, Image, Container, Stack, Flex, Spacer, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box bg="blue.500" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0djMlMjBsb2dvfGVufDB8fHx8MTcxMDY3MDg4Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="TV3 logo" h={10} />
            <Spacer />
            <Stack direction="row" spacing={4}>
              <Link color="white">Naujienos</Link>
              <Link color="white">Laidos</Link>
              <Link color="white">TV Programa</Link>
              <Link color="white">Apie</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <Stack spacing={8}>
          <Heading as="h1" size="2xl">
            Šiuolaikinis jaunimas įžvelgia neįkainojamą vertę kompiuteriniuose žaidimuose
          </Heading>
          <Image src="https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMDY3MDg4Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Minecraft screenshot" />
          <Text fontSize="xl">Šiuolaikinis jaunimas įžvelgia neįkainojamą vertę kompiuteriniuose žaidimuose, tokiose kaip Minecraft. Pavyzdžiui, sorybas, kuris kūrė įvairius unikalius ir įdomius projektus, rodo, kad žaidimas gali būti ne tik pramoginis, bet ir kūrybiškas procesas. Jo pasisakymas apie tai, kad jam padeda suprasti tikrąjį Minecraft žaidimo dvasią, atskleidžia, kaip šie žaidimai gali formuoti ne tik pramogą, bet ir mokymosi patirtį.</Text>
        </Stack>
      </Container>

      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Stack direction="row" spacing={8}>
            <FaFacebook size={32} />
            <FaTwitter size={32} />
            <FaInstagram size={32} />
            <FaYoutube size={32} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
