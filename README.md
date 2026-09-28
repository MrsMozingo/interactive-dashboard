 # Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [X] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [X] Add a weekly task goal calculator.

## Weekly Task Goals

This feature calculates a user’s task targets based on daily goals and weekly bonuses. It multiplies the daily goal by 5 workdays, then adds any bonus tasks to determine the total weekly goal.

## Imperial/Metric Converter

The Imperial/Metric Converter lets a user enter a number and choose which measurement they want to convert. It converts between inches and centimeters, feet and centimeters, yards and meters, and miles and kilometers.

### Logic and Pseudocode

```text
BEGIN

    INPUT amount
    INPUT conversionType

    IF conversionType = "inches to centimeters" THEN
        SET conversionResult = amount * 2.54
        DISPLAY conversionResult

    ELSE IF conversionType = "feet to centimeters" THEN
        SET conversionResult = amount * 30.48
        DISPLAY conversionResult

    ELSE IF conversionType = "yards to meters" THEN
        SET conversionResult = amount * 0.91
        DISPLAY conversionResult

    ELSE IF conversionType = "miles to kilometers" THEN
        SET conversionResult = amount * 1.61
        DISPLAY conversionResult

    ELSE IF conversionType = "centimeters to inches" THEN
        SET conversionResult = amount * 0.39
        DISPLAY conversionResult

    ELSE IF conversionType = "centimeters to feet" THEN
        SET conversionResult = amount * 0.0328
        DISPLAY conversionResult

    ELSE IF conversionType = "meters to yards" THEN
        SET conversionResult = amount * 1.09
        DISPLAY conversionResult

    ELSE IF conversionType = "kilometers to miles" THEN
        SET conversionResult = amount * 0.62
        DISPLAY conversionResult

    ELSE
        DISPLAY "Invalid conversion selection"

    END IF

END
```

## Magic 8 Ball

The Magic 8 Ball allows users to enter a Yes/No question and click on the 8 Ball to receive a randomly selected response. The game is built around a classic 20-response Magic 8 Ball and includes 10 positive answers, 5 non-committal answers, and 5 negative answers. Users can also add their own custom responses during the current browser session so those responses are included in the random answer selection.

The code uses an array to store the possible responses and uses Math.random() and Math.floor() to randomly select a response when the 8 Ball is pressed. It also checks that a question has been entered before showing an answer, hides the answer when the game is reset, and uses a CSS animation to make the ball shake.