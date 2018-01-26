$(document).ready(function() {
    $(".val").click(function() {
        disableFields(this);
    })

    $(".val").on("input", function() {
        disableFields(this);
    })

    $("#base-10").on("input", function() {
        let number = parseInt($("#base-10").val());

        $("#hexadecimal").val(number.toString(16));
        $("#base-8").val(number.toString(8));
        $("#u-binary").val(number.toString(2));

        $("#2-comp").val(twosComplement(number, $("#num-bits").val()));

        checkIfEmpty(this);
    })

    $("#base-8").on("input", function() {
        let number = parseInt($("#base-8").val(), 8);

        $("#base-10").val(number.toString(10));
        $("#hexadecimal").val(number.toString(16));
        $("#u-binary").val(number.toString(2));

        $("#2-comp").val(twosComplement(parseInt($("#base-10").val()), $("#num-bits").val()));

        checkIfEmpty(this);
    })

    $("#hexadecimal").on("input", function() {
        let number = parseInt($("#hexadecimal").val(), 16);

        $("#base-10").val(number.toString(10));
        $("#base-8").val(number.toString(8));
        $("#u-binary").val(number.toString(2));

        $("#2-comp").val(twosComplement(parseInt($("#base-10").val()), $("#num-bits").val()));

        checkIfEmpty(this);
    })

    $("#u-binary").on("input", function() {
        let number = parseInt($("#u-binary").val(), 2);

        $("#base-10").val(number.toString(10));
        $("#base-8").val(number.toString(8));
        $("#hexadecimal").val(number.toString(16));

        $("#2-comp").val(twosComplement(parseInt($("#base-10").val()), $("#num-bits").val()));

        checkIfEmpty(this);
    })

    $("#2-comp").on("input", function() {
        let number = parseInt($("#u-binary").val(), 2);

        $("#base-10").val(number.toString(10));
        $("#base-8").val(number.toString(8));
        $("#hexadecimal").val(number.toString(16));

        checkIfEmpty(this);
    })

    $("#num-bits").on("input", function() {
        $("#2-comp").val(twosComplement(parseInt($("#base-10").val()), $("#num-bits").val()));
    })

    $("#reset").click(function() {
        resetAllFields();
    })
})

function resetAllFields() {
    $(".val").not("#2-comp").not("#1-comp").each(function() {
        this.disabled = false;
    })

    $(".val").each(function() {
        this.value = "";
    })

    $("#reset").removeClass("button-primary");
}

function disableFields(active) {
    $(".val").not(active).not("#2-comp").not("#1-comp").each(function() {
        this.disabled = true;
    })

    $("#reset").addClass("button-primary");
}

function checkIfEmpty(element) {
    if ($(element).val() === '') {
        resetAllFields();
    }
}

$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        resetAllFields();
    }
});


/*
Credit for decimal to 2's Complement:
https://gist.github.com/bsara/519df5f91833d01c20ec
*/

function twosComplement(value, bits) {
    let binaryAsString;

    if (value >= 0) {
        let twosComp = value.toString(2);
        binaryAsString = padAndChop(twosComp, '0', (bits || twosComp.length));
    } else {
        binaryAsString = (Math.pow(2, bits) + value).toString(2);

        if (Number(binaryAsString) < 0) {
            return undefined;
        }
    }

    return binaryAsString;
}

function padAndChop(str, padChar, length) {
    return (Array(length).fill(padChar).join('') + str).slice(length * -1);
}