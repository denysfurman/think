// Add here all your JS customizations
$(document).ready(function()
{
    // Setting cookie mdaName
    // var url = window.location.pathname;
    // var reg = new RegExp("^/application/type/fxviper.*$");
    // if(reg.test(url))
    // {
    //     Cookies.set('mdaName', 'FXViper');
    // }

    //Select / option - making selected items white
    // $('.select_color').css('color','#555555');
    // $('.select_color').change(function()
    // {
    //     var current = $('.select_color').val();
    //     if (current != 'null')
    //     {
    //         $('.select_color').css('color','#FFF');
    //     }
    //     else
    //     {
    //         $('.select_color').css('color','#FFF');
    //     }
    // });

    //Datepicker - http://eternicode.github.io/bootstrap-datepicker/
    $(".datepicker").datepicker
    ({
        autoclose: true,
        startView: 2,
        format: "dd/mm/yyyy",
        endDate: '0d'
    });

    // Numeric - https://github.com/SamWM/jQuery-Plugins/tree/master/numeric
    $(".numeric").numeric({ decimal: false, negative: false }, function() { alert("Positive integers/numbers only"); this.value = ""; this.focus(); });

    // Popover - http://getbootstrap.com/javascript/#popovers-examples
    // $('.popoverOption').popover({ trigger: "hover" });

    // https://select2.github.io/examples.html
    $(".mda-country").select2({ placeholder: "Select a country*" });
    // Hide default arrow @ select2
    $('b[role="presentation"]').hide();

    // jQuery Client MDA Questionnaire - Low Risk Notification
    function generateNotyNow(type,value)
    {
        var n = noty
        ({
            text:
            "<br><p>Based on your currently chosen answer for</p>"+
            "<p><strong>["+type+"]</strong> - <strong>["+value+"]</strong></p>"+
            "<p>you are not suitable for our managed investment product.</p>"+
            "<p>Our clients need to fully understand the risk involved in the investment.</p>"+
            "<p>Please read our <a href='docs/Think_Huge_Investments_FSG.pdf' target='_blank'>Financial Services Guide</a> and <a href='https://www.thinkhugeinvestments.com/docs/Think_Huge_Investments_Investment_Mandate.pdf' target='_blank'>Investment Mandate</a>.</p>",

            type: 'warning',
            dismissQueue: true,
            layout: 'center',
            theme: 'defaultTheme',
            buttons:
                [
                    {
                        addClass: 'btn-noty', text: 'Ok', onClick: function ($noty)
                        {
                            $noty.close();
                        }
                    }
                ]
        });
    }

    // https://stackoverflow.com/questions/26696431/how-to-get-the-value-of-selected-item-on-change-using-jqueryui-selectenu
    $("#client1_loan_commitments").selectmenu
    ({
        change: function(event, ui)
        {
            if(ui.item.value == 'Yes')
            {
                generateNotyNow('Loan interest commitments',ui.item.value);
            }
        }
    });

    $("#client1_borrowing_home").selectmenu
    ({
        change: function(event, ui)
        {
            if(ui.item.value == 'Yes')
            {
                generateNotyNow('Borrowing against your family home',ui.item.value);
            }
        }
    });

    $("#risk_appetite").selectmenu
    ({
        change: function(event, ui)
        {
            if(ui.item.value == '1' || ui.item.value == '2' || ui.item.value == '3' || ui.item.value == '4' || ui.item.value == '5'|| ui.item.value == '6')
            {
                generateNotyNow('Risk Appetite',ui.item.value);
            }
        }
    });

    $("#investment_approach").selectmenu
    ({
        change: function(event, ui)
        {
            if(ui.item.value == 'Capital preservation')
            {
                generateNotyNow('Investment Approach',ui.item.value);
            }
        }
    });

    $('#q3 input').on('change', function()
    {
        if($('input[name=question_3]:checked').val() == 1 || $('input[name=question_3]:checked').val() == 2 || $('input[name=question_3]:checked').val() == 3)
        {
            generateNotyNow('Question #3');
        };
    });

    $('#q4 input').on('change', function()
    {
        if($('input[name=question_4]:checked').val() == 1 || $('input[name=question_4]:checked').val() == 2)
        {
            generateNotyNow('Question #4');
        };
    });

    $('#q5 input').on('change', function()
    {
        if($('input[name=question_5]:checked').val() == 1 || $('input[name=question_5]:checked').val() == 2 || $('input[name=question_5]:checked').val() == 4 || $('input[name=question_5]:checked').val() == 5)
        {
            generateNotyNow('Question #5');
        };
    });

    $('#q7 input').on('change', function()
    {
        if($('input[name=question_7]:checked').val() == 4 || $('input[name=question_7]:checked').val() == 5)
        {
            generateNotyNow('Question #7');
        };
    });

    $('#q8 input').on('change', function()
    {
        if($('input[name=question_8]:checked').val() == 5)
        {
            generateNotyNow('Question #8');
        };
    });

    $('#q9 input').on('change', function()
    {
        if($('input[name=question_9]:checked').val() == 1 || $('input[name=question_9]:checked').val() == 2 || $('input[name=question_9]:checked').val() == 3)
        {
            generateNotyNow('Question #9');
        };
    });

    $('#q10 input').on('change', function()
    {
        if($('input[name=question_10]:checked').val() == 1 || $('input[name=question_10]:checked').val() == 2 || $('input[name=question_10]:checked').val() == 3)
        {
            generateNotyNow('Question #10');
        };
    });

});