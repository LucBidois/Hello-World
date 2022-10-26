# menu.py                                                                      #
# The main menu for the App system. This app initialises the screen sections   #
# that are unchanged in the rest of the app.                                   #
#                                                                              #
# Created 28/01/19 by Luc                                                      #
# Verson 1A                                                                    #
#                                                                              #
import BookShelf
import pygame

from multiprocessing import Process

pygame.init()

display_width = 800
display_height = 600

gameDisplay = pygame.display.set_mode((display_width, display_height))

Surf1 = pygame.Surface.subsurface(gameDisplay, 5, 5, display_width-10, 40)
Surf2 = pygame.Surface.subsurface(gameDisplay, 5, 50, 790, 545 )

pygame.display.set_caption('Menu')
clock = pygame.time.Clock()

def runSubApp(name, surface):

    name.initialise(surface, 790, 545)


def main_menu():

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

        """Draw items here"""

        gameDisplay.fill((255, 255, 255))

        Surf1.fill((200, 200, 200)) # temporary, will call Nav bar function instead in future (function for surface 1)
        pygame.draw.rect(Surf1, (150, 220, 0), (0, 0, 50, 40))

        Surf2.fill((200, 200, 200))
        runSubApp(BookShelf, Surf2)


        pygame.display.update()
        clock.tick(60)

main_menu()
pygame.quit()
quit()
