(function () {
  $('#contact-form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 1,
        maxlength: 140
      }
    }
  });

  $('#job-form').validate({
    rules: {
      name: {
        required: true
      },
      birthday: {
        required: true,
        date: true,
        minlength: 10
      },
      email: {
        required: true,
        email: true
      },
      title: {
        required: true
      },
      phone: {
        required: true,
        digits: true,
        minlength: 8
      }
    }
  });
})();