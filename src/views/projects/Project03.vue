<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <v-timeline-item icon="mdi-numeric-1-circle" size="30" dot-color="#fff">
    <div class="d-flex">
      <div>
        <strong>Dospara 电商网站</strong>
        <div class="text-caption">
          2021/03 - 2021/07 <span> 前端开发工程师</span>
        </div>
        <div>
          <strong>项目概述:</strong>
          <p>电商项目的Salesforce项目,支付功能</p>

          <p><strong>职责概述</strong></p>
          <p>
            担当支付功能的开发,因为是电商网站需要接入许多外部支付方式,api接入,请求和相应信息的处理,以及页面跳转,数据联动更新
          </p>
          <div class="ml-3">
            <li><b>外部SDK</b> :Amzonpay,Paypal</li>
            <li><b>Api请求</b> : PayPay,Paygent</li>
            <li><b>账单支付</b> : 銀行振込決済 ATM決済</li>
          </div>
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
              Salesforce Commerce Cloud
            </v-chip>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              NodeJs
            </v-chip>
          </div>
        </div>
      </div>
    </div>
  </v-timeline-item>
</template>

<style scoped lang="scss"></style>
