import { NotificationProps } from "../interfaces/notification";

export const fetchPost = async (url = "", data = {}, headers = {}, setNotification: React.Dispatch<React.SetStateAction<NotificationProps>>) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (error: any) {
    setNotification({
      message: error.message,
      severity: "error",
      open: true,
      onClose: () => {},
    });
    throw error;
  }
};
