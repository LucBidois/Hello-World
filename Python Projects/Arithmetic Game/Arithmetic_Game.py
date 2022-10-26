from random import randint
import time

def addition(x, y):
    x = randint(x[0], x[1])
    y = randint(y[0], y[1])
    z = 0
    while z != x + y:
        try:
            z = int(input('%d + %d = ' %(x, y)))
        except:
            continue

def subtraction(x, y):
    'need to add rare below 0 answers'
    x = randint(x[0], x[1])
    y = randint(y[0], y[1])
    z = x + y
    y = 0
    while z != x + y:
        try:
            y = int(input('%d - %d = ' %(z, x)))
        except:
            continue

def multiplication(x, y):
    x = randint(x[0], x[1])
    y = randint(y[0], y[1])
    z = 0
    while z != x * y:
        try:
            z =int(input('%d * %d = ' %(y, x)))
        except:
            continue

def division(x, y):
    x = randint(x[0], x[1])
    y = randint(y[0], y[1])
    z = x * y
    y = 0
    while z != x * y:
        try:
            y = int(input('%d / %d = ' %(z, x)))
        except:
            continue

def decimals(x, y):
    'Up to 4 decimal places, no addition, multiplication, division and subtraction'
    pass

def fractions(x, y):
    'They were not in the FLow Traders Test'
    pass


"addition and subtraction between 2 and 100 and 2 and 100"
"multiplication and division between 2 and 12 and 2 and 100"

add1 = [2, 100]
add2 = add1
mult1 = [2, 12]
mult2 = [2, 100]
timer = 30 #num of questions

input('There are %d Questions. \n Press enter to start.' %(timer))
start = time.time()

while timer > 0:
    timer -= 1
    w = randint(0, 3)
    if w == 0:
        addition(add1, add2)
    elif w == 1:
        subtraction(add1, add2)
    elif w == 2:
        multiplication(mult1, mult2)
    else:
        division(mult1, mult2)

end = time.time()
print('It took you %d seconds' %(end - start))
mins = int((end-start)/60) + 1
print('That is under %d minutes' %(mins))
