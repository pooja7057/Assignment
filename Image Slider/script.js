const images = [
    "https://images.immediate.co.uk/production/volatile/sites/10/2018/02/4f492b22-2d29-4360-80a6-79879487c7b7-e07922e.jpg?quality=90&fit=700,466",
    "https://media.istockphoto.com/id/1732254589/photo/bouquet-with-different-kinds-of-flowers.jpg?s=612x612&w=0&k=20&c=soaW-4FbOw7MwTOFq3Or2vOx3ZI4gzoHAEEhkqWeEqI=",
    "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt06144d33acbe7723/6668d023759c443a42553ee6/Japanese-lily.jpeg?q=70&width=3840&auto=webp",
    "https://d775ypbe1855i.cloudfront.net/large/6/BeavertonFloristsInc-203772-Types-of-Flowers-blogbanner1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjzL6HVlQljVar4u581BPxL2yB9omliezbQ&s",
    "https://www.thespruce.com/thmb/vYEnTZJF9HkzypCPjJ6TFuYKF_Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1150441731-93bdedd1a04148b8881febbeb3e1e17c.jpg",
    "https://cdn.direct2florist.com/uploads/Direct2florist/flower-types/Daisy-sm-min.jpg",
    "https://www.ugaoo.com/cdn/shop/articles/7fcb1f9c76.jpg?v=1705580314",
    "https://jamescressflorist.com/cdn/shop/files/91238alt_view.webp?v=1724196505",
    "https://www.shutterstock.com/image-photo/saint-gallen-switzerland-july-14-260nw-2500961323.jpg",
    "https://gardenerspath.com/wp-content/uploads/2022/03/Collosus-Red-Gold-Marigold-Flowers.jpg"
  ];

  let currentIndex = 0; // Always start from the first image
const slideImage = document.getElementById("slide-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateImage() {
    slideImage.src = images[currentIndex];
    
    // Disable 'Previous' button if at the first image
    prevBtn.disabled = currentIndex === 0;
    
    // Disable 'Next' button if at the last image
    nextBtn.disabled = currentIndex === images.length - 1;
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Initial image display
updateImage();
