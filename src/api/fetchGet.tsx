import { NotificationProps } from "../interfaces/notification";

export const fetchGet = async (url = "", headers = {}, setNotification: React.Dispatch<React.SetStateAction<NotificationProps>>) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
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
