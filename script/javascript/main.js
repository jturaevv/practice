//                                                  __  _
//    ___ ___  _ __ ___  _ __  _ __ ___  ___ ___   / /_| | ___  ___ ___  _ __ ___  _ __  _ __ ___  ___ ___
//   / __/ _ \| '_ ` _ \| '_ \| '__/ _ \/ __/ __| / / _` |/ _ \/ __/ _ \| '_ ` _ \| '_ \| '__/ _ \/ __/ __|
//  | (_| (_) | | | | | | |_) | | |  __/\__ \__ \/ / (_| |  __/ (_| (_) | | | | | | |_) | | |  __/\__ \__ \
//   \___\___/|_| |_| |_| .__/|_|  \___||___/___/_/ \__,_|\___|\___\___/|_| |_| |_| .__/|_|  \___||___/___/
//                      |_|                                                       |_|

// var compress = function (str) {
//   let res = []

//   for (let i = 0; i < str.split("").length; i++) {
//     const letter = str[i]
//     if (res.length && res[res.length - 1][1] === letter) {
//       res[res.length - 1][0]++
//     } else res.push([1, letter])
//   }

//   res = JSON.stringify(res)

//   return res.length < str.length ? res : str
// }

// var decompress = function (c) {
//   let res = ""
//   if (c[0] !== "[") res = c
//   else {
//     JSON.parse(c).forEach((arr) => {
//       res += arr[1].repeat(arr[0])
//     })
//   }

//   return res
// }

// var string1 = "aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac"
// var string2 = "abcde"
// var c1 = '[[14,"a"],[1,"b"],[41,"a"],[1,"c"]]'
// var c2 = "abcde"

// console.log(compress(string2));
// console.log(decompress(c1));

// _________________________________________________________________________________


//   ____  _
//  |  _ \(_) ___ ___
//  | | | | |/ __/ _ \
//  | |_| | | (_|  __/
//  |____/|_|\___\___|

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

// function score(dice) {
//   let res = 0
//   let dices = {}

//   for (let i = 0; i < dice.length; i++) {
//     const num = dice[i];
//     if (dices[num]) dices[num]++
//     else dices[num] = 1
//   }

//   Object.keys(dices).forEach(key => {

//     do {
//       if (dices[key] >= 3) {
//         res += diceRates[key]["3"]
//         dices[key] -= 3
//       } else {
//         res += diceRates[key]["1"]
//         dices[key] -= 1
//       }

//     } while (dices[key] > 0);

//   });

//   return res
// }

// const diceRates = {
//   1: {
//     1: 100,
//     3: 1000
//   },
//   2: {
//     1: 0,
//     3: 200
//   },
//   3: {
//     1: 0,
//     3: 300
//   },
//   4: {
//     1: 0,
//     3: 400
//   },
//   5: {
//     1: 50,
//     3: 500
//   },
//   6: {
//     1: 0,
//     3: 600
//   }
// }

// console.log(score([2, 3, 4, 6, 2]), "result: 0");
// console.log(score([4, 4, 4, 3, 3]), "result: 400");
// console.log(score([2, 4, 4, 5, 4]), "result: 450");

// _________________________________________________________________________________


//   _     __  __
//  (_)___|  \/  | ___ _ __ __ _  ___
//  | / __| |\/| |/ _ \ '__/ _` |/ _ \
//  | \__ \ |  | |  __/ | | (_| |  __/
//  |_|___/_|  |_|\___|_|  \__, |\___|
//                         |___/

// function isMerge(s, part1, part2) {
//   let res

//   for (let i = 0; i < s.length; i++) {
//     const letter = s[i].toUpperCase();

//     if (part1[0]?.toUpperCase() === letter) part1 = part1.slice(1)
//     else if (part2[0]?.toUpperCase() === letter) part2 = part2.slice(1)
//     else break

//   }

//   res = part1 + part2

//   return !res.length
// }

