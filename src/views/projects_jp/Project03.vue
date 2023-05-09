<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <v-timeline-item icon="mdi-numeric-3-circle" size="30" dot-color="#fff">
    <div class="d-flex">
      <div>
        <div class="mb-3">
          <strong
            ><v-chip color="primary" label class="font-weight-bold"
              >2021/03 - 2021/07</v-chip
            >
            Dospara ECサイト</strong
          >
        </div>
        <div>
          <div class="mt-2">
            <strong>プロジェクト概要:</strong>
          </div>
          <p>Salesforce ECサイト</p>

          <p>          <div class="mt-2">
            <strong>職務の概要:</strong>
          </div></p>
          <p>
            決済機能を担当しました,通販サイトなので、多くの外部の決済方式を接続する必要があります。apiリクエストとレスポンス情報の処理,画面遷移,データ更新
          </p>
          <div class="ml-3">
            <li><b>外部SDK</b> :Amzonpay,Paypal</li>
            <li><b>Apiリクエスト</b> : PayPay,Paygent</li>
            <li><b>請求書で支払</b> : 銀行振込決済 ATM決済</li>
          </div>
          <div class="mt-1"><strong>Tech stack:</strong></div>
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
