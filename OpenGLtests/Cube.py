import pygame
from pygame.locals import *

from OpenGL.GL import *
from OpenGL.GLU import *

"""cube constructed from rear, bottom left -  create square, then similarly create front square"""

vertices = (
    (-1, 1, 1),
    (-1, -1, 1),
    (1, -1, 1),
    (1, 1, 1),
    (-1, 1, -1),
    (-1, -1, -1),
    (1, -1, -1),
    (1, 1, -1)
)

edges = (
    (0, 1),
    (1, 2),
    (2, 3),
    (3, 0),
    (0, 4),
    (1, 5),
    (2, 6),
    (3, 7),
    (4, 5),
    (5, 6),
    (6, 7),
    (7, 4)
)

faces = (
    (0, 1, 2, 3),
    (4, 5, 6, 7),
    (0, 3, 7, 4),
    (0, 1, 5, 4),
    (1, 2, 5, 6),
    (2, 3, 6, 7)
)

def Cube_lines():
    """vertually creates cube skeleton"""
    glBegin(GL_LINES)
    for edge in edges:
        glColor3fv((0.3, 0.7, 0.7))
        for vertex in edge:
            glVertex3fv(vertices[vertex]) #just wants a vertex the do what you specified you wanted with it (GL_LINES)
    glEnd()

def Cube_fill():
    """creates the faces of the cube"""
    glBegin(GL_QUADS)
    for surface in faces:
        glColor3fv((0, 0.5, 0.5))
        for vertex in surface:
            glVertex3fv(vertices[vertex])
    glEnd()

def face_rotate():
    glTranslatef(0, -2, 0)
    glRotatef(1, 0, 0, -1)
    glTranslate(0, 2, 0)


def main():
    """standard pygame, it is important to notify pygame of 3D graphics with OpenGL"""
    pygame.init()
    display = (800, 600)
    pygame.display.set_mode(display, DOUBLEBUF|OPENGL)

    gluPerspective(45, (display[0]/display[1]), 0.1, 500) # (fov, aspect_ratio, zNear, zFar)

    glTranslatef(0.0, 2.0, -10) # position of cube object (x, y, z)

    glRotatef(0, 0, 0, 0) # rotation (deg, x, y, z)

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

        face_rotate()
        glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT) # clear frame to draw on top (specifically the things we have specified)
        Cube_fill()
        Cube_lines()
        pygame.display.flip() # must use flip with OPENGL
        pygame.time.wait(10)

main()
