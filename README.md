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