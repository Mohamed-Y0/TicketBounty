import z, { ZodError } from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[]> | undefined;
  timestamp: number;
};

export const EMPTY_ACTION_STATE = {
  message: "",
  fieldErrors: {},
  timestamp: Date.now(),
};

export const fromErroToActionState = (
  error: unknown,
  formData?: FormData,
): ActionState => {
  if (error instanceof ZodError) {
    // if validation eror with Zod, return first error message
    return {
      status: "ERROR",
      message: "",
      fieldErrors: z.flattenError(error).fieldErrors,
      payload: formData,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    // if another error instance, return error message - e.g. database error
    return {
      status: "ERROR",
      message: error.message,
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  } else {
    // if not an error instance but something else crashed
    // return generic error message
    return {
      status: "ERROR",
      message: "An unknown error occured.",
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  }
};

export const toActionState = (
  status: ActionState["status"],
  message: string,
  formData?: FormData,
): ActionState => {
  return {
    status,
    message,
    fieldErrors: {},
    payload: formData,
    timestamp: Date.now(),
  };
};
