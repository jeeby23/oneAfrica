// src/hooks/useSignupValidation.js
import { reactive } from "vue";

export const useValidation = () => {
  const errors = reactive({});

  const validateInputs = ({ name, email, number, subject, message }) => {
    let valid = true;
    const temp = {};

    if (!name.trim()) {
      temp.name = "Name is required";
      valid = false;
    }

    if (!email.trim()) {
      temp.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      temp.email = "Enter a valid email address";
      valid = false;
    }

    if (!number.trim()) {
      temp.number = "Phone number is required";
      valid = false;
    }

    if (!subject.trim()) {
      temp.subject = "Subject is required";
      valid = false;
    }

    if (!message.trim()) {
      temp.message = "Message is required";
      valid = false;
    }

    // update reactive errors
    Object.assign(errors, temp);

    return valid;
  };

  return { errors, validateInputs };
};