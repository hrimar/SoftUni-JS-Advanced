function f(input) {  // 100/100
    if (input.handsShaking) {
        input.bloodAlcoholLevel += input.weight * (input.experience / 10);
        input.handsShaking = false;
    }
   return input;
}

console.log(f({
        weight: 80, // 80*0.1=8
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true
    }
));
console.log(f({
        weight: 120, // 120*2.0 = 240
        experience: 20,
        bloodAlcoholLevel: 200,
        handsShaking: true
    }
));
console.log(f({
        weight: 95,  // 95*0.3=28.5
        experience: 3,
        bloodAlcoholLevel: 0,
        handsShaking: false
    }
));
