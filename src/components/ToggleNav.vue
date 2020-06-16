<template>
    <ul class="nav toggle-nav" :id="navSelector + '-nav'">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: "ToggleNav",
    data() {
        return {
            isVisible: false,
        };
    },
    mounted() {
        const self = this;

        if(this.toggleSwitch) {
            this.toggleSwitch.addEventListener('click', () => {
                const currentNav = document.querySelector('#' + self.navSelector + '-nav'),
                       activeNav = document.querySelector('.active-nav');
                
                // if the current toggle switch nav is active we want to de-activate it.
                if (currentNav.classList.contains('active-nav')) currentNav.classList.remove('active-nav');
                else {
                    // else we want to de-activate any other active navs and active our current nav.
                    if(activeNav) activeNav.classList.remove('active-nav');
                    currentNav.classList.add('active-nav');
                }
            });
        }
    },
    computed: {
        toggleSwitch(){
            return document.querySelector(this.toggleSelector);
        },
        navSelector() {
            let selector = null;

            if(this.toggleSelector) {
                selector = this.toggleSelector.replace('.', '');
                selector = selector.replace('-toggle', '');
            }

            return selector;
        }
    },
    props: {
        toggleSelector: String,
        currentPath: String
    },
};
</script>