<template>
  <div style="padding:30px;">
    <el-row :gutter="20"> 
        <el-col :span="6" @click="createSurvery"><el-card>+</el-card></el-col>
        <el-col :span="6"><el-card>调查问卷</el-card></el-col>
        <el-col :span="6"><el-card>调查问卷</el-card></el-col>
        <el-col :span="6"><el-card>调查问卷</el-card></el-col>
    </el-row>
    <el-row :gutter="20"> 
        <el-col :span="6"><el-card>调查问卷</el-card></el-col>
        <el-col :span="6"><el-card>调查问卷</el-card></el-col>
        <el-col :span="6"><el-card>调查问卷</el-card></el-col>
        <el-col :span="6"><el-card>调查问卷</el-card></el-col>
    </el-row>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>问题</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'答案 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    methods: {
      createSurvery() {
        this.$prompt('请输入调查问卷的标题(限制四字之内)', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: ,//输入的文字限制条件
          inputErrorMessage: '输入的文字超过四个字'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '调查标题: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    }
  }
</script>

<style lang="">
  .el-row {
    margin-bottom: 20px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>