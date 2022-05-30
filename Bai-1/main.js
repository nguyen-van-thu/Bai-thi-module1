let a = +prompt('Nhập vào hệ số a:')
let b = +prompt('Nhập vào hệ số b:')
function phuongtrinh(a,b) {
    if (a==0){
        if(b==0){
            alert('phương trình vô số nghiệm');
        }else {
            alert("phương trình vô nghiệm");
        }
    } else {
        let x = 0;
        x = (-b/a);
        alert("phương trình có nghiệm: "+x)
    } return x = -b/a;
}

let thu = phuongtrinh(a,b);
