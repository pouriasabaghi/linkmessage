import { BASE_URL } from "@/utils/http";

export const createMessage = async ({ message }: { message: string }) => {
  const response = await fetch(`${BASE_URL}/api/v1/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();

  return data;
};

export const showMessage = async ({ link }: { link: string }) => {
  const response = await fetch(`${BASE_URL}/api/v1/messages/${link}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
};
