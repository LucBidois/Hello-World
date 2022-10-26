#Developed in Python3.6.7
import pygame
from pygame.locals import *

from OpenGL.GL import *
from OpenGL.GLU import *

"""Confusion area"""
#glOrtho(0.0, 1.0, 0.0, 1.0, -1.0, 1.0) #No idea what this does, but it causes the image to never display
"""Classes"""



"""Functions"""

def Polygon_Drawing():
    glBegin(GL_POLYGON) #GL_POINTS, GL_LINES, GL_LINE_STRIP, GL_LINE_LOOP, GL_TRIANGLES, GL_TRIANGLE_STRIP, GL_TRIANGLE_FAN, GL_QUADS, GL_QUAD_STRIP, GL_POLYGON
    glVertex2f(0.0, 0.0)
    glVertex2f(0.0, 0.3)
    glVertex2f(0.4, 0.3)
    glVertex2f(0.6, 0.15)
    glVertex2f(0.4, 0.0)
    glEnd()

def square_2d():
    glBegin(GL_LINE_LOOP)
    glVertex3f(-0.25, -0.25, 0.0)
    glVertex3f(-0.75, -0.25, 0.0)
    glVertex3f(-0.75, -0.75, 0.0)
    glVertex3f(-0.25, -0.75, 0.0)
    glEnd()

def main():
    """standard pygame, it is important to notify pygame of 3D graphics with OpenGL"""
    pygame.init()
    display = (800, 600)
    pygame.display.set_mode(display, DOUBLEBUF|OPENGL) # prepping a double buffer and OpenGL


    """GL Initialising function area"""
    gluPerspective(45, (display[0]/display[1]), 0.1, 500)

    #glClearColor(Red,Green,Blue,Alpha)
    glClearColor(0.0, 0.0, 0.0, 0.0) #sets the colour used to clear page
    glClearDepth(1.0) #sets value of every pixel in the depth buffer
    glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT) #clears the image in Buffer (GL_COLOR_BUFFER_BIT)

    #Polygon_Drawing()
    """GL testing area"""
    glColor3f(1.0, 1.0, 1.0) #set colour

    glTranslate(0, 0, -5) #moves camera back 5 units z direction

    while True:
        """code above this loop runs once,
        in the loop runs a defined fps"""

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

        glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT) # clear frame to draw on top (specifically the things we have specified)

        """GL Function drawings"""
        Polygon_Drawing()
        square_2d()

        """GL Test drawings"""


        #glFlush() #rushes things along (even if images are not finished)
        pygame.display.flip() # must use flip with OPENGL
        pygame.time.wait(10)

main()
