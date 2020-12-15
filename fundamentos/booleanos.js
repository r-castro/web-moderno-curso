let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive); //dupla negação

// true 
console.log('is true...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

// false
console.log('is false...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log("Para finalizar");
console.log(!!('' || null || 0 || ' '));

let name = 'Rodrigo'

console.log(name || 'Desconecido');
