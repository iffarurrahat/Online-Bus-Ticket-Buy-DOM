const allSeatBtn = document.getElementsByClassName("seat-btn");
let count = 0;
let totalAmount = 0;

// apply button
const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function () {
  const couponFiled = document.getElementById("coupon-filed");
  const couponFiledValue = couponFiled.value;
  couponFiled.value = "";

  const newDiscount = (totalAmount * 15) / 100;
  const coupleDiscount = (totalAmount * 20) / 100;

  if (couponFiledValue === "NEW15") {
    const discountAmount = document.getElementById("discount-amount");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex justify-between font-bold mt-2">
        <p>Discount</p>
        <p> -${newDiscount}</p>
        </div>    
    `;
    discountAmount.appendChild(div);
    const total = (totalAmount - newDiscount).toFixed(2);
    setInnerText("grand-total", total);

    // couponFiled disabled
    setAttributeText("coupon-filed");
  } else if (couponFiledValue === "Couple 20") {
    const discountAmount = document.getElementById("discount-amount");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex justify-between font-bold mt-2">
        <p>Discount</p>
        <p> -${coupleDiscount}</p>
        </div>    
    `;
    discountAmount.appendChild(div);
    const total = (totalAmount - coupleDiscount).toFixed(2);
    setInnerText("grand-total", total);

    // couponFiled disabled
    setAttributeText("coupon-filed");
  } else {
    alert("Coupon Code Wrong");
    return;
  }
});

for (const seat of allSeatBtn) {
  seat.addEventListener("click", function (event) {
    // <- add css
    if (count + 1) {
      const outLine = document.getElementById("outline");
      outLine.removeAttribute("hidden");
    }

    // <-next button
    const numberFiled = document.getElementById("number-filed");
    numberFiled.addEventListener("keyup", function () {
      if (numberFiled.value.length && count + 1) {
        removeAttributeText("next-btn");
      }
    });

    //<- more then 4 tickets purchase warning message
    if (count + 1 > 4) {
      return alert("You can't buy 5 tickets but you can now use coupon code😎");
    }
    //<- remove disabled attribute when buy 4 seat tickets
    if (count + 1 === 4) {
      removeAttributeText("coupon-filed");
      removeAttributeText("apply-btn");
    }

    //<- seat count numbers
    count = count + 1;
    setInnerText("seat-purchase", count);

    //<- seat bg_color
    seat.style.background = "#1DD100";
    seat.style.color = "white";
    seat.setAttribute("disabled", true);

    //<- total__seat
    const totalSeat = parseInt(document.getElementById("total-seat").innerText);
    const newTotalSeat = totalSeat - 1;
    setInnerText("total-seat", newTotalSeat);

    const seatSerial = event.target.innerText;
    const appendContainer = document.getElementById("append-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex items-center justify-between mb-2">
            <p>${seatSerial}</p>
            <p>Economy</p>
            <p id="ticket-cost">550</p>
        </div>
    `;
    appendContainer.appendChild(div);

    const ticketCost = parseInt(
      document.getElementById("ticket-cost").innerText
    );
    totalAmount = ticketCost + totalAmount;

    setInnerText("total-price", totalAmount);
    setInnerText("grand-total", totalAmount);
  });
}

// <- go home button
document.getElementById("go-home-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
