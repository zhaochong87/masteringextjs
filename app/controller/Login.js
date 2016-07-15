/**
 * Created by 343451 on 2016/7/15.
 */
Ext.define('Packet.controller.Login', {
    extend: 'Ext.app.Controller',

    requires: [
        'Packet.util.MD5'   // 添加MD5加密依赖
    ],

    config: {
        /*
        Uncomment to add references to view components
        refs: [{
            ref: 'list',
            selector: 'grid'
        }],
        */

        /*
        Uncomment to listen for events from view components
        control: {
            'useredit button[action=save]': {
                click: 'updateUser'
            }
        }
        */
    },

    views: [
        'Login'
    ],

    /**
     * Called when the view is created
     */
    init: function(application) {
        this.control({
            'login form button#submit': {
                click: this.onButtonClickSubmit
            },
            'login form button#cancel': {
                click: this.onButtonClickCancel
            }
        });

    },

    onButtonClickSubmit: function(button, e, options) {
        console.log('login submit');
        var formPanel = button.up('form'),
            login = button.up('login'),
            user = formPanel.down('textfield[name=user]').getValue(),
            pass = formPanel.down('textfield[name=password]').getValue();

        if(formPanel.getForm().isValid()){

            // 提交请求服务器前先对用户用户密码进行加密处理
            pass = Packet.util.MD5.encode(pass);

            // 发起请求
            Ext.Ajax.request({
                url: 'php/login.php',
                params: {
                    user: user,
                    password: pass
                },
                success: function(conn, response, options){
                    //var result = Ext.JSON.decode(conn.responseText);
                    var result = Ext.JSON.decode(conn.responseText, true);
                    if(!result){
                        result = {};
                        result.success = false;
                        result.msg = conn.responseText;
                    }
                    if(result.success){
                        login.close();
                        Ext.create('Packet.view.Viewport');
                    }else{
                        Ext.Msg.show({
                            title: 'Fail!',
                            msg: result.msg,
                            icon: Ext.Msg.Error,
                            buttons: Ext.Msg.ok
                        });
                    }

                },
                failure: function(conn, response, options, eOpts){
                    Ext.Msg.show({
                        title: 'Error!',
                        msg: conn.responseText,
                        icon: Ext.Msg.Error,
                        buttons: Ext.Msg.ok
                    })
                }
            });
        }
    },

    onButtonClickCancel: function(button, e, options) {
        console.log('login cancel');
        /**
         *  1.获取Login表单引用；  2.调用getForm方法，返回一个表单基类；  3.调用reset方法，重置表单。
         */
        button.up('form').getForm().reset();
    }
});