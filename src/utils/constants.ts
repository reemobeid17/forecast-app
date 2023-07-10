import { Option } from "./types";

const WEEKDAYS = [
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

const TIMEOFDAY = ["Morning", "Afternoon", "Evening"];

export const TIMEOFDAY_OPTIONS: Option[] = TIMEOFDAY.map((time, index) => ({
  value: index,
  label: time,
}));

// export const WEEKDAYS = {
//   0: "Sunday",
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
// };

// export const WEEKDAYS = [
//   {
//     value: 0,
//     label: "Sunday",
//   },
//   {
//     value: 1,
//     label: "Monday",
//   },
//   {
//     value: 2,
//     label: "Tuesday",
//   },
//   {
//     value: 3,
//     label: "Wednesday",
//   },
//   {
//     value: 4,
//     label: "Thursday",
//   },
//   {
//     value: 5,
//     label: "Friday",
//   },
//   {
//     value: 6,
//     label: "Saturday",
//   },
// ];
