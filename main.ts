startbit.startbit_Init()
startbit.setServo(startbit.startbit_servorange.range1, 1, 90, 500)
startbit.setServo(startbit.startbit_servorange.range1, 2, 90, 500)
basic.pause(500)
basic.forever(function () {
    if (startbit.startbit_line_followers(startbit.startbit_LineFollowerSensors.S2, startbit.startbit_LineColor.White) && startbit.startbit_line_followers(startbit.startbit_LineFollowerSensors.S3, startbit.startbit_LineColor.Black)) {
        startbit.startbit_setMotorSpeed(-90, 90)
    } else if (startbit.startbit_line_followers(startbit.startbit_LineFollowerSensors.S2, startbit.startbit_LineColor.Black) && startbit.startbit_line_followers(startbit.startbit_LineFollowerSensors.S3, startbit.startbit_LineColor.White)) {
        startbit.startbit_setMotorSpeed(90, -90)
    } else {
        startbit.startbit_setMotorSpeed(90, 90)
    }
})
