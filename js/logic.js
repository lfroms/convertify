$(document).ready(function() {
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
        let number = parseInt($(this).val(), 8);

        $("#base-10").val(number.toString(10));
        $("#hexadecimal").val(number.toString(16));
        $("#u-binary").val(number.toString(2));

        $("#2-comp").val(getTwosComplement(number));
        $("#1-comp").val(getOnesComplement(number));

        checkIfEmpty(this);
    })

    $("#hexadecimal").on("input", function() {
        let number = parseInt($(this).val(), 16);

        $("#base-10").val(number.toString(10));
        $("#base-8").val(number.toString(8));
        $("#u-binary").val(number.toString(2));

        $("#2-comp").val(getTwosComplement(number));
        $("#1-comp").val(getOnesComplement(number));

        checkIfEmpty(this);
    })

    $("#u-binary").on("input", function() {
        let number = parseInt($(this).val(), 2);

        $("#base-10").val(number.toString(10));
        $("#base-8").val(number.toString(8));
        $("#hexadecimal").val(number.toString(16));

        $("#2-comp").val(getTwosComplement(number));
        $("#1-comp").val(getOnesComplement(number));

        checkIfEmpty(this);
    })

    $("#num-bits").on("input", function() {
        if ($("#base-10").val()) {
            $("#2-comp").val(getTwosComplement($("#base-10").val()));
            $("#1-comp").val(getOnesComplement($("#base-10").val()));
        }
    })

    $("#reset").click(function() {
        resetAllFields(".val");
    })

    $("#bin-op-1").on("input", function() {
        let numberA = parseInt($(this).val(), 2);
        let numberB = parseInt($("#bin-op-2").val(), 2);

        if (isNaN(numberA) == false && isNaN(numberB) == false) {
            performOperation(numberA, numberB, $("#bin-operator").val());
        }

        checkIfEmpty(this);
    })

    $("#bin-op-2").on("input", function() {
        let numberA = parseInt($("#bin-op-1").val(), 2);
        let numberB = parseInt($(this).val(), 2);

        if (isNaN(numberA) == false && isNaN(numberB) == false) {
            performOperation(numberA, numberB, $("#bin-operator").val());
        }

        checkIfEmpty(this);
    })

    $("#bin-operator").on("input", function() {
        let numberA = parseInt($("#bin-op-1").val(), 2);
        let numberB = parseInt($("#bin-op-2").val(), 2);

        if (isNaN(numberA) == false && isNaN(numberB) == false) {
            performOperation(numberA, numberB, $("#bin-operator").val());
        }
    })
})

function performOperation(op1, op2, opa) {
    if (opa == "add") {
        $("#bin-result").val((op1 + op2).toString(2));
    } else if (opa == "sub") {
        $("#bin-result").val((op1 - op2).toString(2));
    } else if (opa == "mult") {
        $("#bin-result").val((op1 * op2).toString(2));
    } else {
        $("#bin-result").val((op1 / op2).toString(2));
    }
}

function resetAllFields(fieldSet) {
    $(fieldSet).each(function() {
        this.value = "";
    })

    $("#reset").removeClass("button-primary");
}

function disableFields(active) {
    $("#reset").addClass("button-primary");
}

function checkIfEmpty(element) {
    if ($(element).val() === '' && $(element).hasClass("val")) {
        resetAllFields(".val");
    } else if ($(element).val() === '' && $(element).hasClass("op-val")) {
        resetAllFields("#bin-result");
    }
}

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        resetAllFields(".val");
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