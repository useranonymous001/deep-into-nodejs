/*

    Event demultiplexing

    The synchronous event demultiplexer that we were talking about watches multiple resources and
    returns a new event (or set of events) when a read or write operation executed over one of those resources completes. The advantage here is that the synchronous event demultiplexer is, of course, synchronous, so it blocks until there are new events to process. 

    Below is the pseudocode of an algorithm that uses generic synchronous event demultiplexer: 

*/

watchedList.add("SocketA", FOR_READ);
watchedList.add("FileA", FOR_READ);

// this demultiplelexer.watch() blocks until any read() is ready
while ((events = demultiplexer.watch(watchedList))) {
  // event loop
  for (const event of events) {
    // this will never block the flow, cuz the data is already ready to read
    const data = event.resource.read();

    if (data === RESOURCE_CLOSED) {
      demultiplexer.unwatch(event.resource);
    } else {
      consumeData(data);
    }
  }
}

/**

 *  1. The resources are added to a data structure, associating each one of them 
with a specific operation (in our example, a read).

 2. The demultiplexer is set up with the group of resources to be watched. 
The call to demultiplexer.watch() is synchronous and blocks until 
any of the watched resources are ready for read. When this occurs, the 
event demultiplexer returns from the call and a new set of events is available 
to be processed.

 3. Each event returned by the event demultiplexer is processed. At this point, 
the resource associated with each event is guaranteed to be ready to read and 
to not block during the operation. When all the events are processed, the flow 
will block again on the event demultiplexer until new events are again 
available to be processed. This is called the event loop

 */
