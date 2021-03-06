window.addEventListener("load", function(){
  Payjp.setPublicKey(gon.payjp_public_key);
  $("#card_token_submit").on("click", function(e){
    e.preventDefault();
    var card = {
      number: document.getElementById("card_number_form").value,
      cvc: document.getElementById("cvc_form").value,
      exp_month: document.getElementById("exp_month_form").value,
      exp_year: "20" + document.getElementById("exp_year_form").value
    };
    Payjp.createToken(card, function(status, response) {
      if (status === 200) {
        $("#card_number_form").removeAttr("name");
        $("#cvc_form").removeAttr("name");
        $("#exp_month_form").removeAttr("name");
        $("#exp_year_form").removeAttr("name");
        $("#card_token_submit").append(
          $('<input type="hidden" name="card_token">').val(response.id)
        );
        $("#card_form")[0].submit();
      } else {
        alert("カード情報が正しくありません。");
      };
    });  
  });
});