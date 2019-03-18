# 这里记录一些坑点什么的如何

### JS
+ axios的request/response拦截器可以用于刷新AuthToken并重发请求（Promise是可以相互传递的）。fetch应该也类似
+ Array.map的处理函数不能是 async/await ？

### iOS
+ Xcode默认开启的bitcode选项可能会导致编译失败等问题，理解：[https://www.jianshu.com/p/8eff48e5c010](https://www.jianshu.com/p/8eff48e5c010)

+ JSON value of type NSnull cannot be converted to NSString?  可能原因：iOS下Image的uri值不能为null，参考[https://github.com/facebook/react-native/issues/11140](https://github.com/facebook/react-native/issues/11140)
+ alert 会影响 Modal 的正常关闭，可以 setTimeout
+ 页面里的 InteractionManager.runAfterInteractions 在某些机子可能出现页面关闭后运行，导致依赖上下文的逻辑出现一些问题（这貌似是react-navigation的锅，C页面连续快速返回到B页面再到A页面，会出现C页面整个生命周期快速跑一遍）
+ 关于苹果审核
  - 一定不要急于提交，特别是新应用，第一次提交很重。测试账号的相关规避一定要做好
  - 上架不要包含“分享奖”，尽量避免“钱”相关，以免被认为是 主张用户完成营销任务、广告等违反 AppStore 的元数据
  - 权限申请要说详细用处


### Android
+ 友盟推送PushModule的so文件须与主工程的so文件完全一致（libs下或jinLibs都可以） 
+ Modal显示时会阻止StatusBar的相关方法，比如setHidden 
+ axios 低版本安卓（4.x）可能会因为 maxContentLength （文档上 2000，貌似改写也不起作用）导致 response.data 不能被正确格式化（可能被截断了）。而 fetch 测试正常
+ Android 下的 webview 加载 H5 页面的部分图片不显示，原因可能是：android webview 从Lollipop(5.0)开始webview默认不允许混合模式，https当中不能加载http资源。对应 React-native-webview 的 mixedContentMode 属性
