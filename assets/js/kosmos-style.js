/*
    KOSMos Style Guide
 */
// toggle sidebar menu
// no . needed here
const MAIN_CONTAINER = '#main_container';
const COLLAPSED_CLASS = 'sidebar_collapsed';
const TOGGLE_BUTTON = '#menu_toggle';
let CollapsedState;
CollapsedState = false;

$(document).ready( function() {
  $(TOGGLE_BUTTON).on('click', function() {
    console.info('Toggling Sidebar');
    $(MAIN_CONTAINER).toggleClass(COLLAPSED_CLASS);

    // switch out the icon
    if (CollapsedState === false) {
      $(TOGGLE_BUTTON).find('.fa').addClass('fa-chevron-right')
          .removeClass('fa-chevron-left');
      CollapsedState = true;
    } else {
      $(TOGGLE_BUTTON).find('.fa').addClass('fa-chevron-left')
          .removeClass('fa-chevron-right');
      CollapsedState = false;
    }
  });
});
