let arr = [2, 4, 6, 8, 0, 10, 12, 15, 17, 21]
let number = +prompt('Nhập số cần tìm')
function findIndex(arr, number) {
    let status = false;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            status = true;
            index = i;
        }
    }
    if (status === true) {
        alert(`Phần tử ở vị trí index là : ${index}`);
    } else {
        alert('Không có phần tử trong mảng');
    }
}

findIndex(arr, number);