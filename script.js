// your code here
function submit()
{
	//doument.innerHTML="";
	let name=document.getElementById("name").value;
	let year=document.getElementById("year").value;
	let h3=document.getElementById("url");
	let url=h3.innerText;
	if(name!="" && year!="")
	{
		h3.innerText+="?name="+name+"&year="+year;
	}
	else if(name!="" && year=="")
	{
		h3.innerText+="?name="+name;
}
	else if(name=="" && year!="")
	{
h3.innerText+="?year="+year;
}
     h3.style.display="block";
}