import React, { Component } from 'react';
import './Avatar.css';
import Avatar from './Avatar';
import 'tachyons';



    class Avatarlist extends Component{
            constructor(){
                super();
                this.state={
                    name:"Welcome to the Web World"
                }
            }
      namechange(){
          this.setState({
              name:"You have successfully subscribed to this page"
          })
      }
        render (){
            const avatarlistarray= [
                {
                    id:1,
                    name:"Mikun",
                    work:"Web Developer"
        
                },
                {
                    id:2,
                    name:"Apurv",
                    work:"Data Scientist"
        
                },
                {
                    id:3,
                    name:"Adarsh",
                    work:"UI Developer"
        
                },
                {
                    id:4,
                    name:"Piyush",
                    work:"Database"
        
                }
            ]
            const arraylistcard= avatarlistarray.map( (arraycard,i) => {
                return <Avatar  key={i} id={avatarlistarray[i].name}
                name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
        
             })

            return( <div className="mainpage">
                 <h1> {this.state.name} </h1>
                     {arraylistcard}
        <button onClick={ () => this.namechange()}>Subscribe</button>
        </div>)
       }
    }


export default Avatarlist;

