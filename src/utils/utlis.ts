import { toast } from "sonner";

export async function copyToClipboard(url:string) {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Copied to clipboard");
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy");
    }
  
  }