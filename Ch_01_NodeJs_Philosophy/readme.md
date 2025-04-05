# How Node Js works?

Blocking I/O
    In traditional I/O programming, the function call corresponding to an I/O request block the execution of the thread until the operation completes. This can range from a few milliseconds, in the case of disk access, to minutes or even more, in the case of data being generated from user actions, such as pressing a key.

    eg: 
# blocks the thread until the data is read.
        const data = socket.read();
# data is available 
        console.log(data);

