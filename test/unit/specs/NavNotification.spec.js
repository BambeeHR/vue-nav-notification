import { mount } from 'vue-test-utils'

import NavNotification from '@/components/NavNotification'

describe('NavNotification.vue', () => {
  it('should hide unread area if no notifications props sent', () => {
    const wrapper = mount(NavNotification)
    const vm = wrapper.vm

    expect(vm.$el.querySelector('.unread'))
      .toEqual(null)
  })

  it('should hide unread area if unread count == 0', () => {
    const wrapper = mount(NavNotification)
    const vm = wrapper.vm

    expect(vm.$el.querySelector('.unread'))
      .toEqual(null)
  })

  it('should display no notifications when no notifications prop sent', () => {
    const wrapper = mount(NavNotification)
    const vm = wrapper.vm

    expect(vm.$el.querySelectorAll('aside li').length)
      .toEqual(0)
  })

  it('should show unread count text according to how many read == false', () => {
    const notifications = [
      {
        text: 'first noti',
        read: true
      },
      {
        text: 'second noti',
        read: false
      }
    ]

    const propsData = {
      notifications
    }

    const unreadCount = notifications.filter(n => !n.read).length

    const wrapper = mount(NavNotification, {propsData})
    const vm = wrapper.vm

    expect(vm.$el.querySelector('.unread').textContent)
      .toEqual(unreadCount.toString())
  })

  it('should display all notifications', () => {
    const notifications = [
      {
        text: 'first noti',
        read: true
      },
      {
        text: 'second noti',
        read: false
      }
    ]

    const propsData = {
      notifications
    }

    const wrapper = mount(NavNotification, {propsData})
    const vm = wrapper.vm

    expect(vm.$el.querySelectorAll('aside li').length)
      .toEqual(notifications.length)
  })

  it('should allow links in notification text', () => {
    const notifications = [
      {
        text: `<a href="">Testing link</a>`,
        read: true
      }
    ]

    const propsData = {
      notifications
    }

    const wrapper = mount(NavNotification, {propsData})
    const vm = wrapper.vm

    expect(vm.$el.querySelectorAll('aside li a').length)
      .toEqual(1)
  })

  it('should emit opened when figure is clicked', () => {
    const notifications = [
      {
        text: 'first noti',
        read: true
      },
      {
        text: 'second noti',
        read: false
      }
    ]

    const propsData = {
      notifications
    }

    const wrapper = mount(NavNotification, {propsData})

    wrapper.find('figure').trigger('click')

    expect(wrapper.emitted().opened).toBeTruthy()
  })

  it('should contain a bouncing class when unread messages exist', () => {
    const notifications = [
      {
        text: 'first noti',
        read: true
      },
      {
        text: 'second noti',
        read: false
      }
    ]

    const propsData = {
      notifications
    }

    const wrapper = mount(NavNotification, {propsData})

    expect(wrapper.find('figure').classes()).toContain('bouncing')
  })
})
