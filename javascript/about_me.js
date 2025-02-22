const accordionHeaders = document.querySelectorAll('.accordionHeader');

// Controls the accordion behavior
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

const tabLinks = document.querySelectorAll('.tabLinks');
const years = document.querySelectorAll('.year');

// Switches between the different tabs
tabLinks.forEach((tab, index) => {
    tab.addEventListener('click', function() {

        // Removes active from all tabs
        tabLinks.forEach(otherTab => {
                otherTab.classList.remove('active');
        });

        // Adds active to a tab
        this.classList.add('active')

        // Removes active from tab content
        years.forEach(year => {
            year.classList.remove('active');
        });

        // Adds active to the corresponding content
        years[index].classList.add('active');
    });
});