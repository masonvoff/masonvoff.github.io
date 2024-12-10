const buttons = document.querySelectorAll('.info-button');
const texts = document.querySelectorAll('.hover-text');

buttons.forEach((button, index) => {
    const correspondingText = texts[index];

    // Add hover event listeners
    button.addEventListener('mouseover', () => {
    correspondingText.classList.add('hover-animation');
    });

    button.addEventListener('mouseout', () => {
    correspondingText.classList.remove('hover-animation');
    });
});

function moveIntroBox() {
    const blackBox = document.querySelector('.moving-intro-box');
    let position = 0;
    while (position <= 100) {
        position++;
        blackBox.style.left = `${position}%`;
        setTimeout(100);
    }
    
}
// Function to dynamically position lines
function positionLines() {
    const firstLine = document.querySelector('.first-white-line');
    const secondLine = document.querySelector('.second-white-line');
    const thirdLine = document.querySelector('.third-white-line');
    const fourthLine = document.querySelector('.fourth-white-line');
    const fifthLine = document.querySelector('.fifth-white-line');
    const sixthLine = document.querySelector('.sixth-white-line');
    const seventhLine = document.querySelector('.seventh-white-line');
    const eighthLine = document.querySelector('.eight-white-line');
    const ninthLine = document.querySelector('.ninth-white-line');
    const tenthLine = document.querySelector('tenth-white-line');
    const infoOne = document.querySelector('#button-one');
    const infoTwo = document.querySelector('#button-two');
    const infoThree = document.querySelector('#button-three');
    const firstText = document.querySelector('#first-text');
    const secondText = document.querySelector('#second-text');
    const thirdText = document.querySelector('#third-text');

    // Position the second and third lines based on the first line
    const firstLineRect = firstLine.getBoundingClientRect();
    const firstLineEndX = firstLineRect.right;
    const firstLineEndY = firstLineRect.top;

    secondLine.style.left = `${firstLineEndX}px`;
    secondLine.style.top = `${firstLineEndY}px`;

    // Calculate the end of the second line
    const angleSecond = -70 * (Math.PI / 180);
    const secondLineEndX = firstLineEndX + Math.cos(angleSecond) * secondLine.offsetWidth;
    const secondLineEndY = firstLineEndY + Math.sin(angleSecond) * secondLine.offsetWidth;

    infoOne.style.left = `${secondLineEndX - 8}px`;
    infoOne.style.top = `${secondLineEndY - 4}px`;

// Calculate button dimensions
    const buttonLeft = parseFloat(infoOne.style.left) || 0;
    const buttonTop = parseFloat(infoOne.style.top) || 0;
    const buttonWidth = infoOne.offsetWidth || 15; // Default width for the button
    const buttonHeight = infoOne.offsetHeight || 15; // Default height for the button

    // Calculate text dimensions
    const firstTextWidth = firstText.offsetWidth || 100; // Provide a fallback
    const firstTextHeight = firstText.offsetHeight || 20; // Provide a fallback

    // Position text above the button
    firstText.style.position = 'absolute'; // Ensure absolute positioning
    firstText.style.left = `${buttonLeft + buttonWidth / 2 - firstTextWidth / 2}px`; // Center-align horizontally
    firstText.style.top = `${buttonTop - firstTextHeight - 30}px`; // Place directly above the button


    thirdLine.style.left = `${secondLineEndX}px`;
    thirdLine.style.top = `${secondLineEndY}px`;
    

    // Position the fifth and sixth lines based on the fourth line
    const fourthLineRect = fourthLine.getBoundingClientRect();
    const fourthLineEndX = fourthLineRect.right;
    const fourthLineEndY = fourthLineRect.top;

    fifthLine.style.left = `${fourthLineEndX}px`;
    fifthLine.style.top = `${fourthLineEndY}px`;

    // Calculate the end of the fifth line
    const angleFifth = -70 * (Math.PI / 180);
    const fifthLineEndX = fourthLineEndX + Math.cos(angleFifth) * fifthLine.offsetWidth;
    const fifthLineEndY = fourthLineEndY + Math.sin(angleFifth) * fifthLine.offsetWidth;

    infoTwo.style.left = `${fifthLineEndX - 8}px`
    infoTwo.style.top = `${fifthLineEndY - 4}px`;

    const buttonTwoLeft = parseFloat(infoTwo.style.left) || 0;
    const buttonTwoTop = parseFloat(infoTwo.style.top) || 0;
    const buttonTwoWidth = infoTwo.offsetWidth || 15; // Default width for the button
    const buttonTwoHeight = infoTwo.offsetHeight || 15; // Default height for the button

    const secondTextWidth = secondText.offsetWidth || 100; // Provide a fallback
    const secondTextHeight = secondText.offsetHeight || 20; // Provide a fallback

    secondText.style.position = 'absolute';
    secondText.style.left = `${buttonTwoLeft + buttonTwoWidth / 2 - secondTextWidth / 2}px`; // Center-align horizontally
    secondText.style.top = `${buttonTwoTop - secondTextHeight - 30}px`; // Place directly above the button



    sixthLine.style.left = `${fifthLineEndX}px`;
    sixthLine.style.top = `${fifthLineEndY}px`;

    // Position the eighth and ninth lines based on the seventh line
    const seventhLineRect = seventhLine.getBoundingClientRect();
    const seventhLineEndX = seventhLineRect.right;
    const seventhLineEndY = seventhLineRect.top;

    eighthLine.style.left = `${seventhLineEndX}px`;
    eighthLine.style.top = `${seventhLineEndY}px`;

    // Calculate the end of the eighth line
    const angleEighth = -70 * (Math.PI / 180);
    const eighthLineEndX = seventhLineEndX + Math.cos(angleEighth) * eighthLine.offsetWidth;
    const eighthLineEndY = seventhLineEndY + Math.sin(angleEighth) * eighthLine.offsetWidth;

    infoThree.style.left = `${eighthLineEndX - 8}px`
    infoThree.style.top = `${eighthLineEndY - 4}px`;

    const buttonThreeLeft = parseFloat(infoThree.style.left) || 0;
    const buttonThreeTop = parseFloat(infoThree.style.top) || 0;
    const buttonThreeWidth = infoThree.offsetWidth || 15; // Default width for the button
    const buttonThreeHeight = infoThree.offsetHeight || 15; // Default height for the button

    const thirdTextWidth = thirdText.offsetWidth || 100; // Provide a fallback
    const thirdTextHeight = thirdText.offsetHeight || 20; // Provide a fallback

    thirdText.style.position = 'absolute';
    thirdText.style.left = `${buttonThreeLeft + buttonThreeWidth / 2 - thirdTextWidth / 2}px`; // Center-align horizontally
    thirdText.style.top = `${buttonThreeTop - thirdTextHeight - 30}px`; // Place directly above the button

    ninthLine.style.left = `${eighthLineEndX}px`;
    ninthLine.style.top = `${eighthLineEndY}px`;

}


// Initial positioning
positionLines();

// Reposition lines on window resize for responsiveness
window.addEventListener('resize', positionLines);
window.addEventListener('load', positionLines);
window.addEventListener('visibilitychange', positionLines);
window.addEventListener('blur', positionLines);