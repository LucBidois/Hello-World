#Pygame Cheatsheet                                                             #
#                                                                              #
#                                                                              #
#                                                                              #
#                                                                              #
import pygame

"""Surface"""
pygame.Surface.subsurface(Rect)
#Returns a surface object

pygame.Surface.get_parent(surf)
#returns parent surface object

pygame.Surface.get_abs_parent()
#returns the top level parent surface

pygame.Surface.getoffset()
#returns coordinates of a child subsurface (x, y)

pygame.Surface.get_size(surf)
#gets (width, height)

pygame.Surface.get_width(surf)
#gets width

pygame.Surface.get_height(surf)
#gets height

pygame.Surface.get_rect(surf)
#gets rectangle object same size as surface

pygame.Surface.get_offset(subsurf)
#gets offset from parent surface (x, y)

pygame.Surface.get_abs_offset(subsurf)
#gets offset from parent surface (x, y)

"""Display"""

pygame.display.set_mode((width, height))
#Create surface, which in this case is the window size

pygame.display.set_caption('text')
#Change caption to chosen tex

pygame.display.update()
#Applies changes to screen, (do this every frame)

Surface.fill(RGBcolour)
#Change surface colour

"""Draw"""

pygame.draw.circle(Surface, RGBColour, (X, Y), radius)
#creates circle on specified surface

pygame.draw.rect(Surface, RGBcolour, (xStart, yStart, width, height))
#creates rectangle on surface
