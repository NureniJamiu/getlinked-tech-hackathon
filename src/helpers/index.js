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
  try {
    setIsLoading(true);
    const endpoint = `${baseUrl}${pathname}`;
    await axios.post(endpoint, values);
    setIsLoading(false);
    setIsModalOpen(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  } catch (error) {
    setIsLoading(false);
    console.error("Error:", error);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  }
};
