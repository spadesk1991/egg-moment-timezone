
import * as  Moment from 'moment-timezone'
declare module 'egg' {
  export interface Application {
    moment: typeof Moment
  }
   // extend your config
  export interface EggAppConfig {
    momentTimezone: {
        timezone: 'Asia/Shanghai'|'Asia/Hong_Kong'| String
      }
  }
};