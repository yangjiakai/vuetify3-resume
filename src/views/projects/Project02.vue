<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <v-timeline-item dot-color="#434E5E" size="small">
    <div class="d-flex">
      <div>
        <strong>Lalaport商品贩卖和商品柜存储 Line App</strong>
        <div class="text-caption">
          2021/08 - 2021/12 <span> 前端开发工程师</span>
        </div>
        <div>
          <strong>项目概述:</strong>
          <p>
            这是一个Line
            App。一方面用户可以在网上商店进行购物,也可以在Lalaport商场购物。购买的商品可以选择寄存在车站就近的商品柜
            用户可以通过扫码到商品柜取货。相关信息都可以通过Line
            App查看,物流存储信息也会及时推送给用户
          </p>
          <strong>职责概述</strong>
          <li>Jmeter进行压力测试,并优化项目启动速度,接口请求速度</li>
          <li>商品柜使用状况功能开发担当</li>
          <li>与结合连入Line的服务</li>
          <li>
            使用codepipeline持续化集成部署项目,并在功能上线后使用cloudwatch查看项目运行log调查bug
          </li>
          <li>代码检查</li>
          <li>共通组件开发</li>
          <li>敏捷开发</li>
          <strong>技术栈:</strong>
          <div>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              前端 vue
            </v-chip>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              后端 java springboot
            </v-chip>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              服务器 aws codepipeline
            </v-chip>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              数据库 dynamodb
            </v-chip>
          </div>
          <strong>工具集:</strong>
          <div>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              vscode
            </v-chip>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              eclipse
            </v-chip>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              git版本管理
            </v-chip>
          </div>
        </div>
      </div>
    </div>
  </v-timeline-item>
</template>

<style scoped lang="scss"></style>
