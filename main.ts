input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let fuel: game.LedSprite = null
let enemy: game.LedSprite = null
let sprite: game.LedSprite = null
let level = 0
sprite = game.createSprite(2, 4)
game.setLife(3)
game.setScore(0)
loops.everyInterval(2500, function () {
    enemy = game.createSprite(randint(1, 3), 1)
})
loops.everyInterval(2000, function () {
    fuel = game.createSprite(randint(1, 3), 2)
})
basic.forever(function () {
    if (sprite.get(LedSpriteProperty.X) == fuel.get(LedSpriteProperty.X) && sprite.get(LedSpriteProperty.Y) == fuel.get(LedSpriteProperty.Y)) {
        fuel.delete()
        game.addScore(1)
    }
    if (enemy.get(LedSpriteProperty.Y) == 4) {
        basic.pause(1000)
        enemy.delete()
    }
    if (fuel.get(LedSpriteProperty.Y) == 4) {
        fuel.delete()
    }
})
basic.forever(function () {
    if (enemy.get(LedSpriteProperty.X) == sprite.get(LedSpriteProperty.X) && enemy.get(LedSpriteProperty.Y) == sprite.get(LedSpriteProperty.Y)) {
        music.playTone(165, music.beat(BeatFraction.Double))
        game.removeLife(1)
    }
})
basic.forever(function () {
    if (game.score() % 10 == 0) {
        level = level + 1
    }
})
basic.forever(function () {
    fuel.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
})
basic.forever(function () {
    if (sprite.get(LedSpriteProperty.X) == 4) {
        sprite.set(LedSpriteProperty.X, 2)
    }
    if (sprite.get(LedSpriteProperty.X) == 0) {
        sprite.set(LedSpriteProperty.X, 2)
    }
})
basic.forever(function () {
    if (level == 4) {
        fuel.delete()
        enemy.delete()
        sprite.delete()
        basic.showString("you won!!!")
    }
})
basic.forever(function () {
    enemy.change(LedSpriteProperty.Y, level)
    basic.pause(1000)
})
