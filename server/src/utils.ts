export function convertTimestampToDate(timestamp: Date) {
  let date = new Date(timestamp).toISOString().split("T")[0];

  return date;
}
