let ft = parseFloat(prompt("변환할 화씨온도를 입력해주세요."));

let ct = ((ft-32)/1.8).toFixed(1);
alert(`화씨 ${ft}도는 섭씨 ${ct}도 입니다.`);