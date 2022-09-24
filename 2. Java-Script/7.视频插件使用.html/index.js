window.addEventListener('load', function() {
    zymedia('video',{
        autoLoop: true,                             /* 循环播放 */



        
        /* preload: 'none',                    是否预加载，默认关闭
           videoWidth: '100%',                 指定视频宽，默认100%
           videoHeight: 'auto',                指定视频高，默认auto
           aspectRation: (16 / 9),             指定视频宽高比，默认16:9
           audioWidth: '100%',                 指定音频宽，默认100%
           audioHeight: 44,                    指定音频高，默认44px
           autoLoop: false,                    是否循环播放，默认否，true为无限循环
           timeFormatType: 1,                  时间格式类型，默认mm:ss，2为m:s
           alwaysShowHours: false,             是否强制显示小时位，默认否，true为显示
           alwaysShowControls: false,          是否始终显示控制栏，默认否，自动隐藏，true为始终显示
           hideVideoControlsOnLoad: false,     加载时是否隐藏视频控制栏，默认否，true为隐藏
           enableFullscreen: true,             是否显示全屏按钮，默认显示，false为不显示
           pauseOtherPlayers: true,            是否播放唯一，默认唯一，播放时将暂停其他播放实例，false为不唯一
           enableVisibilityState: true,        是否页面不可见时暂停当前所有播放，默认暂停
           duration: 0,                        指定媒体时长，默认0
           success: null,                      实例化成功时的回调，默认无
           error: null,                        实例化错误时的回调，默认无
           beforePlay: null,                   点击播放前的交互，默认无，如果函数返回true，将不播放视频
         */
    });
});