import sqlite3
import pygame

""" Load Classes here?"""
from Folder_Management import Folders


"""import functions"""
import Pg_Ess

"""import Variables"""

"""function area"""
def Nav_bar():
    Pg_Ess.rect((200, 200, 200), 5, 5, display_width-10, 40)

    #msg, xPos, yPos, width, height, inacCol, acCol, action = None
    Pg_Ess.button("App1", 10, 10, 50, 30, (200, 200, 100), (230, 230, 200))
    Pg_Ess.button("App2", 65, 10, 50, 30, (200, 200, 100), (230, 230, 200))
    Pg_Ess.button("App3", 120, 10, 50, 30, (200, 200, 100), (230, 230, 200))

pygame.init()

display_width = 800
display_height = 600

gameDisplay = pygame.display.set_mode((display_width, display_height))

"""define surfaces"""

Surf1 = pygame.Surface.subsurface(gameDisplay, 5, 5, display_width-10, 40)
Surf2 = pygame.Surface.subsurface(gameDisplay, 5, 50, 150, 540 )

pygame.display.set_caption('Menu')
clock = pygame.time.Clock()

def main_menu():

    """Initial Items drawn here"""

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

        mouse = pygame.mouse.get_pos()
        MposX = mouse[0]
        MposY = mouse[1]

        """Draw items here"""
        gameDisplay.fill((255, 255, 255))

        #circle(Surface, color, pos, radius, width=0)
        pygame.draw.circle(gameDisplay, (100, 100, 100), (MposX, MposY), 10)


        Pg_Ess.rect((200, 200, 200), 10, 50, 150, 540) # folder menu

        Nav_bar()
        Surf1.fill((0, 0, 0))
        pygame.draw.rect(Surf1, (150, 220, 0), (0, 0, 50, 40))
        #Pg_Ess.rect((200, 200, 200), 5, 5, display_width-10, 40) # Navigation bar

        #Pg_Ess.button("Sup me dudes", 100, 100, 100, 100, (100, 100, 100), (200, 200, 200))

        pygame.display.update()
        clock.tick(60)


main_menu()
pygame.quit()
quit()
