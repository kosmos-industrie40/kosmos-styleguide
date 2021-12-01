/*
    KOSMos Style Guide
 */


// toggle sidebar menu
const MAIN_CONTAINER = '#main_container'
const COLLAPSED_CLASS = 'sidebar_collapsed' // no . needed here
const TOGGLE_BUTTON = '#menu_toggle'
let collapsed_state = false

$(document).ready( function() {
  $(TOGGLE_BUTTON).on('click', function() {
    console.info('Toggling Sidebar');
    $(MAIN_CONTAINER).toggleClass(COLLAPSED_CLASS);

    // switch out the icon
    if(collapsed_state === false){
      $(TOGGLE_BUTTON).find('.fa').addClass('fa-chevron-right').removeClass('fa-chevron-left')
      collapsed_state = true
    }
    else {
      $(TOGGLE_BUTTON).find('.fa').addClass('fa-chevron-left').removeClass('fa-chevron-right')
      collapsed_state = false
    }

  });
});
