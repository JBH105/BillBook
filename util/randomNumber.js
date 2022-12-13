export function randomIntFromInterval(min, max) {
    let color = [
        {name:"#641E16",id:0},
        {name:"#78281F",id:1},
        {name:"#512E5F",id:2},
        {name:"#154360",id:3},
        {name:"#0E6251",id:4},
        {name:"#28B463",id:5},
        {name:"#7D6608",id:6},
        {name:"#7B7D7D",id:7},
        {name:"#17202A",id:8},
        {name:"#2E4053",id:9}
    ]
    const colorIndex = Math.floor(Math.random() * (max - min + 1) + min);
    return color.find((val) => val?.id === colorIndex)?.name
    }