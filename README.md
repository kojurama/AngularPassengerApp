# AngularPassengerApp
Passenger application using angular 8 and RxJS


A passenger application that checks what passengers are checked in, their baggage, and the time they checked in.

Uses a one way data flow utilizing smart components and dumb components for seperation of problems.

Uses RxJS subscriber/observe changes to emit changes and notify the top components which then iterate the
changes downwards indicating a one way data flow.

HTTP methods call from a locally hosted JSON-server.
