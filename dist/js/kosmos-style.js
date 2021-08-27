/*
    KOSMos Style Guide
 */


// toggle sidebar menu
const MAIN_CONTAINER = '#main_container'
const COLLAPSED_CLASS = 'sidebar_collapsed' //no . needed here
const TOGGLE_BUTTON = '#menu_toggle'

$(document).ready(function () {
    $(TOGGLE_BUTTON).on('click', function() {
        console.info('Toggling Sidebar')
        $(MAIN_CONTAINER).toggleClass(COLLAPSED_CLASS)
    }
)
})