// console.log(isMerge('codewars', 'code', 'wars'), "result: true");
// console.log(isMerge('codewars', 'Cdw', 'oears'), "result: true");
// console.log(isMerge('codewars', 'cod', 'wars'), "result: false");

// _________________________________________________________________________________


//   __  __ _              _    __                _   _
//  |  \/  (_)_  _____  __| |  / _|_ __ __ _  ___| |_(_) ___  _ __
//  | |\/| | \ \/ / _ \/ _` | | |_| '__/ _` |/ __| __| |/ _ \| '_ \
//  | |  | | |>  <  __/ (_| | |  _| | | (_| | (__| |_| | (_) | | | |
//  |_|  |_|_/_/\_\___|\__,_| |_| |_|  \__,_|\___|\__|_|\___/|_| |_|

// function mixedFraction(s) {
//   let res = 0
//   let prefix = ""
//   let x = s.split("/")[0]
//   let y = s.split("/")[1]

//   if (x.split("-").length > 1) {
//     x = x.replace("-", "")
//     prefix = "-"
//   }

//   if (y == 0 || x == 0) return `${res}`

//   let status = true

//   do {

//     if (x - y >= 0) {
//       x -= y
//       res++
//     } else status = false

//   } while (status);

//   if (x === 0) return `${prefix}${res}`

//   for (let num = x; num > 0; num--) {
//     if (y % num == 0 && x % num == 0) {
//       x /= num
//       y /= num
//       break
//     }
//   }

//   if (res == 0) return `${prefix}${x}/${y}`

//   return `${prefix}${res} ${x}/${y}`
// }

// console.log(mixedFraction('-10/7'), 'answer: -1 3/7')

// _________________________________________________________________________________


//    ____      _           _                     _
//   / ___| ___| |_   _ __ (_)_ __   ___ ___   __| | ___
//  | |  _ / _ \ __| | '_ \| | '_ \ / __/ _ \ / _` |/ _ \
//  | |_| |  __/ |_  | |_) | | | | | (_| (_) | (_| |  __/
//   \____|\___|\__| | .__/|_|_| |_|\___\___/ \__,_|\___|
//                   |_|

// const expectations = {
//   // "8": ["5", "7", "8", "9", "0"],
//   // "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
//   "369": ["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"]
// };

// const keyboard = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   ["", 0, ""]
// ]

// const operations = [-1, 1]

// function getPINs(observed) {
//   let res = [observed]

//   for (let i = 0; i < observed.length; i++) {
//     let copy = observed
//     const num = +observed[i];

//     let position = getPosition(num)

//     console.log('position :>> ', position);

//     for (let j = 0; j < position.length; j++) {
//       const n = position[j]
//       const prev = keyboard[j === 0 && n !== 0 ? n - 1 : position[0]][j === 1 && n !== 0 ? n - 1 : position[1]]
//       const next = keyboard[j === 0 && n !== 3 ? n + 1 : position[0]][j === 1 && n !== 2 ? n + 1 : position[1]]

//       if (prev !== "") {
//         let prevRes = copy.split("")
//         prevRes[i] = prev
//         res.push(prevRes.join(""))
//       }
//       if (next !== "") {
//         let nextRes = copy.split("")
//         nextRes[i] = next
//         res.push(nextRes.join(""))
//       }
//     }
//   }

//   return res
// }

// function getPosition(num) {
//   for (let i = 0; i < keyboard.length; i++) {
//     const array = keyboard[i];

//     let itemPos = array.findIndex(n => n === num)

//     if (itemPos >= 0) {
//       return [i, itemPos]
//     }
//   }
// }

// for (let pin in expectations) {
//   console.log(getPINs(pin))
// }

// _________________________________________________________________________________


