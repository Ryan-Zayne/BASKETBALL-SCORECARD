const homeCard = document.querySelector('#home-card');
const guestCard = document.querySelector('#guest-card');
const plusOneButtons = document.querySelectorAll('.plus-one');
const plusTwoButtons = document.querySelectorAll('.plus-two');
const plusThreeButtons = document.querySelectorAll('.plus-three');
const resetButton = document.querySelector('#reset');

const allButtonsArray = [...plusOneButtons, ...plusTwoButtons, ...plusThreeButtons];

let homeScore = null;
let guestScore = null;

for (const button of allButtonsArray.entries()) {
	const [index, btnElement] = button;

	const handleIncrement = () => {
		switch (index) {
			case 0: {
				homeScore += 1;
				homeCard.textContent = homeScore;
				break;
			}

			case 1:
				guestScore += 1;
				guestCard.textContent = guestScore;
				break;

			case 2:
				homeScore += 2;
				homeCard.textContent = homeScore;
				break;

			case 3:
				guestScore += 2;
				guestCard.textContent = guestScore;
				break;

			case 4:
				homeScore += 3;
				homeCard.textContent = homeScore;
				break;

			case 5:
				guestScore += 3;
				guestCard.textContent = guestScore;
				break;

			default: {
				console.log('Error!, case not accounted for');
				break;
			}
		}

		// if (index === 0) {
		// 	homeScore += 1;
		// 	homeCard.textContent = homeScore;
		// }

		// if (index === 1) {
		// 	guestScore += 1;
		// 	guestCard.textContent = guestScore;
		// }

		// if (index === 2) {
		// 	homeScore += 2;
		// 	homeCard.textContent = homeScore;
		// }

		// if (index === 3) {
		// 	guestScore += 2;
		// 	guestCard.textContent = guestScore;
		// }

		// if (index === 4) {
		// 	homeScore += 3;
		// 	homeCard.textContent = homeScore;
		// }

		// if (index === 5) {
		// 	guestScore += 3;
		// 	guestCard.textContent = guestScore;
		// }
	};

	btnElement.addEventListener('click', handleIncrement);
}

resetButton.addEventListener('click', () => {
	homeScore = 0;
	homeCard.textContent = homeScore;

	guestScore = 0;
	guestCard.textContent = guestScore;
});
