let formFieldSettings = {
  name: {
    identifier: 'first-name',
    rules: [
      {
        type: 'regExp[/^([^0-9]*)$/]',
        prompt: 'Please enter a valid first name'
      },
      {
        type: 'empty',
        prompt: 'Please enter a first name'
      }          
    ]
  },
  lastName: {
    identifier: 'last-name',
    rules: [
      {
        type: 'regExp[/^([^0-9]*)$/]',
        prompt: 'Please enter a valid first name'
      },
      {
        type: 'empty',
        prompt: 'Please enter a last name'
      }  
    ]
  },
  address: {
    identifier: 'address',
    rules: [
      {
        type: 'empty',
        prompt: 'Please enter a valid address'
      }
    ]
  },
  houseNumber: {
    identifier: 'house-number',
    rules: [
      {
        type: 'empty',
        prompt: 'Please enter your house/appartment number'
      }
    ]
  },
  country: {
    identifier: 'country',
    rules: [
      {
        type: 'minCount[1]',
        prompt: 'Please select a country'
      }
    ]
  },
  email: {
    identifier: 'email',
    rules: [
      {
        type: 'email',
        prompt: 'Please enter your e-mail address'
      }
    ]
  },
  phone: {
    identifier: 'phone',
    rules: [
      {
        type: 'empty',
        prompt: 'Please enter a valid phone number'
      },
      {
        type: 'minLength[10]',
        prompt: 'Phone number must be at least 10 characters'
      },
      {
        type: 'number',
        prompt: 'Please enter a valid phone number'
      }
    ]
  },
  eid: {
    identifier: 'eid',
    optional: true,
    rules: [
      {
        type   : 'regExp[/^(?=.{14}$)[0-9]{3}[-]{1}[0-9]{7}[-]{1}[0-9]{2}/]',
        prompt : 'Please enter a ID number'
      }
    ]
  },
  terms: {
    identifier: 'terms',
    rules: [
      {
        type: 'checked',
        prompt: 'You must agree to the terms and conditions'
      }
    ]
  }
};

$(document).ready(function() {
  let cache = {
      checkbox: ".ui.checkbox",
      dropdown: "select.dropdown",
      form: ".ui.form"
    },
    events = {
      blur: "blur"
    }

  $(cache.form)
  .form({
    on: events.blur,
    fields: formFieldSettings,
    onSuccess: function(e) {
      e.preventDefault();
    }
  });

  //init dropdowns & checkboxes
  $(cache.checkbox).checkbox();
  $(cache.dropdown).dropdown();
});







