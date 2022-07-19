$( ".dropdown-menu li a" ).click(function(evt) {
  // Setup VARs
  var inputGroup = $('.input-group');
  var inputGroupBtn = inputGroup.find('.input-group-btn .btn');
  var inputGroupAddon = inputGroup.find('.input-group-addon');
  var inputGroupInput = inputGroup.find('.form-control');
  
  // Get info for the selected country
  var selectedCountry = $(evt.target).closest('li');
  var selectedEmoji = selectedCountry.find('.flag-emoji').html();
  var selectedExampleNumber = selectedCountry.find('.example-number').html();
  var selectedCountryCode = selectedCountry.find('.country-code').html();
  
  // Dynamically update the picker
  inputGroupBtn.find('.emoji').html(selectedEmoji);
  inputGroupAddon.html(selectedCountryCode)
  inputGroupInput.attr("placeholder", selectedExampleNumber);
});