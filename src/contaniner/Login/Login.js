import { CustomizedInputs } from '../../component'
function Login({type,onChange,value , label}) {
    return (
        <>
        <CustomizedInputs title="Login" label={label} type={type} onChange={onChange} value={value} />
    </>
    )
}
export default Login;