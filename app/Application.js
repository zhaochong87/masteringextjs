Ext.define('Packet.Application', {
    name: 'Packet',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.form.Panel',
        'Packet.view.Login'
    ],

    views: [
        // TODO: add views here
        'Login'
    ],

    controllers: [
        // TODO: add controllers here
        'Login'
    ],

    stores: [
        // TODO: add stores here
    ],

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
                        //Ext.create('Packet.view.Login');
                        Ext.widget('login');
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
