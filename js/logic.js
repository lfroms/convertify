$(document).ready(function() {
    $(".val").click(function() {
        disableFields(this);
    })

    $(".val").on("input", function() {
        disableFields(this);
    })

    $("#base-10").on("input", function() {
        let number = parseInt($(this).val(), 10);

        $("#hexadecimal").val(number.toString(16));
        $("#base-8").val(number.toString(8));
        $("#u-binary").val(number.toString(2));
        
        $("#2-comp").val(getTwosComplement(number));
        $("#1-comp").val(getOnesComplement(number));

        checkIfEmpty(this);
    })

    $("#base-8").on("input", function() {
        let number = parseInt($("#base-8").val(), 8);

        $("#base-10").val(number.toString(10));
        $("#hexadecimal").val(number.toString(16));
        $("#u-binary").val(number.toString(2));

        $("#2-comp").val(getTwosComplement(number));
        $("#1-comp").val(getOnesComplement(number));

        checkIfEmpty(this);
    })

    $("#hexadecimal").on("input", function() {
        let number = parseInt($("#hexadecimal").val(), 16);

        $("#base-10").val(number.toString(10));
        $("#base-8").val(number.toString(8));
        $("#u-binary").val(number.toString(2));

        $("#2-comp").val(getTwosComplement(number));
        $("#1-comp").val(getOnesComplement(number));

        checkIfEmpty(this);
    })

    $("#u-binary").on("input", function() {
        let number = parseInt($("#u-binary").val(), 2);

        $("#base-10").val(number.toString(10));
        $("#base-8").val(number.toString(8));
        $("#hexadecimal").val(number.toString(16));

        $("#2-comp").val(getTwosComplement(number));
        $("#1-comp").val(getOnesComplement(number));

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
        $("#2-comp").val(getTwosComplement($("#base-10").val()));
        $("#1-comp").val(getOnesComplement($("#base-10").val()));
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
    
    $("#num-bits").prop("disabled", true);

    $("#reset").removeClass("button-primary");
}

function disableFields(active) {
    $(".val").not(active).not("#2-comp").not("#1-comp").each(function() {
        this.disabled = true;
    })
    
    $("#num-bits").prop("disabled", false);

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

function twosComplement(value) {
    return (~value + 1 >>> 0).toString(2);
}

function onesComplement(value) {
    return (~value >>> 0).toString(2);
}

function getTwosComplement(tenBaseValue) {
    let twoComp = twosComplement(tenBaseValue);
    
    return twoComp.substr(twoComp.length - $("#num-bits").val());
}

function getOnesComplement(tenBaseValue) {
    let oneComp = onesComplement(tenBaseValue);
    
    return oneComp.substr(oneComp.length - $("#num-bits").val());
}