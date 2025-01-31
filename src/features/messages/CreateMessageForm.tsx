import { Button } from "@/ui/button";
import { Textarea } from "@/ui/textarea";
import { useForm } from "react-hook-form";
import { useCreateMessage } from "./useCreateMessage";
import { useState } from "react";
import { Link } from "react-router-dom";
import { copyToClipboard } from "@/utils/utlis";

type FormData = {
  message: string;
};

function CreateMessageForm() {
  const { handleSubmit, register } = useForm<FormData>();
  const { createMessage, isPending } = useCreateMessage();

  const [link, setLink] = useState<string | null>(null);

  function onSubmit(data: FormData) {
    createMessage(data, {
      onSuccess: (data) => {
        setLink(data.link);
      },
    });
  }
  return (
    <>
      {!link && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            {...register("message")}
            className="mb-3 text-white"
            placeholder="Your Message ... "
            rows={5}
          />
          <Button variant="outline" size="lg" disabled={isPending}>
            Create Link
          </Button>
        </form>
      )}
      {link && (
        <div>
          <p className="mb-4 text-xl text-white">
            Your message link has been created:
          </p>
          <div className="flex gap-x-3">
            <Button
              variant="outline"
              onClick={() => copyToClipboard(window.location.origin + "/" + link)}
              className="font-bold"
              size="lg"
            >
              Copy Link
            </Button>
            <Button variant="outline" className="font-bold" size="lg" asChild>
              <Link to={`/${link}`}>Message Preview</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateMessageForm;
