const unixToLocal = (target, dateString) => {
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
  const hour = dateObject.getHours() % 12;
  const ampm = dateObject.getHours() >= 12 ? "pm" : "am";
  const minutes = dateObject.getMinutes();

  return `${month} ${date}, ${year} ${hour}:${minutes} ${ampm}`;
};

export default unixToLocal;
