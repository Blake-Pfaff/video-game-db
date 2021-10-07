const TOKEN: string = `${process.env.REACT_APP_RAWG_API_KEY}`;
const BASE_URL: string = `https://api.rawg.io/api`;

export const API = {
  getGames: async (): Promise<object> => {
    const url: any = new URL(`${BASE_URL}/games`);
    url.searchParams.append("key", TOKEN);
    const req: any = await fetch(url.href, {});
    const payload: object = await req.json();
    console.log(payload);
    return payload;
  },
};

export default API;
