// Functional Composition

// Example 3-16. Verbose pipeline

// Generic image processing functions
function scaleTofit(width, height, image) {
    console.log('Scaling image to ' + width + ' x ' + height);
    return image;
}

function watermark(text, image) {
    console.log('Watermarking image with ' + text);
    return image;
}

function grayscale(image) {
    console.log('Converting image to grayscale');
    return image;
}

// Image processing pipeline
function processImage(image) {
    return Promise.resolve(image).then(function (image) {
	return scaleToFit(300, 450, image);
    }).then(function (image) {
	return watermark('The Real Estate Company', image);
    }).then(function (image) {
	return grayscale(image);
    });
}

// Console output for processImage():
// Scaling image to 300 x 450
// Watermarking image with The Real Estate Company
// Converting image to grayscale
