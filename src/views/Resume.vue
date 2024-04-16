<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import Project01 from "./projects/Project01.vue";

const projects = [
  {
    id: 1,
    title: "XLUO AI鞋履设计平台",
    date: "2024/04 - 当前",
    description: "利用AI进行设计工作流优化",
    position: "前端开发工程师",
    responeBility: ["前端页面开发", "AI图形分割", "AI图像处理等"],
    techStack: ["Python", "Node", "Nuxt3", "Vuetify3", "ComfyUI", "Fooocus"],
    tools: ["Gitte", "飞书"],
  },
  {
    id: 2,
    title: "Paper-Daily AI论文信息平台",
    date: "2024/03 - 2024/04",
    description: "利用AI模型对论文进行摘要,亮点提取,相关资料推荐等功能",
    position: "前端开发工程师",
    responeBility: ["UI页面设计与前端页面开发", "Api文档作成", "数据库搭建"],
    techStack: ["Python", "Nuxt3", "Vuetify3", "ChatGPT", "Supabase"],
    tools: ["Git", "Jira", "Figma"],
  },
  {
    id: 3,
    title: "Lyer 游戏文本 AI翻译校对平台",
    date: "2024/01 - 2024/03",
    description: "利用AI优化大规模游戏文本翻译校对工作流程",
    position: "前端开发工程师",
    responeBility: [
      "UI页面设计与前端页面开发",
      "训练游戏文本AI模型 ",
      "Api文档作成",
      "导入文本CSV进行关键词抽取以及模型训练",
      "选择模型进行逐条翻译或者批量翻译",
      "对翻译结果可以进行校对标记以及评价,优化翻译模型",
    ],
    techStack: ["Python", "Vue", "Nuxt3", "Vuetify3", "Supabase"],
    tools: ["Git", "Jira", "AWS", "ChatGPT", "Figma"],
  },
  {
    id: 4,
    title: "某日本企业仓库管理系统",
    date: "2023/11 - 2024/02",
    description: "仓库管理系统的升级以及功能开发",
    position: "高级软件工程师",
    responeBility: [
      "前端标准化资料做成",
      "共通组件开发",
      "部分功能开发",
      "负责系统nuxt2到nuxt3的版本升级 ",
    ],
    techStack: ["Python", "Nuxt3", "Vuetify3", "Djiango", "Nodejs"],
  },
  {
    id: 5,
    title: "RIYU日寓东京租房买房信息平台",
    date: "2023/08 - 2023/11",
    position: "前端开发工程师",
    description: "东京房屋信息平台",
    responeBility: [
      "UI页面设计与前端页面开发",
      "后端管理系统开发",
      "中日多语言信息上传展示支持",
    ],
    techStack: ["React", "Next.js", "Springboot", "Typescript"],
    tools: ["AWS", "Git", "Gitlab", "Figma"],
  },
  {
    id: 6,
    title: "AI口语交流平台",
    date: "2023/06 - 2023/08",
    position: "独立开发者",
    description: "AI语音合成以及语音识别结合文字生成模型进行多语言口语交流",
    responeBility: [
      "用户登录添加多个AI好友",
      "选择语言以及声音模型",
      "AI语音合成以及语音识别结合GPT进行多语言口语交流",
    ],
    techStack: [
      "Python",
      "Nuxt3",
      "Vuetify3",
      "Vue",
      "Supabase",
      "Microsoft Azure",
    ],
    tools: ["ChatGPT", "Git", "Microsoft TTS", "Figma"],
  },
  // 达人税务系统
  {
    id: 6,
    title: "达人税务系统",
    date: "2022/01 - 2023/05",
    position: "全栈工程师",
    description: "报税系统及会计事务所管理税务资料管理系统",
    responeBility: [
      "前端基础组件共通化",
      "参与项目各个功能模块的功能开发",
      "代码审查",
    ],
    techStack: ["Vue3", ".net", "AWS"],
  },
  {
    id: 7,
    title: "Lalaport 商品销售与寄存 Line App",
    date: "2021/08 - 2021/12",
    position: "全栈工程师",
    description: "连锁大型购物中心Lalaport的商品销售与寄存App",
    responeBility: ["寄存功能开发", "共通组件开发", "压力测试，性能优化"],
    techStack: ["Vue", "java springboot", "AWS"],
  },
  {
    id: 8,
    title: "Dospara 电脑配件电商网站",
    date: "2021/03 - 2021/07",
    position: "全栈工程师",
    description: "电商项目的Salesforce项目,支付功能开发",
    responeBility: [
      "对接各种三方支付平台",
      "银行卡支付，分期付款，电子平台支付等",
    ],
    techStack: ["Salesforce", "javascript", "Nodejs"],
  },
  {
    id: 9,
    title: "电通广告分析系统",
    date: "2020/12 - 2021/02",
    position: "前端工程师",
    description: "Flash数据分析图表从Flash到JavaScript的移植开发",
    responeBility: [
      "电通广告模拟系统内数据分析图表从Flash到JavaScript的移植开发",
      "电通广告分析系统内数据分析图表从Flash到JavaScript的移植开发",
    ],
    techStack: ["Echart", "jQuery"],
  },
  {
    id: 9,
    title: "电通会计系统",
    date: "2020/02 - 2020/11",
    position: "全栈工程师",
    description: "会计系统内的部分功能的开发",
    responeBility: [
      "会计系统内的部分功能的画面以及Api开发",
      "使用敏捷开发进行开发推进",
    ],
    techStack: ["Vue", "TypeScript", "SpringBoot"],
  },
  {
    id: 10,
    title: "NTT消防管理系统",
    date: "2019/10 - 2020/02",
    position: "Java工程师",
    description: "会计系统内的部分功能的开发",
    responeBility: ["会计系统内的部分功能的开发"],
    techStack: ["Vue", "SpringBoot", "Java"],
  },
  {
    id: 11,
    title: "Versal官方网站及职位信息管理系统",
    date: "2019/06 - 2019/09",
    position: "全栈工程师",
    description: "个人独立进行网站开发",
    responeBility: [
      "官网及职位管理系统UI设计",
      "管理系统的前端页面开发和后端增删改查API开发",
      "后续部署维护",
    ],
    techStack: ["Vue", "SpringBoot", "MyBatis"],
    tools: ["Axure", "Git"],
  },
  {
    id: 12,
    title: "WBE EDI 人才管理派遣系统",
    date: "2018/09 - 2019/05",
    position: "前端工程师",
    description: "会计系统内的部分功能的开发",
    responeBility: ["全页面UI设计", "前端页面开发", "部分Api开发"],
    techStack: ["Vue", "SpringBoot", "Ant Design"],
    tools: ["Axure", "Git"],
  },

  {
    id: 13,
    title: "Salesforce OA管理系统",
    date: "2017/07 - 2018/07",
    position: "初级工程师",
    description: "会计系统内的部分功能的开发",
    responeBility: ["自动化测试", "根据客户需求进行功能追加开发"],
    techStack: ["Apex", "Salesforce", "Selenium", "SOQL"],
  },
];
</script>

