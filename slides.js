const slides = document.querySelector('div.slides')
let current = 0
let z = 100000000
const images = slides.querySelectorAll('img')
images.forEach(image => {
  z = z - 1
  image.style.zIndex = z
})

gsap.set(images, { opacity: 0 })

imagesLoaded(images, function() {
  const timeline = gsap.timeline()
timeline
	.set(images, {
  	x: () => {
      return 500 * Math.random() - 250
    },
  	y: "500%", 
  	rotation: () => {
      return 90 * Math.random() - 45
    },
  opacity: 1
})
	.to(images, { x: 0, y: 0, stagger: -.25 })
	.to(images, {
  	rotation: () => {
      return 10 * Math.random() - 8
    } 
})
slides.addEventListener('click', function() {
  z = z - 1
 	let direction = "150%"
  let midAngle = 15
  if (Math.random() > 0.5) {
    direction = "-150%"
    midAngle = -15
  }
  const currentImage= images[current]
  const flipTimeline = gsap.timeline()
  flipTimeline
  	.set(currentImage, { x: 0})
  	.to(currentImage, { 
    	x: direction,
    	rotation: midAngle,
    	rotationY: 40,
    	scale: 1.1
  })
  	.set(currentImage, { zIndex: z})
  	.to(currentImage, { 
    	x: 0,
  		rotation: () => {
        return 16 * Math.random() - 8
      },
    rotationY: 0,
    scale: 1
  })
  images[current].style.zIndex = z
  current = current + 1
  current = current % images.length
})
})




