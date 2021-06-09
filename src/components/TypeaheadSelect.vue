<template>
    <div class="dropdown" :class="{ 'active': menuVisible && filteredKeyValues.length > 0, 'd-hide': !loaded }">
        <input type="hidden" :name="name" :value="selectedKey">
        <input type="text" class="form-select" v-model="inputValue" :size="size" :placeholder="selectedValue" @focus="onFocus" @blur="onBlur">
        <ul class="menu" @mousedown="onMouseDown" @mouseup="onMouseUp">
            <li class="menu-item" v-for="keyValue in filteredKeyValues" :key="keyValue.key">
                <a href="#" :class="{ active: keyValue.key === selectedKey }" @focus="onItemFocus" @blur="onItemBlur" @click.prevent="onItemClick(keyValue.key, keyValue.value)">
                    {{ keyValue.value }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TypeaheadSelect',
    props: {
        keyValues: { type: Array },
        name: { type: String } // Name attribute for input
    },
    data: function() {
        return {
            loaded: false, // Flag set when loaded
            size: 10, // Initial width on characters of the input.
            filteredKeyValues: [], // Used to populate the dropdown.
            inputValue: "", // Text in the input box.
            selectedValue: "", // Currently selected value.
            selectedKey: "", // Currently selected key.
            menuVisible: false, // Flag to show/hide menu.
            inputFocused: false, // Keep track of when the input has focus.
            itemFocused: false, // Keep track when a menu item has focus.
            menuMouseDown: false // Needed for IE because dragging scrollbar makes input lose focus.
        }
    },
    mounted: function(){
        this.init();
        document.body.addEventListener('keydown', this.onKeyDown, true);
    },
    methods: {
        // Scrolls to the selected item in the menu.
        _scrollToSelected(){
            var el = this.$el.querySelector(" a.active").parentElement;
            var parent = el.parentElement;
            var top = 0;
            if(el != parent.firstElementChild) {
                var style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
                top = el.offsetTop - parseInt(style.marginTop);
            }
            parent.scrollTop = top;
        },

        // Hides menu.
        _hideMenu(force) {
            var self = this;
            // Timeout is used to protect against strange event edge cases
            setTimeout(function(){ 
                if((!self.inputFocused && !self.itemFocused && !self.mouseDown) || force) {
                    self.inputValue = self.selectedValue;
                    self.menuVisible = false;
                    self.itemFocused = false;
                }
            }, force ? 1 : 100);
        },
        onKeyDown(e) {
            if(this.inputFocused || this.itemFocused) {

                var keyCode = e.keyCode;

                if((keyCode === 40 || keyCode === 38) && this.filteredKeyValues.length > 0) {

                    var menu = this.$el.querySelector("ul"),
                        scrollTop = menu.scrollTop,
                        menuHeight = menu.scrollHeight,
                        items = menu.children;

                    // Index of the item that is in the users view.
                    var scrolledIndex = this.filteredKeyValues.length - Math.round((menuHeight - scrollTop) / (menuHeight / this.filteredKeyValues.length));

                    var focusItem = null;

                    if(this.inputFocused) {
                        focusItem = items[scrolledIndex].firstChild;
                    } else if(this.itemFocused) {
                        
                        // Get currently focused item.
                        var currentlyFocusedItem = document.activeElement;
                        var parent = currentlyFocusedItem.parentElement;

                        // Get next item based on up or down arrow pressed.
                        var nextItem = keyCode == 40 ? parent.nextSibling : parent.previousSibling;

                        if(nextItem != null) {
                            focusItem = nextItem.firstChild;
                        } else {
                            focusItem = keyCode == 40 ? items[0].firstChild : items[items.length - 1].firstChild;
                        }
                    }

                    focusItem.focus();
                    
                    e.preventDefault();

                } else if(keyCode === 13 && this.inputFocused) {
                    this.$el.querySelector(".form-select").blur();
                    e.preventDefault();
                }
            }
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

            // Timeout is used to make sure the menu is displayed before scrollTo is called.
            setTimeout(this._scrollToSelected, 10);
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
        },
        init() {
            if(this.keyValues.length > 0) {
                // Find the max length item to resize the input accordingly
                var maxSize = this.size;
                for(var n = 0; n < this.keyValues.length; n++) {
                    if(this.keyValues[n].value.length > maxSize) {
                        maxSize = this.keyValues[n].value.length;
                    }
                }
                this.size = maxSize;

                var emit = this.selectedKey !== this.keyValues[0].key;
                
                // Select the first item
                this.selectedKey = this.keyValues[0].key;
                this.selectedValue = this.keyValues[0].value;
                this.inputValue = this.keyValues[0].value;

                if(emit){
                    // Tell the parent to load the first item
                    this.$emit("itemSelected", this.selectedKey);
                }

                this.loaded = true;
            }
        }
    },
    watch: {
        filteredKeyValues() {
            // If filtered values changed, make sure it's scrolled to the top...
            if(this.filteredKeyValues.length !== this.keyValues.length) {
                this.$el.querySelector("ul").scrollTop = 0;
            }
        },
        inputValue() {
            // Filter out the menu every time the user types something
            this.filteredKeyValues.length = 0;
            for(var n = 0; n < this.keyValues.length; n++) {
                if(this.keyValues[n].value.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1) {
                    this.filteredKeyValues.push({ key: this.keyValues[n].key, value: this.keyValues[n].value });
                }
            }
        },
        keyValues() {
            this.init();
        }
    }
}
</script>
