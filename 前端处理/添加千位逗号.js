function addCon (num){
    let numStr = num + ''
    let arr = num < 0 ? numStr.slice(1) : numStr.split('.')
    let intArr = arr[0].split('')
    for(let i = intArr.length - 3; i > 0; i = i - 3){
        intArr.splice(i,0,',')
    }
    let res = arr[1]? intArr.join('') + '.' + arr[1] : a.join('')
    return num < 0 ? '-' + res : res;
}

addCon(1223455.5321)
// "1,223,455.5321"
