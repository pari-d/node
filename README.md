#NOTES

1) When no requests are hitting the server and server is idle, node is running the EVVENT LOOP.
    Underneath, it uses libuv, which:
    Listens for I/O events (network, file system, timers)
    Registers callbacks
    Executes them when events are ready