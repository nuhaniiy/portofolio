/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});


    function openPopup(imgElement) {
        const modal = document.getElementById('imagePopup');
        const modalImg = document.getElementById('popupImage');
        const modalTitle = document.getElementById('popupTitle');
        const modalLink = document.getElementById('popupLink');
        
        // Get the parent img-wrapper element
        const imgWrapper = imgElement.closest('.img-wrapper');
        
        // Get the title and link from the overlay
        const title = imgWrapper.querySelector('h5').textContent;
        const link = imgWrapper.querySelector('a').href;
        
        // Set the modal content
        modalImg.src = imgElement.src;
        modalTitle.textContent = title;
        modalLink.href = link;
        
        // Show the modal
        modal.style.display = "block";
    }
    
    function closePopup() {
        document.getElementById('imagePopup').style.display = "none";
    }
    
    // Close when clicking outside the modal content
    window.onclick = function(event) {
        const modal = document.getElementById('imagePopup');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
