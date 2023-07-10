import { useQuery } from "react-query";

const useWeatherData = (location: string) => {
  const { data, isLoading, isError, error } = useQuery(
    ["weatherData", location],
    async () => {
      console.log(
        "fetching weather data",
        location,
        process.env.REACT_APP_VISUAL_CROSSING_API_KEY
      );
      const encodedLocation = encodeURIComponent(location);
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?unitGroup=metric&key=${process.env.REACT_APP_VISUAL_CROSSING_API_KEY}&contentType=json`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );

  return { data, isLoading, isError, error };
};

export default useWeatherData;
