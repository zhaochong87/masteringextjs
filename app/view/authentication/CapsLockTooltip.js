/**
 * Created by 343451 on 2016/7/18.
 */
Ext.define('Packet.view.authentication.CapsLockTooltip', {
    extend: 'Ext.tip.QuickTip',
    alias: 'widget.capslocktooltip',

    target: 'password',
    anchor: 'top',
    anchorOffset: 60,
    width: 300,
    dismissDelay: 0,     // 工具提示延迟隐藏的数值（以毫秒为单位），因为我们不希望工具提示自动隐藏，所以就将其设为0，禁止隐藏
    autoHide: false,    // 当鼠标离开目标元素时工具提示自动隐藏
    title: '<div class="capslock">Cap Lock is On</div>',
    html: '<div>Having Caps Lock on may cause you to enter your password</div>' +
        '<div>incorrectly.</div><br/>' +
        '<div>You should press Caps Lock to turn it off before entering</div>' +
        '<div>your password.</div>'
});