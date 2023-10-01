 $(document).ready(function(){
    //option-select-styles-plagin
    $('.stylish-select').stylishSelect();
    $('.stylish-select').on('change', function() {
      $('[href="' + this.value + '"]').trigger('click');
    });
});