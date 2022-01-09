$(document).ready(function () {
    $('.fa.fa-check').click(function () { 
        let checked = $(this).attr('data-check') == "false" ? false : true;
        checked = !checked;
        $(this).attr('data-check', checked);
    });

    $('#user').blur(function () { 
        let id = $(this).attr('id');
        let val = $(this).val();

        if (isSpecialCharacter(val)) {
            changeSpan(id, "Đăng ký không thành công.");
            return;
        }
        if (val.length < 6 || val.length > 15)
        {
            changeSpan(id, "Tên đăng nhập phải từ 6-15 ký tự.");
            return;
        }
        changeSpan(id);
    });

    $('#pass,#repass').blur(function () { 
        let id = $(this).attr('id');
        let val = $(this).val();

        if (id == "pass" && (val.length < 8 || val.length > 16 || val == $('#user').val() || isSpecialCharacter(val)))
        {
            changeSpan(id, "Vui lòng sử dụng mật khẩu dài 8-16 ký tự. Mật khẩu phải khác tên người dùng của bạn và không chứa ký tự đặc biệt.");
            return;
        }
        if (id == "repass" && val != $('#pass').val())
        {
            changeSpan(id, "Mật khẩu của bạn không khớp, vui lòng nhập lại.");
            return;
        }
        changeSpan(id);
    });

    $('#email').blur(function () { 
        let id = $(this).attr('id');
        let val = $(this).val();

        if (!isEmail(val)) {
            changeSpan(id, "Email không hợp lệ");
            return;
        }
        changeSpan(id);
    });

    var correctPhoneNumber = false;

    $('#phone').blur(function () { 
        let id = $(this).attr('id');
        let val = $(this).val();

        if (!isPhoneNumber(val)) {
            changeSpan(id, "Số điện thoại không hợp lệ.");
            changeVerifyInput(false);
            correctPhoneNumber = false;
            return;
        }
        changeSpan(id);
        changeVerifyInput();
        correctPhoneNumber = true;
    });

    $('#verify').blur(function () { 
        if (!correctPhoneNumber)
            return;
        let id = $(this).attr('id');
        let val = $(this).val();

        if (val.length < 5 || val.length > 10) {
            changeSpan(id, "Mã xác nhận không hợp lệ.");
            return;
        }
        changeSpan(id);
    });

    (function($) {
        $.fn.inputFilter = function(inputFilter) {
            return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
            });
        };
    }(jQuery));

    $("#phone").inputFilter(function(value) {
        return /^\d*$/.test(value);
    });

    $('#btn-regist').click(function () { 
        $('#user').focus();
        $('#pass').focus();
        $('#repass').focus();
        $('#email').focus();
        $('#phone').focus();
        $('#verify').focus();
        $('#user').focus();
    });

    function changeSpan(id, value = null) {
        if (value != null)
        {
            $('#s_'+id).html('<i class="fa fa-close"></i>'+value);
            $('#s_'+id).css('display', 'block');
            $('#'+id).css('border', '1px solid red');
        }
        else {
            $('#s_'+id).css('display', 'none');
            $('#'+id).css('border', '1px solid red');
        }
    }

    function changeVerifyInput(params = null) {
        if (params == null)
            $('#verify').css('display', 'block');
        else $('#verify').css('display', 'none');
    }

    function isSpecialCharacter(params) {
        if (params == "")
            return true;
        if (params.search(" ") != -1)
            return true;
        if (/^[a-zA-Z0-9- ]*$/.test(params) == false)
            return true;
        return false;
    }

    function isEmail(params) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        return filter.test(params) 
    }

    function isPhoneNumber(params) {
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if(params.match(phoneNum)) {
            return true;
        }
        else {
            return false;
        }
    }
});