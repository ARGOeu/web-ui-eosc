 $(function() {
   $('.select2-class').select2();

     $("#profiles").change(function () {
         window.location.href =  this.value.replace("+", "%252B");

     });

 });