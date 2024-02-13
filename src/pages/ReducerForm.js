import React, { useReducer } from "react";

const initialData = {
    lowercase: '',
    uppercase: '',
    spaces: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOWERCASE':
            return { ...state, [action.payload.name]: action.payload.value.toLowerCase() }
        case 'UPPERCASE':
            return { ...state, [action.payload.name]: action.payload.value.toUpperCase() }
        case 'SPACES':
            return { ...state, [action.payload.name]: action.payload.value.replaceAll(' ', '') }
        default:
            return state;
    }
};
export default function ReducerForm() {
    const [data, dispatch] = useReducer(reducer, initialData);
    const handleChange = (e) => {
        dispatch({ type: e.target.name.toUpperCase(), payload: { name: e.target.name, value: e.target.value } });
    };

    return (
        <>
            <form>
                <input type="text" placeholder="Only Lowercase" name="lowercase" onChange={handleChange} value={data.lowercase} /><br />
                <input type="text" placeholder="Only Uppercase" name="uppercase" onChange={handleChange} value={data.uppercase} /><br />
                <input type="text" placeholder="No Spaces" name="spaces" onChange={handleChange} value={data.spaces} />
            </form>
        </>
    )
}