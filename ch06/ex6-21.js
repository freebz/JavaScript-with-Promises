// Example 6-21. Using an implicit iterator created by for...of

// Better substitute for iterator and loop
for (animal of match(animals, 'legs', 4)) {
    console.log(animal.type);
}
