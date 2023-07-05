import fs from 'fs-extra'
import { Octokit } from '@octokit/rest'

const owner = 'maomao1996'
const repo = 'daily-notes'

const octokit = new Octokit()

function formatTime(time) {
  return time.replace(/T.*$/, '')
}

/* 将 Issues 保存为 Markdown 文件 */
function generateIssueMarkdown(issue) {
  const content = issue.body.replace(
    /\n/,
    `

  :::tip 原文地址
  [${issue.title} | GitHub](${issue.html_url})
  :::
  `
  )

  fs.writeFile(`./docs/${repo}/issue-${issue.number}.md`, content, 'utf8').then(() =>
    console.log(`Issue ${issue.number} generated successfully!`)
  )
}

/* 生成 index.md 文件 */
function generateIndexFile(data) {
  const issueYearGroups = Object.entries(data).sort(([year1], [year2]) => year2 - year1)
  const content = `# Daily Notes 日常笔记

日常笔记记录（零零散散啥都记系列）

> [新写一篇小笔记](https://github.com/${owner}/${repo}/issues/new)

共计 **${issueYearGroups.reduce(
    (total, [, issues]) => total + issues.length,
    0
  )}** 篇（上次更新: ${formatTime(issueYearGroups[0][1][0].created_at)}）

${issueYearGroups
  .map(
    ([year, issues]) => `## ${year} 年 (共计 ${issues.length} 篇)

${issues
  .map(
    (issue, index) =>
      `${index + 1}. ${formatTime(issue.created_at)} —— [${
        issue.title
      }](${`/daily-notes/issue-${issue.number}`})`
  )
  .join('\n\n')}`
  )
  .join('\n\n')}
`

  fs.writeFile('./docs/daily-notes/index.md', content, 'utf8').then(() =>
    console.log('Index file generated successfully!')
  )

  const jsonContent = issueYearGroups.map(([year, issues]) => ({
    text: `${year} 年`,
    collapsed: false,
    items: issues.map((issue) => ({
      text: issue.title,
      link: `/daily-notes/issue-${issue.number}`
    }))
  }))

  fs.writeJSON('./scripts/daily-notes.json', jsonContent, {
    spaces: 2,
    encoding: 'utf8'
  }).then(() => console.log('Json file generated successfully!'))
}

// 获取所有 Issues 并保存
try {
  const { data } = await octokit.issues.listForRepo({
    owner,
    repo,
    sort: 'created',
    state: 'all',
    per_page: 100
  })

  fs.emptyDirSync('./docs/daily-notes')

  const issueYearGroups = {}

  for (const issue of data) {
    if (issue.user.login !== owner) continue

    // 按创建年份分组
    const issueYear = new Date(issue.created_at).getFullYear()
    if (!issueYearGroups[issueYear]) {
      issueYearGroups[issueYear] = []
    }
    issueYearGroups[issueYear].push(issue)

    generateIssueMarkdown(issue)
  }

  generateIndexFile(issueYearGroups)
} catch (error) {
  console.error('Error getting issues:', error)
}
