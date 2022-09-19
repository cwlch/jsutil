const msg = require('fs')
  .readFileSync('.git/COMMIT_EDITMSG', 'utf-8')
  .trim()

/**
 * feat: 新功能
 * fix: 修改 bug
 * docs: 文档
 * perf: 性能相关
 * refactor: 代码重构（就是不影响使用，内部结构的调整）
 * test: 测试用例
 * style: 样式修改
 * workflow: 工作流
 * build: 项目打包构建相关的配置修改
 * ci: 持续集成相关
 * revert: 恢复上一次提交（回滚）
 * wip: work in progress 工作中 还没完成
 * chore: 其他修改（不在上述类型中的修改）
 * release: 发版
 * deps: 依赖相关的修改
 */
const commitRE = /^(revert: )?(feat|fix|docs|perf|refactor|test|style|workflow|build|ci|revert|wip|chore|release|deps)(\(.+\))?: ?.{1,50}/
const mergeRe = /^(Merge pull request|Merge branch)/
if (!commitRE.test(msg)) {
  if(!mergeRe.test(msg)){
    console.error(`git commit的信息格式不对, 需要使用 title(scope): desc的格式
      比如 fix: xxbug
      feat(test): add new
      具体校验逻辑看 scripts/verifyCommit.js
    `)
    process.exit(1)
  }
}else{
  console.log('git commit信息校验通过')
}
