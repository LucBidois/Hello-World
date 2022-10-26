def menu2():

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

        exitLoop = False
        while True:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    quit()

                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_BACKSPACE: #left arrow key
                        return

                        #exitLoop = True
                # if event.type == pygame.
                # print(event)
            if exitLoop :
                break
            """Draw items here"""

            gameDisplay.fill((155, 155, 155))

            Surf1.fill((100, 100, 100)) # temporary, will call Nav bar function instead in future (function for surface 1)
            pygame.draw.rect(Surf1, (150, 220, 0), (0, 0, 50, 40))

            Surf2.fill((100, 100, 100))
            # runSubApp(BookShelf, Surf2)


            pygame.display.update()
            clock.tick(60)

    main_menu()
    # pygame.quit()
    # quit()
