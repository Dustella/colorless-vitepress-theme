import type { Feature } from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'

interface MyWorks {
  // index string , value Feature
  [index: string]: Feature[]
}

const works: MyWorks = {
  运营的服务: [
    {
      title: '特菈的杂货铺',
      details: '就是一个杂货铺',
      link: 'https://index.dustella.net',
      icon: { src: 'https://cdn.jsdelivr.net/gh/alist-org/logo@main/logo.svg', height: '15px' },
    },
    {

      title: 'NUISTCraft',
      details: '一个NUIST的Minecraft服务器',
      link: 'https://nuistcraft.com',
      icon: { src: 'https://nuistcraft.com/img/undraw_docusaurus_mountain.svg', height: '15px' },
    },
  ],
  个人项目: [],
}

export default works
