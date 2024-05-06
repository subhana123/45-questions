//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase


let personName: string = "Subhana Rameez";

//step 1 show in lowercase

let lowercaseName: string = personName.toLowerCase();

console.log(lowercaseName);

let uppercaseName: string = personName.toUpperCase();

console.log(uppercaseName);

let words: string[]= personName.split(" ");

let titlecaseName: string = ""

for (let i = 0 ;i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLocaleLowerCase()+" "
};

console.log(titlecaseName)