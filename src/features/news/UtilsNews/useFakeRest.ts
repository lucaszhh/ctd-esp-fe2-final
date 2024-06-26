import { INewsNormalizadas, INews } from "../types";
import { data } from "./DataNews";
import { useEffect, useState } from "react";
import { wordCapitalizer } from "../../../utils/wordCapitalizer";
import { simulateElapsedMinutes } from "../../../utils/timeSimulator";

export const getNews: () => Promise<INews[]> = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const useFakeRest: () => INewsNormalizadas[] = () =>{
  const [news, setNews] = useState<INewsNormalizadas[]>([]);

  useEffect(() => {
    const getInformation = async () => {
      const response = await getNews();
      
      const data = response.map((n) => {
        const title = wordCapitalizer(n.title);
        return {
          id: n.id,
          title,
          description: n.description,
          date: `Hace ${simulateElapsedMinutes(n.date)} minutos`,
          isPremium: n.isPremium,
          image: n.image,
          shortDescription: n.description.substring(0, 100),
        };
      });
      setNews(data);
    };
  
    getInformation();
  }, []);
  return news;
};
