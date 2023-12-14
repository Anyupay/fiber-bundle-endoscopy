document.addEventListener('DOMContentLoaded', function() {
    // Define the paths of the images. You need to provide the specific image paths.
    const imagePaths = {
        button1: 'https://static3.olympus-ims.com/data/RVI/Fiberscopes.jpg?rev=39E0',
        button2: 'https://www.mdpi.com/sensors/sensors-23-02469/article_deploy/html/images/sensors-23-02469-g001.png',
        button3: 'fiber_bundle_endoscopy_lens.png',
        button4: 'https://patentimages.storage.googleapis.com/b6/15/1b/cc31d0e9bb1d3f/HDA0002643634150000021.png',
        button5: 'https://www.spiedigitallibrary.org/ContentImages/Journals/JBOPFO/23/7/076005/FigureImages/JBO_23_7_076005_f008.png',
        button6: 'Layout.jpg'
    };

    // Reference to the element where images will be displayed.
    const imageDisplay = document.getElementById('imageDisplay');

    // Add click event listeners to each button in the button group.
    document.querySelectorAll('.button-group button').forEach(button => {
        button.addEventListener('click', function() {
            // Retrieve the image path based on the button's id and update the display.
            const imagePath = imagePaths[this.id];
            imageDisplay.innerHTML = `<img src="${imagePath}" alt="Image">`;
        });
    });

    // Display the image associated with button2 as the default on page load.
    const defaultImagePath = imagePaths['button2'];
    imageDisplay.innerHTML = `<img src="${defaultImagePath}" alt="Image">`;
});
