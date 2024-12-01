import router from '@/router'
import {NavigationFailure} from "vue-router";

export default {
  navigateTo(name: string): void {
      router.push({name})
  },
};