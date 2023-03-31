import time

def time_it(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print("Time taken by", func.__name__, ":", end - start, "seconds")
        return result
    return wrapper

@time_it
def my_function():
    time.sleep(2)
    pass

# Call my_function to see the time taken to execute it
my_function()
