document.addEventListener('DOMContentLoaded',()=> {
    let url = "http://localhost:3000/ramens";
    const renderRamens = async () =>{   
        const res = await fetch(url);
        const posts = await res.json();
        console.log(posts);
        //let ramen = '';
        posts.forEach(element => {
            //let id = element.id;
            let image = document.createElement('img')
            image.src = `${element.image}`
            let imageContainer = document.getElementById('ramen-menu')
            imageContainer.appendChild(image); 
            console.log(element.comment);
            let img = document.querySelector('im')
            // console.log(img);
            image.addEventListener("click", function() {
                // displayImgDetails(ramen)
                console.log(element.comment);
                const rating = document.querySelector("#rating-display")
                const comment = document.querySelector("#comment-display")
                const img = document.querySelector(".detail-image")
                const name = document.querySelector(".name")
                const restaurant = document.querySelector(".restaurant")
                console.log(element.comment);
                console.log(element.rating);
                rating.innerHTML = element.rating
                comment.innerHTML = element.comment
                img.src = element.image
                name.innerHTML = element.name
                restaurant.innerHTML = element.restaurant
          })
        });
    }
    let form = document.querySelector('#new-ramen')
    console.log(form);
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        let ramenObj = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: 0,
            comment: e.target.querySelector('#new-comment').value
        }
        console.log(ramenObj);
        renderNewRamen(ramenObj)
    })
    const renderNewRamen = (newRamen)=>{
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(newRamen)
        })
        .then (resp => resp.json())
        .then(data => console.log(data))
    }
    renderRamens()
})