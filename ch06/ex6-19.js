// Example 6-19. Finite iterations

function* match(objects, propname, value) {
    var i;
    var obj;
    for (i = 0; i < objects.length; i++) {
	obj = objects[i];
	if (obj[propname] === value) yield obj;
    };
}

var animals = [
    { type: 'bird', legs: 2 },
    { type: 'cat', legs: 4 },
    { type: 'dog', legs: 4 },
    { type: 'spider' , legs: 8 }
];

var iterator = match(animals, 'legs', 4);
console.log(iterator.next().value.type); // value is an animal
console.log(iterator.next().value.type); // value is an animal
console.log(iterator.next().value);      // value is undefined

// Console output:
// cat
// dog
// undefined
