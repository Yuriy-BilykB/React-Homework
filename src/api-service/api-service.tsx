import {ICar} from "../modules/ICar.ts";
const baseUrl = import.meta.env.VITE_API_URL;
export const getCars= async (): Promise<ICar[]> => {
  const response = await fetch(baseUrl)
    console.log(response)
      return await response.json()
};
