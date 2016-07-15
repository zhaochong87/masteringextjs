/**
 * Created by 343451 on 2016/7/12.
 */

/*Ext.apply(Ext.form.field.VTypes, {
    customPass: function (val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
    },
    customPassText: '不是一个合法密码。密码长度应在6~20个字符之间，必须包含至少一个数字、一个小写字母、一个大写字母、一个特别字符（@#$%）.',
});*/


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
                vtype: 'alphanum',  // 字母(alpha)和数字(num)
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
                    maxLength: 15/*,
                    vtype: customPass*/
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        /*{
                            xtype: 'translation'
                        },*/
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            iconCls: 'cancel',
                            text: 'Cancel'
                            //text: translations.cancel
                        },
                        {
                            xtype: 'button',
                            itemId: 'submit',
                            formBind: true,     // 把Submit按钮绑定到表单，只有表单的客户端验证通过时，才能启用提交按钮。
                            iconCls: 'key-go',
                            text: 'Submit'
                            //text: translations.submit
                        }
                    ]
                }
            ]
        }
    ]
});