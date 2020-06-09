<template>
    <ul class="nav" id="toggle-wrapper">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: "ToggleNav",
    data() {
        return {
            toggleNavWrapper: document.getElementById('toggle-wrapper')
        };
    },
    mounted() {
        if(this.toggleSwitch) {
            if(this.toggleNavWrapper){
                addListener(this.toggleSwitch, 'click', function(){
                    let wrapperDisplay = this.toggleNavWrapper.style.display;
                    if(wrapperDisplay == 'none') wrapperDisplay = 'block';
                    else wrapperDisplay = 'none';
                    this.toggleNavWrapper.style.display = wrapperDisplay;
                });
            } else console.error("Sorry, we couldn't find a .nav under your .nav-toggle element");
        } else console.error("Sorry, the toggle switch you provided is invalid or undefined");
    },
    methods() {
        function addListener(element, type, callback){
            if(element && type && callback) element.addEventListener(type, callback);
        }
    },
    computed: {
        toggleSwitch(){
            return document.querySelector(this.toggleSelector);
        }
    },
    prop: {
        toggleSelector: String
    },
};
</script>