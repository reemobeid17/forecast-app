export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const nthNumber = (number: number) => {
  if (number > 3 && number < 21) return "th";
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const dayOfTheWeek = (date: string) => {
  const weekdayNumber = new Date(date).getDay();
  return weekdayNumber;
};

export const dayOfTheMonth = (date: string) => {
  const day = new Date(date).getDate();
  return day;
};

export const monthLabel = (date: string) => {
  const currentDate = new Date(date);
  const month = currentDate.toLocaleString("default", { month: "long" });
  return month;
};

export const drawLines = (timeOfDayStart: number, timeOfDayEnd: number) => {
  return (chart: any) => {
    const {
      ctx,
      chartArea: { top, bottom },
      scales: { x },
    } = chart;
    const firstLine = 2;
    const secondLine = timeOfDayEnd - timeOfDayStart + firstLine;

    ctx.save();
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
    ctx.moveTo(x.getPixelForValue(firstLine), top);
    ctx.lineTo(x.getPixelForValue(firstLine), bottom);
    ctx.moveTo(x.getPixelForValue(secondLine), top);
    ctx.lineTo(x.getPixelForValue(secondLine), bottom);
    ctx.stroke();
    ctx.restore();
  };
};
