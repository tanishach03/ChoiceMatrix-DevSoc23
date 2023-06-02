import { Button } from '@mui/material';
import './Contact.css';

const Contact = () =>{
    return(
        <div className="contact-container">
            <div className="contact-info">
                <h4>CONTACT INFORMATION</h4>
                <table className='contact-table'>
                    <tr><td className='td-bold'>Name: </td><td>Choice Matrix</td></tr>
                    <tr><td className='td-bold'>Email: </td><td>choicematrix@gmail.com</td></tr>
                    <tr><td className='td-bold'>Phone: </td><td>+1234567890</td></tr>
                    <tr><td className='td-bold'>Address: </td><td>VIT Vellore</td></tr>
                </table>
            </div>
            <div className="contact-form">
                <h4>Get In Touch</h4>
                <input type='text' name='name' placeholder='First Name'/>
                <h4>Your Email</h4>
                <input type='email' name='email' placeholder='Enter our Email'/>
                <input type='text' name='sub' placeholder='Subject'/>
                <input type='text' name='queries' placeholder='Your Queries'/>
                <Button variant="contained" sx={{marginBottom: '10px',marginLeft: '38px' ,width: '150px',backgroundColor:"#000D85", ":hover": {backgroundColor: '#000D85'},}}>Submit</Button> 
            </div>
        </div>
    );
}

export default Contact;