<template>
  <div class="bg">
    <v-sheet
      max-width="1000"
      min-height="2200"
      class="mx-auto my-5 sheet"
      elevation="10"
      rounded="lg"
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
              <p><v-icon icon="mdi-phone" class="mr-2" />17709894274</p>
            </v-col>
            <v-col cols="6" md="5">
              <p>
                <a
                  class="text-white"
                  href="https://github.com/yangjiakai"
                  target="_blank"
                >
                  <v-icon icon="mdi-github" class="mr-2" />

                  https://github.com/yangjiakai</a
                >
              </p>
              <p>
                <a
                  class="text-white"
                  href="     https://lux.vuetify3.com/"
                  target="_blank"
                >
                  <v-icon icon="mdi-web" class="mr-2" />

                  https://lux.vuetify3.com/</a
                >
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
          我是一名全栈工程师,现在是自由职业者。拥有7年的开发经验。从UI设计,前端,后端,服务器运维都有涉猎,其中尤其精通Vue框架,对前端工程化组件化有较深刻理解,至今为止参与的项目主要以前端Vue+后端Java
          SpringBoot框架的技术栈为主。 其中7年的开发经验中,1年在中国,6年在日本
          自己本身对新技术以及AI相关的技术产品有非常强烈的热情,工作之余也在持续进行开源分享,在github上多个开源项目
        </p>

        <v-row class="mt-8">
          <v-col cols="12" md="9">
            <div>
              <h3>项目经验</h3>
              <v-divider color="#434E5E" thickness="2" class="my-5">
              </v-divider>
              <v-timeline density="compact" side="end" align="start">
                <v-timeline-item
                  v-for="project in projects"
                  :key="project.id"
                  icon="mdi-check-circle"
                  size="26"
                  dot-color="#fff"
                >
                  <div class="d-flex">
                    <div>
                      <strong>{{ project.title }}</strong>
                      <div class="text-caption py-1">
                        {{ project.date
                        }}<span
                          class="ml-2 bg-grey-darken-3 py-1 px-2 rounded-lg"
                        >
                          {{ project.position }}</span
                        >
                      </div>
                      <div>
                        <strong>项目概述:</strong>
                        <p>
                          {{ project.description }}
                        </p>
                        <strong>职责功能</strong>
                        <li v-for="item in project.responeBility">
                          {{ item }}
                        </li>

                        <strong>技术栈:</strong>
                        <div>
                          <v-chip
                            class="ma-2"
                            color="#434E5E"
                            label
                            text-color="white"
                            density="compact"
                            v-for="tech in project.techStack"
                          >
                            <v-icon start icon="mdi-label-outline"></v-icon>
                            {{ tech }}
                          </v-chip>
                        </div>
                        <strong v-if="project.tools">工具集:</strong>
                        <div v-if="project.tools">
                          <v-chip
                            class="ma-2"
                            color="#434E5E"
                            label
                            text-color="white"
                            density="compact"
                            v-for="tool in project.tools"
                          >
                            <v-icon start icon="mdi-label-outline"></v-icon>
                            {{ tool }}
                          </v-chip>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </div>
          </v-col>
          <v-col cols="12" md="3">
            <div>
              <h3>技术栈</h3>
              <v-divider color="#434E5E" thickness="2" class="my-5"></v-divider>
              <h6 class="text-h6 my-2"><b class="">前端</b></h6>
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
                <p class="mt-2">React/Next</p>
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

              <h6 class="text-h6 mt-10"><b class="">后端</b></h6>

              <div>
                <p class="mt-2">Java Springboot</p>
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
              <div>
                <p class="mt-2">Python/Djiango</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>

              <h6 class="text-h6 mt-10"><b class="">服务</b></h6>
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
                <p class="mt-2">Supabase</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">Line</p>
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
              <h6 class="text-h6 mt-10"><b class="">AI</b></h6>
              <div>
                <p class="mt-2">自然语言处理</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">语音识别</p>
                <v-progress-linear
                  color="primary"
                  model-value="70"
                  :height="6"
                ></v-progress-linear>
              </div>
              <div>
                <p class="mt-2">图像识别</p>
                <v-progress-linear
                  color="primary"
                  model-value="50"
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
      <!---技术栈 -->
      <!-- ---------------------------------------------- -->
    </v-sheet>
  </div>
</template>

<style scoped lang="scss">
.sheet {
  width: 1200px;
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
        width: 180px;
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
