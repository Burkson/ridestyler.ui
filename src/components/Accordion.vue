<template>
    <div class="accordion">
        <input v-if="exclusive" :id="localId" type="radio" ref="accordionRadio" :name="localName" hidden="">
        <input v-else :id="localId" type="checkbox" ref="accordionCheckbox" :name="localName" hidden="">
        <label class="accordion-header c-hand justify-space-between" :for="localId">
            <div class="accordion-header-content">
                <slot name="header"></slot>
            </div>
            <i class="icon icon-accordion ml-2"></i>
        </label>
        <div class="accordion-body" ref="accordionBody">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: "Accordion",
    props: {
        exclusive: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        id: {
            type: String
        },
        scrollIntoView: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            localId: '',
            localName: ''
        };
    },
    computed: {
    },
    created() {
        this.localId = this.id;
        this.localName = this.name;
        if (typeof this.localName === 'undefined' || this.localName == '') this.localName = 'rsui_accordion_name_' + this._uid;
        if (typeof this.localId === 'undefined' || this.localId == '') this.localId = 'rsui_accordion_id_' + this._uid;
    },
    mounted() {
        let self = this;
        const eventArray = ['webkitTransitionEnd', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd', 'transitionend'];
        eventArray.forEach(eve => {
            self.$refs.accordionBody.addEventListener(eve, (e) => {
                if (e.target !== self.$refs.accordionBody) return;
                const ele = self.$refs.accordionRadio ? self.$refs.accordionRadio : self.$refs.accordionCheckbox;
                if (ele.checked) {
                    self.$emit('expanded', self.$el);
                    if (self.scrollIntoView)
                        self.$el.scrollIntoView({ 
                            behavior: 'smooth' 
                        });
                }
                else {
                    self.$emit('collapsed', self.$el);
                }
            }, false);
        });
    },
    methods: {
    }
};
</script>

<style lang="scss">
</style>