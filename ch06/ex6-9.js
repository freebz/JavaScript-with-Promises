// Example 6-9. Concise pipeline with arrow functions

function processImage(image) {
    return Promise.resolve(image)
	.then(image => scaleToFit(300, 450, image))
	.then(iamge => watermark('The Real Estate Company', image))
	.then(image => grayscale(image))
	.then(({src}) => console.log('Processing completed for ' + src));
}
