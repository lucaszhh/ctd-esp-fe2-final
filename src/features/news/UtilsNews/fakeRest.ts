import { INewsNormalizadas, INews } from "../types";
import { data } from "./DataNews";
import { useEffect, useState } from "react";
import { capitalizeWord } from "../../../Utils/capitalizeWord";
import { minuteSimulator } from "../../../Utils/minuteSimulator";

export const getNews: () => Promise<INews[]> = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const fakeRest: () => INewsNormalizadas[] = () =>{
  const [news, setNews] = useState<INewsNormalizadas[]>([]);

  useEffect(() => {
    const getInformation = async () => {
      const response = await getNews();
      
      const data = response.map((n) => {
        const title = capitalizeWord(n.title);
        return {
          id: n.id,
          title,
          description: n.description,
          date: `Hace ${minuteSimulator(n.date)} minutos`,
          isPremium: n.isPremium,
          image: n.image,
          shortdescription: n.description.substring(0, 100),
        };
      });
      setNews(data);
    };
  
    getInformation();
  }, []);
  return news;
}
