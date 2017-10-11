<template>
 <div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      show: true
    }
  },
  computed: {
    ...mapState({
      // isCollapse: state => state.isCollapse
    })
  },
  methods: {
  }
}
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #20A0FF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
