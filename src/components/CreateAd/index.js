import { Button, Card, CardContent, CardHeader, Checkbox } from "@mui/material";
import React from "react";

function index() {
  return (
    <div className="container">
      <p className="ad-title">Create Ads</p>
      <div className="card-container">
        <Card className="card">
            <CardHeader 
             title={"Demo"}
               component={() => {
                  return (
                    <Checkbox />
                  )
               }}
             >
               
            </CardHeader>

            <CardContent>
                 <p className="ad-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           
                 <div className="card-footer">
                     <p className="p-create">Create</p>
                     <p className="p-textAd">Text Ad</p>
                 </div>
           
                 </CardContent>


        </Card>

       <Card className="card">
       <CardHeader 
       title={"Demo"}
         component={() => {
            return (
              <Checkbox />
            )
         }}
       >
         
      </CardHeader>

      <CardContent>
           <p className="ad-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      
           <div className="card-footer">
                     <p className="p-create">Create</p>
                     <p className="p-textAd">Media Ad</p>
                 </div>
           </CardContent>

       
       </Card>


      </div>

      <div className="next-btn">
      <Button variant="contained">Next</Button>
      </div>
      
    </div>
  );
}

export default index;
