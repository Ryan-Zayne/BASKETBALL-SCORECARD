const homeScoreCard = document.querySelector("#home-card");
const guestScoreCard = document.querySelector("#guest-card");
const plusOneButtons = document.querySelectorAll(".plus-one");
const plusTwoButtons = document.querySelectorAll(".plus-two");
const plusThreeButtons = document.querySelectorAll(".plus-three");
const resetButton = document.querySelector("#reset");

const allButtonsArray = [...plusOneButtons, ...plusTwoButtons, ...plusThreeButtons];

let homeScore, guestScore;

const handleHighLight = () => {
	if (homeScore > guestScore) {
		homeScoreCard.classList.add("highlight");
		guestScoreCard.classList.remove("highlight");
		return;
	}

	if (guestScore > homeScore) {
		guestScoreCard.classList.add("highlight");
		homeScoreCard.classList.remove("highlight");
		return;
	}

	if (homeScore === guestScore) {
		homeScoreCard.classList.add("highlight");
		guestScoreCard.classList.add("highlight");
		return;
	}
};

const handleIncrement = (index) => {
	switch (index) {
		case 0: {
			homeScore += 1;
			homeScoreCard.textContent = homeScore;
			break;
		}

		case 1:
			guestScore += 1;
			guestScoreCard.textContent = guestScore;
			break;

		case 2:
			homeScore += 2;
			homeScoreCard.textContent = homeScore;
			break;

		case 3:
			guestScore += 2;
			guestScoreCard.textContent = guestScore;
			break;

		case 4:
			homeScore += 3;
			homeScoreCard.textContent = homeScore;
			break;

		case 5:
			guestScore += 3;
			guestScoreCard.textContent = guestScore;
			break;

		default: {
			console.log("Error!, case not accounted for");
			break;
		}
	}

	handleHighLight();
};

for (const [index, button] of allButtonsArray.entries()) {
	button.addEventListener("click", () => handleIncrement(index));
}

resetButton.addEventListener("click", () => {
	homeScore = 0;
	homeScoreCard.textContent = homeScore;

	guestScore = 0;
	guestScoreCard.textContent = guestScore;

	guestScoreCard.classList.remove("highlight");
	homeScoreCard.classList.remove("highlight");
});
