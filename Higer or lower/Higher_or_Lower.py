from random import randint

count = 1
low = 0
high = 100
num = randint(low,high) #hold till further notice
play = True

while play == True:
    try:
        guess = int(input("Guess a number between %s and %s: " %(low, high)))
    except:
        print('That was not a number.')
        continue
    if guess < low or guess > high:
        print('Your guess is out of range')
    elif guess == num:
        print('Congrats you guessed correctly!')
        play = False
    elif guess < num:
        print('Higher')
        count += 1
    elif guess > num:
        print('Lower')
        count += 1
    else:
        pass
print('You won in %s Turns!' %(count))
