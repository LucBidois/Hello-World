class CreateSinglyLinkedList():

    def __init__(self, remaining_Items):
        self.remaining_Items = remaining_Items
        self.value = remaining_Items[0]
        if len(remaining_Items) == 1:
            self.next = None
        else:
            self.next = CreateSinglyLinkedList(remaining_Items[1:])

    def Display_List(self):
        statement = ""
        while self.next != None:
            statement += self.Add_next_item_to_print_string(statement)


    def Add_next_item_to_print_string(self, statement):
        """Incomplete"""
        statemet += self.value + " --> "

        if self.next != None:
            self.next.Add_next_item_to_print_string(statement)
        else:





trial_list = CreateSinglyLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4])

trial_list.Display_List()

print(trial_list.value)
print(trial_list.next.value)
print(trial_list.next.next.value)
print(trial_list.next.next.next.value)
print(trial_list.next.next.next.next.value)
print(trial_list.next.next.next.next.next.value)
print(trial_list.next.next.next.next.next.next.value)
print(trial_list.next.next.next.next.next.next.next.value)
