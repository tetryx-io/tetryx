export const removeQueryParam = (param: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(param);
  window.location.search = searchParams.toString();
};
