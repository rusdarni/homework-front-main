import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (value: string) => void; // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const newTextValue = event.currentTarget.value // НУЖНО ДОПИСАТЬ
		props.setCurrentText(newTextValue)
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
