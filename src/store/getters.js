import variables from '@/style/_export.module.scss'

const getters = {
  token: state => state.user.token,
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: state => state.user.userInfo,
  cssVar: state => variables,
  tagsViewList: state => state.app.tagsViewList
}

export default getters
