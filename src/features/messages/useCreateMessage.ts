import { useMutation } from "@tanstack/react-query";
import { createMessage as createMessageApi } from "@/services/apiMessage";

export function useCreateMessage() {
  const { mutate: createMessage, isPending } = useMutation({
    mutationKey: ["create-message"],
    mutationFn: ({ message }: { message: string }) =>
      createMessageApi({ message }),
    onError: (error) => {
      console.error(error);
    },
  });

  return { createMessage, isPending };
}
