function distanceFromHqInBlocks(location) {
    return Math.abs(42 - location)  
};

function distanceFromHqInFeet(location) {
    return Math.abs(264* distanceFromHqInBlocks(location));
};

function distanceTravelledInFeet(start, destination) {
    return 264 * Math.abs(start - destination);
};

function calculatesFarePrice(start, destination){
    const fareDistance = distanceTravelledInFeet(start, destination);
    if (fareDistance < 400){
        return 0
    } else if (400 < fareDistance && fareDistance < 2000){
        return (fareDistance-400)*0.02
    } else if (2000 < fareDistance && fareDistance < 2500){
        return 25
    } else if (fareDistance > 2500) {
        return 'cannot travel that far'
    }
};

