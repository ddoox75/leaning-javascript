function validate() {
    const product = document.getElementById("product");
    const price = document.getElementById("price");
    const category = document.getElementById("category");
    const places = document.getElementsByName("place");
    let isValid = true;

    //Kiểm tra tên sản phẩm : trống => thêm class invalid
    if (isEmpty(product.value)) {
        product.classList.add("invalid");
        isValid = false;
    } else {
        product.classList.remove("invalid");
    }
    //Kiểm tra đơn giá : trống hoặc âm => thêm class invalid
    if (isEmpty(price.value) || !isPositiveNumber(price.value)) {
        price.classList.add("invalid");
        isValid = false;
    } else {
        price.classList.remove("invalid");
    }

    if (isEmpty(category.value)) {
        category.classList.add("invalid");
        isValid = false;
    } else {
        category.classList.remove("invalid");
    }
    //
    let checked = false;
    for (const plc of places) {
        checked = checked || plc.checked;
    }
    if (!checked) {
        for (const plc of places) {
            plc.classList.add("invalid");
        }
    } else {
        for (const plc of places) {
            plc.classList.remove("invalid");
        }
    }

    return isValid;
}

function isEmpty(val) {
    if (!!!val || val.trim() == "") {
        return true;
    }
    return false;
}

function isPositiveNumber(val) {
    if (isNaN(val) || Number(val) < 0) {
        return false;
    }
    return true;
}

function showFee(rdb) {
    const feeInfo = document.getElementById("feeInfo");

    if (rdb.checked && rdb.value == "out") {
        feeInfo.style.display = "block";
    } else {
        feeInfo.style.display = "none";
    }
}