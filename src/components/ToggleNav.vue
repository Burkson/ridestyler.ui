<template>
    <ul class="nav" v-show="isVisible">
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
        if(this.toggleSwitch) this.toggleSwitch.addEventListener('click', () => {self.isVisible = !self.isVisible;});
        else console.error("Sorry, the toggle switch you provided is invalid or undefined");
    },
    computed: {
        toggleSwitch(){
            return document.querySelector(this.toggleSelector);
        }
    },
    props: {
        toggleSelector: String
    },
};
</script>