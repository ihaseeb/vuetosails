<template>
  <div>
    <v-layout>
      <v-flex md10 offset-md1 class="mt-3">
        <v-layout>
          <v-flex md3 class="users-panel">
            <!-- user info panel -->
            <users-panel></users-panel>
          </v-flex>
          <v-flex md9 class="chat-panel">
            <!-- chat panel -->
            chat
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import UsersPanel from '@/components/chat/UsersPanel.vue'
export default {
  components: {
    UsersPanel
  }
}
</script>
<style scoped>
.users-panel{
  height: 650px;
  border: black 2px solid;
  /* background: red; */
}
.chat-panel{
  height: 650px;
  border: black 2px solid;
  /* background: blue; */
}
</style>
