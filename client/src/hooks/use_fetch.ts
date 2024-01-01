import { useEffect, useState} from "react";

const useFetch = <T>(endPoint:string, dataProperty:string | null, 
	data: Array<T>, setData: React.Dispatch<React.SetStateAction<Array<T>>>)
	: string => {

	function setIndexedData(jsonData: Array<T>)  {
	const indexedData = jsonData.map((item: T, index: number) => {
			return {...item, indexValue : index.toString()}
		});
		setData(indexedData);
	}

	const [error, setError] = useState("");

    useEffect(() => {
		let rendered = false;
		const fetchData = async () => {
				const response = await fetch(endPoint);
				if (response.status === 200) {
					const json = await response.json();
					if (!rendered) {
					const jsonData = dataProperty !== null? 
					json[dataProperty]: json;
					setIndexedData(jsonData);
					setError("");
					}
				}
				else if (response.status === 500) {
					setError("Oops... something went wrong 🤕");
				}
				else if (response.status === 418) {
					setError("I'm a tea pot");
				}
		};
		if (data.length === 0) {
		fetchData();
		return () => {
			rendered = true;
		};
		}
	});
	return error;
};

export default useFetch;