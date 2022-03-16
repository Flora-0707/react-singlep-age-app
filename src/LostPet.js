import { useState } from 'react';
import Loading from './Loading';
import './LostPet.css';

const FormState = {
    SHOW_FORM: 0,
    LOADING_RESULT: 1,
    SHOW_RESULT: 2,
}

function LostPetInputField({ id, name, type, required, label, setInputCb }) {
    const onInput = (e) => {
        if (setInputCb) {
            setInputCb(e.target.value);
        }
    };
    let required_span = null;
    let input_field = <input type={type} id={id} name={name} onInput={onInput}/>;
    if (required) {
        required_span = <span className="required-field">*</span>;
        input_field = <input type={type} id={id} name={name} onInput={onInput} required/>;
    }
    return (
        <div className="form-text-field">
            <label htmlFor={name}>{label}{required_span}:</label>
            {input_field}
        </div>
    );
}

function LostPetImageField({ id, name, label, setInputCb }) {
    const onInput = (e) => {
        if (setInputCb) {
            setInputCb(e.target.value);
        }
    };
    return (
        <div className="form-img-field">
            <label htmlFor={name}>{label}*:</label>
            <input type="file" accept="image/*" id={id} name={name} onInput={onInput} required/>
        </div>
    );
}

function LostPet() {
    const [formState, setFormState] = useState(FormState.SHOW_FORM);
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const processForm = (ev) => {
        setFormState(FormState.LOADING_RESULT);
        ev.preventDefault();
        return false;
    }

    let content_html = null;
    if (formState === FormState.SHOW_FORM) {
        content_html = (
            <form className="lost-pet-form" action="/" method="POST" onSubmit={processForm}>
                <LostPetInputField id="fname" name="fname" type="text" required label="First name" setInputCb={setFName}/>
                <LostPetInputField id="lname" name="lname" type="text" required label="Last name" setInputCb={setLName}/>
                <LostPetInputField id="email" name="email" type="email" required label="Email" setInputCb={setEmail}/>
                <LostPetInputField id="date" name="date" type="date" required label="I lost my pet on" setInputCb={setDate}/>
                <span className="pet-info">Information of my pet:</span><br/>
                <LostPetInputField id="breed" name="breed" type="text" required label="Breed" setInputCb={setBreed}/>
                <LostPetInputField id="age" name="age" type="text" required label="Age" setInputCb={setAge}/>
                <LostPetInputField id="weight" name="weight" type="text" required label="Weight (approx kg)" setInputCb={setWeight}/>
                <LostPetInputField id="height" name="height" type="text" required label="Height (approx cm)" setInputCb={setHeight}/>
                <LostPetImageField id="petimg" name="petimg" label="Please upload image"/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
    else if (formState === FormState.SHOW_RESULT) {
        content_html = (
            <div>
                Thank you for submitting!<br/>
                First Name: {fname}<br/>
                Last Name: {lname}<br/>
                Email: {email}<br/>
                I lost my pet on: {date}<br/>
                Information of my pet:<br/>
                Breed: {breed}<br/>
                Age: {age}<br/>
                Weight: {weight}<br/>
                Height: {height}<br/>
            </div>
        );
    }
    else {
        content_html = (
            <Loading timeout={1} timeoutCb={() => setFormState(FormState.SHOW_RESULT)}/>
        );
    }

    return (
        <div>
            {content_html}
        </div>
    );
}

export default LostPet;