module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    { value: 'refactor', name: 'refactor: 重构' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     增加测试' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:   回滚' },
    { value: 'build', name: 'build:    构建' }
  ],
  // 步骤
  messages: {
    type: '选择一个提交类型:',
    customScope: '选择一个范围(可选):',
    subject: '请输入描述:(必填)\n',
    body: '请输入提交内容:(可选)\n',
    footer: '请输入脚注(可选):\n',
    confirmCommit: '确认提交吗?(y/n)'
  },
  subjectLimit: 72
}
