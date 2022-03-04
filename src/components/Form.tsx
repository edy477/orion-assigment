import {
  Portal,
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  Input,
  FormLabel,
  GridItem,
  Button
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const Form = () => {
  const ref = React.useRef();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: ""
    }
  });
  const onSubmit = (data) => {
    e.preventDefault();

    console.log(data);
  };
  const handleEmailValidation = (email) => {
    console.log("ValidateEmail was called with", email);

    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };
  return (
    <Box mt="147px" mb="262px">
      <Container>
        <Portal containerRef={ref}>
          <Box position="absolute" left="10%" top="72rem">
            <img src="./star.svg" />
          </Box>
        </Portal>

        <Box width={["324", "632px"]} mb="3rem" ref={ref}>
          <Box width="60%" mb="2rem" ml="auto" mr="auto" textAlign="center">
            <Heading as="h4" size="sm">
              Únete a nuestra ßeta privada
            </Heading>
            <Text textAlign="center">
              Sé de los primeros en probar las nuevas funcionalidades en las
              cuales estamos trabajando.
            </Text>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid
              columns={[1, 2]}
              columnGap={[2, 16]}
              rowGap={[2, 8]}
              fontWeight="regular"
            >
              <GridItem colSpan={[1, 1]}>
                <FormControl>
                  <FormLabel htmlFor="first-name">Nombre</FormLabel>
                  <Input
                    id="first-name"
                    placeholder="Ingresa su Nombre"
                    width="308px"
                    height="44px"
                    mr="10px"
                    {...register("first-name", { required: true })}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[1, 1]}>
                <FormControl>
                  <FormLabel htmlFor="last-name">Apellido</FormLabel>
                  <Input
                    id="last-name"
                    placeholder="Ingresa su Apellido"
                    width="308px"
                    height="44px"
                    mr="16px"
                    {...register("last-name", { required: true })}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[1, 1]}>
                <FormControl>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input
                    id="email"
                    placeholder="nombre@email"
                    width="308px"
                    height="44px"
                    mr="16px"
                    {...register("email", {
                      required: true,
                      validate: handleEmailValidation
                    })}
                    isRequired
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    message="Enter a valid email"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[1, 1]}>
                <FormControl>
                  <FormLabel htmlFor="phone">Telefono</FormLabel>
                  <Input
                    id="phone"
                    placeholder="First name"
                    width="308px"
                    height="44px"
                    mr="16px"
                    {...register("phone", { required: true })}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={[1, 2]}>
                <FormControl>
                  <FormLabel htmlFor="mensaje">Mensaje</FormLabel>
                  <Input
                    id="mensaje"
                    placeholder="Mensajje"
                    width="100%"
                    height="88px"
                    {...register("mensaje", { required: true })}
                  />
                </FormControl>
              </GridItem>
            </SimpleGrid>
          </form>
          <Button
            mt="3rem"
            bg=" #0456FB
"
            w={["100%", "106px"]}
            color="#FFFFFF 
"
            disabled={!!errors.email}
            _disabled={{ bg: "#EDECF0", color: "#FFFFFF" }}
            type="submit"
          >
            Finalizar
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Form;
