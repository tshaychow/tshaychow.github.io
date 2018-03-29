
const imageArea = document.getElementById("sidle"),
images = imageArea.getElementsByTagName("img");

if (images.length > 1) {
	for (var i = 0; i < images.length; i++) {
		let topEdge = ((100 / images.length) * i) + 1,
		bottomEdge = (topEdge + (100 / images.length)) - 1;
		images[i].style.clipPath = `polygon(0% ${topEdge}%, 100% ${topEdge}%, 100% ${bottomEdge}%, 0% ${bottomEdge}%)`;
	}
	imageArea.classList.add("slide");

	function slide(imgTarget, direction) {
					 let slidy = imgTarget.animate([
							{ transform: 'translateX(0%)', clipPath: imgTarget.style.clipPath },
							{ transform: 'translateX(101%)', clipPath: imgTarget.style.clipPath },
							{ transform: 'translateX(101%)', clipPath: imgTarget.style.clipPath },
							{ transform: 'translateX(101%)', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }
						], {
						duration: 666,
						easing: 'linear',
						fill: 'forwards',
						direction: direction
				 });
				 imgTarget.classList.toggle("full");
	}
	imageArea.addEventListener("click", function(e) {
		let fullImage = document.querySelector(".full");
		document.getElementById("picture_comment").innerHTML = e.target.alt; 
		if (fullImage == null) {
				slide(e.target, "normal");
			 } else {
				 slide(fullImage, "reverse");
				 if (e.target !== fullImage) {
					 setTimeout(function(){ slide(e.target, "normal"); }, 200);
				 }
			 }
	})
}