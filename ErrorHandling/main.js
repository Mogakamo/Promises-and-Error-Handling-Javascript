try{
    // let car = newCar;
    throw new Error('my custom error');
}
catch(error) {
    console.log('Error: ',error);
}
finally {
    console.log('This block always excutes');
}
console.log('continuing...');