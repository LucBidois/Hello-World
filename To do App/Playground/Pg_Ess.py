# --Pygame_Essentials.py--                                                     #
#                                                                              #
# CREATED: 21/01/2019 LB                                                       #
# PURPOSE: quick references to Pygame display functions                        #
# EDITOR: LB                                                                   #
# VersionNum == 0.01 Alpha                                                     #

import pygame

import Variables #import display_width
#from Variables import display_height
"""import variables"""
#display_width = 800
#display_height = 600
gameDisplay = pygame.display.set_mode((Variables.display_width, Variables.display_height))


def rect(colour, xStart, yStart, width, height, canvas = gameDisplay):
    pygame.draw.rect(canvas, colour, (xStart, yStart, width, height))

def text_objects(text, font):
    textSurface = font.render(text, True, (0, 0, 0))
    return textSurface, textSurface.get_rect()

def button(msg, xPos, yPos, width, height, inacCol, acCol, action = None ):
    mouse_pos = pygame.mouse.get_pos()
    click = pygame.mouse.get_pressed() #(right, middle, left) 1 for click, 0 otherwise

    if xPos + width > mouse_pos[0] > xPos and yPos + height > mouse_pos[1] > yPos:
        pygame.draw.rect(gameDisplay, acCol, (xPos, yPos, width, height)) #box for button
        if click[0] == 1 and action != None:
            action()

    else:
        pygame.draw.rect(gameDisplay, inacCol, (xPos, yPos, width, height))

    smallText = pygame.font.Font("freesansbold.ttf", 15)
    textSurf, textRect = text_objects(msg, smallText) #using a function we have created
    textRect.center = (( xPos + ( width/2 )), ( yPos + ( height / 2 ) ))
    gameDisplay.blit(textSurf, textRect) #applies text in the image
