$(document).ready(function(){

    //For Card Number formatted input
    var cardNum = document.getElementById('cr_no');
    cardNum.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];

        for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
            parts.push(sanitizedValue.substring(i, i + 4));
        }

        for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 4);

        this.value = this.lastValue = parts.join('-');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
});


//    check mail paypal
       var modalEmail = document.getElementById("modalPaySuccess");
       var btnPay = document.getElementById("btnPay");
       var span = document.getElementsByClassName("close")[0];
        btnPay.onclick = function() {
        if (document.getElementById("email").value == "") {
            alert("Vui lòng nhập thông tin thanh toán!");
            document.getElementById("email").focus();}
            // else if(document.getElementById("email").value != "*@*.*"){
            // if (!filter.test(email.value)) { 
            //     alert("Vui lòng nhập đúng định dạng email!");
            //     document.getElementById("email").focus();} 
               else{
                    modalEmail.style.display = "block";
                    } 
        span.onclick = function() {
        modalEmail.style.display = "none";
        }
        window.onclick = function(event) {
        if (event.target == modalEmail) {
            modalEmail.style.display = "none";
        }
        }
            };
// check thẻ tín dụng
        // var modalCredit = document.getElementById("modalPaySuccess");
        // var btnPay = document.getElementById("btnPay");
        // var span = document.getElementsByClassName("close")[0];
        // btnPay.onclick = function() 
        // {
        // if (document.getElementById("cr_no").value == "") {
        //     alert("Vui lòng nhập thông tin thanh toánn!");
        //     document.getElementById("cr_no").focus();}
        // else if(document.getElementById("date1").value == "") 
        //     {
        //             alert("Vui lòng nhập thông tin thanh toánnn!");
        //             document.getElementById("date1").focus();
        //     } else if (document.getElementById("cvcpwd").value == "") 
        //         {
        //             alert("Vui lòng nhập thông tin thanh toánnnn!");
        //             document.getElementById("cvcpwd").focus();
        //          }
        //             else{ modalCredit.style.display = "block";
        //                 }
        // span.onclick = function() {
        //     modalCredit.style.display = "none";
        // }
        // window.onclick = function(event) {
        // if (event.target == modalCredit) {
        //     modalCredit.style.display = "none";
        // }
        // }
        //     };
        var modalCredit = document.getElementById("modalPaySuccess");
        var btnPay = document.getElementById("btnPay");
        var span = document.getElementsByClassName("close")[0];
        btnPay.onclick = function() 
        {
        if ((document.getElementById("cr_no").value == "") || (document.getElementById("cvcpwd").value == "") ||(document.getElementById("date").value == "")) 
        {
            alert("Vui lòng nhập thông tin thanh toán!");
            document.getElementById("cr_no").focus();
        }
             else{ modalCredit.style.display = "block";

            }}
        span.onclick = function() {
            modalCredit.style.display = "none";
                }
        window.onclick = function(event) {
                if (event.target == modalCredit) 
                {
                    modalCredit.style.display = "none";
                }
            };
        // momo
        function showCommonModal(o,a,n,d,e){var l=$("<div class='modal-buttons-container'></div>");null!=e?l.append($("<a class='text-gray-dark hover-black font-weight-bold-600 mx-3 hover-none-decoration' style='cursor: pointer' onclick='return closeCommonModal()'>"+e+"</a>")).append($("<a class='momo-color font-weight-bold-600 hover-momo-color mx-3 hover-none-decoration' style='cursor: pointer' onclick='"+d+"'>"+n+"</a>")):null==d?l.append($("<a class='momo-color font-weight-bold-600 mx-3 hover-none-decoration' onclick='return closeCommonModal()'>"+n+"</a>")):l.append($("<a class='momo-color font-weight-bold-600 mx-3 hover-none-decoration' onclick='"+d+"'>"+n+"</a>"));var c=$("<div class='modal-body'></div>");c.append($("<img class='button-modal-close hover-none-decoration' src='/v2/gateway/images/navigation-close-circle.svg' onClick='return closeCommonModal()'/>")).append($("<h5 class='modal-popup-title'>"+o+"</h5>")).append($("<div>"+a+"</div>")).append(l);var i=$("<div class='modal-content'></div>");i.append(c);var t=$("<div class='popup-modal-dialog modal-dialog-centered'></div>");t.append(i);var p=$("<div class='popup-modal-background common-modal'></div>");p.append(t),$("#contents").append(p)}function showCommonModal(o,a,n,d,e,l){var c=$("<div class='modal-buttons-container'></div>");null!=e?c.append($("<a class='text-gray-dark hover-black font-weight-bold-600 mx-3 hover-none-decoration' style='cursor: pointer' onclick='"+l+"'>"+e+"</a>")).append($("<a class='momo-color font-weight-bold-600 hover-momo-color mx-3 hover-none-decoration' style='cursor: pointer' onclick='"+d+"'>"+n+"</a>")):c.append($("<a class='momo-color font-weight-bold-600 mx-3 hover-none-decoration' onclick='"+d+"'>"+n+"</a>"));var i=$("<div class='modal-body'></div>");i.append($("<img class='button-modal-close hover-none-decoration' src='/v2/gateway/images/navigation-close-circle.svg' onClick='return closeCommonModal()'/>")).append($("<h5 class='modal-popup-title'>"+o+"</h5>")).append($("<div>"+a+"</div>")).append(c);var t=$("<div class='modal-content'></div>");t.append(i);var p=$("<div class='popup-modal-dialog modal-dialog-centered'></div>");p.append(t);var s=$("<div class='popup-modal-background common-modal'></div>");s.append(p),$("#contents").append(s)}function closeCommonModal(){$(".common-modal").remove()}function showModalWithCustomButton(o,a,n){var d=$("<div class='modal-buttons-container'></div>");d.append(n);var e=$("<div class='modal-body'></div>");e.append($("<img class='button-modal-close hover-none-decoration' src='/v2/gateway/images/navigation-close-circle.svg' onClick='return closeCommonModal()'/>")).append($("<h5 class='modal-popup-title'>"+o+"</h5>")).append($("<div>"+a+"</div>")).append(d);var l=$("<div class='modal-content'></div>");l.append(e);var c=$("<div class='popup-modal-dialog modal-dialog-centered'></div>");c.append(l);var i=$("<div class='popup-modal-background common-modal'></div>");i.append(c),$("#contents").append(i)}function createTooltip(o,a,n){var d=$(a);console.log(o),o.tooltip({html:!0,title:d,offset:n})}


        var DL=DL||{};DL.DLTruncator=function(t,e){this.blockSelector=t,this.linkSelector=e,this.checkTruncation(),this.clickListener(),this.isAnimating=!1},DL.DLTruncator.prototype={clickListener:function(){var t=this;$("body").on("click",this.linkSelector,function(e){e.preventDefault(),t.isAnimating||($selector=$(this).siblings(t.blockSelector).eq(0),t.isAnimating=!0,$selector.hasClass("pay-later-cart-collapsed")?($selector.removeClass("pay-later-cart-collapsed"),$selector.data("oHeight",$selector.outerHeight()).css("height","auto").data("nHeight",$selector.outerHeight()).outerHeight($selector.data("oHeight")).animate({height:$selector.data("nHeight")},600,function(){$selector.css("height","auto"),t.isAnimating=!1}),$(this).toggleClass("show-less")):($selector.addClass("pay-later-cart-collapsed"),$truncatedHeight=$selector.data("oHeight"),$selector.animate({height:$truncatedHeight},600,function(){$selector.css("height",$truncatedHeight),t.isAnimating=!1}),$(this).toggleClass("show-less")))})},checkTruncation:function(){$(this.blockSelector).each(function(){const t=12,e=$(this).height(),i=$(this).prop("scrollHeight")-t;e>=i?$(this).siblings(this.linkSelector).css("display","block"):$(this).siblings(this.linkSelector).css("display","block")})}};var gridItemTruncator=new DL.DLTruncator(".pay-later-cart",".show-more");

        //timeout
        window.onload = function(){
            var modalPayMomo = document.getElementById("modalPayMomo");
            setTimeout(function cb(){
                modalPayMomo.style.display = "block";
            }, 7000);
           };

        // var modalMomo = document.getElementById("modalPayMomo");
    //    var btnPayyy = document.getElementById("btnPay");
    //    var spann = document.getElementsByClassName("closee")[0];
    //     btnPayy.onclick = function() {
    //         modalPayMomo.style.display = "block";
    //    } 
    //     spann.onclick = function() {
    //         modalPayMomo.style.display = "none";
    //     }
    //     window.onclick = function(event) {
    //     if (event.target == modalPayMomo) {
    //         modalPayMomo.style.display = "none";
    //     }
    //     };
