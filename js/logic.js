$(document).ready(function() {
    $(".val").click(function() {
        disableFields(this);
    })

    $(".val").on("input", function() {
        disableFields(this);
    })

    $("#base-10").on("input", function() {
        let int = parseInt($("#base-10").val());

        $("#hexadecimal").val(int.toString(16));
        $("#base-8").val(int.toString(8));
        $("#u-binary").val(int.toString(2));
        
        checkIfEmpty(this);
    })

    $("#base-8").on("input", function() {
        let int = parseInt($("#base-8").val(), 8);

        console.log($("#base-8").val()[$("#base-8").val().length -1]); //TOTOTOTOTOTODODDOODDOOD

        $("#base-10").val(int.toString(10));
        $("#hexadecimal").val(int.toString(16));
        $("#u-binary").val(int.toString(2));
        
        checkIfEmpty(this);
    })

    $("#hexadecimal").on("input", function() {
        let int = parseInt($("#hexadecimal").val(), 16);

        $("#base-10").val(int.toString(10));
        $("#base-8").val(int.toString(8));
        $("#u-binary").val(int.toString(2));
        
        checkIfEmpty(this);
    })

    $("#u-binary").on("input", function() {
        let int = parseInt($("#u-binary").val(), 2);

        $("#base-10").val(int.toString(10));
        $("#base-8").val(int.toString(8));
        $("#hexadecimal").val(int.toString(16));
        
        checkIfEmpty(this);
    })

    $("#reset").click(function() {
        resetAllFields();
    })
})

function resetAllFields() {
    $(".val").each(function() {
        this.disabled = false;
        this.value = "";
    })

    $("#reset").removeClass("button-primary");
}

function disableFields(active) {
    $(".val").not(active).each(function() {
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