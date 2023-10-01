$(document).ready(function(){
  //header menu
	$('#sandwich').click(function() {
		$('body').toggleClass('menubar-in');
		$('header').toggleClass('active-header');
	});
	$('.menu-close').click(function() {
		$('.menubar-in').removeClass('menubar-in');
		$('header').toggleClass('active-header');
	});

	$('#checkbox_1').on('change', function() {
		$('#name-visible').toggleClass('name-hidden');
	});



	$(function() {
    // copy content to clipboard
    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }


    // copy coupone code to clipboard
    $('.copy-btn').click(function() {
      var $brat = $(this).siblings(".copy-text");
      copyToClipboard($brat);
      $(this).siblings(".copied").addClass('copied-visible');
			setTimeout(function() {
				$('.copied-visible').removeClass('copied-visible');
		}, 200);
    });

  });

















	$(document).mouseup(function (r){ // событие клика по веб-документу
	var div = $(".log-out"); // тут указываем ID элемента
		if (!div.is(r.target) // если клик был не по нашему блоку
		&& div.has(r.target).length === 0) { // и не по его дочерним элементам
		$(".log-out").addClass('log-out-visibl');
			$('.log-btn').click(function() {
				$('.log-out').toggleClass('log-out-visibl');
			});
		}
	});

	//header sctoll
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 70 ) {
			$('.header-first').addClass('header-first-active');
		} else	{
			$('.header-first').removeClass('header-first-active');
		}
	});

	

	//actibe status buttons in settings page
	$('.active-status h5').click(function() {
		$(this).addClass('active-color');
		$(this).siblings("h5").removeClass('active-color');
	});

	//actibe cart coin in #v-pills-Affiliate
	$('#v-pills-Affiliate .cart-coin').click(function() {
		$('#v-pills-Affiliate .cart-coin').removeClass('active-cart-coin');
		$(this).addClass('active-cart-coin');
	});

	//qr code
	$('.open-qr-code').click(function() {
		$('.qr-code').toggleClass('qr-code-visible');
	});

	//open pages
	$('.make-deposit').click(function() {
		$('.deposit-steps').addClass('d-none');
		$('.table-deposit-steps').addClass('d-none');
		$('.btn-steps').addClass('d-none');
		$('#ChooseInvestmentMethod').addClass('d-block');
	});

	//btn back to steps
	$('.back-to-steps').click(function() {
		$('.deposit-steps').removeClass('d-none');
		$('.table-deposit-steps').removeClass('d-none');
		$('.btn-steps').removeClass('d-none');
		$('#ChooseInvestmentMethod').removeClass('d-block');
	});

	//make a new deposit
	$('.create-new-deposit').click(function() {
		$('#ChooseInvestmentMethod').removeClass('d-block');;
		$('#MakeNewDeposit').addClass('d-block');
	});

	//btn back to choose method from MakeNewDeposit
	$('.back-to-choose').click(function() {
		$('#MakeNewDeposit').removeClass('d-block')
		$('#ChooseInvestmentMethod').addClass('d-block');
	});

	//make a new deposit from balance
	$('.create-new-deposit-from-balance').click(function() {
		$('#ChooseInvestmentMethod').removeClass('d-block');;
		$('#pay-coins').addClass('d-block');
	});

	//btn back to choose method from balance
	$('.back-to-choose-2').click(function() {
		$('#pay-coins').removeClass('d-block')
		$('#ChooseInvestmentMethod').addClass('d-block');
	});

	//go to the choose amount
	$('.go-to-the-coose-amount').click(function() {
		$('#MakeNewDeposit').removeClass('d-block');;
		$('#ChooseYourAmount').addClass('d-block');
	});

	//btn back to choose payout metod from choose amount
	$('.back-to-choose-3').click(function() {
		$('#MakeNewDeposit').addClass('d-block')
		$('#ChooseYourAmount').removeClass('d-block');
	});

	//go to the ChooseYourAmountFromBalance
	$('.go-to-choose-from-balance').click(function() {
		$('#pay-coins').removeClass('d-block');;
		$('#ChooseYourAmountFromBalance').addClass('d-block');
	});

	//btn back to choose payout metod from choose amount
	$('.back-to-choose-4').click(function() {
		$('#pay-coins').addClass('d-block')
		$('#ChooseYourAmountFromBalance').removeClass('d-block');
	});

	//go to the make your btc payment now
	$('.go-to-btc-payment-now').click(function() {
		$('#ChooseYourAmount').removeClass('d-block');
		$('#MakeYourBitcoinPayment').addClass('d-block')
	});

	//btn back to the Choose Your Amount
	$('.back-to-choose-5').click(function() {
		$('#ChooseYourAmount').addClass('d-block');
		$('#MakeYourBitcoinPayment').removeClass('d-block')
	});

	//go to the good job
	$('.go-to-good-job').click(function() {
		$('#ChooseYourAmountFromBalance').removeClass('d-block');
		$('#GoodJob').addClass('d-block')
	});

	//btn back to ChooseYourAmountFromBalance
	$('.back-to-choose-6').click(function() {
		$('#ChooseYourAmountFromBalance').addClass('d-block');
		$('#GoodJob').removeClass('d-block')
	});

	//go to the deposit pending
	$('.qr-code').click(function() {
		$('#DepositPending').addClass('d-block');
		$('#MakeYourBitcoinPayment').removeClass('d-block')
	});

	//btn back to the MakeYourBitcoinPaymen
	$('.back-to-choose-7').click(function() {
		$('#DepositPending').removeClass('d-block');
		$('#MakeYourBitcoinPayment').addClass('d-block')
	});



	//Withdrawal
	//go to reinvest
	$('.go-to-reinvest').click(function() {
		$('#withdrawalMain').addClass('d-none');
		$('#withdrawalReinvest').removeClass('d-none')
	});

	//btn back to the main withdrawa
	$('.back-to-main-withdr').click(function() {
		$('#withdrawalMain').removeClass('d-none');
		$('#withdrawalReinvest').addClass('d-none')
	});

	//$('.go-to-have-you').click(function() {
		//$('#withdrawalReinvest').removeClass('d-block');
	//	$('#haveYou').addClass('d-block')
	//});

	//get the bonus
	$('.get-bonus').click(function() {
		$('#withdrawaSecond').removeClass('d-none');
		$('#withdrawalReinvest').addClass('d-none')
	});
	
	//btn back to reinvest
	$('.back-to-reinvest').click(function() {
		$('#withdrawaSecond').addClass('d-none');
		$('#withdrawalReinvest').removeClass('d-none')
	});

	//go to the confirm and claim
	$('.go-to-confirm-claim').click(function() {
		$('#confirmOrClaim').removeClass('d-none');
		$('#withdrawalReinvest').addClass('d-none')
		$('#WaitAndReceive').addClass('d-none')
	});

	//btn back to reinvest from confirm and claim
	

	//go to Withdrawal is pending
	$('.confirm-withdrawal').click(function() {
		$('#confirmOrClaim').addClass('d-none');
		$('#withdrawalIsPending').removeClass('d-none')
	});

	//btn back to claim from withdrawal Is Pending
	$('.back-to-claim').click(function() {
		$('#confirmOrClaim').removeClass('d-none');
		$('#withdrawalIsPending').addClass('d-none')
	});
	
	//go to Good Job Withdrawal
	$('.go-to-WaitAndReceive').click(function() {
		$('#confirmOrClaim').addClass('d-none');
		$('#WaitAndReceive').removeClass('d-none')
	});

	//btn back to claim from Good Job Withdrawal
	$('.back-to-claim-from-good-job').click(function() {
		$('#confirmOrClaim').removeClass('d-none');
		$('#GoodJobWithdrawal').addClass('d-none')
	});

	//btn back to main-claim from #WaitAndReceive
	$('.back-to-main-claim-2').click(function() {
		$('#WaitAndReceive').addClass('d-none');
		$('#confirmOrClaim').removeClass('d-none')
	});

	//go to Good Job Withdrawal
	$('.go-to-goog-job').click(function() {
		$('#withdrawalIsPending').addClass('d-none');
		$('#GoodJobWithdrawal').removeClass('d-none')
	});

	//
	$('.go-to-withdrawaSecond').click(function() {
		$('#withdrawalReinvest').addClass('d-none');
		$('#withdrawaSecond').removeClass('d-none')
	});

	$('.go-to-confirmOrClaim').click(function() {
		$('#withdrawaSecond').addClass('d-none');
		$('#confirmOrClaim').removeClass('d-none')
	})

	//btn back to 
	$('.back-to-reinvest-from-claim').click(function() {
		$('#withdrawaSecond').removeClass('d-none');
		$('#confirmOrClaim').addClass('d-none')
	});

	$('.hover-exit').hover(function() {
		$('#exit-popap').modal('show');
	});


});













