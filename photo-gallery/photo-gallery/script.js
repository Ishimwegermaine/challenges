// Function to hide all galleries
function hideAllGalleries() {
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        gallery.classList.add('hidden');
    });
}

// Function to display all galleries
function displayAllGalleries() {
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        gallery.classList.remove('hidden');
    });
}

// Add event listener for "Display All Galleries" option
document.getElementById('displayAll').addEventListener('click', function(event) {
    event.preventDefault();
    displayAllGalleries();
});

// Add event listeners for gallery links
const galleryLinks = document.querySelectorAll('.sidebar a[data-gallery]');
galleryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const galleryId = this.getAttribute('data-gallery');
        hideAllGalleries();
        document.getElementById(galleryId).classList.remove('hidden');
    });
});

// JavaScript for toggling dropdown lists
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const sublist = dropdown.querySelector('ul');

        dropdown.addEventListener('click', function() {
            sublist.classList.toggle('hidden');
        });
    });

    // Show the first gallery by default
    document.getElementById('gallery1').classList.remove('hidden');
});
