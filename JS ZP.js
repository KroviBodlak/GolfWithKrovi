
        let bum = document.querySelectorAll(".Selection img");
        console.log (bum);
        for (let img of bum)
        img.addEventListener("click", function(event){
            let images = event.target;
            document.getElementById("bigone").src = images.src;
        });
