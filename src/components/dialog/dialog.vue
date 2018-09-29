<template>
  <div class="dialog-wrapper">
    <el-dialog
      title="描述"
      :visible.sync="dialog.visible"
      width="30%">
      <span>{{dialog.data.description}}</span>
      <span slot="footer" class="dialog-footer">
        <!--<el-button @click="dialog.visible = false">取 消</el-button>-->
        <el-button type="primary" @click="dialog.visible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // dialogVisible: showDialog
    }
  },
  props: {
    // dialogData: {
    //   type: ''
    // },
    // showDialog: {
    //   type: Boolean
    // }
    dialog: {
      type: Object
    }
  }
}
</script>
