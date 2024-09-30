function gameObject() {
const gO = {
        home: {
            teamName: "Brooklyn Nets",
            colors: [
                "Black", "White"
            ],
            players:{
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamdunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamdunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamdunks: 1,
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: [
                "Turqoise", "Purple"
            ],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamdunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamdunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamdunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamdunks: 0,
                },
                "Brendon Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamdunks: 12,
                }
            }
        }
    }
    return gO;
}


const newObj = {...gameObject()};

function numPointsScored(pName) {
    let a = 0;
    if (a <= 4) {
        for (const element of Object.keys(newObj.home.players)) {
            if (element === pName) {
                a = 1;
                return newOb.home.players[pName].points;
            } else a = 2;
        } if (a = 2) {
            for (const element of Object.keys(newObj.away.players)) {
                if (element === pName) {
                    a = 3;
                    return newObj.away.players[pName].points;
                } else a = 4;
            }
        } if (a = 4) {
            console.error("No such Player");
        }
    }
}

function shoeSize(pName) {
    const iterator = (target) => {
        for (let element in target) {
            if (target[element] === "object") {
                if (element === pName) {
                    return [pName].shoes;
                } else iterator(target[element]);
            }
        }     
    }
    return iterator(newObj);
}

const iterator1 = (pName1) => {
    const iterator2 = (target1) => {
        let sS = 0;
        for (let element1 in target1) {
            let x = element1.toString();
            if(typeof(target1[x]) === "object" && x !== pName1){
                let y = target1[x];
                iterator2(y);
            } else if (typeof(target1[x]) === "object" && x === pName1) {
                console.log(target1);
                console.log(`Acheived lock : ${x}`);
                console.log(target1[x]["shoe"])
                sS = target1[x]["shoe"];
                console.log(sS);
                return sS;
            }
        }
        return sS;
    }
    iterator2(newObj);
}

//console.log(typeof([newObj]["home"]));
console.log(iterator1("Brendon Haywood"));