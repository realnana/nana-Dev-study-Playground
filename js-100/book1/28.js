const data = prompt('문자를 입력하세요.');

for(let i=0; i<data.length-1; i++) {
    console.log(data[i], data[i+1]);
}