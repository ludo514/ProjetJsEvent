
function clique(){
	var footer = document.getElementsByTagName("footer")
	var nombre = 0
	var onClick = function(){
		nombre += 1
		console.log("clique : " + nombre)
	}
	footer[0].addEventListener("click", onClick)
}

function menu(){
	var navBar = document.getElementById("navbarHeader")
	var burger = document.querySelector("span.navbar-toggler-icon")
	var onClick = function(){
		navBar.classList.toggle("collapse")
	}
	burger.addEventListener("click", onClick)
}

function edit(){
	var button = document.querySelector("button.btn.btn-sm.btn-outline-secondary")
	var text = document.querySelector("p.card-text")
	var onClick = function(){
		text.style.color = "red"
	}
	button.addEventListener("click", onClick)
}

function edit2(){
	var button = document.querySelectorAll("button.btn.btn-sm.btn-outline-secondary")
	var text = document.querySelectorAll("p.card-text")
	var onClick = function(){
		text[1].classList.toggle("text-success")
	}
	button[1].addEventListener("click", onClick)
}

function navBar(){
	var navBar = document.getElementsByTagName("header")
	var lien = document.getElementsByTagName("link")
	var onClick = function(){
		if (lien[0].href == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
			lien[0].href = ""
		}
		else{
			lien[0].href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		}
	}
	navBar[0].addEventListener("dblclick", onClick)
}

function view(){
	let cards = document.querySelectorAll("div.col-md-4")
	console.log(cards)
	for(card of cards){
		let text = card.querySelector("p.card-text")
		let img = card.querySelector("img.card-img-top")
		let viewButton = card.querySelector("button.btn.btn-sm.btn-success")
		console.log(viewButton)
		viewButton.addEventListener("mouseover", function(){
			text.classList.toggle("collapse")	
			if (img.style.width == "80%"){
				img.style.width = "100%"
			}else{
				img.style.width = "80%"
			}
		})
	}
}

function main(){
	clique()
	menu()
	edit()
	edit2()
	navBar()
	view()
}

main()
