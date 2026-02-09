import React from 'react';

const RelativeList  = () => {
  const relatives = ["Rahul", "Neha", "Amit" , "Priya"] 

   
  return (
    <div id="main">
            <ol>
               {relatives.map((name , index) =>(
                <li key={`relativeListItem${index }`}>
                  {name}
                </li>

               ))}
            </ol>  
    </div>
  );
};

export default RelativeList; 
