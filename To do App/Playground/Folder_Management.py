# --Folder_Management.py--                                                     #
#                                                                              #
# CREATED: 20/01/2019 LB                                                       #
# PURPOSE: File management system                                              #
# EDITOR: LB                                                                   #
# VersionNum == 0.01 Alpha                                                     #

def FileStatus():
    complete = False
    return complete


class Folders:
    def __init__(self, name=None, Parent=None, ChildType=None, Children = []):
        self.name = name # information that is being stored in the tree
        self.Parent = Parent #Pointer to the parent Node
        self.ChildType = ChildType   # Pointer to all children
        self.Children = Children # list of children

    def __str__(self):
        return str(self.name)

    def import_data(self):
        """taking data from files.db"""
        pass

    def read_data(self):
        """make data ready to become tree"""
        pass

    def create_tree(self, FullData):
        pass



"""for file in file.db where file.parent=none
check if open
display on screen """