//                            _      ____       _ _ _____                    ____ _       _
//    ___ _ __   ___ ___   __| | ___|  _ \ __ _(_) |  ___|__ _ __   ___ ___ / ___(_)_ __ | |__   ___ _ __
//   / _ \ '_ \ / __/ _ \ / _` |/ _ \ |_) / _` | | | |_ / _ \ '_ \ / __/ _ \ |   | | '_ \| '_ \ / _ \ '__|
//  |  __/ | | | (_| (_) | (_| |  __/  _ < (_| | | |  _|  __/ | | | (_|  __/ |___| | |_) | | | |  __/ |
//   \___|_| |_|\___\___/ \__,_|\___|_| \_\__,_|_|_|_|  \___|_| |_|\___\___|\____|_| .__/|_| |_|\___|_|
//                                                                                 |_|

// function encodeRailFenceCipher(string, numberRails) {
//   let res = []
//   let stringArr = string.split("")

//   for (let i = 0; i < numberRails; i++) {
//     res.push(stringArr.map(() => ""))
//   }

//   let counter = 0
//   let status = 'increment'

//   for (let i = 0; i < stringArr.length; i++) {
//     res[counter][i] = stringArr[i]

//     if (counter === numberRails - 1) status = "decrement"
//     else if (counter === 0) status = "increment"

//     if (status === "increment") counter++
//     else counter--
//   }

//   return res.map(line => line.join("")).join("")
// }

// console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));
// console.log(encodeRailFenceCipher("Hello, World!", 3));

// _________________________________________________________________________________


//       _                    _      ____       _ _ _____                    ____ _       _
//    __| | ___  ___ ___   __| | ___|  _ \ __ _(_) |  ___|__ _ __   ___ ___ / ___(_)_ __ | |__   ___ _ __
//   / _` |/ _ \/ __/ _ \ / _` |/ _ \ |_) / _` | | | |_ / _ \ '_ \ / __/ _ \ |   | | '_ \| '_ \ / _ \ '__|
//  | (_| |  __/ (_| (_) | (_| |  __/  _ < (_| | | |  _|  __/ | | | (_|  __/ |___| | |_) | | | |  __/ |
//   \__,_|\___|\___\___/ \__,_|\___|_| \_\__,_|_|_|_|  \___|_| |_|\___\___|\____|_| .__/|_| |_|\___|_|
//                                                                                 |_|

// function decodeRailFenceCipher(string, numberRails) {
//   let res = [];
//   let wordPerLine = [];

//   let counter = 0;
//   let status = "increment";

//   for (let i = 0; i < string.length; i++) {
//     if (!wordPerLine[counter]) wordPerLine.push(0);

//     wordPerLine[counter]++;

//     if (counter === numberRails - 1) status = "decrement";
//     else if (counter === 0) status = "increment";

//     if (status === "increment") counter++;
//     else counter--;
//   }

//   return wordPerLine;
// }

// console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3));

// _________________________________________________________________________________


//   ____                               __   ____            __           _     ____
//  / ___| _   _ _ __ ___  ___    ___  / _| |  _ \ ___ _ __ / _| ___  ___| |_  / ___|  __ _ _   _  __ _ _ __ ___  ___
//  \___ \| | | | '_ ` _ \/ __|  / _ \| |_  | |_) / _ \ '__| |_ / _ \/ __| __| \___ \ / _` | | | |/ _` | '__/ _ \/ __|
//   ___) | |_| | | | | | \__ \ | (_) |  _| |  __/  __/ |  |  _|  __/ (__| |_   ___) | (_| | |_| | (_| | | |  __/\__ \
//  |____/ \__,_|_| |_| |_|___/  \___/|_|   |_|   \___|_|  |_|  \___|\___|\__| |____/ \__, |\__,_|\__,_|_|  \___||___/
//                                                                                       |_|

// function sumOfSquares(n) {
//   return Math.sqrt(n)
// }

// console.log(sumOfSquares(15)) // 4
// console.log(sumOfSquares(16)) // 1
// console.log(sumOfSquares(17)) // 2
// console.log(sumOfSquares(18)) // 2
// console.log(sumOfSquares(19)) // 3

// _________________________________________________________________________________


