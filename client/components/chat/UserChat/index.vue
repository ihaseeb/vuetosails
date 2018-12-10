<template>
  <div>
    <v-layout row wrap>
      <v-flex md3>
        <v-avatar color="indigo">
          <v-icon dark>account_circle</v-icon>
        </v-avatar>
      </v-flex>
      <v-flex md9>
        <v-layout row wrap>
          <v-flex md6 class="user-name">
            <p>{{chat.userName}}</p>
          </v-flex>
          <v-flex md6 class="last-message-date">
            <p>{{chat.messageDate}}</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex md12 class="user-message">
            <p>{{chat.message}}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  props: ['chat']
}
</script>
<style scoped>
 .user-name{
   font-size: 15px;
   font-weight: 500;
 }
 .last-message-date{
   font-size: 13px;
   font-weight: 450;
 }
 .user-message{
   font-size: 13px;
   font-weight: 200;
   opacity: .8;
 }
</style>
