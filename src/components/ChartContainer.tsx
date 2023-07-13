import { useEffect, useState } from "react";
import clsx from "clsx";

import ChartSkeleton from "./ChartSkeleton";
import ChartHeader from "./ChartHeader";
import ChartBody from "./ChartBody";
import { Day, WeatherData } from "../api/weather";
import { HOUR_RANGES, TIME_OF_DAY } from "../utils/constants";
import { dayOfTheWeek } from "../utils/dates";
import ArrowIcon from "../assets/icons/arrow.svg";

interface ChartContainerProps {
  weatherData?: WeatherData;
  weekday: number;
  timeOfDay: number;
  isLoading: boolean;
  previousPage: () => void;
  nextPage: () => void;
}

const ChartContainer = ({
  weatherData,
  weekday,
  timeOfDay,
  isLoading,
  previousPage,
  nextPage,
}: ChartContainerProps) => {
  const [dayOfWeekData, setDayOfWeekData] = useState<Day[]>();

  useEffect(() => {
    if (!weatherData) return;
    const filteredData = weatherData?.days
      .map((day) => ({
        ...day,
        hours: day.hours?.filter((hour) => {
          const hourNumber = parseInt(hour.datetime.substring(0, 2));
          // Add 2 hours to the start and end of the range for a better visual chart
          return (
            hourNumber >= HOUR_RANGES[timeOfDay].start - 2 &&
            hourNumber <= HOUR_RANGES[timeOfDay].end + 2
          );
        }),
      }))
      .filter((day) => {
        const weekdayNumber = dayOfTheWeek(day.datetime);
        return weekdayNumber === weekday;
      });
    setDayOfWeekData(filteredData);
  }, [weekday, timeOfDay, weatherData]);

  return (
    <div className="mt-10 relative">
      {isLoading ? (
        <ChartSkeleton />
      ) : (
        <>
          <button
            className={clsx("absolute -left-4 top-1/4 lg:top-1/2 ", {
              "pointer-events-none opacity-40": false,
            })}
            onClick={previousPage}
          >
            <img
              src={ArrowIcon}
              alt={"previous arrow icon"}
              className="h-8 w-8"
            />
          </button>
          <div className="grid grid-cols-12 lg:gap-4 lg:px-5">
            {dayOfWeekData?.map((day, index) => (
              <div
                key={day.datetime}
                className={clsx("col-span-12 lg:col-span-6", {
                  "lg:col-span-12": dayOfWeekData.length === 1,
                })}
              >
                <ChartHeader day={day} index={index} />
                {day.hours?.length ? (
                  <>
                    <ChartBody hours={day.hours} />
                    <p className="text-sm text-center mt-2 mb-6">
                      {TIME_OF_DAY[timeOfDay]}
                    </p>
                  </>
                ) : (
                  <h4 className="text-3xl text-center mt-10">
                    No hourly data available for this day
                  </h4>
                )}
              </div>
            ))}
          </div>
          <button
            className="absolute -right-4 top-1/4 lg:top-1/2"
            onClick={nextPage}
          >
            <img
              src={ArrowIcon}
              alt={"next arrow icon"}
              className="h-8 w-8 rotate-180"
            />
          </button>
        </>
      )}
    </div>
  );
};

export default ChartContainer;
