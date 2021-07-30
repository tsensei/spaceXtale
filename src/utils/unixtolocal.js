const unixToLocal = (target, dateString, dateOnly = 0) => {
  let dateObject;
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (dateString) {
    dateObject = new Date(target);
  } else {
    dateObject = new Date(target * 1000);
  }

  const date = dateObject.getDate();
  const month = monthArray[dateObject.getMonth()];
  const year = dateObject.getFullYear();
  const hour = dateObject.getHours() % 12 || 12;
  const ampm = dateObject.getHours() >= 12 ? "pm" : "am";
  const minutes = Math.floor(dateObject.getMinutes() / 10)
    ? dateObject.getMinutes()
    : "0" + dateObject.getMinutes();

  if (dateOnly) {
    return `${month} ${date}, ${year}`;
  }

  return `${month} ${date}, ${year} ${hour}:${minutes} ${ampm}`;
};

export default unixToLocal;
