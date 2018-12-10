<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex v-for="chat in chats" :key="chat.id" md12>
          <user-chat :chat='chat'></user-chat>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import UserChat from '@/components/chat/UserChat'
export default {
  data () {
    return {
      chats: [
        {
          id: 'sdfhwkljd1onid3dn2o1i2n',
          userName: 'Haseeb',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'sdfhwkljd1asavwwecw1i2n',
          userName: 'vicky',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'sdfhwkljd1oniuhwfieww2n',
          userName: 'Yasir',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'sdfhwkljd1kjhciwdno1i2n',
          userName: 'Hassan',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        },
        {
          id: 'syihibkjj1onid3dn2o1i2n',
          userName: 'Zahid',
          messageDate: 'Nov 19',
          message: 'Hi there!'
        }
      ]
    }
  },
  components: {
    UserChat
  }
}
</script>
