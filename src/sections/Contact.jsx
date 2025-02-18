import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Textarea,
  Select,
  Center,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  enquiry: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email"),
  enquiry: Yup.string().required("Required"),
  message: Yup.string().required("Required").min(25, "Pesan harus minimal 25 karakter"),
});

export default function Contact() {
  return (
    <div className="container mx-auto">
      <Center h="100vh" bg="#512DA8">
        <Box width="100%" maxWidth="500px">
          <Formik initialValues={INITIAL_FORM_STATE} validationSchema={validationSchema}>
            {(props) => (
              <Form>
                <FormControl isInvalid={props.errors.name && props.touched.name}>
                  <FormLabel htmlFor="name" color="white">
                    Name
                  </FormLabel>
                  <Field name="name" as={Input} id="name" color="white" />
                  <FormErrorMessage>{props.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={props.errors.email && props.touched.email}>
                  <FormLabel htmlFor="email" color="white">
                    Email Address
                  </FormLabel>
                  <Field name="email" as={Input} id="email" color="white" />
                  <FormErrorMessage>{props.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={props.errors.enquiry && props.touched.enquiry}>
                  <FormLabel htmlFor="enquiry" color="white">
                    Type of enquiry
                  </FormLabel>
                  <Field name="enquiry" as={Select} id="enquiry" placeholder="Select option">
                    <option value="project">Freelance project proposal</option>
                    <option value="opportunity">Job opportunity</option>
                    <option value="other">Freelance project proposal</option>
                  </Field>
                  <FormErrorMessage>{props.errors.enquiry}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={props.errors.message && props.touched.message}>
                  <FormLabel htmlFor="message" color="white">
                    Your message
                  </FormLabel>
                  <Field name="message" as={Textarea} id="message" rows={8} color="white" />
                  <FormErrorMessage>{props.errors.message}</FormErrorMessage>
                </FormControl>

                <Button
                  mt={4}
                  width="100%"
                  bg="#805AD5"
                  color="white"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Center>
    </div>
  );
}
