<script setup lang="ts">
useHead({
  title: '捐赠'
})

const donators = ref([
  {
    "name": "樱桃",
    "amount": "(存疑)≈30+"
  },
  {
    "name": "悠哉",
    "amount": "≈30"
  },
  {
    "name": "拿子",
    "amount": "100+"
  },
  {
    "name": "陈小空",
    "amount": "≈10"
  },
  {
    "name": "桔梗",
    "amount": "≈100"
  },
  {
    "name": "Tmatsuki_rui",
    "amount": "≈10"
  },
  {
    "name": "不知名用户(jojo)",
    "amount": "≈20"
  },
  {
    "name": "雨滴Sole",
    "amount": "≈30"
  },
  {
    "name": "Willow",
    "amount": "≈10"
  },
  {
    "name": "不知名用户(1529015)",
    "amount": "≈10"
  },
  {
    "name": "不知名用户(gsdh)",
    "amount": "10"
  },
  {
    "name": "不知名用户(CkDj)",
    "amount": "≈10"
  },
  {
    "name": "FBIYB",
    "amount": "(存疑)≈100"
  },
  {
    "name": "不知名用户(恩佐)",
    "amount": "≈20"
  },
  {
    "name": "梦与幻",
    "amount": "(存疑)≈30+"
  },
  {
    "name": "huiaita",
    "amount": "≈10"
  },
  {
    "name": "不知名用户(MeWS)",
    "amount": "≈10"
  },
])
</script>

<template>
  <VContainer class="d-flex flex-column ga-6 pa-4 pa-sm-6 pa-md-8">
    <div>
      <h1 class="text-h4 font-weight-bold text-primary float-in-right">捐赠</h1>
      <p class="subheading my-4 float-in-right">
        <b>建议直接使用</b><a target="_blank" href="https://afdian.com/a/Zhuxs"
          class="a-primary">爱发电</a>进行捐赠哟（记得附上你的ID）~
      </p>
    </div>
    <div>
      <h2 class="text-h5 font-weight-bold text-primary float-in-right">捐赠列表</h2>
      <p class="subheading my-4 float-in-right">以下为捐赠了 Bamboo Pixel 的玩家，非常感谢！ (*￣3￣)╭</p>
      <p class="subheading my-4 float-in-right">此列表<b>不全</b>且部分<b>存疑(即可能在服务器改革前还有捐赠)</b>
      ，如果你捐助了但是这个表上没有你辣么火速联系腐竹给宁加上：））！
      </p>
      <div class="rounded mt-2 elevation-2 float-in-left">
        <VTable>
          <thead>
            <tr>
              <th class="text-left">
                名称
              </th>
              <th class="text-left">
                金额
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in donators" :key="item.name">
              <td>{{ item.name }}</td>
              <td>¥ {{ item.amount }}</td>
            </tr>
          </tbody>
        </VTable>
      </div>
    </div>
  </VContainer>
</template>

<style scoped lang="scss">
td {
  user-select: text;
}
</style>