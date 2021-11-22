import axios from 'axios';
import { MopService } from './shared/services/mop-service';

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios;
    $mopService: MopService;
    $config: Record<string, unknown>;
  }
}
