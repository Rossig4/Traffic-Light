import React, { useState } from "react";

//include images into your bundle
export function Home() {
	const [rojo, setRojo] = useState("redoff");
	const [amarillo, setAmarillo] = useState("yellowoff");
	const [verde, setVerde] = useState("greenoff");

	return (
		<div className="container btn-group-vertical">
			<button
				className={rojo + " borde"}
				onClick={() => {
					setRojo("red");
					setAmarillo("yellowoff");
					setVerde("greenoff");
				}}></button>
			<button
				className={amarillo + " borde"}
				onClick={() => {
					setRojo("redoff");
					setAmarillo("yellow");
					setVerde("greenoff");
				}}></button>
			<button
				className={verde + " borde"}
				onClick={() => {
					setRojo("redoff");
					setAmarillo("yellowoff");
					setVerde("green");
				}}></button>
		</div>
	);
}
