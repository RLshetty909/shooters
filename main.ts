input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let enemy: game.LedSprite = null
let sprite: game.LedSprite = null
game.setScore(0)
sprite = game.createSprite(2, 4)
loops.everyInterval(2500, function () {
    enemy = game.createSprite(randint(1, 3), 1)
})
basic.forever(function () {
    if (enemy.isTouching(sprite)) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (enemy.isTouchingEdge()) {
        basic.pause(1000)
        enemy.delete()
    }
})
basic.forever(function () {
    if (game.isGameOver() == false) {
        game.addScore(1)
        basic.pause(1000)
    }
})
basic.forever(function () {
    enemy.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
})
basic.forever(function () {
    if (sprite.get(LedSpriteProperty.X) == 4) {
        sprite.set(LedSpriteProperty.X, 2)
    }
    if (sprite.get(LedSpriteProperty.X) == 0) {
        sprite.set(LedSpriteProperty.X, 2)
    }
})
