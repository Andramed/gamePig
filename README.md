# gamePig
JavaScript project
This is an interactive game for two players where each player takes turns rolling a die until they roll a one or press a "stop" button. 
If a player presses the "stop" button, their accumulated score is saved and the turn passes to the other player. If a player rolls a one, 
their current score is set to zero and their turn ends. The goal of the game is for a player to accumulate 100 points. The first player to 
reach this score is the winner.
<h3> Features </h3>

<h4>User Interface (UI):</h4>
<ul>
    <li>A game screen displaying the current scores of both players.</li>
    <li>A button for rolling the die.</li>
    <li>A button for stopping and ending the current player's turn.</li>

    <li>Displaying the current player's turn.</li>
</ul>

<h4>Game Logic:</h4>
<ul>
    <li>Randomly generating the result of rolling the die (from 1 to 6).</li>
    <li>Updating the current player's score based on the die roll.</li>
    <li>Switching the current player after each turn.</li>
    <li>Calculating the total accumulated score for each player.</li>
    <li>Checking when a player reaches or exceeds a score of 100, declaring them the winner.</li>
</ul>

<h4>Score Management:</h4>
<ul>
    <li>Displaying the total score for each player on the screen</li>
    <li>Updating scores as the game progresses.</li>
</ul>

<h4>Handling Rounds:</h4>
<ul>
    <li>Moving to the next player after each round.</li>
    <li>Resetting the current round score to zero if a player rolls a "1"</li>
</ul>
