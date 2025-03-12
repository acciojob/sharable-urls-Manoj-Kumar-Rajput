// your code here
let button=document.getElementById("button");
button.addEventListener("click",()=>
{
	//doument.innerHTML="";
	let name=document.getElementById("name").value;
	let year=document.getElementById("year").value;
	let h3=document.getElementById("url");
	let url="https://localhost:8080/";
	if(name!="" && year!="")
	{
		h3.innerText=url+"?name="+name+"&year="+year;
	}
	else if(name!="" && year=="")
	{
		h3.innerText=url+"?name="+name;
}
	else if(name=="" && year!="")
	{
h3.innerText=url+"?year="+year;
}
    else
	{
		h3.innerText=url;
	}
});