        const API_URL = "https://dog.ceo/api/breeds/image/random";
        const loader = document.querySelector(".loader");
        const img = document.querySelector("#dog_img");

        function handleDogApi() {
            loader.style.display = "block";
            img.style.display = "none";

            fetch(API_URL)
                .then(res => res.json())
                .then(data => {
                    loader.style.display = "none";
                    img.style.display = "block";
                    img.src = data.message;
                })
                .catch(err => {
                    loader.textContent = "Failed to load image!";
                    console.error(err.message);
                });
        }

        handleDogApi();
