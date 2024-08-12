
const express = require('express'); // Importing express module 
const path = require('path');

const app = express(); // Creating an express object 

const port = 8000; // Setting an port for this application 


app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.render("index")

})
 
// Starting server using listen function 
app.listen(port, function (err) { 
if(err){ 
	console.log("Error while starting server"); 
} 
else{ 
	console.log("Server has been started at "+port); 
} 
}) 
