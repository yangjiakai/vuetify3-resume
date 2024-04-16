<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts"></script>

<template>
  <v-timeline-item icon="mdi-numeric-2-circle" size="26" dot-color="#fff">
    <div class="d-flex">
      <div>
        <div>
          <strong
            ><v-chip color="primary" label class="font-weight-bold"
              >2021/08 - 2021/12</v-chip
            >
            Lalaport商品通販とロッカーストレージ Line App</strong
          >
          <span class="text-caption text-grey">(Frontend)</span>
        </div>
        <div>
          <div class="mt-2">
            <strong>プロジェクト概要:</strong>
          </div>
          <p>
            これはLineアプリです。ユーザーはオンラインショップでの買い物や、Lalaportショッピングモールでの買い物をすることができます。買った商品は指定する駅前のローカーに送ることができ、ユーザーはローカーにスキャンして荷物を受け取ることができます。関連する情報はすべてLineアプリで確認することができ、物流ストレージ情報もユーザーに送信されます。
          </p>
          <div class="mt-2">
            <strong>職務の概要:</strong>
          </div>
          <li>
            JMeterを使用して負荷テストを実行し、プロジェクトの起動速度とインターフェースのリクエスト速度を最適化します。
          </li>
          <li>ローカーの利用状況機能開発</li>
          <li>LINEに接続するサービスを開発</li>
          <li>
            アプリをawsのcodepipelineを利用して継続的デリバリーして,リリースされた後,cloudwatchを利用してバグを調査します
          </li>
          <li>コードリビュー</li>
          <li>共通コンポーネント開発</li>
          <li>アジャイル開発</li>
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
              Frontend vue
            </v-chip>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              Backend java springboot
            </v-chip>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              Server aws codepipeline
            </v-chip>
            <v-chip
              class="ma-2"
              color="#434E5E"
              label
              text-color="white"
              density="compact"
            >
              <v-icon start icon="mdi-label-outline"></v-icon>
              DB dynamodb
            </v-chip>
          </div>
          <div class="mt-1"><strong>Tools:</strong></div>
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
              git
            </v-chip>
          </div>
        </div>
      </div>
    </div>
  </v-timeline-item>
</template>

<style scoped lang="scss"></style>
