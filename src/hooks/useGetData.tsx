import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetData(url: string): any {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(url).then((items) => {
      setData(items.data.customers);
      console.log(items);
    });
  }, [url]);

  return { data };
}

export default useGetData;
