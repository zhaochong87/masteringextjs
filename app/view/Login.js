/**
 * Created by 343451 on 2016/7/12.
 */

Ext.apply(Ext.form.field.VTypes, {
    customPass: function (val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
    },
    customPassText: '����һ���Ϸ����롣���볤��Ӧ��6~20���ַ�֮�䣬�����������һ�����֡�һ��Сд��ĸ��һ����д��ĸ��һ���ر��ַ���@#$%��.',
});


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
                labelWidth: 60,
                allowBlank: false,
                vtype: 'alphanum',
                minLength: 3,
                msgTarget: 'under'
            },
            items: [
                {
                    name: 'user',
                    fieldLabel: 'User',
                    maxLength: 25
                },
                {
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: 'Password',
                    maxLength: 15,
                    vtype: customPass
                }
            ]
        }
    ]
});