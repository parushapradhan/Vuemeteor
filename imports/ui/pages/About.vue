<template>
<div>
  <v-app>
 <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">ABOUT </h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
           >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat consequat enim et sodales. Duis a magna eu quam posuere iaculis. Sed non erat in metus fringilla convallis ut vel ante. Nullam vulputate felis et dui finibus pharetra. Quisque id mollis massa. Mauris ultrices ipsum eleifend, accumsan lacus eu, ultrices quam. Quisque tempor nisl felis, nec interdum purus commodo nec. In luctus in elit commodo imperdiet. Nam vel libero nulla. Duis venenatis eros in urna bibendum, id congue turpis tincidunt. Nam tincidunt dignissim facilisis. Nulla mollis ultricies elit in ultricies.

Nam sagittis dictum leo, at dictum lorem varius a. Quisque sollicitudin, orci at facilisis varius, nisl lorem pulvinar arcu, ac faucibus libero velit a turpis. Suspendisse semper eros dolor, a venenatis dui lobortis vel. Vivamus id enim non massa tempor commodo. Curabitur ut est sagittis ipsum consectetur euismod in id tellus. Vestibulum consectetur libero vel neque condimentum, in semper ex accumsan. Curabitur et molestie lectus. In hac habitasse platea dictumst. Quisque sem mi, viverra vitae tempor vestibulum, venenatis vitae nunc. Quisque eget ullamcorper metus, at vulputate elit. Pellentesque ac erat pellentesque, sollicitudin mi tincidunt, venenatis nisl. Aliquam accumsan, arcu in porta posuere, sapien urna pretium nulla, cursus iaculis lectus leo sit amet nisl. Curabitur accumsan, turpis eget luctus tristique, lacus enim ultrices odio, quis molestie magna massa ut nibh.
          </v-responsive>

      

          <div></div>

          
        </v-container>

        <div class="py-12"></div>
      </section>

  <section id="blog">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1">orem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat consequat enim et sodales. Duis a mag</v-divider>

            <v-divider>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat consequat enim et sodales. Duis a mag</v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ src, text, title }, i) in articles"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="src"
                class="mb-4"
                height="275"
                max-width="100%"
              ></v-img>

              <h3
                class="font-weight-black mb-4 text-uppercase"
                v-text="title"
              ></h3>

              <div
                class="title font-weight-light mb-5"
                v-text="text"
              ></div>

              <v-btn
                class="ml-n4 font-weight-black"
                text
              >
                Continue Reading
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>
  </v-app>
</div>

</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

</style>