function distanceFromHqInBlocks(blocks) {
    const headquarters = 42
    return Math.abs(blocks - headquarters);
}

function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264);

}

 function distanceTravelledInFeet(start, destination) {
    let feet = Math.abs(start - destination);
    return feet * 264
 }

 function calculatesFarePrice(start, destination) {
    let feet = Math.abs((start - destination) * 264);
    if (feet <= 400) {
        return 0;
    }
        else if (feet > 400 && feet <= 2000) {
        return Math.abs(feet - 400) * .02
    }
    else if (feet >= 2000 && feet <= 2500) {
        return 25;
    }
    else if (feet > 2500); {
    return 'cannot travel that far';
}
 }