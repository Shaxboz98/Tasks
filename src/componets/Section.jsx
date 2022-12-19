import React, { Component } from 'react';
import data from '../componets/Language'
import '../index.css'
import Header from './Header';
class Section extends Component {
  constructor(props){
    super(props)
    this.state= {
      data: data,
      name:''
     }
    }
  render() {
    const onDelete=(id)=>{
    let res = this.state.data.filter((item => item.id!==id))
    this.setState({data:res})
    }
    const onChange=(event)=>{
      this.setState({[event.target.name]: event.target.value})
    }
    const onAdd=()=>{
      let user={
        id:this.state.data.length+1,
        name: this.state.name
      }
      
      this.setState({
        data:[...this.state.data,user],
        name: ''
      })
      console.log(user);
    }
    return (
      <div className='container ' style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <Header/>
         {
          this.state.data.map(({id,name})=>{
            return(
              <div className="wrapper" style={{display:'flex',width:'80%',justifyContent:'space-between',marginTop:"50px"}} key={id}>
               <input type="checkbox" style={{outline:'none',border: 'none'}}/>
               <h1>{name}</h1>
               <button className='btnDelete' onClick={()=>onDelete(id)}>Delete</button>
               
              </div>
            )
          })
         }
         <div style={{width:'80%',display:'flex',marginTop:'50px',justifyContent:'space-between'} }>
        <input value={this.state.name} name='name' 
        onChange={onChange} type="text" 
        placeholder='Add Todo' 
        style={{width:'70%',height:'40px',
        borderRadius:'10px',paddingLeft:'20px',
        outline:'none',border:'1px solid #666'}}/>
        <button style={{width:'15%',height:'40px',
        borderRadius:'20px',outline:'none',
        border:'1px solid #666'}} onClick={onAdd}>
          Add</button>
      </div>
        
      </div>
    );
  }
}

export default Section;