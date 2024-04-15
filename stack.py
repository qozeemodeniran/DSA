def create_stack():
    stack = []
    return stack

def check_empty_stack():
    return len(stack) == 0

def add_item(stack, item):
    if check_empty_stack:
        stack.append(item)
    return "stack is not empty"

def remove_item(stack):
    if check_empty_stack:
        return "stack is empty"
    stack.pop()
    
stack_operations = create_stack()

add_item(stack_operations, str(1))
add_item(stack_operations, str(2))
add_item(stack_operations, str(3))

remove_item(stack_operations)

print(str(stack_operations))