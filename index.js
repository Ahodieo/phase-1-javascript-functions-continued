// Your code here
function saturdayFun(vibes){
    if (vibes === undefined) {vibes = "roller-skate";}
    return `This Saturday, I want to ${vibes}!`
}
function mondayWork(chore){
    if (chore === undefined) {chore = "go to the office";}
    return `This Monday, I will ${chore}.`;
}
function wrapAdjective(adject){
    const part1 = "You are";
    return function(result){
        if (adject === undefined) { result = "special";}
        return `${part1} ${adject}${result}${adject}!`;
    }
}
console.log(wrapAdjective("%")("21 years old"))