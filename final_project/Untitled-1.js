Array.from(document.querySelectorAll('.video-link-wrap'), function (elem) {
        elem.addEventListener('click', function hideContent(e) {
            e.currentTarget.nextElementSibling.classList.toggle('hidden');
        });
    });
    Array.from(document.querySelectorAll('.video-overlay .close'), function (elem) {
        elem.addEventListener('click', function hideContent(e) {
            e.currentTarget.parentElement.classList.toggle('hidden');
            var vid = e.currentTarget.nextElementSibling;
            var clone = vid.cloneNode(true);
            vid.remove();
            e.currentTarget.after(clone);
        });
    });