import prompts from 'prompts'
import { $ } from 'execa'
import fs from 'fs-extra'

const filepath = './docs/home/friend-data.json'
const friends = fs.readJSONSync(filepath)
const friendQuestions = [
  {
    type: 'text',
    name: 'title',
    message: '请输入网站标题？',
    format: (value) => value.trim(),
    validate: (value) => {
      if (!value) {
        return '请输入网站标题！'
      }
      return true
    },
  },
  {
    type: 'text',
    name: 'desc',
    message: '请输入网站描述',
    format: (value) => value.trim(),
  },
  {
    type: 'text',
    name: 'link',
    message: '请输入网站链接？',
    format: (value) => value.trim(),
    validate: (value) => {
      if (!value) {
        return '请输入网站链接！'
      }
      if (
        !/^(https|http):\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(
          value.trim(),
        )
      ) {
        return '请输入正确的网站链接！'
      }
      if (friends.some((item) => item.link === value)) {
        return '该网站已存在！'
      }
      return true
    },
  },
  {
    type: 'text',
    name: 'icon',
    message: '请输入网站 icon 地址？',
    format: (value) => value.trim(),
    validate: (value) => {
      if (
        value &&
        !/^(https|http):\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(
          value.trim(),
        )
      ) {
        return '请输入正确的网站 icon 地址！'
      }
      return true
    },
  },
]

const site = await prompts(friendQuestions)
fs.writeJSONSync(filepath, [...friends, site], { spaces: 2 })

await prompts({
  type: 'confirm',
  name: 'commit',
  message: '是否进行 git commit ?',
  initial: true,
}).then(async (res) => {
  if (res.commit) {
    await $`git add ${filepath}`
    await $`git commit -m ${`docs(friends): 添加友链 — ${site.title}`}`
  }
})

await prompts({
  type: 'confirm',
  name: 'push',
  message: '是否进行 git push ?',
  initial: false,
}).then(async (res) => {
  if (res.push) {
    await $`git push`
  }
})
