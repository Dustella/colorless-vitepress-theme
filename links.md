---
layout: page
<<<<<<< HEAD
title: 朋友们
---

<FriendList />
=======
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
    {
    "name": "特菈",
    "links": [
      {
        "icon": "github",
        "link": "https://github.com/Dustella"
      }
    ],
    "avatar": "https://github.com/dustella.png",
    "title": "是另外一位的老公"
  },

  {
    "name": "北雁云依",
    "links": [
      {
        "icon": "github",
        "link": "https://github.com/Beiyanyunyi"
      }
    ],
    "avatar": "https://github.com/beiyanyunyi.png",
    "title": "是另外一位的老婆"
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Team
    </template>
    <template #lead>
      咕噜咕噜
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
>>>>>>> a4110799cfae1f6646b93ef93586756d34512a2c
