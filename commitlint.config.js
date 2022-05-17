module.exports = {
  // 继承规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则
  rules: {
    // type 的类型定义: 表示 git 提交的 type 必须在以下范围之内
    'type-enum': [
      // 当前验证的错误级别
      2,
      // 在什么情况下进行验证
      'always',
      // 定义验证的范围
      [
        'feat', // 新功能
        'fix', // 修复 bug
        'docs', // 文档
        'style', // 格式
        'refactor', // 重构
        'perf', // 性能
        'test', // 测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚
        'build' // 构建
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}
