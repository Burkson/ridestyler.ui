<template>
    <div>
        <div class="dropdown" :class="{ active: menuVisible && filteredKeyValues.length > 0 }">
            <input type="text" :ref="id" class="form-select" :size="size" v-model="inputValue" v-on:focus="onFocus" v-on:blur="onBlur" :placeholder="selectedValue" />
            <ul class="menu" v-on:mousedown="onMouseDown" v-on:mouseup="onMouseUp">
                <li class="menu-item" v-for="keyValue in filteredKeyValues" :key="keyValue.key">
                    <a href="#" v-on:focus="onItemFocus" v-on:blur="onItemBlur" v-on:click="onItemClick(keyValue.key, keyValue.value)">
                        {{ keyValue.value }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TypeAheadSelect',
    components: {},
    props: {
        keyValues: { type: Array },
        id: { type: String }
    },
    data: function() {
        return {
            size: 10, // initial width in characters of the input
            filteredKeyValues: [], // used to populate the dropdown
            inputValue: "", // text in the input box
            selectedValue: "", // currently selected value
            selectedKey: "", // currently selected key (unique id for that selected value)
            menuVisible: false, // flag to show/hide menu
            inputFocused: false, // keep track of when the input has focus
            itemFocused: false, // keep track when a menu item has focus
            menuMouseDown: false // needed for IE because dragging scrollbar makes input lose focus
        }
    },
    methods: {
        _hideMenu(force) {
            var self = this;
            // timeout is used to protect against strange event edge cases
            setTimeout(function(){ 
                if((!self.inputFocused && !self.itemFocused && !self.mouseDown) || force) {
                    self.inputValue = self.selectedValue;
                    self.menuVisible = false;
                    self.itemFocused = false;
                }
            }, force ? 1 : 50);
        },
        onMouseUp() {
            this.mouseDown = false;
        },
        onMouseDown() {
            this.mouseDown = true;
        },
        onFocus() {
            this.inputValue = ""; 
            this.inputFocused = true;
            this.menuVisible = true;
        },
        onItemBlur() {
            this.itemFocused = false;
            this._hideMenu();
        },
        onItemFocus() {
            this.itemFocused = true;
            this.menuVisible = true;
        },
        onItemClick(key, value) {
            if(this.selectedKey !== key) {
                this.selectedValue = value;
                this.selectedKey = key;
                this.inputValue = value;
                this.$emit("itemSelected", this.selectedKey);
            }
            this._hideMenu(true);
        },
        onBlur() {
            this.inputFocused = false;
            this._hideMenu();
        }
    },
    watch: {
        inputValue() {
            // filter out the menu every time the user types something
            this.filteredKeyValues.length = 0;
            for(var n = 0; n < this.keyValues.length; n++) {
                if(this.keyValues[n].value.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1) {
                    this.filteredKeyValues.push({ key: this.keyValues[n].key, value: this.keyValues[n].value });
                }
            }
        },
        keyValues() {
            if(this.keyValues.length > 0) {

                // find the max length item to resize the input accordingly
                var maxSize = this.size;
                for(var n = 0; n < this.keyValues.length; n++) {
                    if(this.keyValues[n].value.length > maxSize) {
                        maxSize = this.keyValues[n].value.length;
                    }
                }
                this.size = maxSize;

                // select the first item
                this.selectedKey = this.keyValues[0].key;
                this.selectedValue = this.keyValues[0].value;
                this.inputValue = this.keyValues[0].value;

                // tell the parent to load the first item
                this.$emit("itemSelected", this.selectedKey);
            }
        }
    }
}
</script>