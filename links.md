---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
import friends from './friends.json'

const members = [
  {
    "name": "北雁云依",
    "links": [
      {
        "icon": "github",
        "link": "https://beiyanyunyi.github.io/"
      }
    ],
    "avatar": "https://github.com/beiyanyunyi.png",
    "title": "嘿嘿，是我家老婆"
  },
  ...friends
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      My Friends
    </template>
    <template #lead>
      感谢捧场
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
