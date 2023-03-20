let nums = [1, 2, 3, 4, 5];
let arr1 = [20,40,60,80,3];

const pokemon = [
    {name: "pikachu",
    type: "lightning",
    damage: 20,
    },
    {name: "machamp",
    type: "fighting",
    damage:60,
        },
    {name: "mew",
    type: "psychic",
     damage:30,
            },
    {name: "charizard",
    type: "fire",
    damage: 100,
                },
];
pokemon.forEach ((pokemon)=>{
    console.log(pokemon.name, pokemon.damage);
})         

// nums.reduce((sum, num) => {
//   return sum + num;
// }, 0);

// console.log(
//     arr1.reduce((sum,num)=>{
//         if(num % 10 !==0){
//             console.log(num);
//         }
//         else{
//             console.log(num);
//             return sum+= num;
//         }
//         return sum
//     },0 )
// );

// var sum = 0;
// arr1.forEach((num)=>{
//     if(num % 10 !==0){
//         console.log("in the if" + num);
//     }
//     else{
//         // console.log(num);
//         return sum+= num;
//     }
//     console.log(sum)
//     return sum;

// })


// arr.reduce(function(previousValue, currentValue, currentIndex, array){
//     previousValue += currentValue;
// }, initialValue);

// arr.reduce((total,currentValue, currentIndex, array)=>{
//     total+=currentValue;
// }, initialValue)''


nums.reduce(function red(){

})




// map example

// const onlyNameAndType = pokemon.map((pokemon)=>{
//    return {name: pokemon.name, type: pokemon.type}
// })
// console.log(onlyNameAndType)



// let onlyNameAndType = [];

// pokemon.forEach((pokemon)=>{
//     onlyNameAndType.push({(pokeName:pokemon.name, PokeType:
//     pokemon.type)})
// });


// console.log(onlyNamesAndTypes);