# Transportation
If a transportation company wants to assign the cars and planes it has to a number of drivers or pilots. The idea of the application is to help them assign the vehicle, whether it is a car or plane, to the driver or pilot who is qualified for it, so that planes must be assigned to a pilot and cars to a driver.

## Details
Vehicle class with shared properties:
- Vehicle Type
- Manufacturer
- Vehicle ID
Car class that inherits Vehicle class with special properties:
- Car type
Aeroplane class that inherits Vehicle class with special properties:
- Plane type
Employee class with shared properties:
- name
- date of birth
- ID
Driver class that inherits Employee with special properties:
- drivers license ID
Pilot class that inherits Employee with special properties:
- pilots license ID
Reserve class that holds assignments of employees and vehicles by IDs:
- employee ID
- vehcile ID
- reservation date -> date of the assignment.

##Instructions
There are 5 Vehicle objects, 3 Cars, and 2 Aeroplanes
There are 5 Employees objects, 3 Drivers, and 2 Pilots
There is a function: checkCompatibility that takes employee ID and vehicle ID
If the employee is a driver and the vehicle is a car or the employee is a pilot and the vehicle is an aeroplane. Assignment is allowed and saved with the current date in an array.
Else returns Not compatible
