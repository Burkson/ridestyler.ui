<template>
    <div class="column branded-nav-column" :class="{ 'branded-nav-minimized' : !isNavVisible && isMobile }">
        <div class="branded-top-item m-0">
            <router-link v-if="$router" :to="homeLink" class="light m-0 d-inline-block" :class="[ isMobile ? 'ridestyler-logo-icon' : 'ridestyler-logo-full w-100' ]" id="ridestyler-home" v-on:click.native="isNavVisible = false"></router-link>
            <a v-else :href="homeLink" class="light m-0 d-inline-block" :class="[ isMobile ? 'ridestyler-logo-icon' : 'ridestyler-logo-full w-100' ]" id="ridestyler-home" v-on:click.native="isNavVisible = false"></a>
            <div class="icon icon-bars branded-nav-burger" v-show="isMobile" @click="isNavVisible = !isNavVisible"></div>
        </div>
        <ul class="nav m-0" v-show="isNavVisible || !isMobile">
            <slot></slot>
            <li class="nav-item" v-if="helpLinksEnabled">
                <a href="#" class="help-toggle nav-toggle" title="Help" alt="Help">Help</a>
                <toggle-nav toggleSelector=".help-toggle">
                    <a href="https://kb.ridestyler.com/" target="_blank" alt="Knowledge Base" title="Knowledge Base">Knowledge Base</a>
                    <a href="http://kb.ridestyler.com/submit-a-ticket/" target="_blank" alt="Support Request" title="Support Request">Support Request</a>
                </toggle-nav>
            </li>
            <li v-if="isMobile && this.$slots.inner" class="inner">
                <slot name="inner"></slot>
            </li>
            <li v-if="this.$slots.footer" class="nav-item footer">
                <slot name="footer"></slot>
            </li>
        </ul>
    </div>
</template>
<script>
import ToggleNav from "./ToggleNav";

export default {
    name: "BrandedNavColumn",
    data() {
        return {
            isNavVisible: false,
            breakPointTwoColumn: 840,
            isMobile: false
        }
    },
    mounted(){
        const self = this;
        
        self.isMobile = window.innerWidth < self.breakPointTwoColumn;

        window.addEventListener('resize', function(e){
            const innerWidth = e.target.innerWidth;
            if(innerWidth < self.breakPointTwoColumn) self.isMobile = true;
            else self.isMobile = false;
        });
    },
    props: {
        currentRoute: String,
        helpLinksEnabled: Boolean,
        homeLink: String
    },
    watch: {
        currentRoute(){
            this.isNavVisible = false
        }
    },
    components: {
        ToggleNav,
    },
}
</script>