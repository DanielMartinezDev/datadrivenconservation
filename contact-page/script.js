// Select all testimonials
const testimonials = document.querySelectorAll('.testimonials blockquote');
let currentIndex = 0;

// Function to switch testimonials
function showNextTestimonial() {
  // Hide the current testimonial
  testimonials[currentIndex].classList.remove('active');
  
  // Move to the next testimonial (circular)
  currentIndex = (currentIndex + 1) % testimonials.length;

  // Show the next testimonial
  testimonials[currentIndex].classList.add('active');
}

// Initialize the first testimonial to be visible
testimonials[currentIndex].classList.add('active');

// Change testimonials every 5 seconds
setInterval(showNextTestimonial, 5000);
