document.getElementById("lineupForm").addEventListener("submit", myLineUp);

function myLineUp(event) {
  event.preventDefault(); // prevent page refresh

  // Get selected status
  const status = document.querySelector('input[name="status"]:checked').value;

  // Get selected game date
  const gameDate = document.getElementById("gameDate").value;

  // Get selected players
  const players = [];
  document.querySelectorAll('input[name="players"]:checked').forEach(player => {
    players.push(player.value);
  });

  // Print all data to the console
  console.log("Status:", status);
  console.log("Date:", gameDate);
  console.log("Players:", players.join(", "));

  // Concatenate and display
  const result = `Status: ${status} | Date: ${gameDate} | Players: ${players.join(", ")}`;
  document.getElementById("output").textContent = result;
}
