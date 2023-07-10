import { ChangeEvent, useState } from "react";

import TextField from "../components/FormFields/TextField";
import DropdownField from "../components/FormFields/DropdownField";
import LocationIcon from "../assets/icons/location-pin.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import ClockIcon from "../assets/icons/clock.svg";
import useDebounce from "../hooks/useDebounce";
import useWeatherData from "../hooks/useWeatherData";
import { WEEKDAY_OPTIONS, TIMEOFDAY_OPTIONS } from "../utils/constants";

const Home = () => {
  const [location, setLocation] = useState<string>("");
  const [weekday, setWeekday] = useState<number>(WEEKDAY_OPTIONS[0].value);
  const [timeOfDay, setTimeOfDay] = useState<number>(
    TIMEOFDAY_OPTIONS[0].value
  );
  const debouncedLocation = useDebounce(location, 500);
  const { data, error } = useWeatherData(debouncedLocation);
  console.log(data, error);

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <div className="px-4 pt-10 m-auto max-w-[1200px]">
      <div className="grid grid-cols-12 gap-4 pb-6 border-b-4 border-primary">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-2">
          <TextField
            name="location"
            placeholder="Enter a location"
            value={location}
            onChange={handleLocationChange}
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
    </div>
  );
};

export default Home;
