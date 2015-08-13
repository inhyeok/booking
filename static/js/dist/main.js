(function() {
  var email, form, name, phone;

  form = $('.form');

  name = $('#name');

  phone = $('#phone');

  email = $('#email');

  this.confirmForm = function() {
    if (name.val() !== true) {
      $('#nameInput').addClass('has-error');
      name.focus();
      return false;
    } else if (phone.val() !== true) {
      $('#phoneInput').addClass('has-error');
      phone.focus();
      return false;
    } else if (email.val() !== true) {
      $('#emailInput').addClass('has-error');
      email.focus();
      return false;
    } else {
      return true;
    }
  };

}).call(this);
