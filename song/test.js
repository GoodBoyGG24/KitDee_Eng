
    function checkAnswer() {
        // Get the value of the selected checkboxes
        var selectedAnswer1 = document.querySelector('input[name="answer1"]:checked').value;
        var selectedAnswer2 = document.querySelector('input[name="answer2"]:checked').value;
        var selectedAnswer3 = document.querySelector('input[name="answer3"]:checked').value;
        var score = 0;
        // Check if the selected answers are correct
        if (selectedAnswer1 === 'is') {
            // Increment the score by 1
            score += 1;
        }
        if (selectedAnswer2 === 'are') {
            // Increment the score by 1
            score += 1;
        }
        if (selectedAnswer3 === 'do') {
            // Increment the score by 1
            score += 1;
        }

        // Update the score display
        document.getElementById('score').textContent = score + " / 10";

        
    }
