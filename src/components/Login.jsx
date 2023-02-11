import React,{useState} from 'react';


const Login = () =>{
const [data,setData] = useState({});
const [allData,setallData] = useState([]);
const handleChange = (e)=>{
setData((prev)=>{
    return {
        ...prev,
        [e.target.name]:e.target.value
    }
})

}   
const handleSubmit = (e) =>{
    e.preventDefault();
    alert(JSON.stringify(data));
    setallData((prev)=>{
        return [...prev,data];
    })
    setData({});
}
 return (
<div>
    <form onSubmit={handleSubmit}>
    <input value={data.fname || ''} onChange={handleChange} type="text" name="fname" placeholder="firstname"/>
    <input value={data.lname || ''} onChange={handleChange}  type="text" name="lname" placeholder="lastname"/>
    <input value ={data.bday || ''} onChange={handleChange} type="date" name="bday" placeholder="date"/>
    <input value ={data.pwd || ''}  onChange={handleChange}  type="password" name="pwd" placeholder="password"/>
    <button type="submit">Submit</button>
    <table>
        <th>firstName</th>
        <th>lastname</th>
        <th>date of birth</th>
        <th>password</th>
        {allData.map((item)=>{
            return <tr>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.bday}</td>
                <td>{item.pwd}</td>
            </tr>
        })}
    </table>
    </form>
</div>
    )
}

export default Login;