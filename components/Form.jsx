import {useState} from 'react';

const Form = ( {brandName, setBrandName} ) => {

	const [display, setDisplay] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		setDisplay(false);
	}

	const handleChange = (event)=> {
		setBrandName(event.target.value);
	}

	if (display) {
		return (
			<>
				<div className="fixed w-dvw h-dvh bg-black/70 backdrop-blur-sm z-60 flex justify-center items-center">
					<form onSubmit={handleSubmit} className="w-11/12 md:w-6/12 flex flex-col justify-center items-center py-50 bg-gray-800 border-0.5 border-yellow-500 rounded-md">
						<h2 className="text-2xl font-bold mb-3">Enter Brand Name</h2>
						<input className="bg-gray-700 p-3 mb-3 rounded-md w-10/12" placeholder="Enter brand name" required type="text" value={brandName} onChange={handleChange}/>
						<button className="bg-blue-800 py-2 px-5 rounded-sm">Enter</button>				
					</form>
				</div> 
			</>
		);
	} 


}
export default Form;