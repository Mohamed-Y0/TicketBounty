import {
  cloneElement,
  ReactElement,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";
import useActionFeedback from "@/components/form/hooks/use-action-feedback";
import {
  ActionState,
  EMPTY_ACTION_STATE,
} from "@/components/form/utils/to-action-state";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type TriggerProps = {
  onClick?: () => void;
};

type TriggerFn = (isPending: boolean) => ReactElement<TriggerProps>;
type TriggerElement = ReactElement<TriggerProps>;

type UseConfirmDialog = {
  title?: string;
  description?: string;
  action: () => Promise<ActionState>;
  trigger: TriggerElement | TriggerFn;
  onSuccess?: (actionState: ActionState) => void;
};

const useConfirmDialog = ({
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. Make sure you understand the consequences.",
  action,
  trigger,
  onSuccess,
}: UseConfirmDialog) => {
  const [isOpen, setIsOpen] = useState(false);

  const [actionState, formAction, isPedning] = useActionState(
    action,
    EMPTY_ACTION_STATE,
  );

  const element = typeof trigger === "function" ? trigger(isPedning) : trigger;

  const dialogTrigger = cloneElement<TriggerProps>(element, {
    onClick: () => setIsOpen((state) => !state),
  });

  const toastRef = useRef<string | number | null>(null);

  useEffect(() => {
    if (isPedning) toastRef.current = toast.loading("Deleting..");
    else if (toastRef.current) toast.dismiss(toastRef.current);

    return () => {
      if (toastRef.current) toast.dismiss(toastRef.current);
    };
  });

  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }

      onSuccess?.(actionState);
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
    },
  });

  const dialog = (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <form action={formAction}>
              <Button type="submit">Confirm</Button>
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return [dialogTrigger, dialog];
};

export default useConfirmDialog;
