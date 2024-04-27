const allSeatBtn = document.getElementsByClassName("seat-btn");
let count = 0;

for (const seat of allSeatBtn) {
  seat.addEventListener("click", function (event) {
    // seat bg_color
    seat.style.background = "#1DD100";
    seat.style.color = "white";

    // seat count
    count = count + 1;
    setInnerText("seat-purchase", count);

    // total__seat
    const totalSeat = parseInt(document.getElementById("total-seat").innerText);
    const newTotalSeat = totalSeat - 1;
    setInnerText("total-seat", newTotalSeat);

    const seatSerial = event.target.innerText;
    const seatPrice = 550;
    const appendContainer = document.getElementById("append-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex items-center justify-between mb-2">
            <p>${seatSerial}</p>
            <p>Economy</p>
            <p id="total-cost">${seatPrice}</p>
        </div>
    `;
    appendContainer.appendChild(div);

    const totalCost = parseInt(document.getElementById("total-cost").innerText);
    const total = totalCost + seatPrice;
    console.log(total);
  });
}
