<template>
    <div class="wrapper">
        <v-card class="user-about">
            <v-card-text>
                <div>Bukhara, UZ</div>
                <p class="display-1 text--primary">
                    Jaydin Jones
                </p>
                <v-avatar color="primary" size="180">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Jaydin Jones">
                </v-avatar>
                <h3>UI Developer</h3>
                <div class="text--primary">
                    well meaning and kindly.<br>
                    "a benevolent smile"
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn text color="deep-purple accent-4">
                    Contact me
                </v-btn>
            </v-card-actions>
        </v-card>

        <div class="user-info">
            <h1>User Info</h1>
            <v-card tile>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Email</v-list-item-title>
                        <v-list-item-subtitle>examle@mail.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>Phone Number</v-list-item-title>
                        <v-list-item-subtitle>
                            (987)654-32-12
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                            (785)656-89-67
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            <br>
            <router-link :to="'/login'">
                <v-btn color="primary">
                    Log out
                </v-btn>
            </router-link>
        </div>
    </div>
</template>

<style>
    .wrapper {
        display: flex;
        padding: 16px;
        background-color: #f2f2f2;
        min-height: 100vh;
    }

    .user-about {
        width: 30%;
        text-align: center;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }

    .user-about h3 {
        margin-top: 18px;
    }

    .user-info {
        padding: 15px;
        width: 70%;
        min-height: 100vh;
    }
</style>