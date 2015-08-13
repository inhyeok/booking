form = $('.form')
name = $('#name')
phone = $('#phone')
email = $('#email')

@confirmForm = () ->
  if name.val() isnt true
    $('#nameInput').addClass 'has-error'
    name.focus()
    false
  else if phone.val() isnt true
    $('#phoneInput').addClass 'has-error'
    phone.focus()
    false
  else if email.val() isnt true
    $('#emailInput').addClass 'has-error'
    email.focus()
    false
  else
    true