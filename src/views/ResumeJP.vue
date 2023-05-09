<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import Project01 from "./projects_jp/Project01.vue";
import Project02 from "./projects_jp/Project02.vue";
import Project03 from "./projects_jp/Project03.vue";
import Project04 from "./projects_jp/Project04.vue";
import Project05 from "./projects_jp/Project05.vue";
import Project06 from "./projects_jp/Project06.vue";
import Project07 from "./projects_jp/Project07.vue";
import Project08 from "./projects_jp/Project08.vue";
import Project09 from "./projects_jp/Project09.vue";
</script>

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
          <img src="@/assets/avatar/4x4.jpg" class="photo" alt="" />
          />
        </div>
        <!-- ---------------------------------------------- -->
        <!---Info-->
        <!-- ---------------------------------------------- -->
        <div class="info-container px-10 py-5">
          <v-row>
            <v-col cols="6" md="7">
              <h1 class="text-white font-weight-bold">
                楊　嘉凱(よう　かがい)
              </h1>
              <h2 class="text-white">フルスタックエンジニア</h2>
              <p><v-icon icon="mdi-email" class="mr-2" />yjkbako@gmail.com</p>
              <p><v-icon icon="mdi-phone" class="mr-2" />070 4376 2157</p>
            </v-col>
            <v-col cols="6" md="5">
              <p>
                <v-icon icon="mdi-github" class="mr-2" />

                <a
                  class="text-white"
                  target="_blank"
                  href="https://github.com/yangjiakai"
                  >https://github.com/yangjiakai</a
                >
              </p>
              <p>
                <v-icon icon="mdi-web" class="mr-2" />
                <a
                  class="text-white"
                  target="_blank"
                  href="https://lux.vuetify3.com"
                >
                  https://lux.vuetify3.com</a
                >
              </p>
              <p>
                <v-icon icon="mdi-web" class="mr-2" />
                <a
                  class="text-white"
                  target="_blank"
                  href="https://styler.vuetify3.com/"
                >
                  https://styler.vuetify3.com/</a
                >
              </p>
              <!-- <p>
                <v-icon icon="mdi-web" class="mr-2" />

                https://www.versal.com.cn/
              </p> -->
            </v-col>
          </v-row>
        </div>
      </div>
      <!-- ---------------------------------------------- -->
      <!---Career summary Area -->
      <!-- ---------------------------------------------- -->
      <div class="main-area">
        <h3>職業概要</h3>
        <v-divider color="#434E5E" thickness="2" class="my-5"></v-divider>
        <p>
          私はフルスタックエンジニアで、 6年の開発経験があります。
          UIデザイン、フロントエンド、バックエンド、サーバー運用など幅広い分野での経験があり、
          特にVueフレームワークに精通しています。Vueの使用方法、コンポーネント共通化について深い理解があります。
          今まで参加したプロジェクトにも主にFront側はVueを使用して。バックエンドはJava、SpringBootフレームワークを使用しています。
          最近のプロジェクトでは、私はフロントエンドの技術選定をリードし、コンポーネント共通化、コードの標準化、ソースリビューなどを担当しました。
          6年の開発経験のうち、1年間は中国で働き、5年間は日本で働いています。
          新しい技術に非常に興味があり、学習能力も優れています、仕事の合間にはオープンソースプロジェクトにも取り組んでいます。
          GitHubでいくつかのVueオープンソースプロジェクトを持っています。
          機能目標の実現と品質保証を前提として、チームの開発効率と製品のUI、UX品質の向上に専念しています。
          今後、AI関連のプロジェクト開発に参加できることを希望しています。
        </p>

        <v-row class="mt-8">
          <v-col cols="12" md="9">
            <div>
              <h3>プロジェクト経験</h3>
              <v-divider color="#434E5E" thickness="2" class="my-5">
              </v-divider>
              <v-timeline density="compact" side="end" align="start">
                <Project01></Project01>
                <Project02></Project02>
                <Project03></Project03>
                <Project04></Project04>
                <Project05></Project05>
                <Project06></Project06>
                <Project07></Project07>
                <Project08></Project08>
                <Project09></Project09>
              </v-timeline>
            </div>
          </v-col>
          <v-col cols="12" md="3">
            <div>
              <h3>SKILLS & TOOLS</h3>
              <v-divider color="#434E5E" thickness="2" class="my-5"></v-divider>
              <h6 class="text-h6 my-2"><b class="">Frontend</b></h6>
              <div>
                <p class="mt-2">Html5</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">Css3</p>
                <v-progress-linear
                  color="primary"
                  model-value="80"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">Sass/Stylus</p>
                <v-progress-linear
                  color="primary"
                  model-value="80"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">JavaScript/Es6</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">TypeScript</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">vue2/vue3</p>
                <v-progress-linear
                  color="primary"
                  model-value="90"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">Nuxt2/Nuxt3</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">vue-router</p>
                <v-progress-linear
                  color="primary"
                  model-value="90"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">vuex/pinia</p>
                <v-progress-linear
                  color="primary"
                  model-value="90"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">vuetify2/vuetify3</p>
                <v-progress-linear
                  color="primary"
                  model-value="90"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">bootstrap3/bootstrap4</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">tailwind</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">storybook</p>
                <v-progress-linear
                  color="primary"
                  model-value="50"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">react</p>
                <v-progress-linear
                  color="primary"
                  model-value="50"
                  :height="6"
                ></v-progress-linear>
              </div>

              <h6 class="text-h6 mt-10"><b class="">Backend</b></h6>

              <div>
                <p class="mt-2">Java Springboot</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">MyBatis/JPA</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">NodeJs/Express</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>

              <h6 class="text-h6 mt-10"><b class="">Service</b></h6>
              <div>
                <p class="mt-2">AWS</p>
                <v-progress-linear
                  color="primary"
                  model-value="60"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">Firebase</p>
                <v-progress-linear
                  color="primary"
                  model-value="60"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">Line App</p>
                <v-progress-linear
                  color="primary"
                  model-value="60"
                  :height="6"
                ></v-progress-linear>
              </div>
              <h6 class="text-h6 mt-10"><b class="">Design</b></h6>
              <div>
                <p class="mt-2">Figma</p>
                <v-progress-linear
                  color="primary"
                  model-value="60"
                  :height="6"
                ></v-progress-linear>
              </div>
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
