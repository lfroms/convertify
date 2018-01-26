$(document).ready(function() {
    $(".val").click(function() {
        $(".val").not(this).each(function() {
            this.disabled = true;
        })
    })
    
    $("#base-10").on("input", function() {
        let int = parseInt($("#base-10").val())
        
        $("#hexadecimal").val(int.toString(16));
        $("#base-8").val(int.toString(8));
        $("#u-binary").val(int.toString(2));
    })
    
    $("#reset").click(function() {
        $(".val").each(function() {
            this.disabled = false;
        })
    })
})