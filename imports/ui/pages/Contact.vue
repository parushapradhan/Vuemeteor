<template>
    <div>
        <v-app>
            <v-sheet>
            <v-container>
                <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>

             

                <v-theme-provider light>
                <v-row>
                <v-col cols="12">
                <v-text-field
                flat
                label="Name*"
                solo
                ></v-text-field>
                </v-col>

                <v-col cols="12">
                <v-text-field
                flat
                label="Email*"
                solo
                ></v-text-field>
                </v-col>

                <v-col cols="12">
                <v-text-field
                flat
                label="Subject*"
                solo
                ></v-text-field>
                </v-col>

                <v-col cols="12">
                <v-textarea
                flat
                label="Message*"
                solo
                ></v-textarea>
                </v-col>

                <v-col
                class="mx-auto"
                cols="auto"
                >
                <v-btn
                color="accent"
                x-large
                >
                Submit
                </v-btn>
                </v-col>
                </v-row>
                </v-theme-provider>
            </v-container>
</v-sheet>
        <div class="py-12"></div>
    
 </v-app>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>