import axios, { AxiosError, isAxiosError } from "axios";

const WEATHER_API =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export interface Hour {
  datetime: string;
  temp: number;
  humidity: number;
  precipprob: number;
  windspeed: number;
}

export interface Day extends Hour {
  conditions: string;
  icon: string;
  preciptype: string[];
  tempmax: number;
  tempmin: number;
  hours?: Hour[];
}

export interface WeatherData {
  days: Day[];
}

export interface WeatherDataParams {
  location: string;
  startDate: string;
  endDate: string;
}

const fetchWeatherData = async ({
  location,
  startDate,
  endDate,
}: WeatherDataParams): Promise<WeatherData> => {
  try {
    if (!location) {
      throw new Error("Please enter a location");
    }

    const encodedLocation = encodeURIComponent(location);
    const params = new URLSearchParams();
    params.append("include", "days,hours");
    params.append("unitGroup", "us");
    // Adding API key here for demo
    params.append(
      "key",
      process.env.REACT_APP_VISUAL_CROSSING_API_KEY ||
        "CKJDNRY3H4J8QJWQ27SSMG2JY"
    );
    params.append("contentType", "json");

    const apiURL = `${WEATHER_API}${encodedLocation}/${startDate}/${endDate}?${params.toString()}`;
    const response = await axios.get(apiURL);
    const weatherData = await response.data;
    return weatherData;
  } catch (error) {
    if (isAxiosError(error)) {
      throw (error as AxiosError).response?.data;
    } else {
      throw (error as Error).message;
    }
  }
};

export default fetchWeatherData;
