/**
 * Created by 343451 on 2016/7/12.
 */

Ext.define('Packet.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',

    autoShow: true,
    height: 170,
    width: 360,
    layout: {
        type: 'fit'
    },
    iconCls: 'key',
    title: 'Login',
    closeAction: 'hide',
    closable: false,
    draggable: false,
    resizable: false,

    items: [
        {
            xtype: 'form',
            frame: false,
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60
            },
            items: [
                {
                    name: 'user',
                    fieldLabel: 'User'
                },
                {
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: 'Password'
                }
            ]
        }
    ]



});