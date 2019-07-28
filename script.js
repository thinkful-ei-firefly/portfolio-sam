
function handleLinkClicked() {
  $('main').on('click', '.link', function(event) {
    const link = $(this).attr('data-link');
    window.open(link);
  });
}

function onPageLoad() {
  handleLinkClicked();
}

$(onPageLoad);