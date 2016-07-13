/*
 This file is generated and updated by Sencha Cmd. You can edit this file as
 needed for your application, but these edits will have to be merged by
 Sencha Cmd when upgrading.
 */

Ext.application({
    name: 'Packet',

    extend: 'Packet.Application',

     //autoCreateViewport: true


    // 加载页面
    splashscreen: {},

    // 应用启动前，显示加载页面（防止空白）
    init: function () {

        console.log('init');

        splashscreen = Ext.getBody().mask('Loading Application', 'splashscreen');

        splashscreen.addCls('splashscreen');

        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {cls: 'x-splash-icon'});
    },

    // 启动函数，资源加载后执行
    launch: function () {

        var task = new Ext.util.DelayedTask(function () {

            //Ext.getBody().unmask();

            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts ){
                        //Ext.widget('login');
                        Ext.create('Packet.view.Login');
                    }
                }
            });

            console.log('launch');

             //Ext.widget('Viewport');
            //Ext.widget('login');
        });

         task.delay(2000);
    }
});
