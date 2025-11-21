"use client";

import { useActionState } from "react";
import FieldError from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import SubmitButton from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { signUp } from "@/features/auth/actions/sign-up";

const SignUpForm = () => {
  const [actionState, action] = useActionState(signUp, EMPTY_ACTION_STATE);

  return (
    <Form actionState={actionState} action={action}>
      <Input name="username" placeholder="username" />
      <FieldError name="username" actionState={actionState} />

      <Input name="email" placeholder="email" />
      <FieldError name="email" actionState={actionState} />

      <Input name="password" placeholder="password" type="password" />
      <FieldError name="password" actionState={actionState} />

      <Input
        name="confirmPassword"
        placeholder="confirmPassword"
        type="password"
      />
      <FieldError name="confirmPassword" actionState={actionState} />

      <SubmitButton label="Sign Up" />
    </Form>
  );
};

export default SignUpForm;