//   _____ _           _   _____ _            ____            _ _            ___        _   _ _
//  |  ___(_)_ __   __| | |_   _| |__   ___  |  _ \ __ _ _ __(_) |_ _   _   / _ \ _   _| |_| (_) ___ _ __
//  | |_  | | '_ \ / _` |   | | | '_ \ / _ \ | |_) / _` | '__| | __| | | | | | | | | | | __| | |/ _ \ '__|
//  |  _| | | | | | (_| |   | | | | | |  __/ |  __/ (_| | |  | | |_| |_| | | |_| | |_| | |_| | |  __/ |
//  |_|   |_|_| |_|\__,_|   |_| |_| |_|\___| |_|   \__,_|_|  |_|\__|\__, |  \___/ \__,_|\__|_|_|\___|_|
//                                                                  |___/

// function findOutlier(integers) {
//   let res = integers.reduce(
//     (acc, num) => {
//       if (num % 2 === 0) {
//         acc.odd.push(num);
//         return acc;
//       }

//       acc.even.push(num);
//       return acc;
//     },
//     {
//       odd: [],
//       even: [],
//     }
//   );

//   return res.odd.length > 1 ? res.even[0] : res.odd[0];
// }

// console.log(findOutlier([0, 1, 2])); // 1
// console.log(findOutlier([1, 2, 3])); // 2
// console.log(findOutlier([2, 6, 8, 10, 3])); // 3
// console.log(findOutlier([0, 0, 3, 0, 0])); // 3
// console.log(findOutlier([1, 1, 0, 1, 1])); // 0

//   ____
//  |  _ \  ___  _ __   ___
//  | | | |/ _ \| '_ \ / _ \
//  | |_| | (_) | | | |  __/
//  |____/ \___/|_| |_|\___|

// _________________________________________________________________________________

//   ____             _   _               _                                               _            __        _                           _       
//  / ___|  ___  _ __| |_(_)_ __   __ _  | |__  _   _    __ _ _ __ ___   ___  _   _ _ __ | |_    ___  / _|   ___| | ___ _ __ ___   ___ _ __ | |_ ___ 
//  \___ \ / _ \| '__| __| | '_ \ / _` | | '_ \| | | |  / _` | '_ ` _ \ / _ \| | | | '_ \| __|  / _ \| |_   / _ \ |/ _ \ '_ ` _ \ / _ \ '_ \| __/ __|
//   ___) | (_) | |  | |_| | | | | (_| | | |_) | |_| | | (_| | | | | | | (_) | |_| | | | | |_  | (_) |  _| |  __/ |  __/ | | | | |  __/ | | | |_\__ \
//  |____/ \___/|_|   \__|_|_| |_|\__, | |_.__/ \__, |  \__,_|_| |_| |_|\___/ \__,_|_| |_|\__|  \___/|_|    \___|_|\___|_| |_| |_|\___|_| |_|\__|___/
//                                |___/         |___/                                                                                                

// const words = [
//   "anor",
//   "orange",
//   "anor",
//   "grapefruit",
//   "banana",
//   "grapefruit",
//   "banana",
//   "banana",
//   "banana",
// ];

// const numbers = [1, 5, 2, 1, 6, 6, 1];

// const sortFun = (arr) => {
//   let res = [];
//   let obj = {};

//   // parsing the array
//   for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];

//     if (!obj[el]) {
//       obj[el] = 1;
//       continue;
//     }

//     obj[el]++;
//   }

//   console.log(obj);

//   // sorting the elements by amount og them
//   obj = Object.entries(obj);
//   console.log(obj);
//   res = obj.sort((a, b) => b[1] - a[1]);

//   return res.map(([a]) => {
//     if(+a) return +a
//     return a
//   });
// };

// console.log(sortFun(words));
// console.log(sortFun(numbers));

//   ____                   
//  |  _ \  ___  _ __   ___ 
//  | | | |/ _ \| '_ \ / _ \
//  | |_| | (_) | | | |  __/
//  |____/ \___/|_| |_|\___|

// _________________________________________________________________________________

                         