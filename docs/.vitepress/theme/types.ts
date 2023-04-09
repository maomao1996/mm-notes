export interface NavLink {
  /** 站点图标 */
  noIcon?: boolean
  icon?: string | { svg: string }
  badge?:
    | string
    | {
        text?: string
        type?: 'info' | 'tip' | 'warning' | 'danger'
      }
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
}

export interface NavData {
  title: string
  tag?: string
  noIcon?: boolean
  items: NavLink[]
}
