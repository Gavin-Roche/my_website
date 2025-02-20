const accordionHeaders = document.querySelectorAll('.accordionHeader');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Closes all the other accordion's content
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== this) {
                otherHeader.classList.remove('active');
            }   
        });
        this.classList.toggle('active');
    });
});