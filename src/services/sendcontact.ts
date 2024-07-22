//Send Mail for Nodemail;





export async function Sendcontact(data:any){
const requestCFG ={
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body:data
};
const url = 'URL HERE'



const response = await fetch(url,requestCFG);

return  response.json();



}