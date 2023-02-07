// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

// Con thuc tinh dien tich: S = canbachai(p.(p-a).(p-b).(p-c))

function caculateAreaTriangle(a, b, c) {
    function checkCondition() {
        if((a + b) > c &&
            (a + c) > b &&
            (b + c) > a
        ) return true;

        return false;
    };

    const semiCircumferential = (a + b + c)/2

    const acreage = checkCondition() ?
        Math.sqrt(semiCircumferential*(semiCircumferential-a)*(semiCircumferential-b)*((semiCircumferential-c))) :
        "Ba so da nhap khong phai ba canh cua tam giac. Vui long nhap lai.";
    
    return acreage;
};

console.log(caculateAreaTriangle(2, 6, 7));



