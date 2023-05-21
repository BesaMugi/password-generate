function generatePassword(length, level = 'easy', array = 1){
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
    
    let arrPasswords = [];
    
    for (let i = 0; i < array; i++){
        let newPassword = '';
        for(let k = 0; k < length; k++){
            if(level === 'medium'){
                const lvlMedium = alphabet + digits
                const randomPassword = lvlMedium[Math.floor(Math.random() * lvlMedium.length)]
                newPassword += randomPassword
            }else if(level === 'hard'){
                const lvlHard = alphabet+digits+symbols
                const randomPassword = lvlHard[Math.floor(Math.random() * lvlHard.length)]
                newPassword += randomPassword
            }else{
                const randomPassword = alphabet[Math.floor(Math.random() * alphabet.length)]
                newPassword += randomPassword
            }
        }
        if (arrPasswords.includes(newPassword)) {
            array++;
          } else {
            arrPasswords.push(newPassword);
          }
        
    }
    if (array > 1){
        return arrPasswords;
    }else{
        return arrPasswords[0]
    }
}

const arr = (generatePassword(4, 'medium',5500));

const setting = new Set(arr)
console.log(setting.size)

console.log(generatePassword(4, 'hard', 32))