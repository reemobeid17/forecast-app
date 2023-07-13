import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { Hour } from "../api/weather";
import { ARBITRARY_LINES } from "../utils/constants";

interface ChartBodyProps {
  hours: Hour[];
}

const ChartBody = ({ hours }: ChartBodyProps) => {
  const [time, setTime] = useState<string[]>([]);
  const [temperature, setTemperature] = useState<number[]>([]);
  const [humidity, setHumidity] = useState<number[]>([]);
  const [wind, setWind] = useState<number[]>([]);

  useEffect(() => {
    setTime(hours.map((hour) => hour.datetime.substring(0, 5)));
    setHumidity(hours.map((hour) => hour.humidity));
    setWind(hours.map((hour) => hour.windspeed));
    setTemperature(hours.map((hour) => hour.temp));
  }, [hours]);

  return (
    <Line
      data={{
        labels: time,
        datasets: [
          {
            label: "Temperature",
            data: temperature,
            fill: false,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 1)",
          },
          {
            label: "Humudity",
            data: humidity,
            fill: false,
            backgroundColor: "rgb(3, 152, 252)",
            borderColor: "rgba(3, 152, 252, 1)",
          },
          {
            label: "Wind",
            data: wind,
            fill: false,
            backgroundColor: "rgb(112, 189, 100)",
            borderColor: "rgba(112, 189, 100, 1)",
          },
        ],
      }}
      plugins={[ARBITRARY_LINES]}
    />
  );
};

export default ChartBody;
