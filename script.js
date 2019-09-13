function validate_nameClass(str) {
    regexp = /^[CAP]\d{4}[GHIKLM]$/;

    if (regexp.test(str)){
        console.log('Ten lop hop le!!');
    } else {
        console.log('Ten lop khong hop le!!');
    }
}