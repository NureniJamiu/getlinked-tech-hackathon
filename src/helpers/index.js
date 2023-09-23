import axios from "axios";

export const onSubmit = async (
  values,
  actions,
  pathname,
  setIsLoading,
  setIsModalOpen
) => {
  if (!values) return;

  const baseUrl = "https://backend.getlinked.ai";
  const endpoint = `${baseUrl}${pathname}`;

  try {
    setIsLoading(true);
    await axios.post(endpoint, values);
    setIsLoading(false);
    setIsModalOpen(true);
    await delay(1000);
    actions.resetForm();
  } catch (error) {
    setIsLoading(false);
    console.error("Error:", error);
    await delay(1000);
    actions.resetForm();
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
