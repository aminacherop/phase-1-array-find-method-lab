// code your solution here
function superbowlWin(record){
    function isWin(game){
        return game.result ==="W"
    }
    const win = record.find(isWin);
    return win ? win.year : undefined;
};
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

  ]
  
console.log(superbowlWin(record));
