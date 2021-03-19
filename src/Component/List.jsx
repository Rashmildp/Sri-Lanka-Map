import React, { Component } from 'react';
import districtData from './data';
import { connect } from "react-redux";

function List(props) {
    let mapdata=props.mapdata;



    const items = districtData.filter((data)=>{
        if(mapdata===null )
            return data
            else if(data.District.includes(props.eventmapCompare[mapdata]))
                return data
        
      }).map(data=>{
          return(
            <h4>{data.District}</h4> 
          )
       
   
      })
      return (
        <div>
     
        {items}
        </div>
      )
  
  
 
        }

   

  


        const mapStateToProps = (state) => {
            return {
          
                eventmapCompare:state.reducers.eventmapCompare,
                mapdata:state.reducers.mapdata,
            };
          };
          
          
          export default connect(mapStateToProps)(List);
          
          