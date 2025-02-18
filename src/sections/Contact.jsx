import React, { useState } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleSubmit = (values, actions) => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          resolve("Success");
        } else {
          reject("Failed");
        }
      }, 1000);
    })
      .then(() => {
        setModalTitle("All Good!");
        setModalMessage(
          `Terima kasih atas pesannya ${values.name}, kami akan segera menghubungi Anda kembali!`
        );
        setIsModalOpen(true);
        actions.resetForm();
      })
      .catch(() => {
        setModalTitle("Submission Failed");
        setModalMessage("Pengiriman formulir gagal. Silakan coba lagi.");
        setIsModalOpen(true);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <div className="container mx-auto">
      <Center h="100vh" bg="#512DA8">
        <Box width="100%" maxWidth="500px">
          <Formik
            initialValues={INITIAL_FORM_STATE}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
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
                    <option value="other">Other</option>
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalBody>{modalMessage}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
