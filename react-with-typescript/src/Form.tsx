import React, {useState} from 'react'

type FormProps = {
    onSubmit : (form : {name : string; description : string}) => void;
}

function Form({onSubmit} : FormProps) {
    const [Form, setForm] = useState({
        name : '',
        description : ''
    })
    
    const { name, description } = Form;

    const onChange = ( e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...Form,
            [name] : value
        })
    }

    // type 지정이 애매할땐 any로

    const handleSubmit = ( e : React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        onSubmit(Form);
        setForm({
            name : '',
            description : ''
        });
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" name="name" value={name} onChange={onChange} />
            <input type="text" name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    )
}

export default Form
