<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import Project01 from "./projects/Project01.vue";
import Project02 from "./projects/Project02.vue";
import Project03 from "./projects/Project03.vue";
import Project04 from "./projects/Project04.vue";
import Project05 from "./projects/Project05.vue";
import Project06 from "./projects/Project06.vue";
import Project07 from "./projects/Project07.vue";
import Project08 from "./projects/Project08.vue";
import Project09 from "./projects/Project09.vue";
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
          <img src="@/assets/avatar/photo.jpg" class="photo" alt="" />
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
              <p><v-icon icon="mdi-phone" class="mr-2" />070 4376 2157</p>
            </v-col>
            <v-col cols="6" md="5">
              <p>
                <v-icon icon="mdi-github" class="mr-2" />

                https://github.com/yangjiakai
              </p>
              <p>
                <v-icon icon="mdi-web" class="mr-2" />

                https://lux.vuetify3.com/
              </p>
              <p>
                <v-icon icon="mdi-web" class="mr-2" />

                https://styler.vuetify3.com/
              </p>
              <p>
                <v-icon icon="mdi-web" class="mr-2" />

                https://www.versal.com.cn/
              </p>
            </v-col>
          </v-row>
        </div>
      </div>
      <!-- ---------------------------------------------- -->
      <!---Career summary Area -->
      <!-- ---------------------------------------------- -->
      <div class="main-area">
        <h3>职业概述</h3>
        <v-divider color="#434E5E" thickness="2" class="my-5"></v-divider>
        <p>
          我是一名全栈工程师,拥有6年的开发经验。从UI设计,前端,后端,服务器运维都有涉猎,其中尤其精通Vue框架,对前端工程化组件化有较深刻理解,至今为止参与的项目主要以前端Vue+后端Java
          SpringBoot框架的技术栈为主。
          在最近的项目中,我主导前端的技术栈选型,负责整个项目前端组件模块化共通化,代码规范化,代码检查等工作
          其中6年的开发经验中,一年在中国,5年在日本
          自己本身对新技术有非常强烈的热情,对于新技术的学习能力也是非常强的,工作之余也在持续进行开源分享,我在github上多个Vue的开源项目
          在功能目标实现,质量保障的的前提下,专注于提升团队的开发效率,以及产品的用户体验
        </p>

        <v-row class="mt-8">
          <v-col cols="12" md="9">
            <div>
              <h3>项目经验</h3>
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
                <p class="mt-2">tailwind css</p>
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
                  model-value="70"
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
