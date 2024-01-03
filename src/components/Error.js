import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1 style={{color:"red"}}>Oops Error Page</h1>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error;
