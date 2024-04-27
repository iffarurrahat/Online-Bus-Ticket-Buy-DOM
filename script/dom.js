const allSeatBtn = document.getElementsByClassName("seat-btn");
let count = 0;
let totalAmount = 0;

for (const seat of allSeatBtn) {
  seat.addEventListener("click", function (event) {
    // seat bg_color
    seat.style.background = "#1DD100";
    seat.style.color = "white";
    seat.setAttribute("disabled", true);

    // seat count
    count = count + 1;
    setInnerText("seat-purchase", count);

    // total__seat
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
    console.log(totalAmount);

    setInnerText("total-price", totalAmount);
    setInnerText("grand-total", totalAmount);
  });
}
