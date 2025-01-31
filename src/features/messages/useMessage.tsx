import { showMessage } from "@/services/apiMessage";
import { useQuery } from "@tanstack/react-query";

export function useMessage({ link }: { link: string }) {
  const { data: message, isLoading } = useQuery({
    queryKey: ["message"],
    queryFn: () => showMessage({ link }),
  });

  return { message, isLoading };
}
