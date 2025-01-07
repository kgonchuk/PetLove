export function formatDateString(dateString) {
  if (dateString === undefined) {
    return;
  }
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  const parts = formattedDate.split("/");
  const dateWithDots = `${parts[0]}.${parts[1]}.${parts[2]}`;

  return dateWithDots;
}
export function formatDateRevers(date) {
  if (!date) {
    return;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
