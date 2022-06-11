import { getItem, setItem } from '@/utils/storage'
import { TAGS_VIEW } from '@/constants'
export default {
  namespaced: true,
  state: {
    tagsViewList: getItem(TAGS_VIEW) || []
  },
  mutations: {
    /**
     * 添加TagsView
     */
    addTagsViewList(state, tag) {
      // 处理重复
      const isFind = state.tagsViewList.find(item => {
        return item.path === tag.path
      })
      if (isFind) {
        state.tagsViewList.push(tag)
        setItem(TAGS_VIEW, state.tagsViewList)
      }
    }
  }
}
