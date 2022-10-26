import time

def insaneFunc():
    x = input('Hi there, what is your name?: ')
    return x

def main():
    y = insaneFunc()
    print('Hello ' + y)
    print('check it out, this module works')
    time.sleep(10)

main()
