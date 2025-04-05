/**
 * NON-Blocking I/O
 *
 *  In this operating mode, the system call always returns immediately without waiting for the data to be read or written. If no results are available at the moment of the call, the function will simply return a predefined constant, indicating that there is no data available to return at that moment.
 *
 *   The most basic pattern for dealing with this type of non-blocking I/O is to actively 
poll the resource within a loop until some actual data is returned. This is called busy
waiting. The following pseudocode shows you how it's possible to read from 
multiple resources using non-blocking I/O and an active polling loop:
 * 
 */

const resources = [SocketA, SocketB, FileA];

while (!resources.isEmpty()) {
  for (const resource of resources) {
    // read the data first
    const data = resource.read();
    if (data === NO_DATA_AVAILABLE) {
      // there's no data to operate ofn
      continue;
    }
    if (data === RESOURCE_CLOSED) {
      // the data resource was closed
      resources.remove(resource);
    } else {
      // do some work with the data
      consumeData(data);
    }
  }
}

/*
As you can see, with this simple technique, it is possible to handle different 
resources in the same thread, but it's still not efficient. In fact, in the preceding 
example, the loop will only consume precious CPU for iterating over resources that 
are unavailable most of the time. Polling algorithms usually result in a huge amount 
of wasted CPU time.

 */
