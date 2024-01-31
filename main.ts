input.onButtonPressed(Button.A, function () {
    C = C / 2
    D = D / 2
    E = E / 2
    F = F / 2
    G = G / 2
    A = A / 2
    B = B / 2
})
input.onButtonPressed(Button.B, function () {
    C = C * 2
    D = D * 2
    E = E * 2
    F = F * 2
    G = G * 2
    A = A * 2
    B = B * 2
})
let line2 = 0
let line1 = 0
let line0 = 0
let B = 0
let A = 0
let G = 0
let F = 0
let E = 0
let D = 0
let C = 0
C = 262
D = 294
E = 330
F = 349
G = 392
A = 440
B = 494
basic.forever(function () {
    line0 = pins.digitalReadPin(DigitalPin.P2)
    line1 = pins.digitalReadPin(DigitalPin.P1)
    line2 = pins.digitalReadPin(DigitalPin.P0)
    if (!(line2) && (!(line1) && line0)) {
        music.playTone(C, music.beat(BeatFraction.Half))
        basic.showString("C")
    }
    if (!(line2) && (line1 && !(line0))) {
        music.playTone(D, music.beat(BeatFraction.Half))
        basic.showString("D")
    }
    if (!(line2) && (line1 && line0)) {
        music.playTone(E, music.beat(BeatFraction.Half))
        basic.showString("E")
    }
    if (line2 && (!(line1) && !(line0))) {
        music.playTone(F, music.beat(BeatFraction.Half))
        basic.showString("F")
    }
    if (line2 && (!(line1) && line0)) {
        music.playTone(G, music.beat(BeatFraction.Half))
        basic.showString("G")
    }
    if (line2 && (line1 && !(line0))) {
        music.playTone(A, music.beat(BeatFraction.Half))
        basic.showString("A")
    }
    if (line2 && (line1 && line0)) {
        music.playTone(B, music.beat(BeatFraction.Half))
        basic.showString("B")
    }
})
