<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <div class="bg">
    <v-sheet
      max-width="1000"
      min-height="2200"
      class="mx-auto my-5 sheet"
      elevation="10"
    >
      <!-- ---------------------------------------------- -->
      <!---Header Area -->
      <!-- ---------------------------------------------- -->
      <div class="header-area">
        <!-- ---------------------------------------------- -->
        <!---Photo-->
        <!-- ---------------------------------------------- -->
        <div class="photo-container">
          <img
            src="https://avatars.githubusercontent.com/u/35951244?v=4"
            class="photo"
            alt=""
          />
        </div>
        <!-- ---------------------------------------------- -->
        <!---Info-->
        <!-- ---------------------------------------------- -->
        <div class="info-container px-10 py-5">
          <v-row>
            <v-col cols="6" md="7">
              <h1 class="text-white font-weight-bold">杨嘉凯</h1>
              <h2 class="text-white">全栈工程师</h2>
              <p><v-icon icon="mdi-email" class="mr-2" />yjkbako@gmail.com</p>
              <p><v-icon icon="mdi-phone" class="mr-2" />0123 456 78900</p>
            </v-col>
            <v-col cols="6" md="5">
              <p>
                <v-icon icon="mdi-network" class="mr-2" />

                https://github.com/yangjiakai
              </p>
              <p>
                <v-icon icon="mdi-network" class="mr-2" />

                https://github.com/yangjiakai
              </p>
              <p>
                <v-icon icon="mdi-network" class="mr-2" />

                https://github.com/yangjiakai
              </p>
              <p>
                <v-icon icon="mdi-network" class="mr-2" />

                https://github.com/yangjiakai
              </p>
            </v-col>
          </v-row>
        </div>
      </div>
      <!-- ---------------------------------------------- -->
      <!---Career summary Area -->
      <!-- ---------------------------------------------- -->
      <div class="main-area">
        <h3>CAREER SUMMARY</h3>
        <v-divider color="#434E5E" thickness="2" class="my-5"></v-divider>
        <p>
          Summarise your career here. You can make a PDF version of your resume
          using our free Sketch template here. Aenean commodo ligula eget dolor
          aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit.
        </p>

        <v-row class="mt-8">
          <v-col cols="12" md="9">
            <div>
              <h3>CAREER SUMMARY</h3>
              <v-divider color="#434E5E" thickness="2" class="my-5">
              </v-divider>
            </div>
          </v-col>
          <v-col cols="12" md="3">
            <div>
              <h3>SKILLS & TOOLS</h3>
              <v-divider color="#434E5E" thickness="2" class="my-5"></v-divider>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- ---------------------------------------------- -->
      <!---Career summary Area -->
      <!-- ---------------------------------------------- -->

      <!-- ---------------------------------------------- -->
      <!---WORK EXPERIENCE -->
      <!-- ---------------------------------------------- -->

      <!-- ---------------------------------------------- -->
      <!---SKILLS & TOOLS -->
      <!-- ---------------------------------------------- -->
    </v-sheet>
  </div>
</template>

<style scoped lang="scss">
.sheet {
  color: #434e5e;
}

.header-area {
  display: flex;
  flex-wrap: wrap;
  color: #ddd;
  .photo-container {
    width: 100%;
    text-align: center;
    .photo {
      width: 150px;
      border-radius: 10px;
      margin: 20px auto;
    }
  }

  .info-container {
    width: 100%;
    display: flex;
    background-color: #434e5e;
  }

  p {
    line-height: 2.5rem;
  }
}

@media only screen and (min-width: 600px) {
  .header-area {
    flex-wrap: nowrap;
    .photo-container {
      width: auto;
      .photo {
        margin: 0 auto;
        border-radius: 0;
        width: 220px;
        height: 220px;
      }
    }
    .info-container {
      max-height: 220px;
    }
  }
}

.main-area {
  padding: 40px;
}
</style>
