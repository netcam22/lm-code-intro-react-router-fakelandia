import { useEffect} from "react";
import { isError } from '../helpers/is_error';

export const useFetch = <T>(endPoint:string, dataProperty:string | null, 
	data: Array<T>, setData: React.Dispatch<React.SetStateAction<Array<T>>>)=> {

    useEffect(() => {
		let rendered = false;
		const fetchData = async () => {
			try {
				const response = await fetch(endPoint);
				if (response.status === 200) {
					const json = await response.json();
					if (!rendered) {
					dataProperty !== null? setData(json[dataProperty]): setData(json);
					}
				}
			} catch (error) {
                console.log(isError(error) ? error.message : 'Unknown error!');
			}
		};
		if (data.length === 0) {
		fetchData();
		return () => {
			rendered = true;
		};
		}
	});
};

export default useFetch;