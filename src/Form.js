import React, {Component } from 'react';
import { useState } from 'react';
import './Form.css';
class Form extends Component{

constructor(props){
    super(props)
    this.state={fullname: "name",
                email:" abc@gmail.com",
                phone:"00000",
                message:"give your feedback"
            }
    
}

// handlename = (event) => {
//     this.setState({fullname: event.target.value})
    
// }
// handlemail = (event) => {
//     this.setState({email: event.target.value})
    
// }
// handlenum = (event) => {
//     this.setState({phone: event.target.value})
    
// }
// handlemsg = (event) => {
//     this.setState({message: event.target.value})
    
// }
handleall=(event) => {
    this.setState({[event.target.name] : event.target.value})
}
handlesubmit=(event)=>{
    alert(JSON.stringify(this.state) )
    event.preventDefault();
}
 
    render(){
     
        return(
           
            <div>
                
                <form onSubmit={this.handlesubmit}>
                    <label>Fullname: </label><br/> 
                    <input type="text" value={this.state.fullname}
                     onChange={this.handleall}/> <br/>  

                    <label>Email: </label><br/> 
                    <input type="email" value={this.state.email}
                     onChange={this.handleall}/><br/>  

                    <label> Mobile </label><br/> 
                    <input type="number" value={this.state.phone}
                     onChange={this.handleall}/> <br/>  

                    <label>Message</label><br/> 
                    <textarea value={this.state.message}
                     onChange={this.handleall}/> <br/>            
                      
                     <input type="submit" value="send"/> 
                      </form>
            </div>
        );
    }
}
export default Form;