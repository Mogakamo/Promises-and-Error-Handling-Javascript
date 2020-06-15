try{
    let car = newCar;
}
catch(error) {
    console.log('Error: ',error);
}
finally {
    console.log('This block always excutes')
}
console.log('continuing...')