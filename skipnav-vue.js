// Vue.js component method:

//// Assumes link looks like:
//     <a v-on:click.prevent="skipNav($event)" href="#main">Skip Nav</a>



methods: {
   skipNav: function(event) {
    const element = event.currentTarget;
    const skipToID = "#" + element.getAttribute('href').split('#')[1];
    let target = document.getElementById(skipToID);
    let removeTabIndex = (event) => {
        event.target.setAttribute("tabindex", "");
    };

    target.setAttribute("tabindex", -1);
    target.focus();
    target.addEventListener('blur', removeTabIndex);
    target.addEventListener('focusout', removeTabIndex);
   }
}
