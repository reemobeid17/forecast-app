import clsx from "clsx";

import { Day } from "../api/weather";
import { WEEKDAYS } from "../utils/constants";
import {
  dayOfTheMonth,
  dayOfTheWeek,
  monthLabel,
  nthNumber,
} from "../utils/dates";
import RainIcon from "../assets/icons/rain.svg";
import WindIcon from "../assets/icons/wind.svg";
import HumidityIcon from "../assets/icons/humidity.svg";

interface ChartHeaderProps {
  day: Day;
  index: number;
}

const ChartHeader = ({
  day: {
    datetime,
    icon,
    conditions,
    temp,
    windspeed,
    precipprob,
    preciptype,
    humidity,
  },
  index,
}: ChartHeaderProps) => {
  const weekdayNumber = dayOfTheWeek(datetime);
  const dayNumber = dayOfTheMonth(datetime);
  const daySuffix = nthNumber(dayNumber);
  const month = monthLabel(datetime);
  return (
    <div className="mb-6">
      <h1
        className={clsx("text-3xl font-bold text-center", {
          "text-secondary": index === 0,
        })}
      >
        {index <= 1 && <span>{index === 0 ? "This " : "Next "}</span>}
        {WEEKDAYS[weekdayNumber]} the {dayNumber}
        {daySuffix} of {month}
      </h1>
      <div className="flex items-center justify-center mt-2">
        <img
          src={require(`../assets/icons/weather/${icon}.svg`)}
          alt="weater-icon"
          className="h-22 w-22"
        />
        <div className="ml-4">
          <h3 className="text-base">
            {conditions} {temp}&#8457;
          </h3>
          <p className="flex items-center">
            <img src={WindIcon} alt="wind-icon" className="h-5 w-5 mr-1" />
            <span className="text-sm">{windspeed}mph winds</span>
          </p>
          <p className="flex items-center">
            <img src={RainIcon} alt="wind-icon" className="h-5 w-5 mr-1" />
            <span className="text-sm">
              {precipprob > 0 && preciptype
                ? `${precipprob}% chance ${preciptype[0]}`
                : "no rain"}
            </span>
          </p>
          <p className="flex items-center">
            <img src={HumidityIcon} alt="wind-icon" className="h-5 w-5 mr-1" />
            <span className="text-sm">{humidity}% humidity</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
