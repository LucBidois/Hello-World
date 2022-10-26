#
#
#
#
import pygame

class Bookshelf():

    def __init__(self):
        pass

def draw_shelf(surface, width, height):
    pygame.draw.rect(surface, (30, 30, 30), (10, 100, width-20, 20))

def draw_books(x, y, z):
    pass

def draw(surface, width, height):
    draw_shelf(surface, width, height)
    draw_books(surface, width, height)

def initialise(surf, w, h):
    """obtain books from database and prepare drawing functions through Bookshelf class"""
    surface = surf
    height = h
    width = w
    draw(surface, width, height)


# def run_bookShelf():
#     initialiseBookshelf(surface, height, width)
#
#     if ready :
#         Bookshelf.draw()
#     else:
#         pass
#
