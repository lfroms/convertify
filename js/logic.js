$(document).ready(function() {
    $(".val").click(function() {
        $(".val").not(this).each(function() {
            this.disabled = true;
        })
        
        $("#reset").addClass("button-primary");
    })

    $("#base-10").on("input", function() {
        let int = parseInt($("#base-10").val())

        $("#hexadecimal").val(int.toString(16));
        $("#base-8").val(int.toString(8));
        $("#u-binary").val(int.toString(2));
    })
    
    $("#base-8").on("input", function() {
        let int = parseInt($("#base-8").val(), 8);

        $("#base-10").val(int.toString(10));
        $("#hexadecimal").val(int.toString(16));
        $("#u-binary").val(int.toString(2));
    })
    
    $("#hexadecimal").on("input", function() {
        let int = parseInt($("#hexadecimal").val(), 16);

        $("#base-10").val(int.toString(10));
        $("#base-8").val(int.toString(8));
        $("#u-binary").val(int.toString(2));
    })
    
    $("#u-binary").on("input", function() {
        let int = parseInt($("#u-binary").val(), 2);

        $("#base-10").val(int.toString(10));
        $("#base-8").val(int.toString(8));
        $("#hexadecimal").val(int.toString(16));
    })

    $("#reset").click(function() {
        $(".val").each(function() {
            this.disabled = false;
            this.value = "";
        })
        
        $("#reset").removeClass("button-primary");
    })
})