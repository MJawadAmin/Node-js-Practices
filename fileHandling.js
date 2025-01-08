const fs =require ("fs");

// sync
 // 
// Asyncronous
// fs.writeFileSync("./text.txt" , "Hello File Handling world in Async" , (err)=> {})

    // Reading File 
    // const result = fs.readFileSync("./text.txt" , "utf-8");
    // console.log(result)


    //call back function
    
    // fs.readFile("./text.txt" , "utf-8" , (err , data)=> {
    //     if (err) {
    //         console.log("Error " , err);
    // }
    // else {
    //     console.log(data);
    // }});

    // error in line but remember that      fs.appendFileSync('./text.txt' , newDate().getDate().toLocaleString()  ); append 
   fs.appendFileSync ('./text.txt' , new Date().getTime().toLocaleString())

