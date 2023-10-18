
const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line
const primaryValid = !isNaN(Number(primaryPhone));
const secondaryValid = !isNaN(Number(secondaryPhone));

if (primaryValid || secondaryValid) {
    console.log('Primary phone is a valid numerical string:', primaryValid);
    console.log('Secondary phone is a valid numerical string:', secondaryValid);
} else {
    console.log("Primary phone and/or secondary phone are not valid numerical strings");
}



