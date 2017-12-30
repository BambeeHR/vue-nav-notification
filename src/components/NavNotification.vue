<script type="text/ecmascript-6">
  export default {
    name: 'vue-notification',
    props: {
      notifications: {
        type: Array,
        default () {
          return []
        }
      }
    },
    computed: {
      notifications_unread () {
        return this.notifications.filter(n => !n.read)
      }
    }
  }
</script>

<template>
  <div>
    <figure
      @click="$emit('opened')"
      :class="{bouncing: notifications_unread.length > 0}"
    >
      <slot name="icon">Some Notification Icon</slot>
    </figure>

    <div
      v-if="notifications_unread.length > 0"
      class="unread"
    >{{notifications_unread.length}}</div>

    <aside>
      <ul>
        <li v-for="notification in notifications">
          <p class="text" v-html="notification.text"/>
        </li>
      </ul>
    </aside>
    <dialog></dialog>
    <div class="static"></div>
  </div>
</template>

<style scoped>
  aside, .static {
    display: none;
    position: fixed;
  }

  @keyframes bounce {
    from, 20%, 40%, 60%, 80%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      transform: scale3d(.9, .9, .9);
    }

    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      transform: scale3d(.97, .97, .97);
    }

    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  .bouncing {
    animation: bounce 1s infinite;
  }
</style>
