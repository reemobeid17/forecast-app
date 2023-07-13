import { Option } from "./types";

export const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const WEEKDAY_OPTIONS: Option[] = WEEKDAYS.map((day, index) => ({
  value: index,
  label: `Every ${day}`,
}));

export const TIME_OF_DAY = ["Morning", "Afternoon", "Evening"];
export const HOUR_RANGES = [
  {
    start: 7,
    end: 12,
  },
  {
    start: 12,
    end: 17,
  },
  {
    start: 17,
    end: 22,
  },
];

export const TIMEOFDAY_OPTIONS: Option[] = TIME_OF_DAY.map((time, index) => ({
  value: index,
  label: time,
}));

export const ARBITRARY_LINES = {
  id: "arbitraryLine",
  beforeDatasetsDraw: (chart: any) => {
    const {
      ctx,
      chartArea: { top, bottom },
      scales: { x },
    } = chart;
    const firstLine = 2;
    const secondLine = 7;

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
  },
};
