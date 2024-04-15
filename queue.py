# create the queue class and initialise the queue to empty list
# enqueue: add element to the queue
# dequeue: if the lenght of the queue is empty, return None,
#          else remove the peak of the queue
# display the queue


class Queue:

    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)

    def dequeue(self):
        if len(self.queue) < 1:
            return None
        else: 
            self.queue.pop(0)

    def display(self):
        print(self.queue)

    def size(self):
        return len(self.queue)


q = Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.enqueue(8)
q.enqueue(9)
q.enqueue(10)

print("original queue\n")
q.display()
print("\n")

q.dequeue()

print("After dequeing the queue\n")
q.display()

