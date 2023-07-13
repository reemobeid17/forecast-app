import { useQuery } from "react-query";
import fetchWeatherData, { WeatherData } from "../api/weather";
import { formatDate } from "../utils/dates";

const useWeatherData = (
  location: string,
  startDate: Date,
  isMobile: boolean
) => {
  const { data, isLoading, isError, error } = useQuery<WeatherData>(
    ["weatherData", location, startDate, isMobile],
    async () => {
      const pageSize = isMobile ? 6 : 13;
      let endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + pageSize);
      console.log("useWeatherData", isMobile, pageSize, startDate, endDate);
      const weatherData = await fetchWeatherData({
        location,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
      });
      return weatherData;
    },
    {
      retry: false,
    }
  );

  return { weatherData: data, isLoading, isError, error };
};

export default useWeatherData;
