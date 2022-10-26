#how many heads can you guess right,

"""
OBJECTIVES with THIS PROJECT
1. a guessing heads or tails game,
2. working menu to change rules,
2.1 change bias of coin,
2.2 number of guesses,
2.3 challenge a friend,
3. a top score feature
"""
from random import randint

def H_or_T():
    if randint(0, 1) == 0:
        return 'H'
    else:
        return 'T'
        
