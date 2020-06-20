function filesGetting(file,callback){
			var ajaxCall=new XMLHttpRequest();
			ajaxCall.overrideMimeType("aplication/json");
			ajaxCall.open("GET",file,true);
			ajaxCall.onreadystatechange=function(){
				if(ajaxCall.readyState===4 && ajaxCall.status=="200"){
					callback(ajaxCall.responseText);
					console.log(ajaxCall.status.responseText);

				}
			}
			ajaxCall.send(null);
		}
		filesGetting("data.json",function(jsondata){
			var data=JSON.parse(jsondata);
			details(data)
			console.log(data);
		})
var child=document.querySelector('.child')
function details(data){
	var name=document.createElement('h2')
	name.textContent=data.name;
	child.appendChild(name)


}









// //get the body tag create
// 		 var body=document.getElementById("root");
// 		//var body=document.querySelector("#root");//used to get the classname,id etc....

// 		//console.log(body)//to check output
// 		//create section tag
// 		var main=document.createElement("section");
// 		//classname to the section
// 		main.classList.add("main");
// 		//append the main section to the body tag
// 		body.appendChild(main);

// 		//create article-1
// 		var article1=document.createElement("article");
// 		article1.setAttribute("class","article1");
// 		main.appendChild(article1);

// 		// create image tag
// 		var image=document.createElement("img");
// 		image.src="/home/student/Desktop/workshop/profile.png";
// 		image.alt="profile";
// 		article1.appendChild(image);
// 		//create horizontal line
// 		article1.appendChild(document.createElement("hr"));
// 		//h2 for name
// 		var name1=document.createElement("h2")
// 		name1.textContent="Thugu Ramya";
// 		article1.appendChild(name1);
// 		//create email
// 		var email=document.createElement("h2")
// 		email.textContent="emramyareddy@gmail.com";
// 		article1.appendChild(email);
// 		//create mobile 
// 		var phone=document.createElement("h4")
// 		phone.textContent="9666019850";
// 		article1.appendChild(phone);
		
// 		//create article-2
// 		var article2=document.createElement("article");
// 		article2.setAttribute("class","article2");
// 		main.appendChild(article2);

// 		// create image tag
// 		var image=document.createElement("img");
// 		image.src="/home/student/Desktop/workshop/profile.png";
// 		image.alt="profile";
// 		article2.appendChild(image);
// 		//create horizontal line
// 		article2.appendChild(document.createElement("hr"));
// 		//h2 for name
// 		var name1=document.createElement("h2")
// 		name1.textContent="Thugu Ramya";
// 		article2.appendChild(name1);
// 		//create email
// 		var email=document.createElement("h2")
// 		email.textContent="emramyareddy@gmail.com";
// 		article2.appendChild(email);
// 		//create mobile 
// 		var phone=document.createElement("h4")
// 		phone.textContent="9666019850";
// 		article2.appendChild(phone);