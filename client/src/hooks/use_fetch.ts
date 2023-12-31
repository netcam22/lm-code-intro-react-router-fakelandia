import { useEffect} from "react";
import { isError } from '../helpers/is_error';

const useFetch = <T>(endPoint:string, dataProperty:string | null, 
	data: Array<T>, setData: React.Dispatch<React.SetStateAction<Array<T>>>)=> {

	function setIndexedData(jsonData: Array<T>)  {
	const indexedData = jsonData.map((item: T, index: number) => {
			return {...item, indexValue : index.toString()}
		});
		setData(indexedData);
	}

    useEffect(() => {
		let rendered = false;
		const fetchData = async () => {
			try {
				const response = await fetch(endPoint);
				if (response.status === 200) {
					const json = await response.json();
					if (!rendered) {
					const jsonData = dataProperty !== null? 
					json[dataProperty]: json;
					setIndexedData(jsonData);
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