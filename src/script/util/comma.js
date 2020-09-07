export default (obj) => {
  obj = String(obj);
  var regx = new RegExp(/(-?\d+)(\d{3})/);
  var bExists = obj.indexOf(".", 0); //0번째부터 .을 찾는다.
  var strArr = obj.split(".");
  while (regx.test(strArr[0])) {
    //문자열에 정규식 특수문자가 포함되어 있는지 체크
    //정수 부분에만 콤마 달기
    strArr[0] = strArr[0].replace(regx, "$1,$2"); //콤마추가하기
  }
  if (bExists > -1) {
    //. 소수점 문자열이 발견되지 않을 경우 -1 반환
    strArr[1] = strArr[1].substring(0, 9); // 소수점 자리 제한
    obj = strArr[0] + "." + strArr[1];
  } else {
    //정수만 있을경우 //소수점 문자열 존재하면 양수 반환
    obj = strArr[0];
  }
  return obj; //문자열 반환
};
