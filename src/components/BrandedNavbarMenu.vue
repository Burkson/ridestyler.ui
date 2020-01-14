<template>
    <section class="navbar-section">
        <span class="dropdown dropdown-right" v-if="isLoaded">
            <button class="link toggle-dropdown" @click="dropdownActive = !dropdownActive">
                {{ userOrg.OrganizationName }}
                <i class="icon icon-caret-down" v-if="userTheme"></i>
            </button>
            <ul id="accountDropdown" class="menu" :class="{ 'drop-active': dropdownActive }">
                <li class="menu-item">
                    <div class="tile tile-centered no-wrap">
                        <div class="tile-icon">
                            <img
                                v-if="userTheme && userTheme.CompanyLogoLight"
                                class="avatar"
                                :src="userTheme.CompanyLogoLight"
                                :alt="username + ' Avatar'"
                            />
                            <i class="avatar icon icon-user" v-else></i>
                        </div>
                        <div class="tile-content">{{ username }}</div>
                    </div>
                </li>
                <li class="divider"></li>
                <slot name="menu-item"></slot>
                <li class="menu-item">
                    <a href="#" @click.prevent="accountClick()">My Account</a>
                </li>
                <li class="menu-item">
                    <a href="#" @click.prevent="logoutClick()">Logout</a>
                </li>
            </ul>
        </span>
        <span class="loading d-block px-3" v-else></span>
    </section>
</template>

<script>

export default {
    name: "BrandedNavbarMenu",
    data() {
        return {
            isLoaded: false,
            userTheme: undefined,
            userOrg: undefined,
            userInfo: undefined,
            dropdownActive: false
        };
    },
    props: {
        demo: Object
    },
    methods: {
        accountClick: function() {
            if(!this.demo) window.location.href = "https://account.ridestyler.com/";
        },
        logoutClick: function() {
            if(!this.demo){
                window.ridestyler.auth.signOut().then(() => {
                    window.location.reload();
                });
            }
        }
    },
    created() {
        let processes = [],
            theme = null,
            settings = null,
            self = this;

        if(!this.demo){

            theme = new Promise((resolve, reject) => {
                window.ridestyler.ajax.send({
                    action: "Client/GetTheme",
                    callback: (response) => {
                        self.userTheme = response.Theme;
                        response.Success ? resolve(response) : reject(response);
                    }
                });
            });
            processes.push(theme);

            settings = new Promise((resolve, reject) => {
                window.ridestyler.ajax.send({
                    action: 'auth/status',
                    callback: function(response) {
                        if (typeof response.User !== 'undefined') {
                            self.userInfo = response.User;
                            self.userOrg = response.ActiveOrganization;
                        }
                        response.Success ? resolve(response) : reject(response);
                    }
                })
            });
            processes.push(settings);

            Promise.all(processes).then((response) => {
                if (response) this.isLoaded = true;
            }).catch(() => {
                this.isLoaded = false;
                console.error('There was an issue loading your settings');
            });
        } else {
            this.userInfo = this.demo.user;
            this.userTheme = this.demo.theme;
            this.userOrg = this.demo.organization;
            this.isLoaded = true;
        }

        document.body.addEventListener('click', (e) => {
            if(!e.target.classList.contains('toggle-dropdown')) this.dropdownActive = false;
        });
    },
    computed: {
        username() {
            let username = this.userOrg.OrganizationName;
            if (this.userInfo) username = this.userInfo.UserName;
            return username;
        }
    }
};
</script>

<style lang="scss">
.dropdown .menu.drop-active {
  display: inline-block;
}
.no-wrap {
  white-space: nowrap;
}
.avatar.icon:before {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.icon {
  font-family: "rsui-icons" !important;
}
</style>