// Example 6-8. Concise pipeline (repeated from earlier chapter)

function processImage(image) {
    // Image is always last parameter preceded by any configuration parameters
    var customScaleToFit = scaleToFit.bind(null, 300, 450);
    var customWatermark = watermark.bind(null, 'The Real Estate Company');

    return Promise.resolve(image)
	.then(customScaleToFit)
	.then(customWatermark)
	.then(grayscale);
}
