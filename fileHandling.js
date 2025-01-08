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

    // error in line but remember that      fs.appendFileSync('./text.txt' , newDate().getDate().toLocaleString()  ); 
//     // Append time 
//    fs.appendFileSync ('./text.txt' , new Date().getTime().toLocaleString())
// Append Date
// fs.appendFileSync('./text.txt' , new Date().getDate().toLocaleString())
// Append String
// fs.appendFileSync('./text.txt' , ("Hey there are new text \n"))
// // date
// fs.appendFileSync('./text.txt', `${Date.now} hey there \n`);
//copy File 
// fs.copyFileSync('./text.txt' , './text2.txt')
// Delete File
// fs.unlinkSync('./text2.txt')
// File state
// console.log(fs.statSync('./text.txt'))
// console.log(fs.statSync('./text.txt').isFile)
// fs.mkdirSync ('./newFolder');
// delete the folder
//  fs.unlinkSync ('./newFolder');
// multi Folders
fs.mkdirSync("newffolder/a/b/c",{
    recursive: true
})
