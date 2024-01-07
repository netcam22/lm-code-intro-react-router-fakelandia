import { useState, FormEvent, useContext, createContext} from 'react';
import { formDataArray, initialFormValues, confessionFormMessages} 
from "../../data/confession_form_data";
import {FormValues} from '../../types/form.types';
import { MisdemeanourObject } from '../../types/misdemeanour_client_types';
import { MisdemeanourKind } from '../../types/misdemeanours.types';
import  useValidate from '../../hooks/use_validate';
import  useHasErrors  from '../../hooks/use_has_errors';
import { MisdemeanourContext } from '../misdemeanours/misdemeanour-data-wrapper';
import ConfessionForm from './confession-form';

export type ConfessionInputType = 
[FormValues, React.Dispatch<React.SetStateAction<FormValues>>] | [];

export const ConfessionFormContext = createContext<ConfessionInputType>([]);

const Confession = () => {

	const [misdemeanourData, setMisdemeanourData] = useContext(MisdemeanourContext);
	
	const [input, setInput] = useState({...initialFormValues});
	const [attempted, setAttempted] = useState(false);
	const [formMessages, setFormMessages] = useState({...confessionFormMessages});

	const errors: FormValues = useValidate(formDataArray, input);
	const hasErrors: boolean = useHasErrors(errors);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!attempted) {
			setAttempted(true);
		}
		if (attempted || !hasErrors) {
			try {
				const response = await fetch("http://localhost:8080/api/confess", {
					method: "POST", 
					headers: {
						"Content-Type": "application/json",
					}, 
					
					body : JSON.stringify({
						subject :input.subject, 
						reason: input.reason, 
						details: input.details
					}),
				});
				const formResponse = await response.json();
				if (response.ok) {
					setFormMessages( 
						{messages: [formResponse.message],
						success: formResponse.success,
						justTalked: formResponse.justTalked}
					);
					if (input.reason !== "just-talk") {
						addDataToMisdemeanourList(input.reason as MisdemeanourKind);
					}
				}
				else {
					setFormMessages( 
						{messages: [formResponse.message],
						success: formResponse.success,
						justTalked: false}
					);
				}  
			} 
			catch (error) {
				console.log(error)
			}
		}
	}

	function addDataToMisdemeanourList(reason: MisdemeanourKind) {
		if (misdemeanourData && setMisdemeanourData) {
			const len = misdemeanourData.length;
		const newRow: MisdemeanourObject = 
			{citizenId: Math.floor(len + Math.random() * 37 * Math.random() * 967), 
				misdemeanour: reason, 
				date: new Date().toLocaleDateString("en-GB"), 
				indexValue: len.toString()};
					setMisdemeanourData((currentData: Array<MisdemeanourObject>) => 
					[...currentData, newRow]);
			}
	}

	return (

		<section className = "confession">
		<h1 className = "page__title">Confess to Us</h1>

		<ConfessionFormContext.Provider value={[input, setInput]}>
		<ConfessionForm 
		attempted = {attempted} 
		errors = {errors}
		hasErrors = {hasErrors}
		handleSubmit = {handleSubmit}
		formMessages = {formMessages}
		/>
		</ConfessionFormContext.Provider>
		</section>
	);
};
export default Confession;
