import { useState } from "react";
import { isMobile } from "react-device-detect";

import TextField from "../components/FormFields/TextField";
import DropdownField from "../components/FormFields/DropdownField";
import ChartContainer from "../components/ChartContainer";
import LocationIcon from "../assets/icons/location-pin.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import ClockIcon from "../assets/icons/clock.svg";
import useDebounce from "../hooks/useDebounce";
import useWeatherData from "../hooks/useWeatherData";
import {
  WEEKDAY_OPTIONS,
  TIMEOFDAY_OPTIONS,
  MOBILE_REQUEST_SIZE,
  DESKTOP_REQUEST_SIZE,
} from "../utils/constants";

const Home = () => {
  const [location, setLocation] = useState<string>("");
  const [weekday, setWeekday] = useState<number>(0);
  const [timeOfDay, setTimeOfDay] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const debouncedLocation = useDebounce(location, 500);
  const { weatherData, isLoading, isError, error } = useWeatherData(
    debouncedLocation,
    startDate,
    isMobile
  );

  const previousPage = () => {
    const pageSize = isMobile ? MOBILE_REQUEST_SIZE : DESKTOP_REQUEST_SIZE;

    setStartDate((prevStartDate) => {
      const newStartDate = new Date(prevStartDate);
      newStartDate.setDate(newStartDate.getDate() - pageSize - 1);
      return newStartDate;
    });
  };

  const nextPage = () => {
    const pageSize = isMobile ? MOBILE_REQUEST_SIZE : DESKTOP_REQUEST_SIZE;

    setStartDate((prevStartDate) => {
      const newStartDate = new Date(prevStartDate);
      newStartDate.setDate(newStartDate.getDate() + pageSize + 1);
      return newStartDate;
    });
  };

  return (
    <div className="px-4 py-10 m-auto max-w-[1200px]">
      <div className="grid grid-cols-12 gap-4 pb-4 border-b-4 border-primary">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-2">
          <TextField
            name="location"
            placeholder="Enter a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            icon={LocationIcon}
            alt="Location Icon"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-7">
          <DropdownField
            name="weekday"
            value={weekday}
            options={WEEKDAY_OPTIONS}
            onChange={(e) => setWeekday(parseInt(e.target.value))}
            icon={CalendarIcon}
            alt="Calendar Icon"
          />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-10">
          <DropdownField
            name="timeOfDay"
            value={timeOfDay}
            options={TIMEOFDAY_OPTIONS}
            onChange={(e) => setTimeOfDay(parseInt(e.target.value))}
            icon={ClockIcon}
            alt="Clock Icon"
          />
        </div>
      </div>
      {isError ? (
        <h4 className="text-3xl text-center mt-10">{error as string}</h4>
      ) : (
        <ChartContainer
          weatherData={weatherData}
          weekday={weekday}
          timeOfDay={timeOfDay}
          isLoading={isLoading}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      )}
    </div>
  );
};

export default Home;
