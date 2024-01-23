import React from 'react'

export default class HigherOrderFunctions extends React.Component{

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ],
            filterUsingUserType:[],
            filterJ:[],
            filterAge:[],
            Ex:0
        }
        let filteredData = this.state.userData.filter((el,i,arr)=>{
            if(el.user_type=="Designer"){
                return el
            }
        })
        let filterJname = this.state.userData.filter((el,i,arr)=>el.name.startsWith("J"))
        let filterAgename = this.state.userData.filter((el,i,arr)=>el.age>28 &&el.age<=50)
        let total = this.state.userData.filter((el)=>el.user_type=="Designer").reduce((acc,el,i,arr)=>{
            return acc+el.years
        },0)
        
        this.state.filterUsingUserType = filteredData
        this.state.filterJ = filterJname 
        this.state.filterAge = filterAgename 
        this.state.Ex = total
    }

    render(){
        return(
            <>
            <h1>Display All Items</h1>
            <div className='div' style={{border:"1px solid black", Width:"500px"}}>
            {this.state.userData.map((el,i,arr)=>(
                <div style={{display:"flex",alignItems:"center", justifyContent:"center",color:"#0E2BFF"}} key={el.id}>
                    <p>Id:{el.id}</p> &nbsp;&nbsp;&nbsp;&nbsp;
                    <p>Name:{el.name}</p>  &nbsp;&nbsp;&nbsp;&nbsp;
                    <p>UserType:{el.user_type}</p>
                </div>
            ))}
            </div>

            <h1>Display Data based on user type</h1>
            <div className='div'>
            {this.state.filterUsingUserType.map((el,i,arr)=>(
                <div style={{display:"flex",alignItems:"center", justifyContent:"center",color:"#0E2BFF"}} key={el.id}>
                    <p>Id:{el.id}</p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p>Name:{el.name}</p>  &nbsp;&nbsp;&nbsp;&nbsp;
                    <p>UserType:{el.user_type}</p>
                </div>
            ))}
            </div>
 

            <h1>Filter All Data Starting with the letter J</h1>
            <div className='div'>
            {this.state.filterJ.map((el,i,arr)=>(
                <div style={{display:"flex", alignItems:"center", justifyContent:"center",color:"#0E2BFF"}} key={el.id}>
                    <p>Id:{el.id}</p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p>Name:{el.name}</p>  &nbsp;&nbsp;&nbsp;&nbsp;
                    <p>UserType:{el.user_type}</p>
                </div>
            ))}
            </div>


            <h1>Filter Data Based on Age</h1>
            <div className='div'>
            {this.state.filterAge.map((el,i,arr)=>(
                <div style={{display:"flex", alignItems:"center", justifyContent:"center",color:"#0E2BFF"}} key={el.id}>
                    <p>Id:{el.id}</p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p>Name:{el.name}</p>  &nbsp;&nbsp;&nbsp;&nbsp;
                    <p>UserType:{el.user_type}</p>
                </div>
            ))}
            </div>


            <h1>Filter Data Based on Experience</h1>
            <div className='div'>
            <p style={{color:"#0E2BFF"}}>{this.state.Ex}</p>
            </div>
            </>
        )
    }

}
