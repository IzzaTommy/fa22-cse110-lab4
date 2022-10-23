1. Line 12 will print 3 because it prints i, which is a var that incremented from 0 to 3 in the for loop, and is accessible outside of the for loop block.
   
2. Line 13 will print 150 because it prints var discountedPrice, which was assigned 150 in the last loop of the for loop, and is accessible outside of the for loop block.
   
3. Line 14 will print 150 because it prints var finalPrice, which was assigned 150 in the last loop of the for loop, and is accessible outside of the for loop block.
   
4. The function returns the array of values [50, 100, 150]. The function recieves the array [100, 200, 300] and 0.5, and the for loop applies math to each element of the array, and pushes the result into another array that is ultimately returned after the loop.
   
5. Error, i wouldn't be defined because i is being accessed outside of the for loop it is defined in.
   
6. Error, discountedPrice wouldn't be defined because discountedPrice is being accessed outside of the for loop it is defined in.
   
7. Line 14 will print 150 because it prints finalPrice, which was set to 150 in the last loop of the for loop, and is accessible within the function block.

8. The function returns an array of values: 50, 100, 150. The function recieves the array [100, 200, 300] and 0.5, and the for loop applies math to each element of the array, and pushes the result into another array that is ultimately returned after the loop.
   
9. Error, i wouldn't be defined because i is being accessed outside of the for loop it is defined in.
    
10. Line 12 will print 3 because it accesses the constant length, which was set to 3, and is accessible within the scope of the function.
    
11. The function returns an array of values: 50, 100, 150. The function recieves the array [100, 200, 300] and 0.5, and the for loop applies math to each element of the array, and pushes the result into another array that is ultimately returned after the loop.
    
12. A. student.name 
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]

13. A. '32', 2 is converted to a string and concatenated to '3'.
    B. 1, math operation converted '3' to number and performs the operation.
    C. 3, null is converted to 0 and added to 3.
    D. '3null', null is converted to string and concatenated to '3'.
    E. 4, true is converted to 1 and added to 3.
    F. 0, false and null are converted to 0 and added.
    G. '3undefined', undefined is converted to string and concatenated to '3'.
    H. NaN, undefined is converted to NaN which is not a number, so it cannot be mathematically operated on.

14. A. true, '2' is converted to a number and compared to 1.
    B. false, in lexicographical order '2' does not come before '1' in '12'.
    C. true, '2' is converted to a number and compared to 2.
    D. false, 2 and '2' are different types so it is automatically false.
    E. false, true is converted to 1 and compared to 2.
    F. true, true is compared to the return of the Boolean(2) function which is true.

15. === will not do a type conversion when it checks for equality, but == will. This will make all type differences produce false.

17. [2, 4, 6]. The array [1, 2, 3] and function doSomething is passed to modifyArray, which iterates through the array, calls callback (doSomething) on each element of the array, and pushes the result to the new array that is returned.