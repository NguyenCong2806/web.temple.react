export const conventpathimg = {
    getConventpath: (img: string): string => {
      return import.meta.env.VITE_API_URL_IMG + img;
    },
  };
  