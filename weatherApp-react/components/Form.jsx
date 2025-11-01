import { useState } from "react";

const Form = () => {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        setFormValue({...formValue, name:"", email:"", password:""})
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <div className="box">
                <label htmlFor="name">Name</label>
                <input
                    onChange={(e) => {
                        setFormValue({ ...formValue, name: e.target.value })
                    }}
                    value={formValue.name}
                    type="text" id="name" placeholder="Enter your name" />
                <label htmlFor="email">Email</label>
                <input onChange={(e) => {
                    setFormValue({ ...formValue, email: e.target.value })
                }}
                    value={formValue.email} 
                    type="text" id="email" 
                    placeholder="Enter your email" />
                <label htmlFor="password">Password</label>
                <input onChange={(e) => {
                    setFormValue({ ...formValue, password: e.target.value })
                }}
                    value={formValue.password} 
                    type="text" 
                    placeholder="Enter your password" />
                <button style={{fontSize:"25px"}}>Submit</button>
            </div>
            <br /><br />
            <table border={2}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>x</td>
                    <td>x@gmail</td>
                    <td>12345</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>y</td>
                    <td>y@gmail</td>
                    <td>ABCD</td>
                </tr>
            </table>
        </form>
    )
}

export default Form